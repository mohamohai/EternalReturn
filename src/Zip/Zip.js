import { useState, useEffect, useRef, Component } from "react";
import "./Zip.css";
import "./Zip.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture,faBook} from "@fortawesome/free-solid-svg-icons";
import { faFileZipper} from "@fortawesome/free-regular-svg-icons";

function Zip(){
  const [CircleNum, setCircleNum]=useState(50);
  const CircleMove = document.getElementsByClassName("FlowCircle");
  const [XY,setXY]=useState({X:0,Y:0});
  const ZipRef = useRef();
  const Zip1Ref = useRef();






   
  const Zip1 = document.getElementsByClassName("Zip1");
  var target = document.getElementById("element");



  useEffect((e)=>{
  console.log(window.pageYOffset);//휠 위치에 따라서 zip 이 부분 퍼센트 내리기 at 50% 100%
console.log(Zip1Ref.current.getBoundingClientRect().height);
    Zip1[0].style.clipPath=`circle(${(120-(window.pageYOffset/12))}% at 50% 100%)`
  
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
          <div id="Zip_Part1" className="Zip1 Page100" ref={Zip1Ref}>
            <div className="FlowBox">
              <div className="FlowSection">
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>  
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>  
                <div className="FlowCircle"   ></div> 
                <div className="FlowCircle"   ></div>
              </div>
              <div className="FlowSection2">
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>  
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>  
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
              </div>
            </div>
          </div>        

          
                 
          <div id="Zip_Part2"className="Zip2 Page100" >
            <div className="Zip2Container">
                <div>
                </div>
            </div>
            
            </div>
          <div id="Zip_Part3"className="Zip3 Page100">
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          </div>
       
          <div class="horizontal-scroll-wrapper squares">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
            <div>item 5</div>
            <div>item 6</div>
            <div>item 7</div>
            <div>item 8</div>
          </div>
        </div>
    )
} export default Zip;