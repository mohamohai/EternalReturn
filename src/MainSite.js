


import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./MainSite.css";
import ReactAudioPlayer from 'react-audio-player';
function MainSite() {
  const txt = "Pixel";    //타이핑에 쓸 문구
  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0);   //val i

  

  useEffect(() => {
    const interval = setInterval(() => {
        setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크 
        
    }, 200);
    if(Count >= txt.length)  {  // 문자열 길이 맞으면 아래 실행인데 클리어로 반복 없애기
        clearInterval(interval); 
       
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

  return (
    <div className="MainSite" >
     
    <div className="page">

    <div className="wrap">
    <div className="circle">

    <div className="wave-one"></div>
    <div className="wave-two"></div>
    <div className="wave-three"></div>
    <div className="wave-four"></div>
    

    <i className="fas fa-moon">☆</i>
    <i className="fas fa-moon blur"></i>
    

    <div className="star">
      <i className="fas fa-asterisk star1">*</i>
      <i className="fas fa-asterisk star2">*</i>
      <i className="fas fa-asterisk star3">*</i>
      <i className="fas fa-asterisk star4">*</i>
      <i className="fas fa-asterisk star5">*</i>
    </div>
  </div>
</div>
 
      <div id="MainSitePage">
      { Text }<span className="blink"></span>
      

      <ReactAudioPlayer
  src="https://docs.google.com/uc?export=open&id=14JlzHWUE2TqAsN237ft43SOw02xDPori"


  controls={true}

/>
      </div> 
     </div>
     
     <div className="page">
     <div className="wrapper"> 
  <a href="#" className="btn"> 
    <span>wave</span>
  </a> 
</div> 

     </div>
     <div className="page">
     <div className="spinBox">
      <img src="/image/Pixel/Main3/jinu.jpg"className="spinBoxCover"></img>
     
    <div className="spinBoxOne">
    <div>Elit ut aute fugiat id veniam cillum. Duis nisi deserunt laboris ipsum cupidatat nulla aliqua commodo ut. Anim proident labore velit eiusmod ut do irure nisi veniam. Anim voluptate excepteur dolore laboris reprehenderit veniam esse dolore. Laborum nulla culpa est aliquip laborum. Adipisicing excepteur aliqua dolor ad ex ullamco    </div>
     </div>
     </div>


     </div>
     <div className="page">4</div>
     
     <div className="page">5</div>
    </div>
    
  );
}

export default MainSite;