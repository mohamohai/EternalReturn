


import { useState, useEffect, useRef } from "react";
import "./GameIntroduce.css"

function GameIntroduce() {
  const txt = "Pixel";    //타이핑에 쓸 문구
  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0);   //val i

  const source = document.getElementById("Motion");
  
const DIVIDER_HEIGHT = 5;
  useEffect(() => {
    const interval = setInterval(() => {
        setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크 
        
    }, 200);
    if(Count > txt.length)  {  // 문자열 길이 맞으면 아래 실행인데 클리어로 반복 없애기
        clearInterval(interval); 
        TryAgain();
    }
    return () => {
    
      clearInterval(interval);
    };

})
const TryAgain=() =>{// 특정 마우스 휠에서 작동시키면 지웠다가 다시 쓰기 가능
  setText('')   //초기화
  setCount(0); // 
}
  const stopyes = () => {
    setCount(0);  //셋카운트로 다시
    setText('');
  }
  const DivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
  
      const { deltaY } = e;
   
      const { scrollTop } = DivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
    
      console.log( scrollTop +"  "+ pageHeight)
      if(deltaY > 0){
        if(scrollTop<pageHeight)
        {
          DivRef.current.scrollTo({
          top: pageHeight *1,
          left: 0,
          behavior: "smooth",
        });
      }else if(scrollTop<=pageHeight*2 && scrollTop>pageHeight){
        DivRef.current.scrollTo({
        top: pageHeight *2,
        left: 0,
        behavior: "smooth",
      });
      } else if(scrollTop<=pageHeight*3 && scrollTop>pageHeight*2){
        DivRef.current.scrollTo({
        top: pageHeight *3,
        left: 0,
        behavior: "smooth",
      });
      }else if(scrollTop<=pageHeight*4 && scrollTop>=pageHeight*3){
        DivRef.current.scrollTo({
        top: pageHeight *4,
        left: 0,
        behavior: "smooth",
      });
    }
      }else{
        if(scrollTop>=pageHeight)
        {
          DivRef.current.scrollTo({
          top: pageHeight *0,
          left: 0,
          behavior: "smooth",
        });
      }else if(scrollTop>=pageHeight*2)
      {
        DivRef.current.scrollTo({
        top: pageHeight * 1,
        left: 0,
        behavior: "smooth",
      });
      } else if(scrollTop>=pageHeight*3)
      {
        DivRef.current.scrollTo({
        top: pageHeight * 2,
        left: 0,
        behavior: "smooth",
      });
      }else if(scrollTop>=pageHeight*4)
      {
        DivRef.current.scrollTo({
        top: pageHeight * 3,
        left: 0,
        behavior: "smooth",
      });
      }
    };
  }
    const DivRefCurrent = DivRef.current;
    DivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
   
    };
  }, []);
  return (

    <div className="GameIntroduce" ref={DivRef}>
    <div className="Pixel1 page">1
      <div className="title">::before, ::after</div>
      <div>특정 요소의 앞이나 뒤에 지정한 내용(텍스트 또는 이미지)을 추가할 수 있습니다.</div>
   
      <div id="Motion">
      { Text }<span className="blink"></span>
      <button onClick={() => stopyes()}>초기화용 버튼</button>
      </div> 
     </div>
     <div className="Pixel2 page">2</div>
     <div className="Pixel3 page">3</div>
     <div className="Pixel4 page">4</div>
     <div className="Pixel5 page">5</div>
    </div>
    
  );
}

export default GameIntroduce;