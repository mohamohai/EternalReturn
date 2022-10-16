


import { useState, useEffect, useRef } from "react";
import "./MainSite.css";
import Slider from "react-slick";
function MainSite() {
  const [txt,settxt] = useState("Pixel");    //타이핑에 쓸 문구
  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0);   //val i
  const streamer = ["0828","aduck","aguippo","badgirl","bbibu","bbonge","chabi","cham","ddolbok","gambler","gangg_wide","jahee","jinu","jjondeuk","kimdduddi","kosi","leechohong","magenta","manggae","nanayang","purin","sahyang","silph","snowwhite",]
  
  useEffect(() => {
    const interval = setInterval(() => {
        setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크 
        
    }, 200);
    if(Count-1 == txt.length)  {  // 문자열 길이 맞으면 아래 실행인데 클리어로 반복 없애기
      settxt("Change")
      setText("");
      setCount(0);
       
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

    <div className="GameIntroduce" ref={DivRef}>
      <div className="PixelGNB">
        <span>Pixel network</span>
        <ul>
          <li>ABOUT US</li>
          <li>CREATORS</li>
          <li>PR CONTENTS</li>
          <li>CLIENTS</li>
          <li>CONTACT US</li>
        </ul>
        <span className="PixelStoreLink">pixel store</span>
      </div>
    <div className="Pixel1 page">

     
      
   
      <div id="Motion">
      { Text }<span className="blink"></span>
      
      </div> 
     </div>
     
      <div className="Pixel2 page">
      <div className="Pixel2Word">
      <a>Pixel</a>
      <ul>
        <li>크리에이터 자신의 브랜드 가치를 온전히 인정받을 수 있도록</li>
        <li>픽셀네트워크는 '크리에이터 자신의 브랜드 가치를 온전히 인정받을 수 있도록' 하고자 설립된 회사입니다.<br></br>
크리에이터가 직접 설립한 회사로 높은 신뢰도를 바탕으로 영향력 있는 크리에이터들이 뭉쳐있습니다.<br></br></li>
        <li>크리에이터가 콘텐츠 제작에만 집중할 수 있도록, 동시에 더 많은 수익을 창출할 수 있도록 돕는 것이 픽셀네트워크의 목표입니다.
전문 디자이너와 MCN, 게임 업계 출신 인력들이 함께하고 있어 크리에이터에게는 온전한 브랜드 가치를, 파트너사에게는 긴밀한 솔루션을 제공합니다.
 </li>
      </ul>
      <ul className="Pixel2Footer"> <li className="Pixel2PixelStore">Pixel Store</li>
          <li className="Pixel2Contact">contact us</li></ul>
      </div>
      <div className="clear"></div>
     
     </div>
     <div className="Pixel3 page">
      <div className="Pixel3Creators">
        <div className="Pixel3Text">
      <a>Pixel creators</a>
      <span>픽셀 네트워크 소속 크리에이터를 소개합니다.</span>
      </div>
        <div>

        </div>
        <div className="Pixel3Table">
        <Slider {...settingsa}
        style={{height:"550px",}}>
        {streamer.map((NameS,key)=>{
            return(<div className="StreamerDiv" ><img src={`/image/Pixel/Main3/${NameS}.jpg`}></img>
         <div className="StreamerDivName">{NameS}</div>
         </div>)
          })}
        </Slider>
        
        </div>
        </div>
     </div>
     <div className="Pixel4 page">
      <div className="Pixel4TItle">
        <li className="Pixel4Text1 left">Pixel PR contents</li>
        <li className="Pixel4Text2 right">픽셀 네트워크와 함께한 광고 컨텐츠를 소개합니다.</li>
      </div><br></br><div className="clear"></div>
          <div className="Pixel4Table">
          <div className="Pixel4TableArr">
              <div className="Pixel4TableImgBox">
                <img src="/image/Pixel/Main3/AdItem.jpg"></img>
              </div>
              <div className="Pixel4EnterPrise"><ul><a className="left">회사이름</a><a className="left"> 게임이a름</a></ul></div><br></br><br></br>
              <div><ul><li>영상제목</li><li>크리에이터이름</li></ul></div>
            </div>
            <div className="Pixel4TableArr">
              <div className="Pixel4TableImgBox">
                <img src="/image/Pixel/Main3/AdItem.jpg"></img>
              </div>
              <div className="Pixel4EnterPrise"><ul><a className="left">회사이름</a><a className="left"> 게임이a름</a></ul></div><br></br><br></br>
              <div><ul><li>영상제목</li><li>크리에이터이름</li></ul></div>
            </div>
            <div className="Pixel4TableArr">
              <div className="Pixel4TableImgBox">
                <img src="/image/Pixel/Main3/AdItem.jpg"></img>
              </div>
              <div className="Pixel4EnterPrise"><ul><a className="left">회사이름</a><a className="left"> 게임이a름</a></ul></div><br></br><br></br>
              <div><ul><li>영상제목</li><li>크리에이터이름</li></ul></div>
            </div>
            <div className="Pixel4TableArr">
              <div className="Pixel4TableImgBox">
                <img src="/image/Pixel/Main3/AdItem.jpg"></img>
              </div>
              <div className="Pixel4EnterPrise"><ul><a className="left">회사이름</a><a className="left"> 게임이a름</a></ul></div><br></br><br></br>
              <div><ul><li>영상제목</li><li>크리에이터이름</li></ul></div>
            </div><div className="Pixel4TableArr">
              <div className="Pixel4TableImgBox">
                <img src="/image/Pixel/Main3/AdItem.jpg"></img>
              </div>
              <div className="Pixel4EnterPrise"><ul><a className="left">회사이름</a><a className="left"> 게임이a름</a></ul></div><br></br><br></br>
              <div><ul><li>영상제목</li><li>크리에이터이름</li></ul></div>
            </div>
            <div className="Pixel4TableArr">
              <div className="Pixel4TableImgBox">
                <img src="/image/Pixel/Main3/AdItem.jpg"></img>
              </div>
              <div className="Pixel4EnterPrise"><ul><a className="left">회사이름</a><a className="left"> 게임이a름</a></ul></div><br></br><br></br>
              <div><ul><li>영상제목</li><li>크리에이터이름</li></ul></div>
            </div>
            <div className="Pixel4TableArr">
              <div className="Pixel4TableImgBox">
                <img src="/image/Pixel/Main3/AdItem.jpg"></img>
              </div>
              <div className="Pixel4EnterPrise"><ul><a className="left">회사이름</a><a className="left"> 게임이a름</a></ul></div><br></br><br></br>
              <div><ul><li>영상제목</li><li>크리에이터이름</li></ul></div>
            </div>
            <div className="Pixel4TableArr">
              <div className="Pixel4TableImgBox">
                <img src="/image/Pixel/Main3/AdItem.jpg"></img>
              </div>
              <div className="Pixel4EnterPrise"><ul><a className="left">회사이름</a><a className="left"> 게임이a름</a></ul></div><br></br><br></br>
              <div><ul><li>영상제목</li><li>크리에이터이름</li></ul></div>
            </div>
          </div>
      {/* <div className="Pixel4ViewTable">
            <div className="Pixel4View">
              <div className="Pixel4ViewImgform">
              <img src="/image/Pixel/Main3/AdItem.jpg"></img></div>
              <ul className="AdItemUl">
                <div className="left">회사이름</div>
                <div className="left">게임이a름</div>
              </ul><br></br><br></br><br></br><br></br>
            <div className="Pixel4TitleName">
              <div>영상제목</div>
              <div>크리에이터이름</div>
            </div>
            </div>
          </div> */}

      </div>
     
     <div className="Pixel5 page">5</div>
    </div>
    
  );
}

export default MainSite;