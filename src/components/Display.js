import React from "react";
import Plugin from "./Plugin";
import { useState } from "react";

const DUMMY_DATA = {
  title: "Marketing",
  icon: "icon-marketing",
  active: ["plugin1", "plugin2", "plugin4"],
  disabled: ["plugin3"],
  inactive: ["plugin5", "plugin6"],
};

function Display() {
  const [appState2, setAppState2] = useState(DUMMY_DATA);

  console.log(appState2.active);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json");
  //     const data = await response.json();
  //     setAppState((state) => {
  //       state.data = data.data;
  //     });
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div className="content-container">
        <h4 className="label">Marketing Plugins</h4>
        <div className="plugin-container">
          {appState2.active.map((el) => (
            <Plugin btnChecked={true} title={el} />
          ))}
          {appState2.inactive.map((el) => (
            <Plugin title={el} btnChecked={false} />
          ))}
          {appState2.disabled.map((el) => (
            <Plugin title={el} btnChecked={false} disabled={true} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Display;
