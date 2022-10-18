
import { useState, useEffect, useRef, Component } from "react";
import "./my.css";

function My() {
    const [ActCnt,setActCnt]=useState(0);
    var zerozero=document.getElementsByClassName("zerozero");
    var oneone = document.getElementsByClassName("oneone");
    var twotwo = document.getElementsByClassName("twotwo");
    var thrthr = document.getElementsByClassName("thrthr");
    var oneLeft = document.getElementsByClassName("oneLeft");
    var oneRight = document.getElementsByClassName("oneRight");

  function wheelact(){
    switch(ActCnt){
        case 0 :    
            oneLeft[0].style.transform= "translateX(-50vw)"
            oneRight[0].style.transform= "translateX(50vw)"
            setActCnt(ActCnt+1);
            break;
        case 1 :    
            twotwo[0].style.transform="scale(5) translateY(-25vh)";
            setActCnt(ActCnt+1);
            setTimeout(() => {
                twotwo[0].style.opacity= "0";}, 700);
            break;
        case 2 :
            oneone[0].style.transform="scale(5) translate(30vw, -25vh)"
            setActCnt(ActCnt+1);
            setTimeout(() => {
                oneone[0].style.opacity= "0";}, 700);
            break;
            break;
        case 3 :
    }
}
function wheelactdown() {
    switch(ActCnt){
        case 1 :    
            thrthr[0].style.transform= "translateX(100vw)";
            setActCnt(ActCnt-1);
            break;
        case 2 :    
            twotwo[0].style.opacity= "1";
         
            setActCnt(ActCnt-1);
            setTimeout(() => {
                twotwo[0].style.transform= "scale(1) translateY(0)";
                }, 700);
            break;
        case 2 :
            setActCnt(ActCnt-1);
            break;
        
    }
}
useEffect(()=>{
    console.log("mamama")
},[])


    return(
        <div id="My">
            <div className="page1">
                <div className="thrthr fullviewer"   >
                    <img className="oneLeft" src="./image/my/oneLeft.jpg"></img>
                    <img className="oneRight"src="./image/my/oneRight.jpg"></img>

                </div>
                <div className="twotwo fullviewer"   style={{background:"url(./image/my/mybghome.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"100vw 100vh"}}></div>
                <div className="oneone fullviewer"   style={{background:"url(./image/my/pad.gif)",backgroundRepeat:"no-repeat",backgroundSize:"100vw 100vh"}}></div>
                <div className="zerozero fullviewer" style={{background:"url(./image/my/marioyo.gif)",backgroundRepeat:"no-repeat",backgroundSize:"100vw 100vh"}}></div>
               


            </div>
            <div className="wheelbtn" onClick={wheelact}>zxc{ActCnt}</div>
            <div className="wheelbtn2" onClick={wheelactdown}>asd{ActCnt}</div>
        </div>
    )
}export default My;