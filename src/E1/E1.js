import { useState, useEffect, useRef, Component } from "react";
import './E1.css'
import E1GNB from './E1GNB.js'
import Vivi from './E1.mp4'
function E1(){
    return(
        <div className="E1Full">
            <E1GNB></E1GNB>
           
          
               
                <div className="E1FirstBox">
                    <p>ENERGY LEADER <br></br>
                    LIFE PARTNER</p>
                </div>
            <video className="E1Video" muted autoPlay loop>
                <source src="/video/E1.mp4" type="video/mp4" />
            </video>
          
        </div>
    )
}export default E1