import { useState, useEffect, useRef, Component } from "react";
import "./HerenNow.css"


function HerenNow(){
    const StealienFull = useRef();
    const [xy,setXY]=useState({x:0,y:0});
    const [ClickNameCnt,setClickNameCnt]=useState(0);
    const HorizontalView = document.getElementsByClassName("HerenNowDown");
    const HorizontalEle = document.getElementsByClassName("HerenNowDownScroll");
    const BarRed = document.getElementsByClassName("HerenNowDownBarRed");
    const VerticalEle = document.getElementsByClassName("HerenNowRightScroll");
    const circleEle = document.getElementsByClassName("circle");
 var winX = window.innerWidth ;

    const handleMouseMove=(e)=>{
        setXY({x:e.clientX -50,y:e.clientY-50});
    }
    function MouseDispaly(){
        console.log(circleEle)
        circleEle[0].classList.add("nonedis")
    }
    function MouseDispalyNone(){
        circleEle[0].classList.remove("nonedis")

    }

    function ClickImg(cnt){
        console.log(cnt)
        for(var i = 0; i<VerticalEle.length;i++){
            if(i<cnt){
                if(i<cnt-1){
                    VerticalEle[i].style.left=`${-1800}px`
                }else{
                    VerticalEle[i].style.left=`${-900}px`
                }
            }else if(i==cnt){
                 VerticalEle[i].style.left=`${winX-1060}px`
            }
            else if(i>cnt){
                if(i>cnt+1){
                    VerticalEle[i].style.left=`${winX+960}px`
                }else{
                    VerticalEle[i].style.left=`${winX-60}px`

                }
           }
        }
  

    }


    function ClickName(cnt){
        BarRed[0].style.top=`${cnt*5}rem`;

        for(var i=0 ; i<HorizontalEle.length;i++){
            HorizontalEle[i].style.color="transparent";
            HorizontalEle[i].classList.add("StrokeGray");
        }
        HorizontalView[0].style.transform=`translateY(-${(cnt*15)}rem)`;
        HorizontalEle[cnt+2].classList.remove("StrokeGray","whitea");
        HorizontalEle[cnt+2].style.color="white";
        setClickNameCnt(cnt);

    }
    useEffect(()=>{
        
        let scrollLocation = document.documentElement.scrollTop;
        var pageHeight = window.innerHeight;
        var winY = window.pageYOffset;
    

       
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
        style={{width:winX,
                height:window.innerHeight}}>
            <div className="HerenNowLogo">
                <span>here</span>&now
            </div>
            <div className="HerenNowRight">
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/9.jpg')" ,backgroundSize: "100% 100%", left:`${-900}px`     }} onClick={()=>{ClickImg(0)}}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/1.jpg')" ,backgroundSize: "100% 100%", left:`${winX-1060}px`}} onClick={()=>{ClickImg(1); ClickName(0)}}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/2.jpg')" ,backgroundSize: "100% 100%", left:`${winX-60}px`  }} onClick={()=>{ClickImg(2); ClickName(1)} }></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/3.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onClick={()=>{ClickImg(3); ClickName(2)}}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/4.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onClick={()=>{ClickImg(4); ClickName(3)}}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/5.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onClick={()=>{ClickImg(5); ClickName(4)}}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/6.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onClick={()=>{ClickImg(6); ClickName(5)}}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/7.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onClick={()=>{ClickImg(7); ClickName(6)}}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/8.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onClick={()=>{ClickImg(8); ClickName(7)}}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/9.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onClick={()=>{ClickImg(9); ClickName(8)}}></div>
                
            </div>
           <div className="HerenNowDown">
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(7)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>애드베리</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(8)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>rincos</div>
                <div className="HerenNowDownScroll whitea"     onClick={()=>ClickName(0)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>한화모티브 </div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(1)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>TS샴푸            </div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(2)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>교보에듀케어서비스</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(3)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>방통대 출판문화원</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(4)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>영통 푸르지오</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(5)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>연등회</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(6)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>대광건영</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(7)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>애드베리</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(8)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>rincos</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(0)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>한화모티브</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>ClickName(1)} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>TS샴푸</div>
            </div>
            <div className="circle" style={{left:xy.x, top:xy.y}} onMouseMove={()=>handleMouseMove}></div>

           <div className="HerenNowDownBar">
            <div className="HerenNowDownBarRed"></div>
           </div>
        </div>
    )
}export default HerenNow;