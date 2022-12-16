import React, { Component, useState } from "react";
import axios from "axios";
import "./Skeleton/css/ERMain.css";
import "./Skeleton/css/GNB.css";
import { BrowserRouter, Route, Link, Routes, Switch } from "react-router-dom";
function ERGNB(){
  const [GoUrl,setGoUrl]=useState("qq"); 
  
  return(
      <div className="ERMainGNB">
        <div className="ERMainLeft"> 
          <Link to="/ER">
            <img src={"/image/ERLogoWhite.png"}></img>
          </Link>
            <ul className="ERMainGNBUl">
              <li><a href="/ER/Character">실험체</a></li>
              <li><a href="/Eternal/한동그라미">전적검색</a></li>
            </ul>
        </div>
      </div>
  )
}export default ERGNB




