import React, {useState} from "react"
import Navbar from "./components/Navbar"
import LandingText from "./components/LandingText"
import MetricsBoxes from "./components/MetricsBoxes";
import SearchPage from "./components/SearchPage";
import {Helmet} from "react-helmet";

function App(props) {
  const [reqResponse, setReqResponse] = useState({});
  const resRequestData = (data) => {
      setReqResponse(data);
  };
  return (
    <div className="bg-zinc-900 text-white flex flex-row min-w-max">
      <Helmet>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Mass Discover</title>
      </Helmet>
      <div className="min-h-screen w-screen">
        <Navbar dataScreen={'landingPage'}></Navbar>
        <LandingText handleResRequestData={resRequestData}></LandingText>
        <MetricsBoxes></MetricsBoxes>
      </div>
      <div className="min-h-screen w-screen">
        <Navbar dataScreen={'searchPage'}></Navbar>
        <SearchPage reqResponseData={reqResponse}></SearchPage>
      </div>
    </div>
  );
}

export default App;
