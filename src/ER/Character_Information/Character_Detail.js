import { useState, useEffect, useRef } from "react";
import "./Character_Detail.css"
const DIVIDER_HEIGHT = 5;

function Character_Detail() {
  const SkillName = []


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
          console.log("현재 1페이지, down");
          
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          InfoOne.style.opacity="0%"
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
          console.log("현재 2페이지,ㅇㄴㅁㅇㄴㅁㅇ up");
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
      <div id="InfoOne">
        <div>제작, 전투, 그리고 생존</div>
        <div>line</div>
        <div>세상과 떨어진 섬 루미아에서, 과학 집단 이글라이아가 인간을
          대상으로 신인류가 되기 위한 비밀스러운 생존 실험을 벌입니다.
        </div>
      </div>
      </div>
        <div className="charimg"
        style={{
          backgroundImage:"url(/image/Character_Img/Rozzi/skin.png)",
          backgroundSize:"cover"}}
        >
로지
        </div>
   
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

export default Character_Detail;