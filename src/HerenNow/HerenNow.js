import { useState, useEffect, useRef, Component } from "react";
import "./HerenNow.css"


function HerenNow(){
    const StealienFull = useRef();
    const [xy,setXY]=useState({x:0,y:0});
    const [ClickNameCnt,setClickNameCnt]=useState(1);
    const HorizontalView = document.getElementsByClassName("HerenNowDown");
    const handleMouseMove=(e)=>{
        console.log(xy)
        setXY({x:e.clientX-50,y:e.clientY-50});
    }

    function ClickName(cnt){
        HorizontalView[0].style.transform=`translateY(-${cnt*15}rem)`
        console.log(cnt*6.5)
    }
    useEffect(()=>{
        
        let scrollLocation = document.documentElement.scrollTop;
        var pageHeight = window.innerHeight;
        var winY = window.pageYOffset;
        var StealienGNB = document.getElementsByClassName("StealienGNB");
        var StealienGNBMenu = document.getElementsByClassName("StealienGNBMenu");
        var logo = document.getElementById("logo");
        var logoon = document.getElementById("logoon")
        const wheelHandler = (e) =>{
            console.log(window.scrollY)
            

            const { scrollTop } =StealienFull.current;
            //이벤트리스너
          
        }
        const StealienFullCurrent = StealienFull.current;
        StealienFullCurrent.addEventListener("wheel", wheelHandler);
    },[]);
    
    return(
        <div className="HerenNow"  onMouseMove={(e)=>handleMouseMove(e)} ref={StealienFull}
        style={{width:window.innerWidth,
                height:window.innerHeight}}>
                    <div className="circle" style={{left:xy.x, top:xy.y}} onMouseMove={()=>handleMouseMove}></div>
           <div className="HerenNowDown">
            <div className="HerenNowDownScroll" onClick={()=>ClickName(8)}>rincos</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(0)}>한화모티브</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(1)}>TS샴푸</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(2)}>교보에듀케어서비스</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(3)}>방통대 출판문화원</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(4)}>영통 푸르지오</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(5)}>연등회</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(6)}>대광건영</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(7)}>애드베리</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(8)}>rincos</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(0)}>한화모티브</div>
            <div className="HerenNowDownScroll" onClick={()=>ClickName(1)}>TS샴푸</div>

           </div>
        </div>
    )
}export default HerenNow;