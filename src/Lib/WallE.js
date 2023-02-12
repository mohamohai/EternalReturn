import { useState, useEffect, useRef, Component } from "react";
import React from "react";
import axios from "axios";
import "./WallE.css";
function WallE(){

    return(
        <div className="parallax">
            <div className="SpongeSection1">
                <img className="te" src="./image/Parallax/cityorigin.png"></img>
                <h1>Spongebob</h1>
            </div>
            <div className="SpongeSection1">
                <img className="te2" src="./image/Parallax/cityorigin.png"></img>
                <h1>Spongebob</h1>
            </div>
        </div>
    )
}export default WallE