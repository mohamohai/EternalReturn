import { useState, useEffect, useRef, Component } from "react";
import "./mymy.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture,faSun,faMoon } from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faYoutube,faFacebook, } from '@fortawesome/free-brands-svg-icons'

function MyMy(){
    const mymyPage = useRef();

    const [PageOneText, setPageOneText]= useState(1);
    const [pageYOffseta, setpageYOffseta]= useState(window.pageYOffset);

    function PhaseAct(cnt){
        setPageOneText(2);
    }
    useEffect((e)=>{
        const zxcasd=document.getElementsByClassName("zxcasd");
        let scrollLocation = document.documentElement.scrollTop;
        var winY = window.pageYOffset;// 현재 내 위치 y값
        var view = window.innerHeight;//내 모니터 y값





        const wheelHandler = (e) =>{
        setpageYOffseta(window.pageYOffset)
        e.preventDefault();
      
            if(e.deltaY>0){//마우스 휠
                if(window.pageYOffset < view){
                    
                    zxcasd[1].style.fill="black"
                    PhaseAct(1);
                        console.log(PageOneText)
                    if( PageOneText==2){
                        console.log("왜...")
                    window.scrollTo({
                        top: view * 1,
                        left: 0,
                        behavior: "smooth",
                    });
                }
                
                }else if(window.pageYOffset+100 > view && window.pageYOffset+100 < view*2){
                    window.scrollTo({
                        top: view * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                }
                else if(window.pageYOffset+100 > view*2 &&window.pageYOffset+100 < view*3){
                    window.scrollTo({
                        top: view * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                }
                else if( window.pageYOffset+100 > view*3 &&window.pageYOffset+100 < view*4){
                    window.scrollTo({
                        top: view * 4,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if( window.pageYOffset+100 > view*4 &&window.pageYOffset+100 < view*5){
                    window.scrollTo({
                        top: view * 5,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset+100 > view*5 &&window.pageYOffset+100 < view*6){
                    window.scrollTo({
                        top: view * 6,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset+100 > view*6 &&window.pageYOffset+100 < view*7){
                    window.scrollTo({
                        top: view * 7,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset+100 > view*7 && window.pageYOffset+100 < view*8){
                    window.scrollTo({
                        top: view * 8,
                        left: 0,
                        behavior: "smooth",
                    });
                }
            }else{
                if(window.pageYOffset < view*2){
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*3){
                    window.scrollTo({
                        top: view * 1,
                        left: 0,
                        behavior: "smooth",
                    });
                }
                else if(window.pageYOffset < view*4){
                    window.scrollTo({
                        top: view * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*5){
                    window.scrollTo({
                        top: view * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*6){
                    window.scrollTo({
                        top: view * 4,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*7){
                    window.scrollTo({
                        top: view * 5,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*8){
                    window.scrollTo({
                        top: view * 6,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*9){
                    window.scrollTo({
                        top: view * 7,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*10){
                    window.scrollTo({
                        top: view * 8,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*11){
                    window.scrollTo({
                        top: view * 9,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*4){
                    window.scrollTo({
                        top: view * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*4){
                    window.scrollTo({
                        top: view * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                }else if(window.pageYOffset < view*4){
                    window.scrollTo({
                        top: view * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                }
            }
          }

     
        const mymyPageCurrent = mymyPage.current;
        mymyPageCurrent.addEventListener("wheel", wheelHandler);
    });
    return(
        <div className="mymyFullPage"  ref={mymyPage}>
            <div className="mymyPage1 mymyFull">
                <div className="Fixed">LeeJongHyun
                    <img src="./image/mymy/2.png"/>
                </div>
                <div className="zxcasd">
             <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <text className="zxcasd" x="0" y="0" >Cross-Line Solutions</text>
                </svg>
                </div>
            </div>
          
            <div className="mymyPage2 mymyFull"></div>
            <div className="mymyPage3 mymyFull"></div>
            <div className="mymyPage4 mymyFull"></div>
            <div className="mymyPage5 mymyFull"></div>
            <div className="mymyPage6 mymyFull"></div>
            <div className="mymyPage7 mymyFull"></div>
            <div className="mymyPage8 mymyFull"></div>
            <div className="mymyPage9 mymyFull"></div>
            
            <div className="markone">{window.pageXOffset} , {window.innerHeight}</div>

        </div>
    )
}export default MyMy;
