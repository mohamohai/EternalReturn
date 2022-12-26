import { useState, useEffect, useRef, Component } from "react";
import TaihanGNB from './TaihanGNB.js';
import './Taihan.css';
import Aos from "aos";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Scrollbar, Zoom,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";




function Taihan(){
   const [PageOneCnt,setPageOneCnt]=useState(0);

   function toggleText(){

    }
    
   useEffect(()=>{
    Aos.init({
        duration: 2000,
      })
   })
    return(
    <div className="taihanMain">
        <TaihanGNB></TaihanGNB>
  <Swiper
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        effect={"fade"}//전환효과
        loop = {"false"} // 슬라이드 반복 여부
        autoplay={{ delay: 4000, }}
        modules={[EffectFade,Autoplay,Pagination]}
        onSlideChange={() => toggleText()}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="TaihanPageOne" data-swiper-autoplay="4000">
            <div className="TainhanPageOneTitle" data-aos="fade-up">
                <p>
                Taihan keeps <br></br> moving fowerd
                </p>
                <p>
                세계가 인정하는 기술과 제품으로 <br></br>
                더 나은 미래로 나아갑니다
                </p>
            </div>
            <video className="TaihanVideo" preload="metadata" muted playsInline autoPlay loop>
                <source src={`Video/Taihan/Taihan1.mp4`} type="video/mp4"/>
            </video>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="TaihanPageOne" data-swiper-autoplay="4000">
            <div className="TainhanPageOneTitle" data-aos="fade-up">
                <p>
                Beyond the best
                </p>
                <p>
                고객 가치를 최우선으로 여기며 <br></br>
                고객의 상상을 현실로 이뤄냅니다.
                </p>
            </div>

            <video className="TaihanVideo" preload="metadata" muted playsInline autoPlay loop>
                <source src={`Video/Taihan/Taihan2.mp4`} type="video/mp4"/>
            </video>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="TaihanPageOne" data-swiper-autoplay="5000">
            <div className="TainhanPageOneTitle" data-aos="fade-up">
                <p>
                Always be with you<br></br>
                </p>
                <p>
                밝은 미래를 위한 선한 영향력을 발휘하며 <br></br>
                당신과 함께 성장합니다.
                </p>
            </div>
            <video className="TaihanVideo" preload="metadata" muted playsInline autoPlay loop>
                <source src={`Video/Taihan/Taihan3.mp4`} type="video/mp4"/>
            </video>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>)
}export default Taihan


