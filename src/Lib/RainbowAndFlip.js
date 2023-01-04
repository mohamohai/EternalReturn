import { useState, useEffect, useRef, Component } from "react";
import "./memo.css"
function RainbowAndFlip(){
    return(
        <div className="memoDiv">

        <div className="rainbow"></div>

        <div className="flipPage">
          <div className="flipPagew">
            <span className="flip1"></span>
            <span className="flip2"></span>
            <span className="flip3"></span>
            <span className="flip4"></span>
          </div>
          <div className="flipshadow">
            <span className="flip1"></span>
            <span className="flip2"></span>
            <span className="flip3"></span>
            <span className="flip4"></span>
          </div>
        </div>
        </div>
    )
}export default RainbowAndFlip




