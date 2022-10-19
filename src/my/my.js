
import { useState, useEffect, useRef, Component } from "react";
import "./my.css";

function My() {
    const [ActCnt,setActCnt]=useState(0);
    var MyPageMove4=document.getElementsByClassName("MyPageMove4");
    var MyPageMove3 = document.getElementsByClassName("MyPageMove3");
    var MyPageMove2 = document.getElementsByClassName("MyPageMove2");
    var thrthr = document.getElementsByClassName("thrthr");
    var MyPageMove1Left = document.getElementsByClassName("MyPageMove1Left");
    var MyPageMove1Right = document.getElementsByClassName("MyPageMove1Right");

  function wheelact(){
    switch(ActCnt){
        case 0 :    
            MyPageMove1Left[0].style.transform= "translateX(-50vw)"
            MyPageMove1Right[0].style.transform= "translateX(50vw)"
            setActCnt(ActCnt+1);
            break;
        case 1 :    
            MyPageMove2[0].style.transform="scale(5) translateY(-25vh)";
            setActCnt(ActCnt+1);
            setTimeout(() => {
                MyPageMove2[0].style.opacity= "0";}, 700);
            break;
        case 2 :
            MyPageMove3[0].style.transform="scale(5) translate(30vw, -25vh)"
            setActCnt(ActCnt+1);
            setTimeout(() => {
                MyPageMove3[0].style.opacity= "0";}, 700);
            break;
            
        case 3 :
    }
}
function wheelactdown() {
    switch(ActCnt){
        case 1 :    
        MyPageMove1Left[0].style.transform= "translateX(0vw)"
        MyPageMove1Right[0].style.transform= "translateX(0vw)"
        setActCnt(ActCnt-1);
        break;
        case 2 :    
            MyPageMove2[0].style.opacity= "1";
            setActCnt(ActCnt-1);
            setTimeout(() => {
                MyPageMove2[0].style.transform= "scale(1) translateY(0)";
                }, 700);
            break;
        case 3 :
            MyPageMove3[0].style.opacity= "1"
            setActCnt(ActCnt-1);
            setTimeout(() => {
            MyPageMove3[0].style.transform="scale(1) translate(0vw, 0vh)"
            ;}, 700);
            break;
    }
}
useEffect(()=>{
    console.log("ddd")
    // const wheelHandler = (e) =>{
    // }
    // const StealienFullCurrent = StealienFull.current;
    // StealienFullCurrent.addEventListener("wheel", wheelHandler);
})


    return(
        <div id="My" onWheel={(e)=>console.log(e)}>
            <div className="page1">
                <div className="bodo">aaaaaa
                    <div className="bododo">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>
                <div className="thrthr fullviewer"   >
                    <img className="MyPageMove1Left  MyPageMove1" src="./image/my/MyPageMove1Left.jpg"></img>
                    <img className="MyPageMove1Right MyPageMove1" src="./image/my/MyPageMove1Right.jpg"></img>
                </div>
                <div className="MyPageMove2 fullviewer"   style={{background:"url(./image/my/mybghome.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"100vw 100vh"}}></div>
                <div className="MyPageMove3 fullviewer"   style={{background:"url(./image/my/pad.gif)",backgroundRepeat:"no-repeat",backgroundSize:"100vw 100vh"}}></div>
                <div className="MyPageMove4 fullviewer"   style={{background:"url(./image/my/marioyo.gif)",backgroundRepeat:"no-repeat",backgroundSize:"100vw 100vh"}}></div>
               


            </div>
            <div className="wheelbtn" onClick={wheelact}><img src="./image/my/monitor.svg"></img>{ActCnt}</div>
            <div className="wheelbtn2" onClick={wheelactdown}>{window.scrollY} /{ActCnt}</div>
        </div>
    )
}export default My;