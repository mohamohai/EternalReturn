import { useState, useEffect, useRef, Component } from "react";
import './E1.css'
import E1GNB from './E1GNB.js'
import Vivi from './E1.mp4'
import Aos from "aos";
function E1(){
    const E1FirstBox = document.getElementsByClassName("E1FirstBox");
    const E1SecBox = document.getElementsByClassName("E1SecBox");


    const MoveTopBox = () =>{
        E1FirstBox[0].style.transform= `translateY(${-window.innerHeight}px)`
        E1SecBox[0].style.opacity=  "1"
    }
    const MoveTopBoxReturn = () =>{
        E1FirstBox[0].style.transform= `translateY(0px)`;
        E1SecBox[0].style.opacity= "0"
    }
    const E1Ref = useRef();
    useEffect(()=>{ 
        Aos.init({
            duration : 500
        });

    
        const wheelHandler = (e) =>{
        let scrollLocation = document.documentElement.scrollTop; //이게 뭐더라 맨위
        var pageHeight = window.innerHeight; //모니터
        var winY = window.pageYOffset; //내위치 scrollY이것도 내 위치 그 기;준이 달라서 그럼 
             if(window.scrollY>=100){
                MoveTopBox()
            }if(window.scrollY<100){
                MoveTopBoxReturn()
            }
        }
        const E1Current = E1Ref.current;
        E1Current.addEventListener("wheel", wheelHandler);
    });

    return(
        <div className="E1Full" ref={E1Ref}>
            <E1GNB></E1GNB>
                <div className="E1FirstBox" >
                    <p>ENERGY LEADER <br></br>
                    LIFE PARTNER</p>
                </div>
                <div className="E1SecBox" >
                    <p>ENERGY LEADER <br></br>
                     LIFE PARTNER</p>
                </div>
            <div className="E1VideoContainer">
                <video className="E1Video" muted autoPlay loop>
                    <source src="/video/E1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="E1ContentContainer">
                <div className="E1ContentContainerHead">
                    <p data-aos="fade-up">Business</p>
                    <p data-aos="fade-up">지속가능한 성장모델을 통해 고객과 함께하는 가치를 <br></br>창조해 나가고 있습니다.</p>
                </div>
                <div className="E1ContentSliderOne"></div>
            </div>
          
        </div>
    )
}export default E1