import React, {useState} from "react"
import Navbar from "./components/Navbar"
import LandingText from "./components/LandingText"
import MetricsBoxes from "./components/MetricsBoxes";
import SearchPage from "./components/SearchPage";

function App(props) {
  const [reqResponse, setReqResponse] = useState({});
  const resRequestData = (data) => {
      setReqResponse(data);
  };
  return (
    <div className="bg-zinc-900 text-white flex flex-row min-w-max">
      <div className="h-screen w-screen">
        <Navbar dataScreen={'landingPage'}></Navbar>
        <LandingText handleResRequestData={resRequestData}></LandingText>
        <MetricsBoxes></MetricsBoxes>
      </div>
      <div className="h-screen w-screen">
        <Navbar dataScreen={'searchPage'}></Navbar>
        <SearchPage reqResponseData={reqResponse}></SearchPage>
      </div>
    </div>
  );
}

export default App;
