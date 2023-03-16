import React from "react"
import Navbar from "./components/Navbar"
import LandingText from "./components/LandingText"
import MetricsBoxes from "./components/MetricsBoxes";

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
    <div className="bg-gray-900 text-white min-h-full">
      <Navbar></Navbar>
      <LandingText></LandingText>
      <MetricsBoxes></MetricsBoxes>
    </div>
  );
}

export default App;
