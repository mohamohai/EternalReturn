import { useState, useEffect, useRef, Component } from "react";
import Aos from "aos";
import './E1.css'
import E1GNB from './E1GNB.js'
import E1PageOne from "./E1PageOne";
import { useTranslation } from 'react-i18next'
function E1(){
    const E1FirstBox = document.getElementsByClassName("E1FirstBox");
    const E1SecBox = document.getElementsByClassName("E1SecBox");
    const E1Ref = useRef();
    const [SliderCnt2,SetSliderCnt2] = useState(0)

    
    const SliderContainer2 = document.getElementsByClassName("SliderContainer2");
    const E1ContentSliderOneProgress2 = document.getElementsByClassName("E1ContentSliderOneProgressa2");
    const E1Video = document.getElementsByClassName("E1Video");
    
    const { t, i18n } = useTranslation();




    const MoveTopBox = () =>{
        E1FirstBox[0].style.transform= `translateY(${-window.innerHeight}px)`
        E1SecBox[0].style.opacity=  "1"
    }
    const MoveTopBoxReturn = () =>{
        E1FirstBox[0].style.transform= `translateY(0px)`;
        E1SecBox[0].style.opacity= "0"
    }
    const E1VideoPosition = () =>{
        E1Video[0].style.position="relative";
    }
    const E1VideoPositionReturn = () =>{
        E1Video[0].style.position="fixed";
    }
   
    useEffect(()=>{
        SliderContainer2[0].style.transform=` translateX(${SliderCnt2*-402}px)`;
        
        E1ContentSliderOneProgress2[0].style.width=`${(SliderCnt2+1)*18.75}px`
    },[SliderCnt2])
    useEffect(()=>{ 
        Aos.init({
            duration : 500
        });
        
        const wheelHandler = (e) =>{
        let scrollLocation = document.documentElement.scrollTop; //이게 뭐더라 맨위
        var pageHeight = window.innerHeight; //모니터
        var winY = window.pageYOffset; //내위치 scrollY이것도 내 위치 그 기;준이 달라서 그럼 
             if(window.scrollY>=100){
                MoveTopBox()
            }else if(window.scrollY<100){
                MoveTopBoxReturn()
            }

            if(window.scrollY>pageHeight*3){
                E1VideoPosition()
            }else{
                E1VideoPositionReturn();
            } 
        }
        const E1Current = E1Ref.current;
        E1Current.addEventListener("wheel", wheelHandler);
    });

    return(
        <div className="E1Full" id="E1Full" ref={E1Ref}>
            <E1GNB></E1GNB>
                <div className="E1FirstBox" >
                    <p>ENERGY LEADER <br></br>
                    LIFE PARTNER</p>
                </div>
                <div className="E1SecBox" >
                    <p>ENERGY LEADER <br></br>
                     LIFE PARTNER  </p>
                </div>
            <div className="E1VideoContainer">
                <video className="E1Video" muted autoPlay loop>
                    <source src="/video/E1.mp4" type="video/mp4" />
                </video>
            </div>
            <E1PageOne></E1PageOne>
            <div className="E1PageTwo" id="E1PageTwo">
                <div className="E1ContentContainerHead">
                    <p data-aos="fade-up">Relation</p>
                    <p data-aos="fade-up">{t("News2tt")}</p>
                </div>
                <div className="E1ContentSliderOne2"  data-aos="fade-up">
                    <div className="E1ContentSliderOneFream2">
                        <div className="E1E1ContentSliderOneEx2">
                            <div className="SliderContainer2">
                            <div>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentTitle">{t("News1Title")}</p>
                                    <p className="ContentImg">
                                        <img src="./image/E1/Slider1.png"/>
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentTitle">{t("News2Title")}</p>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentCon">
                                    {t("News2Content")}
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentTitle">{t("News1Title")}</p>
                                    <p className="ContentImg">
                                        <img src="./image/E1/Slider1.png"/>
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentTitle">{t("News2Title")}</p>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentCon">
                                    {t("News2Content")}
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentTitle">{t("News1Title")}</p>
                                    <p className="ContentImg">
                                        <img src="./image/E1/Slider1.png"/>
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentTitle">{t("News2Title")}</p>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentCon">
                                    {t("News2Content")}
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentTitle">{t("News1Title")}</p>
                                    <p className="ContentImg">
                                        <img src="./image/E1/Slider1.png"/>
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentTitle">{t("News2Title")}</p>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentCon">
                                    {t("News2Content")}
                                    </p>
                                </div>
                                
                            </div>

                            <div className="leftright">
                                <span onClick={()=>SliderCnt2==0? SetSliderCnt2(7) : SetSliderCnt2(SliderCnt2-1)  }>&lt;</span>
                                <span onClick={()=>SliderCnt2==7? SetSliderCnt2(0) : SetSliderCnt2(SliderCnt2+1)}>&gt;</span>
                                <div className="E1ContentSliderOneProgress2">
                                    <div className="E1ContentSliderOneProgressa2"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div>
                <div className="E1Footer">
                    <div className="Footer1floor">
                        <div>
                            <p className="floor1Bot">주식회사 E1</p>
                            <p>
                                <ul className="floorLeftUl">
                                    <li>COMPANY</li>
                                    <li>BUSINESS</li>
                                    <li>SUSTAINABILITY</li>
                                    <li>RELATION</li>
                                    <li>RECURUIT</li>
                                    <li>CS CENTER</li>
                                </ul>
                            </p>
                        </div>
                        <div>
                           <ul>
                                <li className="floorRightLi">
                                    <ul >
                                        <li>E1 오렌지카드</li>
                                        <li>E1만의 특별한 <br></br> 포인트혜택</li>
                                    </ul>
                                    <ul>
                                        <li>E1 오렌지카드</li>
                                        <li>E1만의 특별한 <br></br> 포인트혜택</li>
                                    </ul>
                                    <ul>
                                        <li>E1 오렌지카드</li>
                                        <li>E1만의 특별한 <br></br> 포인트혜택</li>
                                    </ul>
                                </li>
                           </ul>
                        </div>
                    </div>
                    <div className="floorLine"></div>
                    <div className="Footer2floor">
                        <div className="Footer2floorLeft">
                            <div>
                                <ul>
                                    <li>서울특별시 xxx로 xx</li>
                                    <li>대표 전화 : xx-xxxx-xxxx</li>
                                    <li>E1 오렌지카드 및 충전소 : xxxx-xxxx</li>
                                    <li>Copyright(ⓒ) 2022 E1. All rights reserved.</li>
                                </ul>
                            </div>
                            <div className="Footer2floorLeftMenu">
                                <ul>
                                    <li>ECOS</li>
                                    <li>E1 원격지원</li>
                                    <li>SNS</li>
                                </ul>
                                <ul>
                                    <li>개인정보처리방침</li>
                                    <li>윤리경영 상담 및 제보</li>
                                    <li>이메일무단수집거부</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}export default E1