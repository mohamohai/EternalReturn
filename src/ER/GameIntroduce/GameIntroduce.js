import { useState, useEffect, useRef } from "react";

import "./GameIntroduce.css"



const DIVIDER_HEIGHT = 5;

function GameIntroduce() {
  
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
   
    const wheelHandler = (e) => { 
      e.preventDefault(); // preventDefault 이벤트 발동 케어
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      const target1=document.getElementById("testtest")
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          target1.style.visibility="visible"
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
          target1.style.visibility="hidden"
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
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
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });target1.style.display="block"
          target1.style.transitionDuration="1s"
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
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
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={outerDivRef} className="outer">
      <div className="inner Page"
      style={{
              backgroundImage:"url(/image/gameInfo/a.jpg)",
              backgroundSize:"cover"}}
    >
      <div id="testtest">가나다라마바사아자차카타파</div>
      </div>
      <div id="testtes"
     ></div>
   
      <div className="inner Page"
      style={{
        backgroundImage:"url(/image/gameInfo/b.jpg)",
        backgroundSize:"cover"}}
>2</div>
   
      <div className="inner Page"
      style={{
        backgroundImage:"url(/image/gameInfo/c.jpg)",
        backgroundSize:"cover"}}
>3</div>
    </div>
  );
}

export default GameIntroduce;