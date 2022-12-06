import { useState, useEffect, useRef, Component } from "react";
import "./Zip.css"
import "./Zip.scss"

function Zip(){
useEffect((e)=>{

},[])

    return(
        <div className="Zip">
          <div className="ZipGNB">
            <ul>
              <li><a href="#Zip_Part1">가나다</a></li>
              <li><a href="#Zip_Part2">Title</a></li>
              <li><a href="#Zip_Part3">Body</a></li>
              <li><a href="#Zip_Part4">Footer</a></li>
            </ul>
          </div>
          <div id="Zip_Part1" className="Zip1 Page100">
            <div className="FlowBox">
              <div className="FlowSection">
                <div className="FlowCircle">1</div>
                <div className="FlowCircle">2</div>
                <div className="FlowCircle">3</div>  
                <div className="FlowCircle">4</div>
                <div className="FlowCircle">5</div>
                <div className="FlowiCrcle">6</div>
                <div className="FlowCircle">7</div>
                <div className="FlowCircle">8</div>  
                <div className="FlowCircle">9</div>
                <div className="FlowCircle">10</div>
              </div>
              <div className="FlowSection2">
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>  
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowiCrcle"></div>
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>  
                <div className="FlowCircle"></div>
                <div className="FlowCircle"></div>
              </div>

            </div>
          </div>
          <div id="Zip_Part2"className="Zip2 Page100">
            
          </div>
          <div id="Zip_Part3"className="Zip3 Page100">
            
          </div>
          <div id="Zip_Part4"className="Zip4 Page100">
            
          </div>
          
        </div>
    )
} export default Zip;