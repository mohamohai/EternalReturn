import { useState, useEffect, useRef, Component } from "react";
import "./HerenNow.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture,faSun,faMoon } from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faYoutube,faFacebook, } from '@fortawesome/free-brands-svg-icons'



function HerenNow(){

    const StealienFull = useRef();
    const [xy,setXY]=useState({x:0,y:0});
    const [ClickNameCnt,setClickNameCnt]=useState(0);
    const [DownX,setDownX]=useState(0);
    const [ClickNameNum, setClickNameNum]=useState(1);
    const [WheelY,setWheelY]=useState(1);
    const [TextDW,setTextDW]=useState("rgba(255,255,255)");

    const HerenNow=document.getElementsByClassName("HerenNow"); //다크모드 관할
    const HerenNowLogo=document.getElementsByClassName("HerenNowLogo");
    const GNBText=document.getElementsByClassName("GNBText");
    const HereDark=document.getElementsByClassName("hereDark");
    const HeretoggleBtn = document.getElementsByClassName("HeretoggleBtn");
    const hereIcon = document.getElementsByClassName("hereIcon");

    const HorizontalView = document.getElementsByClassName("HerenNowDown"); 
    const HorizontalEle = document.getElementsByClassName("HerenNowDownScroll");
    const BarRed = document.getElementsByClassName("HerenNowDownBarRed");
    const VerticalEle = document.getElementsByClassName("HerenNowRightScroll");
    const circleEle = document.getElementsByClassName("circle");
    var winX = window.innerWidth ;

    const handleMouseMove=(e)=>{
        setXY({x:e.clientX -50,y:e.clientY-50});
    }
    const DownDown=(e)=>{
        setDownX(e.clientX)
    }
    const MoveImg =(e)=>{
        var rect = e.target.getBoundingClientRect();
        console.log(rect)
        console.log(e.nativeEvent.offsetX-480)
        console.log(e.nativeEvent.offsetY-320)
       
        VerticalEle[ClickNameNum].style.transform=`translateX(${(e.nativeEvent.offsetX-480)/10}px) translateY(${(e.nativeEvent.offsetY-320)/10}px) `
    }
    function MoveImgReturn(){
        VerticalEle[ClickNameNum].style.transform=`translate(0px,0px) `
    }
    const UpUp=(e)=>{
        if(e.clientX<DownX){
            if(ClickNameNum==9){
                ClickName(0);
                ClickImg(1);
                setClickNameNum(1);
            }else{
            console.log("우측사진 주세요")
            ClickImg(ClickNameNum+1);
            ClickName(ClickNameNum);
            setClickNameNum(ClickNameNum+1)
            }
        }
        else if (e.clientX>DownX) {
            console.log("좌측사진 주세요")
            if(ClickNameNum==1){
                ClickName(8);
                ClickImg(9);
                setClickNameNum(9);
            }else{
            ClickImg(ClickNameNum-1);
            ClickName(ClickNameNum-2);
            setClickNameNum(ClickNameNum-1);
            }
        }
      }

    function DarkLight(){
        console.log("작동")
        if(TextDW=="rgba(255,255,255)"){
            HorizontalEle[ClickNameCnt+2].style.color="rgba(16,16,16)"; //글자색
            HerenNowLogo[0].style.color="rgba(16,16,16)";
            for(var i=0; i<GNBText.length;i++){
                GNBText[i].classList.toggle("TextW");
                GNBText[i].classList.toggle("TextD");
                GNBText[i].style.color="rgba(16,16,16)"
            }
            HereDark[0].style.transform="translateX(25px)"
            HereDark[0].style.backgroundColor="rgba(16,16,16)";
            HeretoggleBtn[0].style.border="rgba(16,16,16) 1px solid"
            hereIcon[0].classList.toggle("visible");hereIcon[1].classList.toggle("visible");
            
            HerenNow[0].style.backgroundColor="rgba(255,255,255)";
            setTextDW("rgba(16,16,16)");
        }else{
            HorizontalEle[ClickNameCnt+2].style.color="rgba(255,255,255)"; //글자색
            HerenNowLogo[0].style.color="rgba(255,255,255)"
            for(var i=0; i<GNBText.length;i++){
                GNBText[i].classList.toggle("TextW");
                GNBText[i].classList.toggle("TextD");
                GNBText[i].style.color="rgba(255,255,255)"
            }
            HereDark[0].style.transform="translateX(0px)"
            HereDark[0].style.backgroundColor="rgba(255,255,255)";
            HeretoggleBtn[0].style.border="rgba(255,255,255) 1px solid";
            hereIcon[0].classList.toggle("visible");hereIcon[1].classList.toggle("visible");



            HerenNow[0].style.backgroundColor="rgba(16,16,16)";
            setTextDW("rgba(255,255,255)");
        }
    }
    function MouseDispaly(){
        console.log(circleEle)
        circleEle[0].classList.toggle("nonedis")
    }
    function MouseDispalyNone(){
        circleEle[0].classList.toggle("nonedis")
    }
    
    function ClickImg(cnt){
        setClickNameNum(cnt)
        console.log(cnt+"xsxs")
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
        BarRed[0].style.top=`${cnt*4.44}rem`;

        for(var i=0 ; i<HorizontalEle.length;i++){
            HorizontalEle[i].style.color="transparent";
            HorizontalEle[i].classList.add("StrokeGray");
        }
        HorizontalView[0].style.transform=`translateY(-${(cnt*15)}rem)`;
        HorizontalEle[cnt+2].classList.remove("StrokeGray","whitea");
        HorizontalEle[cnt+2].style.color=TextDW; //변수로 색 다크
        setClickNameCnt(cnt);
    }
  


    useEffect(()=>{
        
        let scrollLocation = document.documentElement.scrollTop;
        var pageHeight = window.innerHeight;
        var winY = window.pageYOffset;
       
        const wheelHandler = (e) =>{
            if(e.deltaY>50){
                if(ClickNameNum==9){
                    ClickName(0);
                    ClickImg(1);
                    setClickNameNum(1); 
                }else{
                console.log("우측사진 주세요")
                ClickImg(ClickNameNum+1);
                ClickName(ClickNameNum);
                setClickNameNum(ClickNameNum+1)
                }
            }
            else if (e.deltaY<50) {
                console.log("좌측사진 주세요")
                if(ClickNameNum==1){
                    ClickName(8);
                    ClickImg(9);
                    setClickNameNum(9);
                }else{
                ClickImg(ClickNameNum-1);
                ClickName(ClickNameNum-2);
                setClickNameNum(ClickNameNum-1);
                }
            }
          }

     
        const StealienFullCurrent = StealienFull.current;
        StealienFullCurrent.addEventListener("wheel", wheelHandler);
    },[ClickNameCnt]);
    
    return(
        <div className="HerenNow"  onMouseMove={(e)=>handleMouseMove(e)} ref={StealienFull}
                style={{width:winX,
                height:window.innerHeight}} 
                
                >
            <div className="HerenNowLogo" onClick={MoveImgReturn}>
                <span>here</span>&now 
            </div>

            <div className="HereGNB">
                <ul>
                    <li className="GNBText TextD">company</li>
                    <li className="GNBText TextD">Projects</li>
                    <li className="GNBText TextD">Contact</li>
                    <li>
                    <div className="HeretoggleBtn" onClick={DarkLight}>
                        <div className="hereDark">
                            <div><FontAwesomeIcon icon={faMoon} className="hereMoon  hereIcon"/></div>
                            <div><FontAwesomeIcon icon={faSun} className="hereSun visible hereIcon"/></div>
                        </div>
                    </div>
                    </li>
                </ul>
                
            </div>
            
            <div className="HerenNowRight"  onMouseDown={DownDown} onMouseUp={UpUp}>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/9.jpg')" ,backgroundSize: "100% 100%", left:`${-900}px`     }} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/1.jpg')" ,backgroundSize: "100% 100%", left:`${winX-1060}px`}} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/2.jpg')" ,backgroundSize: "100% 100%", left:`${winX-60}px`  }} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/3.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div> 
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/4.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/5.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/6.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/7.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/8.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div>
                <div className="HerenNowRightScroll" style={{background:"url('./image/HerenNow/9.jpg')" ,backgroundSize: "100% 100%", left:`${winX}px`     }} onMouseMove={MoveImg} onMouseLeave={MoveImgReturn}></div>
            </div>
           <div className="HerenNowDown" >
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(7);ClickImg(8)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>애드베리</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(8);ClickImg(9)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>rincos</div>
                <div className="HerenNowDownScroll whitea"     onClick={()=>{ClickName(0);ClickImg(1)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>한화모티브  </div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(1);ClickImg(2)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>TS샴푸            </div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(2);ClickImg(3)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>교보에듀케어서비스</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(3);ClickImg(4)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>방통대 출판문화원</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(4);ClickImg(5)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>영통 푸르지오</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(5);ClickImg(6)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>연등회</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(6);ClickImg(7)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>대광건영</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(7);ClickImg(8)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>애드베리</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(8);ClickImg(9)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>rincos</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(0);ClickImg(1)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>한화모티브</div>
                <div className="HerenNowDownScroll StrokeGray" onClick={()=>{ClickName(1);ClickImg(2)}} onMouseEnter={MouseDispaly} onMouseLeave={MouseDispalyNone}>TS샴푸</div>
            </div>
            <div className="circle" style={{left:xy.x, top:xy.y}} onMouseMove={()=>handleMouseMove}></div>

           <div className="HerenNowDownBar">
            <div className="HerenNowDownBarRed"></div>
           </div>
        </div>
    )
}export default HerenNow;