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


const [TypingWords,setTypingWords] = useState("Lee Jong Hyun");    //타이핑에 쓸 문구
const [TypingStep, setTypingStep] = useState('');    //새로 생기는 문자
const [TypingCountUp, setTypingCountUp] = useState(0);  //문자 위치


function ChangeTextFunction(){
  console.log(TypingWords.length,TypingCountUp )
  if(TypingWords.length!=TypingCountUp){
    setTypingStep(TypingStep + TypingWords[TypingCountUp])
    setTypingCountUp(TypingCountUp + 1); // 개수 만큼 체크 
  }
  
}

useEffect((e)=>{
  makeStars();

},[])
var interval = setInterval(() => {
  ChangeTextFunction();
  }, 400);
useEffect(() => {
   
    
    if(TypingWords.length==TypingCountUp){
      clearInterval(interval)
      console.log("끝")
      setTypingCountUp(1)
    }

    return () => {
      clearInterval(interval);
    };

})
    return(
        <div className="Mission">
          <div className="MissionPageOne">
                <svg className="sky"></svg>
                <div className="MissionPageOneText">
                  <div className="TypingWord">
                    { TypingStep }<span className="blink"></span>
                  </div>
                </div> 
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