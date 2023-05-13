const path = require('path');
const express = require('express');
const util = require('util');
const bodyParser = require('body-parser');
const connection = require('./db');
const parse = require('domain-name-parser');
const rateLimiterUsingThirdParty = require('./middleware/rateLimited').rateLimiterUsingThirdParty;

const PORT = process.env.PORT || 3001;

const app = express();

app.use(rateLimiterUsingThirdParty);
app.use(bodyParser.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api/v1/subdomains/domain", (req, res) => {
  const unparsedDomain = req.query.domain;
  if (!unparsedDomain) {
    res.json({
      status: "ERROR",
      code: 400,
      description: "Query string was empty."
    });

    return;
  }

  const parsedDomain = parse(unparsedDomain).domainName;

  //Query database and populate `query` variable in response
  let resStatus = "", resCode = null, resDescription = "", resQuery = "", resSubdomains = null;

  connection.query("SELECT * FROM subdomain WHERE domain_name = ?", parsedDomain, (error, rows) => {
    if (error) {
      console.log("Error: " + error);
      resStatus = "ERROR";
      resCode = 400;
      resDescription = "An error has ocurred when trying to query for parsed domain (" + parsedDomain + ")!";
      resQuery = req.query.domain;
    } else if (rows.length < 1) {
      console.log("No results");
      resStatus = "OK";
      resCode = 200;
      resDescription = "We couldn't find anything in our database for parsed domain (" + parsedDomain + ")!";
      resQuery = req.query.domain;
    }else {
      resStatus = "OK";
      resCode = 200;
      resDescription = "Successfully found " + rows.length + " sub domains!";
      resQuery = req.query.domain;
      resSubdomains = rows;
    }

    res.json({
      status: resStatus,
      code: resCode,
      description: resDescription,
      query: resQuery,
      subdomains: resSubdomains
    });
  });
});

// Handle POST requests to /api route
app.post("/api/v1/subdomains", async (req, res) => {
  const domain = req.body.domain;

  if (!domain) {
    res.json({
      status: "ERROR",
      code: 400,
      description: "Request body was empty."
    });

    return;
  }

  const parsedDomain = parse(domain.name).domainName;

  //Query database and populate `query` variable in response
  let resStatus = "", resCode = null, resDescription = "", resQuery = "", resSubdomains = null;

  connection.query("SELECT * FROM domain WHERE domain_name = ?", parsedDomain, (error, rows) => {
    if (error) {
      console.log("Error: " + error);
      resStatus = "ERROR";
      resCode = 400;
      resDescription = "An error has ocurred when trying to store the domains: " + error;
      resQuery = req.query.domain;

      res.json({
        status: resStatus,
        code: resCode,
        description: resDescription,
        query: resQuery
      });
    } else if (rows.length == 0) {
      connection.query("INSERT INTO domain (domain_name) VALUES (?)", parsedDomain, (error, rows) => {
        if (error) {
          console.log("Error: " + error);
          resStatus = "ERROR";
          resCode = 400;
          resDescription = "An error has ocurred when trying to store the domains: " + error;
          resQuery = req.query.domain;

          res.json({
            status: resStatus,
            code: resCode,
            description: resDescription,
            query: resQuery
          });
        }
      })
    }
  });

  if (!res.json) {
    return;
  }

  const subdomainsMatrix = []

  domain.subdomains.forEach(subdomain => {
    subdomainsMatrix.push([parsedDomain, subdomain.subdomain_name]);
  });

  connection.query("INSERT IGNORE INTO subdomain (domain_name, subdomain_name) VALUES ?", [subdomainsMatrix], (error, result) => {
    if (error) {
      console.log("Error: " + error);
      resStatus = "ERROR";
      resCode = 400;
      resDescription = "An error has ocurred when trying to store the domains: " + error;
    }else {
      console.log("Success.");
      resStatus = "OK";
      resCode = 200;
      resDescription = "Success, number of records inserted: " + result.affectedRows;
    }

    res.json({
      status: resStatus,
      code: resCode,
      description: resDescription,
      query: resQuery,
      subdomains: resSubdomains
    });
  });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});