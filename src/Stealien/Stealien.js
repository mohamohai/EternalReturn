import { useState, useEffect, useRef, Component } from "react";
import "./Stealien.css";



function Stealien() {

    const [StealienMainSlide, setStealienMainSlide] = useState(0);
    function StealienMainSlideleft() {
        var StealienPageOne = document.getElementById("StealienPageOne");
        var StealienPageOneModel1Dot = document.getElementsByClassName("StealienPageOneModel1Dot");
        for(var i=0;i<StealienPageOneModel1Dot.length;i++){
            StealienPageOneModel1Dot[i].style.backgroundColor="gray";
        }
        switch(StealienMainSlide){
            case 0 : 
            StealienPageOne.style.background="url(./image/Stealien/2.jpg)";
            StealienPageOneModel1Dot[2].style.backgroundColor="#501A9B";
            setStealienMainSlide(2);
            break;
            case 1 :
            StealienPageOne.style.background="url(./image/Stealien/0.jpg)";
            StealienPageOneModel1Dot[0].style.backgroundColor="#501A9B";
            setStealienMainSlide(0);
            break;
            case 2 :
            StealienPageOne.style.background="url(./image/Stealien/1.jpg)";
            StealienPageOneModel1Dot[1].style.backgroundColor="#501A9B";
            setStealienMainSlide(1);
            break;
        }
    }
    function StealienMainSlideright() {
        var StealienPageOne = document.getElementById("StealienPageOne");
        var StealienPageOneModel1Dot = document.getElementsByClassName("StealienPageOneModel1Dot");
        
        for(var i=0;i<StealienPageOneModel1Dot.length;i++){
            StealienPageOneModel1Dot[i].style.backgroundColor="gray";
        }
        
        switch(StealienMainSlide){
            case 0 : 
            StealienPageOne.style.background="url(./image/Stealien/1.jpg)";
            StealienPageOneModel1Dot[1].style.backgroundColor="#501A9B";
            setStealienMainSlide(1);
            break;
            case 1 :
            StealienPageOne.style.background="url(./image/Stealien/2.jpg)";
            StealienPageOneModel1Dot[2].style.backgroundColor="#501A9B";
            setStealienMainSlide(2);
            break;
            case 2 :
            StealienPageOne.style.background="url(./image/Stealien/0.jpg)";
            StealienPageOneModel1Dot[0].style.backgroundColor="#501A9B";
            setStealienMainSlide(0);
            break;
        }
    }
    return(
        <div className="StealienMain">
            <div className="StealienGNB">
                <a className="StealienLogoA" href="/Stealien">
                    <img src="./image/Stealien/logo.png"></img>
                    <img src="./image/Stealien/logo_on.png"></img>
                </a>
                <ul className="StealienDropDown">
                    <li>회사소개</li>
                    <li>제품</li>
                    <li>서비스</li>
                    <li>채용</li>
                    <li>Resources</li>
                    <li>ko</li>
                </ul>
            </div>
            <div className="StealienPageOne" id="StealienPageOne" style={{background:"url(./image/Stealien/0.jpg)", backgroundRepeat:"no-repeat",backgroundSize:"100% 810px" }}>
                <span onClick={StealienMainSlideleft}>&lt;</span>
                <div className="StealienPageOneModel1">
                   <div>
                     <ul className="StealienPageOneModel1Slide">
                        <li className="StealienPageOneModel1Dot" style={{backgroundColor:"#501A9B"}}></li>
                        <li className="StealienPageOneModel1Dot"></li>
                        <li className="StealienPageOneModel1Dot"></li>
                     </ul>
                     <div className="StealienPageOneModel1SlideText">
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
            <div className="StealienPageTwo">ss</div>
            <div className="StealienPageThree">sd</div>
        </div>
    )

}
export default Stealien;