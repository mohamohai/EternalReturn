import { useState, useEffect, useRef, Component } from "react";
import Aos from "aos";
import './E1PageOne.css';
import { useTranslation } from 'react-i18next'
function E1PageOne(){
    const { t, i18n } = useTranslation();

    const E1Ref = useRef();
    const [SliderCnt,SetSliderCnt] = useState(0)
    const SliderContainer = document.getElementsByClassName("SliderContainer");
    const E1E1ContentSliderOneTitleLine = document.getElementsByClassName("E1E1ContentSliderOneTitleLine");
    const E1ContentSliderOneProgress = document.getElementsByClassName("E1ContentSliderOneProgressa");
    


   
    useEffect(()=>{
        SliderContainer[0].style.transform=` translateX(${SliderCnt*-310}px)`;
        E1E1ContentSliderOneTitleLine[0].style.transform=`translateY(${SliderCnt*1.5}rem)`;
        E1ContentSliderOneProgress[0].style.width=`${(SliderCnt+1)*30}px`
    },[SliderCnt])
    useEffect(()=>{ 
        Aos.init({
            duration : 500
        });
    });

    return(
            <div className="E1ContentContainer" id="E1PageOne"  style={{background:`url('/image/E1/bg_sec0${SliderCnt}.jpg')`}}>
                <div className="E1ContentContainerHead">
                    <p data-aos="fade-up">Business</p>
                    <p data-aos="fade-up">{t("SliderMain")}</p>
                </div>
                <div className="E1ContentSliderOne"  data-aos="fade-up">
                    <div className="E1ContentSliderOneFream">
                        <div className="E1E1ContentSliderOneEx">
                            <div className="SliderContainer">
                                <div>
                                    <p>01</p>
                                    <p>{t("SliderContainer01")}</p>
                                    <p>
                                    {t("SliderContainerContent01")}
                                    </p>
                                    <p>{t("More")}</p>
                                </div>
                                <div>
                                    <p>02</p>
                                    <p>{t("SliderContainer02")}</p>
                                    <p>
                                    {t("SliderContainerContent02")}
                                    </p>
                                    <p>{t("More")}</p>
                                </div><div>
                                    <p>03</p>
                                    <p>{t("SliderContainer03")}</p>
                                    <p>
                                    {t("SliderContainerContent03")}
                                    </p>
                                    <p>{t("More")}</p>
                                </div><div>
                                    <p>04</p>
                                    <p>{t("SliderContainer04")}</p>
                                    <p>
                                    {t("SliderContainerContent04")}
                                    </p>
                                    <p>{t("More")}</p>
                                </div><div>
                                    <p>05</p>
                                    <p>{t("SliderContainer05")}</p>
                                    <p>
                                    {t("SliderContainerContent05")}
                                    </p>
                                    <p>{t("More")}</p>
                                </div>
                            </div>

                            <div className="leftright">
                                <span onClick={()=>SliderCnt==0? SetSliderCnt(4) : SetSliderCnt(SliderCnt-1)  }>&lt;</span>
                                <span onClick={()=>SliderCnt==4? SetSliderCnt(0) : SetSliderCnt(SliderCnt+1)}>&gt;</span>
                                <div className="E1ContentSliderOneProgress">
                                    <div className="E1ContentSliderOneProgressa"></div>
                                </div>
                            </div>
                        </div>
                        <div className="E1E1ContentSliderOneTitle">
                        <div className="E1E1ContentSliderOneTitleLine"></div>
                        <p>
                        {t("SliderContainerTitle1")}<br></br>
                        {t("SliderContainerTitle2")}<br></br>
                        {t("SliderContainerTitle3")}<br></br>
                        {t("SliderContainerTitle4")} <br></br>
                        {t("SliderContainerTitle5")}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}export default E1PageOne