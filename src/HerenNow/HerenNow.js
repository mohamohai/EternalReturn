import { useState, useEffect, useRef, Component } from "react";
import "./HerenNow.css"


function HerenNow(){
    const StealienFull = useRef();
    const [xy,setXY]=useState({x:0,y:0});
    const [ClickNameCnt,setClickNameCnt]=useState(0);
    const HorizontalView = document.getElementsByClassName("HerenNowDown");
    const HorizontalEle = document.getElementsByClassName("HerenNowDownScroll");
    const BarRed = document.getElementsByClassName("HerenNowDownBarRed");

    const handleMouseMove=(e)=>{
        console.log(xy)
        setXY({x:e.clientX-250,y:e.clientY+50});
    }


    function ClickImg(cnt){
        console.log(cnt)
    }


    function ClickName(cnt){
        for(var i=0 ; i<HorizontalEle.length;i++)
        HorizontalEle[i].style.color="transparent";
        HorizontalEle[cnt].style.color="transparent";
        HorizontalView[0].style.transform=`translateY(-${(cnt*15)}rem)`;
        BarRed[0].style.top=`${cnt*5}rem`;
        setClickNameCnt(cnt);
    }
    useEffect(()=>{
        
        let scrollLocation = document.documentElement.scrollTop;
        var pageHeight = window.innerHeight;
        var winY = window.pageYOffset;
        HorizontalEle[ClickNameCnt+2].style.color="white";

       
        const wheelHandler = (e) =>{
            console.log(window.scrollY)
            

            const { scrollTop } =StealienFull.current;
            //이벤트리스너
          
        }
        const StealienFullCurrent = StealienFull.current;
        StealienFullCurrent.addEventListener("wheel", wheelHandler);
    },[ClickNameCnt]);
    
    return(
        <div className="HerenNow"  onMouseMove={(e)=>handleMouseMove(e)} ref={StealienFull}
        style={{width:window.innerWidth,
                height:window.innerHeight}}>
            <div className="HerenNowLogo">
                <span>here</span>&now
            </div>
            <div className="HerenNowRight">
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/9.jpg')" ,backgroundSize: "100% 100%", left:"-900px"}} onClick={()=>ClickImg(0)}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/1.jpg')" ,backgroundSize: "100% 100%", right:`${-window.innerWidth+200}px`}} onClick={()=>ClickImg(1)}>asd</div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/2.jpg')" ,backgroundSize: "100% 100%", left:`${window.innerWidth-60}px`}} onClick={()=>ClickImg(2)}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/3.jpg')" ,backgroundSize: "100% 100%"}} onClick={()=>ClickImg(3)}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/4.jpg')" ,backgroundSize: "100% 100%"}} onClick={()=>ClickImg(4)}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/5.jpg')" ,backgroundSize: "100% 100%"}} onClick={()=>ClickImg(5)}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/6.jpg')" ,backgroundSize: "100% 100%"}} onClick={()=>ClickImg(6)}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/7.jpg')" ,backgroundSize: "100% 100%"}} onClick={()=>ClickImg(7)}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/8.jpg')" ,backgroundSize: "100% 100%"}} onClick={()=>ClickImg(8)}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/9.jpg')" ,backgroundSize: "100% 100%"}} onClick={()=>ClickImg(9)}></div>
                
            </div>
           <div className="HerenNowDown">
                <div className="HerenNowDownScroll" onClick={()=>ClickName(7)}>애드베리</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(8)}>rincos</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(0)}>한화모티브 </div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(1)}>TS샴푸            </div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(2)}>교보에듀케어서비스</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(3)}>방통대 출판문화원</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(4)}>영통 푸르지오</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(5)}>연등회</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(6)}>대광건영</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(7)}>애드베리</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(8)}>rincos</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(0)}>한화모티브</div>
                <div className="HerenNowDownScroll" onClick={()=>ClickName(1)}>TS샴푸</div>
                <div className="circle" style={{left:xy.x, top:xy.y}} onMouseMove={()=>handleMouseMove}></div>
            </div>
           <div className="HerenNowDownBar">
            <div className="HerenNowDownBarRed"></div>
           </div>
        </div>
    )
}export default HerenNow;