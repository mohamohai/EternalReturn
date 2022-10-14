import { useState, useEffect, useRef, Component } from "react";
import "./Stealien.css";



function Stealien() {

    const [StealienMainSlide, setStealienMainSlide] = useState(0);
    const [StealienIntroduceSlide, setStealienIntroduceSlide] = useState(1);

    const introduce = ["",""];
    /**이미지변경 */
    function StealienBtnLeft(){
        var StealienPageOne = document.getElementById("StealienPageOne");
        var StealienPageOneModel1Dot = document.getElementsByClassName("StealienPageOneModel1Dot");
        var StealienPageOneModel1SlideText = document.getElementsByClassName("StealienPageOneModel1SlideText");
       
        for(var i=0;i<StealienPageOneModel1Dot.length;i++){
            StealienPageOneModel1Dot[i].style.backgroundColor="gray";
            StealienPageOneModel1SlideText[i].style.opacity="0";
            StealienPageOneModel1SlideText[i].style.top="300px";
        }
        switch(StealienMainSlide){
            case 0 : 
            StealienPageOne.style.background="url(./image/Stealien/2.jpg)";
            StealienPageOneModel1Dot[2].style.backgroundColor="#501A9B";
            setTimeout(() => {
                StealienPageOneModel1SlideText[2].style.opacity="1"
                StealienPageOneModel1SlideText[2].style.top="250px"}, 500);
            setStealienMainSlide(2);
            break;
            case 1 :
            StealienPageOne.style.background="url(./image/Stealien/0.jpg)";
            StealienPageOneModel1Dot[0].style.backgroundColor="#501A9B";
            setTimeout(() => {
                StealienPageOneModel1SlideText[0].style.opacity="1"
                StealienPageOneModel1SlideText[0].style.top="250px"}, 500);
            setStealienMainSlide(0);
            break;
            case 2 :
            StealienPageOne.style.background="url(./image/Stealien/1.jpg)";
            StealienPageOneModel1Dot[1].style.backgroundColor="#501A9B";
            setTimeout(() => {
                StealienPageOneModel1SlideText[1].style.opacity="1"
                StealienPageOneModel1SlideText[1].style.top="250px"}, 500);
            setStealienMainSlide(1);
            break;
        }
    }
    function StealienBtnRight() {
        var StealienPageOne = document.getElementById("StealienPageOne");
        var StealienPageOneModel1Dot = document.getElementsByClassName("StealienPageOneModel1Dot");
        var StealienPageOneModel1SlideText = document.getElementsByClassName("StealienPageOneModel1SlideText");

        for(var i=0;i<StealienPageOneModel1Dot.length;i++){
            StealienPageOneModel1Dot[i].style.backgroundColor="gray";
            StealienPageOneModel1SlideText[i].style.opacity="0";
            StealienPageOneModel1SlideText[i].style.top="300px";
        }
        
        switch(StealienMainSlide){
            case 0 : 
            StealienPageOne.style.background="url(./image/Stealien/1.jpg)";
            StealienPageOneModel1Dot[1].style.backgroundColor="#501A9B";
            setTimeout(() => {
                StealienPageOneModel1SlideText[1].style.opacity="1"
                StealienPageOneModel1SlideText[1].style.top="250px"}, 500);
            setStealienMainSlide(1);
            break;
            case 1 :
            StealienPageOne.style.background="url(./image/Stealien/2.jpg)";
            StealienPageOneModel1Dot[2].style.backgroundColor="#501A9B";
            setTimeout(() => {
                StealienPageOneModel1SlideText[2].style.opacity="1"
                StealienPageOneModel1SlideText[2].style.top="250px"}, 500);
            setStealienMainSlide(2);
            break;
            case 2 :
            StealienPageOne.style.background="url(./image/Stealien/0.jpg)";
            StealienPageOneModel1Dot[0].style.backgroundColor="#501A9B";
            setTimeout(() => {
                StealienPageOneModel1SlideText[0].style.opacity="1"
                StealienPageOneModel1SlideText[0].style.top="250px"}, 500);
            setStealienMainSlide(0);
            break;
        }
    }
    function StealienMainSlideDot(liCnt){
        console.log(liCnt);
        var StealienPageOne = document.getElementById("StealienPageOne");
        var StealienPageOneModel1Dot = document.getElementsByClassName("StealienPageOneModel1Dot");
        var StealienPageOneModel1SlideText = document.getElementsByClassName("StealienPageOneModel1SlideText");

        for(var i=0;i<StealienPageOneModel1Dot.length;i++){
            StealienPageOneModel1Dot[i].style.backgroundColor="gray";
            StealienPageOneModel1SlideText[i].style.opacity="0";
            StealienPageOneModel1SlideText[i].style.top="300px";
        }
            StealienPageOne.style.background=`url(./image/Stealien/${liCnt}.jpg)`;
            StealienPageOneModel1Dot[liCnt].style.backgroundColor="#501A9B";
            setTimeout(() => {
                StealienPageOneModel1SlideText[liCnt].style.opacity="1"
                StealienPageOneModel1SlideText[liCnt].style.top="250px"}, 500);
            setStealienMainSlide(liCnt);
    }
    function StealienMainSlideleft() {
        StealienBtnLeft();
    }
    function StealienMainSlideright() {
        StealienBtnRight();
    }
    function StealienintroduceSlideleft(){
        var SCnt = StealienIntroduceSlide-2
        if(StealienIntroduceSlide>0){
        var StealienPageTwoIntroduce = document.getElementsByClassName("StealienPageTwoIntroduce");
        StealienPageTwoIntroduce[0].style.transform=`translateX(${SCnt*-350}px)`;
        setStealienIntroduceSlide(StealienIntroduceSlide-1)
        }
    }
    function StealienintroduceSlideright() {
        if(StealienIntroduceSlide<3){
        var StealienPageTwoIntroduce = document.getElementsByClassName("StealienPageTwoIntroduce");
        StealienPageTwoIntroduce[0].style.transform=`translateX(${StealienIntroduceSlide*-350}px)`;
        
        setStealienIntroduceSlide(StealienIntroduceSlide+1)
        }
    }

    const StealienFull = useRef();
    useEffect(()=>{
        const wheelHandler = (e) =>{
            const { scrollTop } =StealienFull.current;
            console.log(scrollTop);
        }
        const StealienFullCurrent = StealienFull.current;
        StealienFullCurrent.addEventListener("wheel", wheelHandler);
    },[]);

    return(
        <div className="StealienMain" ref={StealienFull}>
            <div className="StealienGNB">
                <a className="StealienLogoA" href="/Stealien">
                    <img src="./image/Stealien/logo.png"></img>
                    <img src="./image/Stealien/logo_on.png"></img>
                </a>
                <ul className="StealienDropDown">
                    <li>회사소개
                        <ul className="StealienDropDownIn">
                            <li>회사개요</li>
                            <li>연혁</li>
                            <li>press</li>
                            <li>멘토링 프로그램</li>
                        </ul>
                    </li>
                    <li>제품
                        <ul className="StealienDropDownIn">
                            <li>AppSuitSeries</li>
                            <li>CyberDrillSystem</li>
                        </ul>
                    </li>
                    <li>서비스
                        <ul className="StealienDropDownIn">
                            <li>보안컨설팅(모의해킹)</li>
                            <li>R&D</li>
                        </ul>
                    </li>
                    <li>채용                    </li>
                    <li>Resources
                        <ul className="StealienDropDownIn">
                            <li>도입 사례</li>
                            <li>자주 묻는 질문</li>
                            <li>기술블로그</li>
                            <li>CI</li>
                        </ul></li>
                    <li>ko</li>
                </ul>
            </div>
            <div className="StealienPageOne" id="StealienPageOne" style={{background:"url(./image/Stealien/0.jpg)", backgroundRepeat:"no-repeat",backgroundSize:"1920px 810px" }}>
                <span onClick={StealienMainSlideleft}>&lt;</span>
                <div className="StealienPageOneModel1">
                   <div>
                     <ul className="StealienPageOneModel1Slide">
                        <li onClick={()=>StealienMainSlideDot(0)} className="StealienPageOneModel1Dot" style={{backgroundColor:"#501A9B"}}></li>
                        <li onClick={()=>StealienMainSlideDot(1)}className="StealienPageOneModel1Dot"></li>
                        <li onClick={()=>StealienMainSlideDot(2)}className="StealienPageOneModel1Dot"></li>
                     </ul>
                     <div className="StealienPageOneModel1SlideText" style={{opacity:"1"}}>
                        <h1>해커가 <br></br><strong>보안</strong>을 말합니다.</h1>
                        <p>
                            시간과 장소를 가리지 않고 해킹의 위험에 노출되어 있는 현대 사회 속에서 <br></br>
                            여러분의 소중한 정보를 스틸리언이 지켜드리겠습니다.
                        </p>
                     </div>
                     <div className="StealienPageOneModel1SlideText">
                        <h1>끊임없이 <br></br><strong>연구</strong>합니다.</h1>
                        <p>
                            시시각각 변화하고 발전하는 공격기법에 대응하기 위해<br></br>
                            틀에 박힌 답이 아닌 혁신적인 답을 찾습니다.
                        </p>
                     </div>
                     <div className="StealienPageOneModel1SlideText">
                        <h1>일하는 방식을 <br></br><strong>생각</strong>합니다.</h1>
                        <p>
                            누구나 즐겁게 일하는 기업이 되도록 <br></br>
                            개개인의 일하는 환경에 대해 생각합니다.
                        </p>
                     </div>
                    </div>
                </div>
                <span onClick={StealienMainSlideright}>&gt;</span>
            </div>
            <div className="StealienPageTwo">
                <h1>우리를 소개합니다</h1>
                <div className="StealienPageTwoModel1">
                    <div id="StealienPageTwoModel1Frame">
                        <span onClick={StealienintroduceSlideleft}>&lt;</span>
                        <div className="StealienPageTwoIntroduceSlide">
                            <ul className="StealienPageTwoIntroduce">
                                <li><img src="./image/Stealien/introduce1.png"></img>
                                <p>[스틸리언 해커들에게 묻는다!]<br></br>인싸담당자 제이콥의 인터뷰</p></li>
                                <li><img src="./image/Stealien/introduce2.png"></img>
                                <p>복지가 쏟아진다! 젊은 회사, 일하기<br></br>좋은 회사는 어디?</p></li>
                                <li><img src="./image/Stealien/introduce3.png"></img>
                                <p>모바일 앱 보안 통합 솔루션, AppSuit!</p></li>
                                <li><img src="./image/Stealien/introduce4.png"></img>
                                <p>스틸리언 회사 해외 워크샵 여행영상!</p></li>
                                <li><img src="./image/Stealien/introduce5.png"></img>
                                <p>KBS [사장님이 美쳤어요] 스틸리언<br></br>소개 클립!</p></li>
                                <li><img src="./image/Stealien/introduce6.png"></img>
                                <p>스틸리언 인도네시아 소개영상</p></li>
                            </ul>
                        </div>
                        <span onClick={StealienintroduceSlideright}>&gt;</span>
                    </div>
                </div>
                <div className="StealienPageTwoModel2">
                    <div>
                        <ul className="qqq">
                            <li>a
                                <ul>
                                    <li>a1</li>
                                    <li>a2</li>  
                                    <li>a3</li>
                                </ul>
                            </li>
                            <li>b
                                <ul>
                                    <li>b1</li>
                                    <li>b2</li>  
                                    <li>b3</li>
                                </ul>
                            </li>
                            <li>c
                                <ul>
                                    <li>c1</li>
                                    <li>c2</li>  
                                    <li>c3</li>
                                </ul>
                            </li>
                        </ul>
                        </div>
                    <div></div>
                </div>
            </div>
            <div className="StealienPageThree"></div>
        </div>
    )

}
export default Stealien;