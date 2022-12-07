import { useState, useEffect, useRef, Component } from "react";
import "./Zip.css";
import "./Zip.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture,faBook} from "@fortawesome/free-solid-svg-icons";
import {faFileZipper} from "@fortawesome/free-regular-svg-icons";
function Zip(){
useEffect((e)=>{

},[])

    return(
        <div className="Zip">
          <div className="ZipGNB">
            <ul>
            <a href="#Zip_Part1"> <li>가나다</li></a>
            <a href="#Zip_Part2"> <li>Title</li></a>
            <a href="#Zip_Part3"> <li>Body</li></a>
            <a href="#Zip_Part4"> <li>Footer</li></a>
            </ul>
          </div>
          <div id="Zip_Part1" className="Zip1 Page100">
            <div className="FlowBox">
              <div className="FlowSection">
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>  
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>  
                <div className="FlowCircle"></div> 
                <div className="FlowCircle">V</div>
              </div>
              <div className="FlowSection2">
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>  
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>  
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
              </div>

            </div>
          </div>               
                                 {/* style={{background:"url('./image/HerenNow/9.jpg')" ,backgroundSize: "100% 100%", */}
          <div id="Zip_Part2"className="Zip2 Page100" >
          
            <div className="BackWord">
              {/* <div><FontAwesomeIcon icon={faFileZipper} className="FileZip"/></div>  */}
            <div className="BackCircle"></div>
            <div className="BackCircle"></div>
            <div className="BackCircle"></div>
            <div className="BackCircle"></div><div className="BackCircle"></div>
            </div>
          </div>
          <div id="Zip_Part3"className="Zip3 Page100">
            
          </div>
          <div id="Zip_Part4"className="Zip4 Page100">
            
          </div>
          
        </div>
    )
} export default Zip;