import React from "react"
import Navbar from "./components/Navbar"
import LandingText from "./components/LandingText"
import MetricsBoxes from "./components/MetricsBoxes";
import SearchPage from "./components/SearchPage";

function App() {
  //Example of an api call
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  //End of example

  return (
    <div className="bg-zinc-900 text-white flex flex-row min-w-max">
      <div className="h-screen w-screen">
        <Navbar dataScreen={'landingPage'}></Navbar>
        <LandingText></LandingText>
        <MetricsBoxes></MetricsBoxes>
      </div>
      <div className="h-screen w-screen">
        <Navbar dataScreen={'searchPage'}></Navbar>
        <SearchPage></SearchPage>
      </div>
    </div>
  );
}

export default App;
