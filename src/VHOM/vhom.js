
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
      var divdiv = document.getElementById("ChangeForm");
      var mCount = SlideCnt-1
      console.log("본판 : " + SlideCnt+"계산판 " +mCount)
      if(SlideCnt>0){
        setSlideCnt(SlideCnt-1)    
        divdiv.style.transform=`translateX(${mCount*-375}px)`   
      }
   
  }

 function Changeright() {
  console.log("leftright")
    // document.getElementById("xxaax").style.transform = "rotate(7deg)";
    var divdiv = document.getElementById("ChangeForm");
    var pCount = SlideCnt+1
    console.log("본판 : " + SlideCnt+"계산판 " +pCount)

    switch(SlideCnt){
      case 0 :
        var divdivz = document.getElementsByClassName("SlideBox");
        divdivz[1].style.color="red";
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
     divdiv.style.transform=`translateX(${pCount*-375}px)`
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
      <div className="VHOMOneLeft">
      <div>
        <div className="VHOMOneLeftShowOne">
          <ul>
            <li className="VHOMOneLeftShowOnet1">다이렉트 인테리어</li>
            <li className="VHOMOneLeftShowOnet2">우리집 리모델링 <span className="VHOMPersonalColor">VHOM</span>으로 스마트하게 해결하세요!</li>
            <li className="VHOMOneLeftShowOneI">
              <div className="kakaofriend">
                <div className="ryanHead"></div>
                <div className="ryanEarleft"></div>
                <div className="ryanEarright"></div>
                <div className="ryanEyebrowleft"></div>
                <div className="ryanEyebrowright"></div>
                <div className="ryanEyeleft"></div>
                <div className="ryanEyeright"></div>
                <div className="ryanNose"></div>
                <div className="ryanNoseleft"></div>
                <div className="ryanNoseright"></div>
                <div className="ryanNosewhitebox"></div>
                <div className="ryanNosewhitebox2"></div>

              </div></li>
              <div>
          
              </div>
          </ul>
        </div>
      </div>
      </div>

      <div className="VHOMOneRight">
        <div className="SlideBtn">
      <input type = "button" value="<" onClick={Changeleft} />
      <input type = "button" value=">" onClick={Changeright} />
      </div>
        <div id="ChangeForm">
        <div className="SlideOne SlideBox" id ="xxaax">
         <div>
          <p>
           Trust <br></br>
           든든한 내 편! <br></br>
          </p>
            <p className="intro-desc">
              브랜드 따로
              <br></br>상담 따로가 아닌
              <br></br>설계, 시공, AS
              <br></br><span >모두를 책임지니까</span>
            </p>
            </div>
        </div>
        <div className="SlideTwo SlideBox" id ="xxaax">
          <div>
          <p>
           Package <br></br>
           인알못도 문제 없이! <br></br>
          </p>
          <p className="intro-desc">
									전문가가 구성한
									<br></br>트렌디하고 모던한
									<br></br>7개 스타일로 
									<br></br><span >실패 없는 인테리어</span>
								</p></div></div>
        <div  className="SlideThree SlideBox" id ="xxaax">
        <div>
          <p>
           Direct <br></br>
           혼자서도 척척! <br></br>
          </p>
          <p className="intro-desc">
                  3D도면에서
									<br></br>스타일패키지 입혀보고
									<br></br>3분 만에 우리집 견적
									<br></br><span >바로 확인!</span>
								</p></div></div>
        <div  className="SlideFour SlideBox" id ="xxaax">
        <div>
          <p>
           Price <br></br>
           Real 견적! <br></br>
          </p>
          <p className="intro-desc">
									처음 견적 그대로
									<br></br>시공까지!
									<br></br><span >우리집 맞춤 견적 제공</span>
									<br></br>&nbsp;
								</p></div></div>
        <div  className="SlideFour SlideBox" id ="xxaax">
        <div>
          <p>
           Quality <br></br>
           친환경 자재와 디테일의 차이! <br></br>
          </p>
          <p className="intro-desc">
                Super E0 강마루와
                <br></br>친환경인증 실크벽지
                <br></br><span >헤펠레, 벤자민무어</span>
                <br></br>브랜드 자재까지
          </p></div></div>
      </div>
      </div>
      </div>

      <div className="VHOMMainPageTwo  page" >
        <div className="VHOMSelectBox" style={{backgroundImage:`url(./image/vhom/${HoverAct}_big.jpg)`}}> 
        {/* 여기가 메인 배경 바뀌고 선태ㅔㄱ하고 밑에 호버*/}
          <ul onMouseLeave={()=>{setHoverAct("hoverboxhide")}}>
            <li className="VHOMChose1 qwq" onMouseEnter={()=>{setHoverAct("simple")}}><p>Simple</p></li>
            <li className="VHOMChose2 qwq" onMouseEnter={()=>{setHoverAct("pastel")}}><p>Pastel</p></li>
            <li className="VHOMChose3 qwq" onMouseEnter={()=>{setHoverAct("vivid")}}><p>Vivid</p></li>
          </ul>         
        </div>
         
       
      </div>
      <div className="VHOMMainPageThree page">
        <div>
          <ul>
            <li className="item1">
              <img src="./image/vhom/pagethree/white1.jpg"></img>
              <div>
                <ul>
                  <li>모던함과 깔끔함이 돋보이는</li>
                  <li>심플 화이트</li>
                  <li>미니멀하고 깨끗한 'Simple White'스타일에 추천하는 아이템이에요</li>
                  <li>테이플얍얍</li>
                </ul>
              </div>
            </li>
            <li className="item2">
              <img src="./image/vhom/pagethree/white1.jpg"></img>
              <div>
                <ul>
                  <li>모던함과 깔끔함이 돋보이는</li>
                  <li>심플 화이트</li>
                  <li>미니멀하고 깨끗한 'Simple White'스타일에 추천하는 아이템이에요</li>
                  <li>테이플얍얍</li>
                </ul>
              </div>
            </li>
            <li></li>
          </ul>
        </div>

        {/* <div className="VHOMShop">
        <div className="VHOMShopItem1">
              <img src="./image/vhom/pagethree/white1.jpg"></img>
              <div>
                <ul>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                </ul>
              </div>
            </div>
            <div>
              <img src="./image/vhom/pagethree/pastel1.jpg"></img>
              <div>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div>
              <img src="./image/vhom/pagethree/vivid1.jpg"></img>
              <div>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
        </div> */}
      </div>
      <div className="VHOMMainPageFour  page">
      
      </div>
      <div className="VHOMMainPageFive  page">
      
      </div>
    </div>
    
  );
}

export default Vhom;