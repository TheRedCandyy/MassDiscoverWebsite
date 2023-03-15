const path = require('path');
const express = require('express');
const connection = require('./db');
const parse = require('domain-name-parser');

const PORT = process.env.PORT || 3001;

const app = express();

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
  }

  const parsedDomain = parse(unparsedDomain).domainName;

  //Query database and populate `query` variable in response
  let resStatus = "", resCode = null, resDescription = "", resQuery = "", resSubdomains = null;

  connection.query("SELECT * FROM subdominios WHERE id_d = ( SELECT id_d FROM dominios WHERE dominio = ? )", parsedDomain, (error, rows) => {
    if (error) {
      console.log("Error: " + error);
      resStatus = "ERROR";
      resCode = 400;
      resDescription = "An error has ocurred when trying to query!";
      resQuery = req.query.domain;
    } else if (rows.length < 1) {
      console.log("No results");
      resStatus = "OK";
      resCode = 200;
      resDescription = "We couldn't find anything in our database!";
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

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});