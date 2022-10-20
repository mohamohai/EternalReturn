import { useState, useEffect, useRef, Component } from "react";
import "./Stealien.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture } from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faYoutube,faFacebook } from '@fortawesome/free-brands-svg-icons'

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
        if(StealienIntroduceSlide>1){
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
            if(window.scrollY>200){
                StealienGNB[0].style.backgroundColor="white";
                StealienGNB[0].style.borderBottom="1px solid rgba(190,190,190)";
                logoon.style.transform="translateY(-50px)" 
                logo.style.transform="translateY(-50px)" 
                StealienGNBMenu[0].style.color="black"
            }
            else if(window.scrollY<200){
                StealienGNB[0].style.background="none";
                StealienGNB[0].style.borderBottom="none";
                logoon.style.transform="translateY(0px)" 
                logo.style.transform="translateY(0px)" 
                StealienGNBMenu[0].style.color="white"
            }
        }
        const StealienFullCurrent = StealienFull.current;
        StealienFullCurrent.addEventListener("wheel", wheelHandler);
    },[]);

    return(
        <div className="StealienMain" ref={StealienFull}>
            <div className="StealienGNB">
                <a className="StealienLogoA" href="/Stealien">
                    <img id="logo" src="./image/Stealien/logo.png"></img>
                    <img id="logoon" src="./image/Stealien/logo_on.png"></img>
                </a>
                <div>
                        <ul className="StealienGNBMenu">
                            <li>회사소개
                                <ul>
                                    <li>회사개요</li>
                                    <li>연혁</li>  
                                    <li>press</li>
                                    <li>멘토링 프로그램</li>
                                </ul>
                            </li>
                            <li>제품
                                <ul>
                                    <li>AppSuitSeries</li>
                                    <li>CyberDrillSystem</li>  
                                </ul>
                            </li>
                            <li>서비스
                                <ul>
                                    <li>보안컨설팅(모의해킹)</li>
                                    <li>R&D</li>  
                                </ul>
                            </li>
                            <li>채용</li>
                            <li>Resources
                                <ul>
                                    <li>도입 사례</li>
                                    <li>자주 묻는 질문</li>
                                    <li>기술 블로그</li>
                                    <li>CI</li>  
                                </ul>
                            </li>
                            <li>Ko
                                <ul>
                                    <li>ENG</li>
                                    <li>일본어</li>
                                    <li>Indonesia</li>  
                                </ul>
                            </li>
                        </ul>
                        </div>
            </div>
            <div className="StealienPageOne" id="StealienPageOne" style={{background:"url(./image/Stealien/0.jpg)", backgroundRepeat:"no-repeat",backgroundSize:"100vw 810px" }}>
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
                                <li><p>[스틸리언 해커들에게 묻는다!]<br></br>인싸담당자 제이콥의 인터뷰</p></li>
                                <li>
                                <p>복지가 쏟아진다! 젊은 회사, 일하기<br></br>좋은 회사는 어디?</p></li>
                                <li>
                                <p>모바일 앱 보안 통합 솔루션, AppSuit!</p></li>
                                <li>
                                <p>스틸리언 회사 해외 워크샵 여행영상!</p></li>
                                <li>
                                <p>KBS [사장님이 美쳤어요] 스틸리언<br></br>소개 클립!</p></li>
                                <li>
                                <p>스틸리언 인도네시아 소개영상</p></li>
                            </ul>
                        </div>
                        <span onClick={StealienintroduceSlideright}>&gt;</span>
                    </div>
                </div>
                <div className="StealienPageTwoModel2">
                    <div className="StealienPageTwoModel2product">
                        <h2>APPSUIT SERIES</h2>
                        <br></br>
                        <p>
                        앱수트(AppSuit) 시리즈는 스틸리언에서 100% 자체 개발한 모바일 앱 보안 솔루션으로,
                        앱수트 프리미엄을 포함하여 총 8개의 제품으로 구성되어 있습니다.
                        국가 공인 GS(Good Software) 인증 1등급을 획득한 앱수트는 다수의 고객사 경쟁 평가에서
                        최우수 기술력 보유 제품으로 선정되었습니다.
                        <br></br><br></br>
                        경쟁력 있는 보안 솔루션, 앱수트 시리즈를 지금 만나보세요!
                        </p>
                        <a className="btn_point"><i></i><span className="txt">제품보기</span></a>
                        <a className="btn_point"><i></i><span className="txt">도입사례</span></a>
                    </div>
                    <div>
                        <img src="./image/Stealien/product_1.png"></img>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className="StealienPageThree">
                <div className="StealienPageThreeModel1"><h2>앱수트의 필요성</h2><br></br>
                    <p>앱수트 시리즈 적용을 통해 서비스 운영에 요구되는 보안 평가 항목을 준수 및 충족할 수 있습니다.</p>
                </div>
                <div className="StealienPageThreeModel2">
                    <div className="StealienPageThreeModel2Left">
                        <div className="StealienPageThreeModel2LeftBorder">
                            <h2>금융보안원</h2>
                        </div>
                        <div className="StealienPageThreeModel2LeftBottom">
                            <div><img src="./image/Stealien/need1.png"></img>
                                <p>전자금융기반시설 <br></br></p>
                                <p>취약점 분석 평가 항목 <br></br></p>
                                <p className="needPlus">모바일 평가 기준</p>
                            </div>
                            <div><img src="./image/Stealien/need2.png"></img>
                                <p>스마트폰 전자금융서비스 <br></br></p>
                                <p>안전대책 체크리스트 <br></br></p>
                            </div>
                            <div><img src="./image/Stealien/need3.png"></img>
                                <p>핀테크 서비스 취약점 점검 가이드 <br></br></p>
                                <p className="needPlus">점검 기준</p>
                            </div>
                        </div>
                    </div>
                    <div className="StealienPageThreeModel2Right">
                        <div className="StealienPageThreeModel2RightBorder">
                            <h2>금융보안원</h2>
                        </div>
                        <div className="StealienPageThreeModel2RightBottom">
                            
                            <div><img src="./image/Stealien/need4.png"></img>
                                <p>스마트폰 전자금융서비스 <br></br></p>
                                <p>안전대책 체크리스트 <br></br></p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="StealienPageFour">
                <div className="StealienPageFourModel1">
                    <div className="StealienPageFourModel1Left">
                        <div className="StealienPageFourModel1Top">
                            <h3>언론보도</h3>
                            <span>+</span>
                        </div>
                        <div className="StealienPageFourModel1LeftTable">
                            <span>언론보도</span> <a>Information Protection Now is a Must!</a><p>2022-10-05</p>
                        </div><br></br>
                        <div className="StealienPageFourModel1LeftTable">
                            <span>보도자료</span> <a>스틸리언, 인도네시아 반둥시와 보안강화 MOU 체결</a><p>2022-10-05</p>
                        </div><br></br>
                        <div className="StealienPageFourModel1LeftTable">
                            <span>언론보도</span> <a>[FIELD MASTER] 화이트해커 출신 경영자, 신동휘 스틸리언 CTO</a><p>2022-10-05</p>
                        </div><br></br>
                        <div className="StealienPageFourModel1LeftTable">
                            <span>보도자료</span> <a>스틸리언 화이트 해커, ‘2022 전국 대학생 사이버 보안 경진대회’ 우승</a><p>2022-10-05</p>
                        </div>
                    </div>
                    <div className="StealienPageFourModel1Right">
                        <div className="StealienPageFourModel1Top">
                            <h3>문의</h3>
                        </div>
                        <div className="StealienPageFourModel1RightBottom">
                            <div className="StealienPageFourModel1RightBottomElement">
                                <div><FontAwesomeIcon icon={faGears} className="fofo"/></div>
                                <div>
                                    <p>
                                        <h2>영업 문의</h2> 
                                        xx - xxxx - xxxx<br></br>
                                        abc@abced.com<br></br>
                                    </p>
                                </div>
                            </div>
                            <div className="StealienPageFourModel1RightBottomElement">
                                <div><div><FontAwesomeIcon icon={faLightbulb} className="fofo"/></div></div>
                                <div>
                                    <p>
                                        <h2>영업 문의</h2> 
                                        xx - xxxx - xxxx<br></br>
                                        abc@abced.com<br></br>
                                    </p>faBriefcase
                                </div></div>
                            <div className="StealienPageFourModel1RightBottomElement">
                                <div><FontAwesomeIcon icon={faBriefcase} className="fofo"/>                           </div>
                                <div>
                                    <p>
                                        <h2>영업 문의</h2> 
                                        xx - xxxx - xxxx<br></br>
                                        abc@abced.com<br></br>
                                    </p>
                                </div></div>
                            <div className="StealienPageFourModel1RightBottomElement"><div><FontAwesomeIcon icon={faHeadset} className="fofo"/></div>
                                <div>
                                    <p>
                                        <h2>영업 문의</h2>
                                        xx - xxxx - xxxx<br></br>
                                        abc@abced.com<br></br>
                                    </p>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="StealienFooter">
                <div className="StealienFooterOne">
                    <ul>
                        <li>AppSuit Premium</li><span> &nbsp;</span>
                        <li>AppSuit Radar</li><span> &nbsp;</span>
                        <li>AppSuit Module</li><span> &nbsp;</span>
                        <li>AppSuit Hybrid</li><span> &nbsp;</span>
                        <li>AppSuit AV</li>
                        <li>AppSuit Keypad</li><span> &nbsp;</span>
                        <li>AppSuit WBC</li><span> &nbsp;</span>
                        <li>AppSuit Remote Block</li><span> &nbsp;</span>
                        <li>Cyber Drill System</li><span> &nbsp;</span>
                    </ul>
                    <ul>
                      <li></li>
                        
                    </ul>
                </div>
                <div className="StealienFooterTwo"></div>
                <div className="StealienFooterThree">
                    <p><img src="./image/Stealien/logooff.png"></img></p>
                    <p>
                        주소 : xxxx-xxxx-xxxx <br></br>
                        TEL : xx-xxx-xxxxFAX: xx-xxx-xxxx <br></br>
                        E-mail : xxx@xxxxxx.com <br></br> <br></br>
                        COPYRIGHT © 2020 STEALIEN Inc. ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </div>
    )

}
export default Stealien;