import { useState, useEffect, useRef, Component } from "react";
import "./FourZeroFour.css"
import "./FourZeroFour.scss"

function FourZeroFour(){
// 브라우저 창 크기에 따른 별 생성
const $sky = document.getElementsByClassName("sky");
const $snowMap = document.getElementsByClassName("snowMap");
// 브라우저 창 크기에 따른 별 생성

const [TypingWords,setTypingWords] = useState("Lee Jong Hyun");    //타이핑에 쓸 문구
const [TypingStep, setTypingStep] = useState('');    //새로 생기는 문자
const [TypingCountUp, setTypingCountUp] = useState(0);  //문자 위치
const letters = [
  "404NotFound",
  "I am sorry, My Mistake", 
  window.location.href
];
const [CountNumber, setCountNumber] = useState(0);

const snowEleArr = [];
const snowEleArr2 = new Array(50);
const number_ref = useRef(0);
const $TypingChange = document.getElementsByClassName("TypingChange");

// 글자 모음
// function ChangeTextFunction(){
//   console.log(TypingWords.length,TypingCountUp )
//   if(TypingWords.length!=TypingCountUp){
//     setTypingStep(TypingStep + TypingWords[TypingCountUp])
//     setTypingCountUp(TypingCountUp + 1); // 개수 만큼 체크 
//   }
// }
const makeStars = () => {
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
const makeSnow=()=>{
  var inW=window.innerWidth;
  var inH=window.innerHeight;
  const maxSize = Math.max(window.innerWidth*2, window.innerHeight*2)

  const _size2 = Math.floor(maxSize*5);
  function TopH(){
    return Math.floor(Math.random()*inH)
  }
  function LeftW(){
    return Math.floor(Math.random()*inW)
  }
  // for(let i=1; i<inW/10; i++){
  //   snowEleArr.push(`<div className='snowArr' style={{left:"${LeftW()}px", 
  //                                             top:"${TopH()}px"}}></div>`)
  // }                 
  const htmlDummy2 = new Array(_size2).fill().map((_, i) => {
    return `<div className='snowArr' style={{left:'${LeftW()}px', 
    top:'${TopH()}px'}}></div>`
  }).join('');
  $snowMap[0].innerHTML = htmlDummy2.replace("\"");
  console.log(htmlDummy2.replace("\""))


}
useEffect(()=>{

  
  // let CountingStart = setInterval(()=>{
  //   if(CountNumber == 1000){
  //     clearInterval(CountingStart);
  //     return false;
  //   }
  //   setCountNumber(CountNumber+1)
  // },20)   이 방법을 하면 그 타이핑효과에서 안되던 것 처럼 useState가 최신화 된 값을 가져오지 못해서 문제가 생기니 useEffect로 해당 숫자가 변할 때 작동되게 하고, setTimeOut을 넣어서 시간조정 
              

  setTimeout(()=>{
    if(CountNumber==500){
      setCountNumber(1+1);

    }else {
      setCountNumber(CountNumber+1);
    } 
  },1)
},[CountNumber])
useEffect((e)=>{
  window.scrollTo({
    top: 0,
    left: 0,
});
  makeStars();
  // makeSnow();
  //FallSnow();
  // 글자 입력 속도
  const speed = 100;
  let i = 0;
  // 타이핑 효과
  const typing = async () => {  
    const letter = letters[i].split("");
    
    while (letter.length) {
      await wait(speed);
      $TypingChange[0].innerHTML += letter.shift(); 
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
      $TypingChange[0].innerHTML = letter.join(""); 
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
},[])

  
// useEffect(() => {
//   const interval = setInterval(() => {
//     ChangeTextFunction();
//     }, 400);
//     if(TypingWords.length==TypingCountUp){
//       clearInterval(interval)
//       console.log("끝")
      
//     }

//     return () => {
//       clearInterval(interval);
//     };

// })



    return(
        <div className="Mission">
          <div className="MissionPageOne">
                <svg className="sky"></svg>
                
                <div className="MissionPageOneText">
                  <div className="TypingWord">
                    <div className="ohmygod">Click Bubble Plz&nbsp; </div>
                    <div>
                      <span className="TypingChange"></span> 
                      <span className="blink"></span>
                    </div>
                  </div>
                </div> 
            </div>
            <div className="MissionPageThree">
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>

            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>
            <div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/><div className="FallSnow" onClick={()=>window.history.back()}/>

            </div>
            
          
        </div>
    )
} export default FourZeroFour;