import { useState, useEffect, useRef, Component } from "react";
import "./Front.css";
import "./Front.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-regular-svg-icons'
import { faLink } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";



function Front(){
    const [ViewPage,setViewPage] = useState("All") // Web and Effetc
    const myPageArr=[
        ["Web"   ,"Front_ER.png"    ,"/ER"  ,"EternalReturnInfo"    ,"이터널 리턴 게임의 OpenApi를 통해 게임의 전적검색과 캐릭터 정보가 있는 사이트 구성","사용자의 닉네임을 받아 Axios를 이용하여 데이터를 가져오고 map함수를 통해 사용자들이 볼 수 있도록 구현 <br></br><br></br>api로 제공하는 json 파일 형식의 데이터를 재가공하여 사용자가 볼 수 있도록 구현"],
        ["Web"   ,"E1.png"          ,"/E1"  ,"E1"                   ,"E1 사이트 클론 코딩","i18n 라이브러리를 통해 Ko,En의 홈페이지를 구성하고 json파일을 통해 관련"],
        ["Effect","csslogo2.png"    ,"/Ik"  ,"익명이"               ,"캐릭터 익명이를 사용한 404 에러화면으로 쓰고 있던 page","왜여기가 에러요"],
        ["Web","Front_Weather.png","/Weather","Weather","kakaoMap Api 와 OpenWeather","map api와 weather api로 주변 날씨와 지도웹 바로가기"],
        ["Web","Three.png","/Three","Three.js","Three.js 상자, 물리","Three onClick, physics"],
        ["Web","Front_login.png","/Notice","Login","Login화면 구성","로그인화면 구성, 디자인 추후에 db연결해서 더 다양한 기능을 삽입 할 예정 (배열로 테스트하기)"],
        ["Web","Front_NotFound.png",`/${Math.floor(Math.random(100000)*1000)}`,"404 Not Found","지정되지 않은 url로 이동할 경우 404NotFound 화면을 출력","scss를 이용하여 눈내리는 모습을 구현하고 눈을 클릭 할 경우 뒤로가기"],
        ["Web","Front_Oconnect.png","/Oconnect","Oconnect","Oconnect 사이트 클론 코딩","특정 위치에서 작동되는 Animation효과와 Js를 이용하여 만든 슬라이드<br></br><br></br>UseEffect와 좌표를 이용하여 화면에 들어오면 Animation효과를 주던 것을 Animate on scroll 라이브러리를 이용하여 간편하게 구현"],
        ["Web","Front_HerenNow.png","/Herennow","Herennow","Herennow사이트 클론 코딩","마우스 커서에 변화를 주고 커서 부분에  mix-blend-mode: difference를 적용해 뒤 요소들의 변화를 줌<br></br><br></br>마우스 휠과 드래그앤드랍으로 이동되는 슬라이드 구현 <br></br><br></br>테마변경 기능 (다크모드)"],
        ["Web","Front_Vhom.png","/Vhom","Vhom","Vhom 사이트 클론 코딩","CSS로 만든 라이언 캐릭터 <br></br><br></br>FullPage기능을 Js를 통하여 화면 단위로 마우스 휠에 반응하여 다음 또는 이전 위치로 이동하도록 구현<br></br><br></br>화면의 위치에 따른 네비게이션바 변화</p>"],
        ["Web","Front_Pixel.png","/Pixel","Pixel","Pixel네트워크 사이트 클론 코딩","Slick Slider사용, FullPage기능"],
        ["Web","Front_Stealien.png","/Stealien","Stealien","Stealien 사이트 클론 코딩","화면이 내려가면 GNB의 css 변경, hover를 통한 Animtaion 효과<br></br><br></br>Fontawesome을 이용하여 간단한 아이콘 사용"],
        ["Effect","svglogo.png","/SvgWrite","Svg","Svg Text Write","Svg를 이용하여 선이 그려지는 효과"],
        ["Effect","csslogo2.png","/NeonForm","네온효과","로그인폼 네온, Youtube","inset을 사용하여 공간 두개를 만들고 그 사이에 애니메이션으로 도형을 회전시켜 구현"],
        ["Effect","csslogo2.png","/FrontBackBox","FrontBackBox","Box를 Hover할 경우 회전시켜 앞, 뒤 내용 구현","backface-visibility와 preserve-3d를 이용하여 구현"],
        ["Effect","csslogo2.png","/RainbowAndFlip","RainbowAndFlipImg","무지개바와 지도 접히는 효과, Youtube","skew, rotate를 이용해서 구현"],
        ["Effect","csslogo2.png","/FillWord","FillWord","웹사이트에서 자주 보이던 글씨가 채워지는 효과를 구현","after와 hover Animation으로 구현"],
        ["Effect","csslogo2.png","/WaveAndReflect","WaveAndReflect","파도효과","Animation, overflow로 구현"],
        
       
    ]
    return(
        <div className="Front">
            <div className="SelectBox">
                <ul>
                    <li onClick={()=>setViewPage("All")}>All</li>
                    <li onClick={()=>setViewPage("Web")}>Web</li>
                    <li onClick={()=>setViewPage("Effect")}>Effetc</li>
                </ul>
            </div>
            <div className="FrontList">
                {myPageArr.filter((val)=>{
                    if(ViewPage=="All"){
                    return val;
                    }else if(val[0].includes(ViewPage)){
                    return val;
                    }
                }).map((LineArr ,index)=>{
                    return(
                        <div className={LineArr[0]==="Web" ? "FrontItem" : "FrontItem2"}><div className="ovovov">
                            <img src={`/Front/${LineArr[1]}`}></img></div>
                            <a href={`${LineArr[2]}`}>{LineArr[3]}<span> <FontAwesomeIcon icon={faLink} style={{color:"black"}}/></span></a>
                            <p className="FrontItemEx">{LineArr[4]}</p>
                            <p className="FrontItemContents">{LineArr[5]}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}export default Front;