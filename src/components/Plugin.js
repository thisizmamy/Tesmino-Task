import React from "react";
import Switch from "react-ios-switch";
import { useState } from "react";

function Plugin(props) {
  const [state, setState] = useState(props.btnChecked);

  const styleDisabled = {
    border: "1px solid #EEE",
    color: "#DDD",
  };
  return (
    <div style={props.disabled && styleDisabled} className="plugin ">
      <div className="plugin-info">
        <h3 className="plugin-title">{props.title}</h3>
        <p className="plugin-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quod soluta nesciunt reprehenderit?</p>
      </div>
      <Switch disabled={props.disabled} checked={state} className="plugin-btn" onChange={(e) => setState(!state)} />
    </div>
  );
}

export default Plugin;
