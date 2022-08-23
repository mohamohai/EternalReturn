import { useState, useEffect, useRef } from "react";

import "./GameIntroduce.css"

function GameIntroduce() {
  const txt = "냉장고에서 꺼내 먹어..";    //타이핑에 쓸 문구
  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0);   //val i
  
  const source = document.getElementById("Motion");
  

  const TryAgain=() =>{// 특정 마우스 휠에서 작동시키면 지웠다가 다시 쓰기 가능
   
    setText('')   //초기화
    setCount(0); // 
    
  }
  useEffect(() => {
    
    
    const interval = setInterval(() => {
        setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크 
        console.log(source)
    }, 200);
    if(Count > txt.length)  {  // 문자열 길이 맞으면 아래 실행인데 클리어로 반복 없애기
        clearInterval(interval); 
        TryAgain();
    }
    return () => clearInterval(interval); // 원래 끝내는 용도
})

  const stopyes = () => {
    setCount(0);  //셋카운트로 다시
    setText('');
  }
  return (
    <div className="GameIntroduce">
      <div id="Motion">
      { Text }<span className="blink"></span>
       
      </div>
      <button onClick={() => stopyes()}>초기화용 버튼</button>
    </div>
  );
}

export default GameIntroduce;