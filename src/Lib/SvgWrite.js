


import { useState, useEffect, useRef, Component } from "react";
import "./memo.css"
function SvgWrite(){
    return(
        <div className="memoDiv">
            <div className="Signal">
            <svg viewBox="0 0 1000 300">
              <text x="50%" y= "50%" dy="40px" textAnchor="middle">Html and css</text>
            </svg>
          </div>
        </div>
    )
}export default SvgWrite

