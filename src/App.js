import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./App.css";
import PuffLoader from "react-spinners/PuffLoader";

const RocketComponent = React.lazy(() => import("./RocketComponent"));

function App() {
  const [rocketData, setRocketData] = useState([]);

  async function getData() {
    let res = await axios.get("https://api.spacexdata.com/v5/launches");

    let data = res.data;
    setRocketData(data);

    // const RocketObject = {
    //   flightNumber: data["flight_number"],
    //   flightName: data["name"],
    //   launchYear: data["date_local"].slice(0, 10),
    //   details: data["details"] ? data["details"] : "No Value",
    // };
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="container p-5">
          {rocketData.map((rocket) => (
            <Suspense fallback={<div>loading</div>}>
              <RocketComponent
                key={rocket.id}
                flightNumber={rocket["flight_number"]}
                flightName={rocket["name"]}
                launchYear={rocket["date_local"].slice(0, 10)}
                details={rocket["details"] ? rocket["details"] : "No Value"}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
