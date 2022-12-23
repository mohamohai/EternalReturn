import { useState, useEffect, useRef, Component } from "react";
import "./EnvironmentOne.css";
function EnvironmentOne(){
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);

  const EnvironmentOneVidio = document.getElementsByClassName('EnvironmentOneVidio');

  function VideoMove(ScrollY){
    let ScrollY1000=ScrollY/1000
    if(ScrollY1000<0.5){
        EnvironmentOneVidio[0].style.transform=`scale(${1.5-ScrollY1000})`
    }
    if(ScrollY<window.innerHeight*1.3){//이거 모니터크기
        EnvironmentOneVidio[0].style.position=`absolute`
    }
    if(ScrollY>window.innerHeight*1.3){
        EnvironmentOneVidio[0].style.position=`fixed`
    }
  }
  function handleScroll() {
    if (ScrollY > 300) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
      VideoMove(ScrollY)
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  useEffect((e) => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });
    return(
        
    <div className="EnvironmentOne">
        <video autoPlay="autoplay" loop="loop" className="EnvironmentOneVidio">
           <source src="./image/Environment/PageOneV.mp4" type="video/mp4"/> 
        </video>
        <div className="Whitespace"></div>
        <div className="EnvironmentGNB">
            <ul>
                <li>그린 이니셔티브</li>
                <li>그린 디지털</li>
                <li>그린 커머스</li>
                <li>그린 인프라</li>
                <li>그린 서비스</li>
                <li>그린 플레이스</li>
                <li>ESG경영</li>
            </ul>
        </div><span className="NavY">{ScrollY}</span>
    </div>)
}export default EnvironmentOne
