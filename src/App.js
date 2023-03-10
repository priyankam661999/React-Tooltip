import React from "react";
import Tooltip from "./Tooltip";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2> React tooltip </h2>
    

     
      <div className="wrapping" >
        <Tooltip content="this is top! " direction="top">
        <button className="button-style" >TOP</button>
        </Tooltip>
      </div>
      <div className="wrapping">
        <Tooltip content="this is right!" direction="right">
         <button className="button-style">RIGHT</button>
        </Tooltip>
      </div>


      <div className="wrapping">
        <Tooltip
          content="this is bottom!"
          direction="bottom"
        >
         <button className="button-styling">BOTTOM</button>
        </Tooltip>
      </div>

      <div className="wrapping">
        <Tooltip
          content="this is left!"
          direction="left"
         >
         <button className="button-styling">LEFT</button>
        </Tooltip>
      </div>
     
    </div>
  );
}
