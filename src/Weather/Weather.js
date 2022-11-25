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

function fff(){
    console.log("aaa")
   
}

useEffect((e)=>{
    makeStars();
},[])
  const [txt,settxt] = useState("Pixel");    //타이핑에 쓸 문구
  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0); 
useEffect(() => {
    const interval = setInterval(() => {
        setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크 
        
    }, 200);
    if(Count-1 == txt.length)  {  // 문자열 길이 맞으면 아래 실행인데 클리어로 반복 없애기
      settxt("LeeJongHyun")
      setText("");
      setCount(0);
       
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
                { Text }<span className="blink"></span>
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