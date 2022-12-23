
import { useState, useEffect, useRef, Component } from "react";
import './TaihanGNB.css';
function TaihanGNB(){
    

const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장


const TaihanGNB = document.getElementsByClassName('TaihanGNB');

useEffect((e) => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

function ViewGNB(ScrollY){

 
}
function handleScroll() {
    if (ScrollY > 300) {
      setScrollY(window.pageYOffset);
      console.log(ScrollY)
    } else {
      setScrollY(window.pageYOffset);
    }
  }




    return(
    <div className="TaihanGNB">
        <div className="TaihanLogo">taihan</div>
        <div className="TaihanGNBCenter">
            <ul>
                <li>Company</li>
                <li>Business</li>
                <li>ESG</li>
                <li>News</li>
                <li>Customer</li>
            </ul>
        </div>
        <div className="TaihanGNBRight">
            <ul>
                <li>단어</li>
                <li>서치</li>
                <li>햄버거</li>
            </ul>
        </div>
    </div>)
}export default TaihanGNB


