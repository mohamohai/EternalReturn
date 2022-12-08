import { useState, useEffect, useRef, Component } from "react";
import "./Zip.css";
import "./Zip.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture,faBook} from "@fortawesome/free-solid-svg-icons";
import { faFileZipper} from "@fortawesome/free-regular-svg-icons";

function Zip(){
  const [CircleNum, setCircleNum]=useState(1);
  const CircleMove = document.getElementsByClassName("FlowCircle");
  const [XY,setXY]=useState({X:0,Y:0});
  const ZipRef = useRef();







  const clipTest = document.getElementsByClassName("clipTest");
  const Zip1 = document.getElementsByClassName("Zip1");
  var target = document.getElementById("element");



  useEffect((e)=>{
  console.log(window.pageYOffset);//휠 위치에 따라서 zip 이 부분 퍼센트 내리기 at 50% 100%
  })

  // useEffect((e)=>{
  //   let pageYmin = window.pageXOffset/10;
  //   console.log(pageYmin,window.pageXOffset);
  //   Zip1[0].style.clipPath=`circle(${100-pageYmin}%)`
  // })
  const handleMouseMove=(e)=>{
    setXY({X:e.clientX -50,Y:e.clientY-50});

  }

    return(
        <div className="Zip" onMouseMove={(e)=>handleMouseMove(e)} ref={ZipRef}>
          <div className="ZipGNB">
            <ul>
            <a href="#Zip_Part1"> <li>가나다</li></a>
            <a href="#Zip_Part2"> <li>Title</li></a>
            <a href="#Zip_Part3"> <li>Body</li></a>
            <a href="#Zip_Part4"> <li>Footer</li></a>
            </ul>
          </div>
          <div id="Zip_Part1" className="Zip1 Page100">
            <div className="clipTest"></div>
            <div className="FlowBox">
              <div className="FlowSection">
                <div className="FlowCircle"   >0</div>
                <div className="FlowCircle"   >1</div>
                <div className="FlowCircle"   >22</div>  
                <div className="FlowCircle"   >3</div>
                <div className="FlowCircle"   >4</div>
                <div className="FlowCircle"   >5</div>
                <div className="FlowCircle"   >6</div>
                <div className="FlowCircle"   >7</div>  
                <div className="FlowCircle"   >8</div> 
                <div className="FlowCircle"   >9</div>
              </div>
              <div className="FlowSection2">
                <div className="FlowCircle"   >0</div>
                <div className="FlowCircle"   >1</div>
                <div className="FlowCircle"   >2</div>  
                <div className="FlowCircle"   >3</div>
                <div className="FlowCircle"   >4</div>
                <div className="FlowCircle"   >5</div>
                <div className="FlowCircle"   >6</div>
                <div className="FlowCircle"   >7</div>  
                <div className="FlowCircle"   >8</div>
                <div className="FlowCircle"   >9</div>
              </div>

            </div>

<div className="clipcir"></div>
            {/* <section id="main_home" class="sec sec1 main_home is-inview" data-scroll data-scroll-sticky data-scroll-target="#section_group" style="height: 937px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 756, 0, 1); clip-path: circle(350.983px at 50vw 89%);"></section> */}


            
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