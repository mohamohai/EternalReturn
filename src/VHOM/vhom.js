


import { useState, useEffect, useRef } from "react";
import "./VHOM.css";




function VHOM() {
  const [SideBarText, setSideBarText] = useState('VHOM서비스소개');  
  const [SideBarVh, setSideBarVh] = useState(10);
  const [SideBarBorder, setSideBarBorder] = useState(SideBarVh+10);
  const [Count, setCount] = useState(0); 
  
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


  return (
    <div className="VHOM"ref={DivRef} >
      <div className="VHOMGNB">
        <div className="VHOMSideBarText" style={{top:`${SideBarVh}vh`}}>
          {SideBarText}
        </div>
        <div className="VHOMSideBarBorder" style={{height:`${SideBarBorder}vh`}}></div>
        <div className="VHOMGNBLeft">
          <a href="#">VHOM</a>
          <span>한솔이 만든 토탈 인테리어</span>
        </div>
        <div className="VHOMGNBRight">
          <div className="VHOMGNBUserInfo">
            <ul>
              <li className="">회원가입</li>
              <li className="VHOMGNBUserInfoLine">고객센터</li>
              <li className="VHOMGNBUserInfoLine">로그인</li>
            </ul>
          </div>
          <br></br>
          <div className="VHOMGNBMenu">
            <ul className="VHOMGNBMenuRightThree">
              <li><a>icon</a></li>
              <li><a>icon</a></li>
              <li><a>icon</a></li>
            </ul>
            <ul className="VHOMGNBMenuRightTwo">
              <li><a>우리동네봄</a></li>
              <li><a>스타일갤러리</a></li>
            </ul>
            <ul className="VHOMGNBMenuRightOne">
              <li><a>이벤트 기획전</a></li>
              <li><a>스토어</a></li>
              <li><a>VHOM나들이</a></li>
              <li><a>토탈인테리어</a></li>
            </ul>
        </div>
        </div>
        
      </div><div className="clear"></div><br></br>
      <div className="VHOMMainPageOne   page">1</div>
      <div className="VHOMMainPageTwo   page">2</div>
      <div className="VHOMMainPageThree page">3</div>
      <div className="VHOMMainPageFour  page">4</div>
      
      
      <details>
        <summary>abc</summary>
          <li>asdsadsad</li>
      </details>
      
    </div>
    
  );
}

export default VHOM;