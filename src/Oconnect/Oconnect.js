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
      

        if(window.scrollY>pageHeight/2){
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
                <div className="OconnectPage3Rainbow">
                    Wherever you are, I always make you smile <br></br>
                    Wherever you are, I'm always by your side</div><br></br>
                <div className="OconnectPage3Card">
                    <div className="OconnectPage3CardPage">
                        <h2>여기에 무슨 문구가 주황색</h2>
                        <p>여기에 멘트가 블라블라 <br></br>
                        여기에 멘트가 블라블라 <br></br></p>
                        여기에 멘트가 블라블라 <br></br>
                        여기에 멘트가 블라블라 <br></br>
                    </div>
                    <div className="OconnectPage3CardPage">
                    <h2>여기에 무슨 문구가 주황색</h2>
                        <p>여기에 멘트가 블라블라 <br></br>
                        여기에 멘트가 블라블라 <br></br></p>
                        여기에 멘트가 블라블라 <br></br>
                        여기에 멘트가 블라블라 <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
} export default Oconnect;