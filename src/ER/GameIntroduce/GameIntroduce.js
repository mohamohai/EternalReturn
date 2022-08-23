import { useState, useEffect, useRef } from "react";

import "./GameIntroduce.css"
const DIVIDER_HEIGHT = 5;
function GameIntroduce() {
  const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);


  const txt = "냉장고에서 꺼내 먹어..";    //타이핑에 쓸 문구
  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0);   //val i
  
  const source = document.getElementById("Motion");
  

  const TryAgain=() =>{// 특정 마우스 휠에서 작동시키면 지웠다가 다시 쓰기 가능
   
    setText('')   //초기화
    setCount(0); // 
    
  }
  useEffect(() => {
    const wheelHandler = (e) => { 
      if(outerDivRef.current=="div.outer")
      console.log(outerDivRef)
      console.log(outerDivRef)

      e.preventDefault(); // preventDefault 이벤트 발동 케어
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      const InfoOne=document.getElementById("InfoOne")
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("1, down");


          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          InfoOne.style.opacity="0%"
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("2, down");

          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);

        } else {
          // 현재 3페이지
          console.log("3, down");

          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("1, up");

          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("2,up");

          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          InfoOne.style.transition="1s"
          InfoOne.style.opacity="100%"
      
          setScrollIndex(0);
        } else {
          // 현재 3페이지
          console.log("3, up");

          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
  
    
    const interval = setInterval(() => {
        setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크 
        
    }, 200);
    if(Count > txt.length)  {  // 문자열 길이 맞으면 아래 실행인데 클리어로 반복 없애기
        clearInterval(interval); 
        TryAgain();
    }
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      clearInterval(interval);
    };

})

  const stopyes = () => {
    setCount(0);  //셋카운트로 다시
    setText('');
  }
  return (
    <div ref={outerDivRef} className="outer">
    <div className="inner"
      style={{
        width: "100vw",
        height: "100vh",
        background: `linear-gradient( to right,        rgba(255, 255, 255, 0.1) 10%,        rgba(255, 255, 255, 0.1) 25%,        rgba(255, 255, 255, 0.1) 50%,        rgba(255, 255, 255, 0.1) 75%,        rgba(255, 255, 255, 0) 100%        ), url('/image/Main/Runway.jpg')   `,
        backgroundSize: "cover",
        position: "relative",
        left:"0px",
    }}
  >
    <div className="GameIntroduce">
      <div id="Motion">
      { Text }<span className="blink"></span>
       
      </div>
      <button onClick={() => stopyes()}>초기화용 버튼</button>
    </div>
    </div>
    <div className="inner"
      style={{
        width: "100vw",
        height: "100vh",
        background: `linear-gradient( to right,        rgba(255, 255, 255, 0.1) 10%,        rgba(255, 255, 255, 0.1) 25%,        rgba(255, 255, 255, 0.1) 50%,        rgba(255, 255, 255, 0.1) 75%,        rgba(255, 255, 255, 0) 100%        ), url('/image/Main/Runway.jpg')   `,
        backgroundSize: "cover",
        position: "relative",
        left:"0px",
    }}
  >
    <div className="GameIntroduce">
      <div id="Motion">
      { Text }<span className="blink"></span>
       
      </div>
      <button onClick={() => stopyes()}>초기화용 버튼</button>
    </div>
    </div>
    <div className="inner"
      style={{
        width: "100vw",
        height: "100vh",
        background: `linear-gradient( to right,        rgba(255, 255, 255, 0.1) 10%,        rgba(255, 255, 255, 0.1) 25%,        rgba(255, 255, 255, 0.1) 50%,        rgba(255, 255, 255, 0.1) 75%,        rgba(255, 255, 255, 0) 100%        ), url('/image/Main/Runway.jpg')   `,
        backgroundSize: "cover",
        position: "relative",
        left:"0px",
    }}
  >
    <div className="GameIntroduce">
      <div id="Motion">
      { Text }<span className="blink"></span>
       
      </div>
      <button onClick={() => stopyes()}>초기화용 버튼</button>
    </div>
    </div>
    </div>
  );
}

export default GameIntroduce;