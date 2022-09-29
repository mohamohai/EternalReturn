
import { useState, useEffect, useRef } from "react";
import "./VHOM.css";

function Vhom() {
 
  const [SideBarText, setSideBarText] = useState('VHOM서비스소개');  
  const [SideBarVh, setSideBarVh] = useState(10);
  const [SideBarBorder, setSideBarBorder] = useState(20); //좌측 사이드 진행도

  const [Count, setCount] = useState(0); 
  const [SlideCnt,setSlideCnt]=useState(0); //1page 이벤트 배너용
  const [SlideCnt2,setSlideCnt2]=useState(0);

  const [HoverAct,setHoverAct]=useState("hoverboxhide");
  

  

  const DivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);


  function Changeleft() {
    console.log("leftbtn")
   //document.getElementById("xxaax").style.transform = "rotate(7deg)";
      var divdiv = document.getElementById("zxxz");
      var mCount = SlideCnt-1
      console.log("본판 : " + SlideCnt+"계산판 " +mCount)
      if(SlideCnt>0){
        setSlideCnt(SlideCnt-1)    
        divdiv.style.transform=`translateX(${mCount*-450}px)`   
      }
   
  }

 function Changeright() {
  console.log("leftright")
    // document.getElementById("xxaax").style.transform = "rotate(7deg)";
    var divdiv = document.getElementById("zxxz");
    var pCount = SlideCnt+1
    console.log("본판 : " + SlideCnt+"계산판 " +pCount)

    switch(SlideCnt){
      case 0 :
        console.log("1바꾸기")
        break;
      case 1 :
        console.log("2바꾸기")
        break;
      case 2 : 
        console.log("3바꾸기")
        break;
      case 3 :
        console.log("4예정바꾸기")
        break;
    } //돌아가기로 하든 포커스를 맞추던 ㄱ
    if(SlideCnt<4){
     setSlideCnt(SlideCnt+1)
     divdiv.style.transform=`translateX(${pCount*-450}px)`
  }
 }



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
        setSideBarText("VHOM리모델링");
        setSideBarVh(30);
        setSideBarBorder(40)
      }else if(scrollTop<pageHeight*2 && scrollTop>=pageHeight){
        console.log("2p down")
        DivRef.current.scrollTo({
        top: pageHeight *2,
        left: 0,
        behavior: "smooth",
      });
      setSideBarText("VHOM추천아이템");
      setSideBarVh(50);
      setSideBarBorder(60)
      } else if(scrollTop<pageHeight*3 && scrollTop>=pageHeight*2){
        console.log("3p down")
        DivRef.current.scrollTo({
        top: pageHeight *3,
        left: 0,
        behavior: "smooth",
      });
      setSideBarText("VHOM스타일갤러리");
      setSideBarVh(70);
      setSideBarBorder(80)
      }else if(scrollTop<pageHeight*4 && scrollTop>=pageHeight*3){
        console.log("4p down")
        DivRef.current.scrollTo({
        top: pageHeight *4,
        left: 0,
        behavior: "smooth",
      });
      setSideBarText("CS Center");
      setSideBarVh(90);
      setSideBarBorder(100)
    }
      }else{
        if(scrollTop>=pageHeight*4 )
        { console.log("5p up")
          DivRef.current.scrollTo({
          top: pageHeight *3,
          left: 0,
          behavior: "smooth",
        });setSideBarText("VHOM스타일갤러리");
        setSideBarVh(70);
        setSideBarBorder(80)
      }else if(scrollTop>=pageHeight*3 && scrollTop<=pageHeight*4)
      {console.log("4p up")
        DivRef.current.scrollTo({
        top: pageHeight * 2,
        left: 0,
        behavior: "smooth",
      });
      setSideBarText("VHOM추천아이템");
      setSideBarVh(50);
      setSideBarBorder(60)
      }else if(scrollTop>=pageHeight*2 && scrollTop<=pageHeight*3)
      {console.log("3p up")
        DivRef.current.scrollTo({
        top: pageHeight * 1,
        left: 0,
        behavior: "smooth",
      });
        setSideBarText("VHOM리모델링");
        setSideBarVh(30);
        setSideBarBorder(40)
      } 
      else if(scrollTop>=pageHeight*1 && scrollTop<=pageHeight*2)
      {console.log("2p up")
        DivRef.current.scrollTo({
        top: pageHeight * 0,
        left: 0,
        behavior: "smooth",
      });
        setSideBarText("VHOM서비스소개");
        setSideBarVh(10);
        setSideBarBorder(20)
      } 
    };
  }
    const DivRefCurrent = DivRef.current;
    DivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
    };
  }, []);



  return (

    <div className="VHOM" ref={DivRef}>
      <div className="VHOMSideBarText" style={{top:`${SideBarVh}vh`}}>
          {SideBarText} {/* 좌측바 */}
        </div>
        <div className="VHOMSideBarBorder" style={{height:`${SideBarBorder}vh`}}>
        </div>
      <div className="VHOMGNB">
        <div className="VHOMGNBLeft">
          <a href="#" style={{color:"#00B190"}}>VHOM</a>
          <span>한솔이 만든 토탈 인테리어</span>
        </div>
        <div></div>
        <div className="VHOMGNBRight">
          <div className="VHOMGNBRightMenu">
            <div className="VHOMGNBRightUserMenu">
              <ul>
                <li>회원가입</li>
                <li>고객센터</li>
                <li>로그인</li>
              </ul>
            </div><br></br><br></br>
            <div style={{margin:"10px 0 0 0"}}>
            <div className="VHOMGNBRightMenuBarTwo">
              <ul>
                <li>우리동네봄</li>
                <li>스타일갤러리</li>
              </ul>
            </div>
            <div className="VHOMGNBRightMenuBarOne">
              <ul>
                <li>이벤트 / 기획전</li>
                <li>스토어</li>
                <li>VHOM나들이</li>
                <li>토탈인테리어</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clear"></div><br></br>
      <div className="VHOMMainPageOne  page">
      <div className="xxxz">
        <div className="VHOMBannerOne">
          <div className="VHOMBannerOnemm">
            <div className="VHOMBannerOnemmm"></div>
          </div>
   
        </div>
      
      {SlideCnt}
      
      </div>
      <div className="axz">
      <input type = "button" value="left" onClick={Changeleft} />
      <input type = "button" value="right" onClick={Changeright} />
        <div id="zxxz">
        <div className="SlideOne SlideBox" id ="xxaax">
          <p className="intro-desc">
									브랜드 따로
									<br></br>상담 따로가 아닌
									<br></br>설계, 시공, AS
									<br></br><span className="fw-medium">모두를 책임지니까</span>
								</p>
        </div>
        <div className="SlideTwo SlideBox" id ="xxaax">
          <p className="intro-desc">
									전문가가 구성한
									<br></br>트렌디하고 모던한
									<br></br>7개 스타일로 
									<br></br><span className="fw-medium">실패 없는 인테리어</span>
								</p></div>
        <div  className="SlideThree SlideBox" id ="xxaax">
          <p className="intro-desc">
                  3D도면에서
									<br></br>스타일패키지 입혀보고
									<br></br>3분 만에 우리집 견적
									<br></br><span className="fw-medium">바로 확인!</span>
								</p></div>
        <div  className="SlideFour SlideBox" id ="xxaax">
          <p className="intro-desc">
									처음 견적 그대로
									<br></br>시공까지!
									<br></br><span className="fw-medium">우리집 맞춤 견적 제공</span>
									<br></br>&nbsp;
								</p></div>
              <div  className="SlideFour SlideBox" id ="xxaax">
          <p className="intro-desc">
                Super E0 강마루와
                <br></br>친환경인증 실크벽지
                <br></br><span className="fw-medium">헤펠레, 벤자민무어</span>
                <br></br>브랜드 자재까지
              </p></div>
      </div>
      </div>
      </div>
      <div className="VHOMMainPageTwo  page" style={{backgroundImage:`url("./image/vhom/pastel.jpg)`}}>
        <div className="VHOMRemodelingPackage">
          <p className="onmouse">{HoverAct}
          <img src={`./image/vhom/${HoverAct}.jpg`}></img></p>
          <ul>
          <li className="VHOMRemodelingPackageHoverBox"
            onMouseEnter={()=>{setHoverAct("pastel")}}
            onMouseLeave={()=>{setHoverAct("hoverboxhide")}}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
            <li className="VHOMRemodelingPackageHoverBox"
            onMouseEnter={()=>{setHoverAct("simple")}}
            onMouseLeave={()=>{setHoverAct("hoverboxhide")}}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
            <li className="VHOMRemodelingPackageHoverBox"
            onMouseEnter={()=>{setHoverAct("vivid")}}
            onMouseLeave={()=>{setHoverAct("hoverboxhide")}}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
          </ul>
        </div>
      </div>
      <div className="VHOMMainPageThree page">
        
       
      </div>
      <div className="VHOMMainPageFour  page">
      <div class="ryan">  


  <div class="ear left"></div>
  <div class="ear right"></div>
  
  <div class="face">
    <div class="eyebrow left"></div>
    <div class="eyebrow right"></div>
    <div class="eye left"></div>
    <div class="eye right"></div>
    <div class="nose"></div>
    <div class="mouth left"></div>
    <div class="mouth right"></div>
  </div>
</div>
      </div>
    </div>
    
  );
}

export default Vhom;