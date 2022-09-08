


import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./MainSite.css"
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
  const DivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
  
      const { deltaY } = e;
      const { scrollTop } =DivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
    
      console.log( scrollTop +"  "+ pageHeight)
      if(deltaY > 0){
        if(scrollTop<pageHeight)
        {console.log("1p down")
          DivRef.current.scrollTo({
          top: pageHeight *1,
          left: 0,
          behavior: "smooth",
        });
      }else if(scrollTop<pageHeight*2 && scrollTop>=pageHeight){
        console.log("2p down")
        DivRef.current.scrollTo({
        top: pageHeight *2,
        left: 0,
        behavior: "smooth",
      });
      } else if(scrollTop<pageHeight*3 && scrollTop>=pageHeight*2){
        console.log("3p down")
        DivRef.current.scrollTo({
        top: pageHeight *3,
        left: 0,
        behavior: "smooth",
      });
      }else if(scrollTop<pageHeight*4 && scrollTop>=pageHeight*3){
        console.log("4p down")
        DivRef.current.scrollTo({
        top: pageHeight *4,
        left: 0,
        behavior: "smooth",
      });
    }
      }else{
        if(scrollTop>=pageHeight*4 )
        { console.log("5p up")
          DivRef.current.scrollTo({
          top: pageHeight *3,
          left: 0,
          behavior: "smooth",
        });
      }else if(scrollTop>=pageHeight*3 && scrollTop<=pageHeight*4)
      {console.log("4p up")
        DivRef.current.scrollTo({
        top: pageHeight * 2,
        left: 0,
        behavior: "smooth",
      });
      }else if(scrollTop>=pageHeight*2 && scrollTop<=pageHeight*3)
      {console.log("3p up")
        DivRef.current.scrollTo({
        top: pageHeight * 1,
        left: 0,
        behavior: "smooth",
      });
      } 
      else if(scrollTop>=pageHeight*1 && scrollTop<=pageHeight*2)
      {console.log("2p up")
      TryAgain();
        DivRef.current.scrollTo({
        top: pageHeight * 0,
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


  const settingsa = {
    // slide 해주고 싶은 단위
  //  className: "center",
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 2.5,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  };
  return (
    <div className="MainSite" ref={DivRef}>
     
    <div className="page">

    <div class="wrap">
    <div class="circle">

    <div class="wave-one"></div>
    <div class="wave-two"></div>
    <div class="wave-three"></div>
    <div class="wave-four"></div>
    

    <i class="fas fa-moon">☆</i>
    <i class="fas fa-moon blur"></i>
    

    <div class="star">
      <i class="fas fa-asterisk star1">*</i>
      <i class="fas fa-asterisk star2">*</i>
      <i class="fas fa-asterisk star3">*</i>
      <i class="fas fa-asterisk star4">*</i>
      <i class="fas fa-asterisk star5">*</i>
    </div>
  </div>
</div>
 
      <div id="MainSitePage">
      { Text }<span className="blink"></span>
      
      </div> 
     </div>
     
     <div className="page">
     2
     <div class="cdcd">간다간다간다
     간다간다간다간다</div>

     </div>
     <div className="page">3 </div>
     <div className="page">4</div>
     
     <div className="page">5</div>
    </div>
    
  );
}

export default MainSite;