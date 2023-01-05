import { useState, useEffect, useRef, Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hyun.css";

import HyunPageOne from "./HyunPart/HyunPageOne";
import HyunPageTwo from "./HyunPart/HyunPageTwo";

function Hyun(){
    useEffect(() => {  
        AOS.init({
            duration : 500
        });
    });
    return(<div className="HyunFull">
                <HyunPageOne/>
            </div>)
}export default Hyun;