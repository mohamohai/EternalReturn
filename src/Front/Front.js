import { useState, useEffect, useRef, Component } from "react";
import "./Front.css";
import "./Front.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-regular-svg-icons'
import { faLink } from "@fortawesome/free-solid-svg-icons";




function Front(){
    return(
        <div className="Front">
            <div className="FrontHead"></div>

            <div className="FrontList">
                <div className="FrontItem">
                    <img src="/Front/Front_ER.png"></img>
                    <a href="/ER">EternalReturnInfo <span> <FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx">이터널 리턴 게임의 OpenApi를 통해 게임의 전적검색과 캐릭터 정보가 있는 사이트 구성</p>
                    <p className="FrontItemContents">사용자의 닉네임을 받아 Axios를 이용하여 데이터를 가져오고 map함수를 통해 사용자들이 볼 수 있도록 구현 <br></br><br></br>api로 제공하는 json 파일 형식의 데이터를 재가공하여 사용자가 볼 수 있도록 구현 </p>
                </div>
               
                <div className="FrontItem">
                    <img src="/Front/Front_NotFound.png"></img>
                    <a href={`/${Math.floor(Math.random(100000)*1000)}`}>404 Not Found<span> <FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx">지정되지 않은 url로 이동할 경우 404NotFound 화면을 출력</p>
                    <p className="FrontItemContents">scss를 이용하여 눈내리는 모습을 구현하고 눈을 클릭 할 경우 뒤로가기</p>
                </div>

                <div className="FrontItem">
                    <img src="/Front/Front_Oconnect.png"></img>
                    <a href="/Oconnect">Oconnect<span><FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx">Oconnect 사이트 클론 코딩</p>
                    <p className="FrontItemContents">특정 위치에서 작동되는 Animation효과와 Js를 이용하여 만든 슬라이드<br></br><br></br>
                    UseEffect와 좌표를 이용하여 화면에 들어오면 Animation효과를 주던 것을 Animate on scroll 라이브러리를 이용하여 간편하게 구현 
                                                     </p>
                </div>
                
                <div className="FrontItem">
                    <img src="/Front/Front_HerenNow.png"></img>
                    <a href="/Herennow">Herennow<span><FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx">Herennow사이트 클론 코딩</p>
                    <p className="FrontItemContents">마우스 커서에 변화를 주고 커서 부분에  mix-blend-mode: difference를 적용해 뒤 요소들의 변화를 줌<br></br><br></br>
                        마우스 휠과 드래그앤드랍으로 이동되는 슬라이드 구현 <br></br><br></br>
                        테마변경 기능 (다크모드)
                        
                        
                    </p>
                </div>
               <div className="FrontItem">
                    <img src="/Front/Front_Vhom.png"></img>
                    <a href="/Vhom">Vhom<span><FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx">Vhom 사이트 클론 코딩</p>
                    <p className="FrontItemContents">CSS로 만든 라이언 캐릭터 <br></br><br></br>
                    FullPage기능을 Js를 통하여 화면 단위로 마우스 휠에 반응하여 다음 또는 이전 위치로 이동하도록 구현<br></br><br></br>
                    화면의 위치에 따른 네비게이션바 변화</p>
                </div>
                <div className="FrontItem">
                    <img src="/Front/Front_Stealien.png"></img>
                    <a href="/Stealien">Stealien<span><FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx">Stealien 사이트 클론 코딩</p>
                    <p className="FrontItemContents">화면이 내려가면 GNB의 css 변경, hover를 통한 Animtaion 효과<br></br><br></br>
                    Fontawesome을 이용하여 간단한 아이콘 사용</p>
                </div>  

                <div className="FrontItem">
                    <img src="/Front/Front_Pixel.png"></img>
                    <a href="/Pixel">Pixel<span><FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx">Pixel네트워크 사이트 클론 코딩</p>
                    <p className="FrontItemContents">Slick Slider 사용, FullPage기능 구현</p>
                </div> {/*
                <div className="FrontItem">
                    <img src="/Front/Front_NotFound.png"></img>
                    <a href=""><span><FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx"></p>
                    <p className="FrontItemContents"></p>
                </div> */}{/*
                <div className="FrontItem">
                    <img src="/Front/Front_NotFound.png"></img>
                    <a href=""><span><FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx"></p>
                    <p className="FrontItemContents"></p>
                </div> */}{/*
                <div className="FrontItem">
                    <img src="/Front/Front_NotFound.png"></img>
                    <a href=""><span><FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx"></p>
                    <p className="FrontItemContents"></p>
                </div> */}{/*
                <div className="FrontItem">
                    <img src="/Front/Front_NotFound.png"></img>
                    <a href=""><span><FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                    <p className="FrontItemEx"></p>
                    <p className="FrontItemContents"></p>
                </div> */}
            </div>
            
        </div>
    )
}export default Front;