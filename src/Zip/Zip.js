import { useState, useEffect, useRef, Component } from "react";
import "./Zip.css";
import "./Zip.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture,faBook} from "@fortawesome/free-solid-svg-icons";
import {faFileZipper} from "@fortawesome/free-regular-svg-icons";
function Zip(){
  const [CircleNum, setCircleNum]=useState(1);
  const CircleMove = document.getElementsByClassName("FlowCircle");
  const [XY,setXY]=useState({X:0,Y:0});
useEffect((e)=>{

},[])
const handleMouseMove=(e)=>{console.log(XY.X)
  setXY({X:e.clientX -50,Y:e.clientY-50});
  CircleMove[3].style.color="red";
  CircleMove[3].style.transform=`translateX(700px)`
}
const MoveCircle =(e)=>{
  var rect = e.target.getBoundingClientRect();
  console.log(rect)

  
  CircleMove[3].style.transform=`translateX(${(e.nativeEvent.offsetX-480)/10}px) 
                                             translateY(${(e.nativeEvent.offsetY-320)/10}px) `
}
function MoveCircleReturn(){
  CircleMove[3].style.transform=`translate(0px,0px) `
}
    return(
        <div className="Zip" onMouseMove={(e)=>handleMouseMove(e)}>
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
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >0</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >1</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >22</div>  
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >3</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >4</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >5</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >6</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >7</div>  
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >8</div> 
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >9</div>
              </div>
              <div className="FlowSection2">
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >0</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >1</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >2</div>  
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >3</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >4</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >5</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >6</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >7</div>  
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >8</div>
                <div className="FlowCircle"onMouseMove={MoveCircle} onMouseLeave={MoveCircleReturn}  >9</div>
              </div>

            </div>
          </div>               
                                 {/* style={{background:"url('./image/HerenNow/9.jpg')" ,backgroundSize: "100% 100%", */}
          <div id="Zip_Part2"className="Zip2 Page100" >
            <div className="Zip2Container">
                <div>

                </div>
            </div>
            
            </div>
          <div id="Zip_Part3"className="Zip3 Page100">
            
          </div>
          <div id="Zip_Part4"className="Zip4 Page100">
            
          </div>
          
        </div>
    )
} export default Zip;