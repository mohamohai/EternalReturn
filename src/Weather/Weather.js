import { useState, useEffect, useRef, Component } from "react";
import "./Weather.css"

function Weather(){

// 브라우저 창 크기에 따른 별 생성

const $sky = document.getElementsByClassName("sky");

// 브라우저 창 크기에 따른 별 생성

const makeStars = () => {
    console.log("red")
  // 브라우저 가장 큰 크기
  const maxSize = Math.max(window.innerWidth*2, window.innerHeight*2)

  // 랜덤한 X 위치 값
  const getRandomX = () => Math.random() * maxSize*2;
    
  // 랜덤한 Y 위치 값
  const getRandomY = () => Math.random() * maxSize*2;

  // 랜덤한 크기 (circle는 반지름이 크기)
  const randomRadius = () =>  Math.random() * 0.7 + 0.3;
  
  // 임의의 값
  const _size = Math.floor(maxSize*5);
  
  const htmlDummy = new Array(_size).fill().map((_, i) => {
    return  `<circle 
		cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" fill="#ffffff"/>`
  }).join('');
  $sky[0].innerHTML = htmlDummy;
}

const fff = ()=>{
    console.log("aaa")
}


    return(
        <div className="Mission">
            <div className="MissionPageOne">
                <div className="sky"></div>
                <div onClick={()=>fff}>1,2,3,4,5,6,7,8,9</div>
            </div>


            <div className="MissionPageTwo">

            </div>
            <div className="MissionPageThree">

            </div>
            <div className="MissionPageFour">

            </div>
          
        </div>
    )
} export default Weather;