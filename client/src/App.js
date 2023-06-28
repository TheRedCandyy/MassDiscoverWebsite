import React, {useEffect, useState} from "react"
import Navbar from "./components/Navbar"
import LandingText from "./components/LandingText"
import MetricsBoxes from "./components/MetricsBoxes";
import SearchPage from "./components/SearchPage";
import {Helmet, HelmetProvider } from "react-helmet-async";

function App(props) {
  const [reqResponse, setReqResponse] = useState({});
  const resRequestData = (data) => {
    if (Object.keys(data).length > 0) {
      setReqResponse(data);
    }
  };

  const [reqMetricsResponse, setMetricsResponse] = useState(<MetricsBoxes></MetricsBoxes>);

  const reqMetricsData = async () => {
    await fetch("/api/v1/metrics")
      .then((res) => res.json())
      .then((data) => setMetricsResponse(<MetricsBoxes metricsData={data}></MetricsBoxes>))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    reqMetricsData();
  }, []);

  return (
    <HelmetProvider>
      <div className="bg-zinc-900 text-white flex flex-row min-w-max">
        <Helmet>
          <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <title>Mass Discover</title>
        </Helmet>
        <div className="min-h-screen w-screen">
          <Navbar dataScreen={'landingPage'}></Navbar>
          <LandingText handleResRequestData={resRequestData}></LandingText>
          {reqMetricsResponse}
        </div>
        <div className="min-h-screen w-screen">
          <Navbar dataScreen={'searchPage'}></Navbar>
          <SearchPage reqResponseData={reqResponse}></SearchPage>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
