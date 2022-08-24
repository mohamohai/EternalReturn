


import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import {FullPage, Slide} from 'react-fullpage';
import "./GameIntroduce.css"

function GameIntroduce() {
  const txt = "냉장고에서 꺼내 먹어..";    //타이핑에 쓸 문구
  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0);   //val i

  const source = document.getElementById("Motion");

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

},[])
const TryAgain=() =>{// 특정 마우스 휠에서 작동시키면 지웠다가 다시 쓰기 가능
  setText('')   //초기화
  setCount(0); // 
  
}
  const stopyes = () => {
    setCount(0);  //셋카운트로 다시
    setText('');
  }

  return (
  

    
    <div className="GameIntroduce">
    <div className="TomatoGNB">
     <div id = "TomatoLeftMenu">
      <ul>
        <li>UI · UX</li>
        <li>SI · SM</li>
        <li>Consultion</li>
        <li>Solution</li>
        <li>Works</li>
        <li>Directions</li>
      </ul>
     </div>
     <div id = "Tomatoframe"></div>
     <div className="TomatoMain1">
      <ul>
        <li>The</li>
        <li>OKTOMATO is</li>
        <li  className="TomatoSlider">
         
         a
          
     </li>
        <li>Marker</li>
      </ul>
     </div>
     <div id = "TomatorightMenu"></div>
     
     </div>
     <div className="clear"> </div>
     <div className="TomatoMain2">
     <div className="TomatoMain2Text">
      <ul>
        <li className="TomaToMainTextTitle">UI(User Interface) · UX(User Experience)</li>
        <li className="TomaToMainTextContent">UI/UX는 서로 다른 분야기도 하지만 밀접한 관계입니다.<br></br>
            일반적인 에이전시에서는 디자이너가 두 분야를 모두 담당하지만 오케이토마토에서는 각 분야의 커버리지가 다릅니다.
            <br></br><br></br>
            UI는 조그마한 화면에서 직관적인 인터페이스를 필요로 하기에 오케이토마토의 디자이너들은 보다 직관적이고 편리한 화면을 만들 수 있습니다.<br></br>
            UX는 웹사이트의 구조를 파악하고 더 나은 구조로 기획/설계 하는 부분이기에 웹기획자와 디자이너가 함께 협력하고 있습니다.<br></br>
            <br></br>
            오케이토마토는 더 나은 사용자 경험과 시각적 구성, 그리고 고객의 편리함을 위한 UI/UX를 제공합니다.</li>
      </ul>
     </div>
     <div className="TomatoMain2Viwe">
     <div className="test1 circle">UI</div>
     <div className="test2 circle">UX</div>
     <div className="test3 circle">심미성</div>
     <div className="test4 circle">심미성</div>
     
     </div>
      
      
    </div>
    
    {/* <div class="box">
      <div class="title">::before, ::after</div>
      <div>특정 요소의 앞이나 뒤에 지정한 내용(텍스트 또는 이미지)을 추가할 수 있습니다.</div>
    </div> */}
      {/* <div id="Motion">
      { Text }<span className="blink"></span>
      </div> 
      <div className="box">
      <button onClick={() => stopyes()}>초기화용 버튼</button>
      </div>
      
      */}
    </div>
    
   


  );
}

export default GameIntroduce;