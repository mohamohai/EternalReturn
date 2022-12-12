import { useState, useEffect, useRef, Component } from "react";
import "./Oconnect.css";
import AOS from "aos";
import "aos/dist/aos.css";





function Oconnect(){
  const [XY,setXY]=useState({X:0,Y:0});
  const OconnectRef = useRef();
  var target = document.getElementById("element");


  const Oconnect = document.getElementsByClassName("Oconnect");
  const OconnectGNB = document.getElementsByClassName("OconnectGNB");
  const OconnectGNBLeft = document.getElementsByClassName("OconnectLogo");
  const OconnectGNBRight = document.getElementsByClassName("OconnectMenu");

  const ChangeGNBBackgroundUp = () => {//휠업
    Oconnect[0].style.backgroundColor="rgb(20, 20, 20)";
    OconnectGNB[0].style.backgroundColor="rgb(20, 20, 20)";
    OconnectGNB[0].style.Color="rgb(255, 255, 255)";
    OconnectGNBLeft[0].style.filter="none"
    OconnectGNBRight[0].style.color="white"
  }

  const ChangeGNBBackgroundDown = () => {//휠다운
    Oconnect[0].style.backgroundColor="white"
    OconnectGNB[0].style.backgroundColor="white"
    OconnectGNB[0].style.Color="rgb(20, 20, 20)"
    OconnectGNBLeft[0].style.filter="invert(100)"
    OconnectGNBRight[0].style.color="rgb(20,20,20)"
  }
  useEffect(()=>{ 
    let scrollLocation = document.documentElement.scrollTop; //이게 뭐더라 맨위
    var pageHeight = window.innerHeight; //모니터
    var winY = window.pageYOffset; //내위치 scrollY이것도 내 위치 그 기;준이 달라서 그럼 
    

    const wheelHandler = (e) =>{
        console.log(window.scrollY)
        //이벤트리스너
      

        if(window.scrollY>300){
            ChangeGNBBackgroundDown();
        }else if(window.scrollY<pageHeight){
            ChangeGNBBackgroundUp();
        }
    }
    const OconnectCurrent = OconnectRef.current;
    OconnectCurrent.addEventListener("wheel", wheelHandler);
},[window.scrollY]);
useEffect(() => {
    AOS.init({
        duration : 500
    });
});
  const handleMouseMove=(e)=>{
    setXY({X:e.clientX -50,Y:e.clientY-50});
  }


    return(
        <div className="Oconnect" onMouseMove={(e)=>handleMouseMove(e)} ref={OconnectRef} >
            <div className="OconnectGNB">
                <div className="OconnectLogo">
                    <img src="./image/Oconnect/logo.png"></img>
                    <p>CONNECT</p>
                </div>
                <div className="OconnectMenu">
                    <ul>
                        <li>Our Approach</li>
                        <li>Business Area</li>
                        <li>Our Team</li>
                        <li>News & Media</li>
                        <li>Confact</li>
                        <span>제품소개</span>
                    </ul>
                </div>
            </div><div className="clear"></div>

            <div className="OconnectPage1">
                <div className="OconnectMain1">
                    <p className="OconnectPage1Text">Enlighten your Lifestyle</p>
                    <p className="OconnectPage1Img"><img src="./image/Oconnect/title_main.png"></img></p>
                </div>
                <span className="OconnectBall1"><img src="./image/Oconnect/Ball1.png"></img></span>
                <span className="OconnectBall2"><img src="./image/Oconnect/Ball2.png"></img></span>
                <span className="OconnectCir"> <img src="./image/Oconnect/cir.png"></img></span>
            </div>
            

            <div className="OconnectPage2">
                <div className="animationDown">&gt;</div>
                <div className="animationDown2">&gt;</div>
                <div className="OconnectPage2Container">
                    <div class="OconnectPage2Text" data-aos="fade-up">
                        <p> Our Approach</p> <br></br><br></br>
                        <p>
                            일상 속에서 무심코 지나간 <br></br>
                            <span>사소한 가치를 연결해</span><br></br>
                            우리의 라이프스타일을 더 밝게<br></br>
                        </p>
                    </div><div className="clear"></div>
                    <div className="OconnectPage2Img" data-aos="fade-up"><img src="./image/Oconnect/cir2.png"></img></div>
                </div>
            </div><div className="clear"></div>


            <div className="OconnectPage3">
                <div className="OconnectPage3Rainbow" data-aos="fade-up">
                    우리의 생활 속 어디에나 녹아들어<br></br>
                    삶에 쉽게 적용될 수 있도록.</div><br></br>
                <div className="OconnectPage3Card" data-aos="fade-up">
                    <div className="OconnectPage3CardPage">
                    <p><h2>IDEA</h2>
                        OCONNECT는 누구나 당연하게 <br></br>
                        생각하는 것으로부터 <br></br>
                        아이디어를 착안합니다.
                        </p>
                        
                    </div>
                    <div className="OconnectPage3CardPage">
                    <p>
                    <h2>CHANGE</h2>
                      당연함을 당연시하지 않으며, <br></br>
                      변화를 주도합니다. <br></br>
                    </p>
                    </div>
                </div>
            </div> <div className="clear"></div>
            <div className="OconnectPage4">
                <div className="OconnectPage4Container">
                    <div className="OconnectPage4Products">
                        <p>Business Area</p>
                        <p>Products</p>
                        <p>방향은 무시. <br></br>
                        왼쪽, 오른쪽 어느쪽으로든!<br></br>
                        쉽고 안전한 one STEP</p>
                    </div>
                    <div className="OconnectItem1"><img src="./image/Oconnect/prd1.png"></img>
                        <h2>X-STEP</h2>
                        <span>새로운 X-Type 콘센트 규격 멀티탭</span>
                    </div>

                    <div className="OconnectItem2"><img src="./image/Oconnect/prd2.png"></img>
                        <div>
                        <h2>ONE-STEP</h2>
                        <p>아무렇게나 꽂아도 <br></br>
                        스스로 회전하여 맞춰주는 멀티탭</p>
                        </div>
                    </div>

                    <div className="OconnectItem3"><img src="./image/Oconnect/prd3.png"></img>
                        <div>
                            <p>
                            기존의 틀을 벗어나<br></br>
디자인에 초점을 맞춘 멀티탭
                            </p>
                            <h2>DESIGN STEP</h2>
                        </div>
                    </div>
                </div>
            </div><div className="clear"></div>

            <div className="OconnectPage5">
                <div className="OconnectPage5BackWord">
                    oconnect <br></br>
                    news & <br></br>
                    media <br></br>
                </div>
                <div className="OconnectPage5FrontWord"> 
                    <p>
                        <span>NEWS & MEDIA <br></br></span>
                        OCONNECT & <br></br>
                        Press Room <br></br>
                        &lt; &gt;<div className="OconnectPage5NavBar"></div>
                    </p>
                </div>
                <div className="OconnectPage5SildeBox">
                    <div className="OconnectPage5SildeBoxContainer">
                        <div className="OconnectPage5SildeBoxCard">
                            <div className="OconnectPage5SildeBoxCardImg">
                                <img src="./image/Oconnect/da.jpg"></img>
                            </div>
                            <div className="OconnectPage5SildeBoxCardText">
                                <p>UNIST News <br></br>
                                <h1>제목제목제목</h1></p>
                            </div>
                        </div>
                        <div className="OconnectPage5SildeBoxCard">
                            <div className="OconnectPage5SildeBoxCardImg">
                                <img src="./image/Oconnect/da.jpg"></img>
                            </div>
                            <div className="OconnectPage5SildeBoxCardText">
                                <p>UNIST News <br></br>
                                <h1>제목제목제목</h1></p>
                            </div>
                        </div>
                        <div className="OconnectPage5SildeBoxCard">
                            <div className="OconnectPage5SildeBoxCardImg">
                                <img src="./image/Oconnect/da.jpg"></img>
                            </div>
                            <div className="OconnectPage5SildeBoxCardText">
                                <p>UNIST News <br></br>
                                <h1>제목제목제목</h1></p>
                            </div>
                        </div>
                        <div className="OconnectPage5SildeBoxCard">
                            <div className="OconnectPage5SildeBoxCardImg">
                                <img src="./image/Oconnect/da.jpg"></img>
                            </div>
                            <div className="OconnectPage5SildeBoxCardText">
                                <p>UNIST News <br></br>
                                <h1>제목제목제목</h1></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>


        </div>
    )
} export default Oconnect;