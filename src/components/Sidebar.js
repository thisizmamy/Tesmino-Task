import React from "react";
import { Link } from "react-router-dom";
import Switch from "react-ios-switch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faCommentsDollar, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

function Sidebar(props) {
  const [toggleAll, setToggleAll] = useState(true);
  return (
    <aside className="sidebar">
      <div className="name-tabs">
        <h1>
          Data<strong>Guard</strong>
        </h1>
        <ul className="tabs">
          <li className="tab active">
            <FontAwesomeIcon icon={faCubes} />
            <Link to="/">Marketing</Link>
          </li>
          <li className="tab">
            <FontAwesomeIcon icon={faCommentsDollar} />
            <Link to="/finance">Finance</Link>
          </li>
          <li className="tab">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <Link to="/personnel">Personnel</Link>
          </li>
        </ul>
      </div>
      <div className="toggle-plugins">
        <div>
          <p>{toggleAll ? "All Plugins enabled" : "All Plugins disabled"} </p>
        </div>
        <div className="toggle-input">
          {/* <input type="checkbox" name="toggleplugins" id="toggleplugins" /> */}
          <Switch checked={toggleAll} onChange={(e) => setToggleAll((state) => !state)} />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
