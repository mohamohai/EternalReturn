
import { useState, useEffect, useRef, Component } from "react";
import "./VHOM.css";

function Vhom() {
 
  const [SideBarText, setSideBarText] = useState('VHOM서비스소개');  
  const [SideBarVh, setSideBarVh] = useState(10);
  const [SideBarBorder, setSideBarBorder] = useState(20); //좌측 사이드 진행도

  const [Count, setCount] = useState(0); 
  const [SlideCnt,setSlideCnt]=useState(0); //1page 이벤트 배너용
  const [SlideCnt2,setSlideCnt2]=useState(0);

  const [HoverAct,setHoverAct]=useState("hoverboxhide");

  const [pagefourSlide, setpagefourSlide]=useState(0);
  const [pagefourSlidecnt, setpagefourSlidecnt]=useState(1);
  let pagefour = ["white","vivid","wood"];
  let pagefourtag = ["심플 화이트 프리미엄", ["비비드 네이비 프리미엄"], ["심플 우드 베이직"]]



  const DivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  function Changeleft() {
    console.log("leftbtn")
      var divdiv = document.getElementById("ChangeForm");
      var mCount = SlideCnt-1
      console.log("본판 : " + SlideCnt+"계산판 " +mCount);
      var divdivz = document.getElementsByClassName("SlideBox");
      var divdivx = document.getElementsByClassName("VhomColor");
      for(var i=0;i<divdivz.length;i++){
        divdivz[i].style.color="rgb(190, 190, 190)";
        divdivz[i].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
        divdivx[i].style.color="rgb(190, 190, 190)";
        divdivx[divdivz.length+i].style.color="rgb(190, 190, 190)";
        console.log(i)
}
      switch(SlideCnt){
        case 1 :
              divdivz[0].style.color="black";
              divdivz[0].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
              divdivx[0].style.color="#00B190";
              divdivx[1].style.color="#00B190";

          break; 
        case 2 :
              divdivz[1].style.color="black";
              divdivz[1].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
              divdivx[2].style.color="#00B190";
              divdivx[3].style.color="#00B190";
          break;
        case 3 : 
              divdivz[2].style.color="black";
              divdivz[2].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
              divdivx[4].style.color="#00B190";
              divdivx[5].style.color="#00B190";
          break;
        case 4 :
              divdivz[3].style.color="black";
              divdivz[3].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
              divdivx[6].style.color="#00B190";
            divdivx[7].style.color="#00B190";
          break;
      }
      if(SlideCnt>0){
        setSlideCnt(SlideCnt-1)    
        divdiv.style.   transform=`translateX(${mCount*-375}px)`   
      }
  }

  const [DownX,setDownX]=useState(1);
  const [ChangeItem,setChangeItem]=useState(1);
  const ChangeItemContan = document.getElementsByClassName("containerVhom");
  const DownDown=(e)=>{
    setDownX(e.clientX)
    console.log(e.clientX, DownX)
}

  const UpUp=(e)=>{
    console.log(DownX)
    if(DownX > e.clientX){
      if(ChangeItem==1){
        console.log("뭐냐고;")
        ChangeItemContan[0].style.transform=`translateX(-1100px)`
        setChangeItem(ChangeItem+1)


      }else if(ChangeItem==2){
        console.log("뭐냐고;")
        ChangeItemContan[0].style.transform=`translateX(-2200px)`
        setChangeItem(ChangeItem+1)
      }
  }
  else{
    if(ChangeItem==2){
      console.log("뭐냐고;")
      ChangeItemContan[0].style.transform=`translateX(0px)`
      setChangeItem(ChangeItem-1)
    }else if(ChangeItem==3){
      ChangeItemContan[0].style.transform=`translateX(-1100px)`
      setChangeItem(ChangeItem-1)
    }
  }
  }



 function Changeright() {
    var divdiv = document.getElementById("ChangeForm");
    var pCount = SlideCnt+1;
    var divdivz = document.getElementsByClassName("SlideBox");
    var divdivx = document.getElementsByClassName("VhomColor");
    console.log("본판 : " + SlideCnt+"계산판 " +pCount);
    console.log(divdivz.length)
    for(var i=0;i<divdivz.length;i++){
            divdivz[i].style.color="rgb(190, 190, 190)";
            divdivz[i].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
            divdivx[i].style.color="rgb(190, 190, 190)";
            divdivx[divdivz.length+i].style.color="rgb(190, 190, 190)";
    }
    switch(SlideCnt){
      case 0 :
            divdivz[1].style.color="black";
            divdivz[1].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
            divdivx[2].style.color="#00B190";
            divdivx[3].style.color="#00B190";
        break; 
      case 1 :
            divdivz[2].style.color="black";
            divdivz[2].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
            divdivx[4].style.color="#00B190";
            divdivx[5].style.color="#00B190";
        break;
      case 2 : 
            divdivz[3].style.color="black";
            divdivz[3].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
            divdivx[6].style.color="#00B190";
            divdivx[7].style.color="#00B190";
        break;
      case 3 :
            divdivz[4].style.color="black";
            divdivz[4].style.boxShadow="rgb(190, 190, 190) 0px 1px 10px 1px";
            divdivx[8].style.color="#00B190";
            divdivx[9].style.color="#00B190";
        break;
    } //돌아가기로 하든 포커스를 맞추던 ㄱ
    if(SlideCnt<4){
     setSlideCnt(SlideCnt+1)
     divdiv.style.transform=`translateX(${pCount*-375}px)`
  }
 }

 function fourleftbtn() {
  console.log("fourleftbtn")
 //document.getElementById("xxaax").style.transform = "rotate(7deg)";
    var divdiv = document.getElementById("VHOMMainPageFour");
    switch (pagefourSlide){
      case 0 :
        setpagefourSlide(2);
        break;
      case 1 :
        setpagefourSlide(0);
        break;
      case 2 :
        setpagefourSlide(1);
        break;
    }
    divdiv.style.background=`url(./image/vhom/pagefour/${pagefour[pagefourSlide]}${pagefourSlidecnt}.jpg)`
}
function fourrightbtn() {
  console.log("right")
 //document.getElementById("xxaax").style.transform = "rotate(7deg)";
    var divdiv = document.getElementById("VHOMMainPageFour");
    switch (pagefourSlide){
      case 0 :
        setpagefourSlide(1);
        break;
      case 1 :
        setpagefourSlide(2);
        break;
      case 2 :
        setpagefourSlide(0);
        break;
    }
    divdiv.style.background=`url(./image/vhom/pagefour/${pagefour[pagefourSlide]}${pagefourSlidecnt}.jpg)`
}
function pagefourcntbtn() {
  console.log("next")
 //document.getElementById("xxaax").style.transform = "rotate(7deg)";
    var divdiv = document.getElementById("VHOMMainPageFour");
    if(pagefourSlidecnt<4){
      setpagefourSlidecnt(pagefourSlidecnt+1);
    }else if(pagefourSlidecnt==4){
      setpagefourSlidecnt(1);
    }
    divdiv.style.background=`url(./image/vhom/pagefour/${pagefour[pagefourSlide]}${pagefourSlidecnt}.jpg)`
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
        <div ></div>
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
          <p><span className="VhomColor">
           Trust <br></br>
           든든한 내 편! </span><br></br>
          </p>
            <p className="intro-desc">
              브랜드 따로
              <br></br>상담 따로가 아닌
              <br></br>설계, 시공, AS
              <br></br><span className="VhomColor" >모두를 책임지니까</span>
            </p>
            </div>
        </div>
        <div className="SlideTwo SlideBox" id ="xxaax">
          <div>
          <p><span className="VhomColor">
           Package <br></br>
           인알못도 문제 없이! <br></br>
          </span></p>
          <p className="intro-desc">
									전문가가 구성한
									<br></br>트렌디하고 모던한
									<br></br>7개 스타일로 
									<br></br><span className="VhomColor" >실패 없는 인테리어</span>
								</p></div></div>
        <div  className="SlideThree SlideBox" id ="xxaax">
        <div>
          <p><span className="VhomColor">
           Direct <br></br>
           혼자서도 척척! <br></br>
           </span>
          </p>
          <p className="intro-desc">
                  3D도면에서
									<br></br>스타일패키지 입혀보고
									<br></br>3분 만에 우리집 견적
									<br></br><span className="VhomColor" >바로 확인!</span>
								</p></div></div>
        <div  className="SlideFour SlideBox" id ="xxaax">
        <div>
          <p><span className="VhomColor">
           Price <br></br>
           Real 견적! <br></br>
           </span>
          </p>
          <p className="intro-desc">
									처음 견적 그대로
									<br></br>시공까지!
									<br></br><span className="VhomColor" >우리집 맞춤 견적 제공</span>
									<br></br>&nbsp;
								</p></div></div>
        <div  className="SlideFour SlideBox" id ="xxaax">
        <div>
          <p><span className="VhomColor">
           Quality <br></br>
           친환경 자재와 디테일의 차이! <br></br>
           </span>
          </p>
          <p className="intro-desc">
                Super E0 강마루와
                <br></br>친환경인증 실크벽지
                <br></br><span className="VhomColor" >헤펠레, 벤자민무어</span>
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
      {/* 여기를 다시 
        <div className="VHOMMainPageThree page"> 
        <div className="PageThreeSlide">
        <div className="PageThreeSlidelt">&lt;</div>
          <div className="PageThreeSlidegt">&gt;</div>
          <ul>
            <li className="item1">
              <div>
                <img className="item1img" src="./image/vhom/pagethree/white1.jpg"></img>
              </div>
              <ul className="itemul">
                <span>모던함과 깔끔함이 돋보이는</span>
                <span>심플 화이트</span>
                <span>미니멀하고 깨끗한 'Simple White'스타일에 추천하는 아이템이에요</span>
                <li>
                  <ul className="itemulul"  style={{flexDirection:"row"}}>
                    <li>
                      <div className="itemululdiv">
                        <li><img src="./image/vhom/pagethree/white2.jpg"></img></li>
                        <li>피카 웍 26cm</li>
                        <li>34,000원</li>
                      </div>
                    </li>
                    <li>
                      <div className="itemululdiv">
                        <li><img src="./image/vhom/pagethree/white3.jpg"></img></li>
                        <li>원형 러그</li>
                        <li>53,900원</li>
                      </div></li>
                    <li>
                      <div className="itemululdiv">
                        <li><img src="./image/vhom/pagethree/white4.jpg"></img></li>
                        <li>장스탠드</li>
                        <li>65,900원</li>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>              
            </li>
          </ul>
          <ul>
            <li className="item1">
              <div>
                <img className="item1img" src="./image/vhom/pagethree/white1.jpg"></img>
              </div>
              <ul className="itemul">
                <span>모던함과 깔끔함이 돋보이는</span>
                <span>심플 화이트</span>
                <span>미니멀하고 깨끗한 'Simple White'스타일에 추천하는 아이템이에요</span>
                <li>
                  <ul className="itemulul"  style={{flexDirection:"row"}}>
                    <li>
                      <div className="itemululdiv">
                        <li><img src="./image/vhom/pagethree/white2.jpg"></img></li>
                        <li>피카 웍 26cm</li>
                        <li>34,000원</li>
                      </div>
                    </li>
                    <li>
                      <div className="itemululdiv">
                        <li><img src="./image/vhom/pagethree/white3.jpg"></img></li>
                        <li>원형 러그</li>
                        <li>53,900원</li>
                      </div></li>
                    <li>
                      <div className="itemululdiv">
                        <li><img src="./image/vhom/pagethree/white4.jpg"></img></li>
                        <li>장스탠드</li>
                        <li>65,900원</li>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>              
            </li>
          </ul>
          <ul>
            <li className="item1">
              <div>
                <img className="item1img" src="./image/vhom/pagethree/vivid1.jpg"></img>
              </div>
              <ul className="itemul">
                <span>모던함과 깔끔함이 돋보이는</span>
                <span>심플 화이트</span>
                <span>미니멀하고 깨끗한 'Simple White'스타일에 추천하는 아이템이에요</span>
                <li>
                  <ul className="itemulul"  style={{flexDirection:"row"}}>
                    <li>
                      <div className="itemululdiv">
                        <li><img src="./image/vhom/pagethree/vivid2.jpg"></img></li>
                        <li>피카 웍 26cm</li>
                        <li>34,000원</li>
                      </div>
                    </li>
                    <li>
                      <div className="itemululdiv">
                        <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                        <li>원형 러그</li>
                        <li>53,900원</li>
                      </div></li>
                    <li>
                      <div className="itemululdiv">
                        <li><img src="./image/vhom/pagethree/vivid4.jpg"></img></li>
                        <li>장스탠드</li>
                        <li>65,900원</li>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>              
            </li>
          </ul>
        </div>
      </div>
      */}
      <div className="VHOMMainPageThree page"> 
        <div className="containerVhom" onMouseDown={DownDown} onMouseUp={UpUp}>
          
          <div className="ItemBox">
            <img className="ItemImg" src="./image/vhom/pagethree/vivid1.jpg"></img>
              <div className="ItemEx">
                <span>모던함과 깔끔함이 돋보이는<br></br></span>
                <span>심플 화이트 <br></br></span>
                <span>미니멀하고 깨끗한 'Simple White'스타일에 추천하는 아이템이에요 <br></br></span>
              </div>
              <div className="PlusItemVhom">
                  <ul>
                      <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                      <li>원형 러그</li>
                      <li>53,900원</li>
                </ul>
                <ul>
                      <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                      <li>원형 러그</li>
                      <li>53,900원</li>
                </ul>
                <ul>
                      <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                      <li>원형 러그</li>
                      <li>53,900원</li>
                </ul>
              </div>
          </div>


          <div className="ItemBox">
            <img className="ItemImg" src="./image/vhom/pagethree/vivid1.jpg"></img>
              <div className="ItemEx">
                <span>모던함과 깔끔함이 돋보이는<br></br></span>
                <span>심플 화이트 <br></br></span>
                <span>미니멀하고 깨끗한 'Simple White'스타일에 추천하는 아이템이에요 <br></br></span>
              </div>
              <div className="PlusItemVhom">
                  <ul>
                      <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                      <li>원형 러그</li>
                      <li>53,900원</li>
                </ul>
                <ul>
                      <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                      <li>원형 러그</li>
                      <li>53,900원</li>
                </ul>
                <ul>
                      <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                      <li>원형 러그</li>
                      <li>53,900원</li>
                </ul>
              </div>
          </div>
          <div className="ItemBox">
            <img className="ItemImg" src="./image/vhom/pagethree/vivid1.jpg"></img>
              <div className="ItemEx">
                <span>모던함과 깔끔함이 돋보이는<br></br></span>
                <span>심플 화이트 <br></br></span>
                <span>미니멀하고 깨끗한 'Simple White'스타일에 추천하는 아이템이에요 <br></br></span>
              </div>
              <div className="PlusItemVhom">
                  <ul>
                      <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                      <li>원형 러그</li>
                      <li>53,900원</li>
                </ul>
                <ul>
                      <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                      <li>원형 러그</li>
                      <li>53,900원</li>
                </ul>
                <ul>
                      <li><img src="./image/vhom/pagethree/vivid3.jpg"></img></li>
                      <li>원형 러그</li>
                      <li>53,900원</li>
                </ul>
              </div>
          </div>
        </div>
      
      </div>


      <div className="VHOMMainPageFour  page" id ="VHOMMainPageFour" 
          style={{background:`url(./image/vhom/pagefour/${pagefour[pagefourSlide]+pagefourSlidecnt}.jpg)`,
          backgroundSize:"100% 100%",
          }}>
            <div className="pagefourpan"style={{cursor:"pointer"}} 
            onClick={pagefourcntbtn}></div>
        <div className="PageFourPop">
          <div className="PageFourPopOne">
            <ul>
              <li>스타일 갤러리</li>
              <li>스타일갤러리 둘러보고 취향에 맞는 스타일을 찾아보세요</li>
            </ul>
          </div>
          <div className="PageFourPopTwo">
            <div><span onClick={fourleftbtn}> &lt;</span>
            &nbsp;&nbsp;<span>{pagefourtag[pagefourSlide]}</span>&nbsp;&nbsp;    
              <span onClick={fourrightbtn}>&gt;</span>
            </div>
            <div> <img id ="pagefourpopupimg" src={`./image/vhom/pagefour/${pagefour[pagefourSlide]+"d"+pagefourSlidecnt}.jpg`}></img></div>
          </div>
          <div className="PageFourPopProgress"> {pagefourSlidecnt} / 4</div>
          <div className="PageFourPopbottom">자세히 보기</div>
        </div>
      </div>



      <div className="VHOMMainPageFive  page">
        <div className="pageFiverow1">
          <img src="./image/vhom/pagefive/event1.jpg"></img>
          <img src="./image/vhom/pagefive/event2.jpg"></img>
        </div>
        <div className="pageFiverow2">
          <div>
            <div className="pageFiverow2in">
              <div className="pageFiverow2inmiddle">
                <div>NOTICE</div>
                <div>more</div>
                <div>제품검색</div>
                <div>고객센터</div>
              </div>
              <div className="pageFiverow2inbottom">
                <div>
                  <ul>
                    <li>물적분할에 따른 개인정보 이전 안내</li>
                    <li>2022-09-15</li>
                  </ul>
                </div>                
                <div>
                  <ul>
                    <li>국내최초 다이렉트 인테리어 VHOM</li>
                    <li>2022-02-18</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <input type="textbox" placeholder="검색"/>
                  </ul>
                </div>  
                <div>
                  <ul>
                    <li>xxxx-xxxx</li>
                    <li>평일 09:00 ~ 18:00 주말, 공휴일 휴무</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Vhom;