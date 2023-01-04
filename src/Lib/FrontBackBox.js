import { useState, useEffect, useRef, Component } from "react";
import "./memo.css"
function FrontBackBox(){
    return(
        <div className="memoDiv">
            <div className="boxbox"> 
            <div className="boxboxfront chch"><h1>front</h1></div>
            <div className="boxboxback chch"><img src="./image/Pixel/Main3/jinu.jpg"></img></div>
          </div><div className="clean"></div>
        </div>
    )
}export default FrontBackBox