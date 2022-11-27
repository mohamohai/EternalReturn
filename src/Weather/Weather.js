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
const letters = [
  "HTML",
  "CSS", 
  "JavaScript"
];
const number_ref = useRef(0);
const $text = document.getElementsByClassName("text");

// 글자 모음
function ChangeTextFunction(){
  console.log(TypingWords.length,TypingCountUp )
  if(TypingWords.length!=TypingCountUp){
    setTypingStep(TypingStep + TypingWords[TypingCountUp])
    setTypingCountUp(TypingCountUp + 1); // 개수 만큼 체크 
  }
}

useEffect((e)=>{
  makeStars();
  // 글자 입력 속도
  const speed = 100;
  let i = 0;
  setTimeout(()=> console.log("1초 딜레이"),3000)
  // 타이핑 효과
  const typing = async () => {  
    const letter = letters[i].split("");
    
    while (letter.length) {
      await wait(speed);
      $text[0].innerHTML += letter.shift(); 
    }
    
    // 잠시 대기
    await wait(800);
    
    // 지우는 효과
    remove();
  }
  
  // 글자 지우는 효과
  const remove = async () => {
    const letter = letters[i].split("");
    
    while (letter.length) {
      await wait(speed);
      
      letter.pop();
      $text[0].innerHTML = letter.join(""); 
    }
    
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i+1] ? 0 : i + 1;
    typing();
  }
  
  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }
  
  // 초기 실행
  setTimeout(typing, 500);
  "dev": "concurrently \"nodemon server/server.js\" \"node scripts/start.js\"",
},[])

  
useEffect(() => {
  const interval = setInterval(() => {
    ChangeTextFunction();
    }, 400);
    if(TypingWords.length==TypingCountUp){
      clearInterval(interval)
      console.log("끝")
      
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
                    <div className="text2">Language! <h1 className="text">aa</h1><span className="blink"></span></div>
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