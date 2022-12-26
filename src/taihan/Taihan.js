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
   const [PageOneCnt,setPageOneCnt]=useState(1);
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
        onSlideChange={() => console.log('slide change')}
        className="mySwiper"
      >
 
        <SwiperSlide>
        <div className="TaihanPageOne" data-swiper-autoplay="4000">
        <div className="TainhanPageOneTitle" data-aos="fade-up">asdasasdsadasdasdd <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>asdasdasdsadsadsad</div>
        <div>asdasd</div>
        <div>asdasd</div>

            <video className="TaihanVideo" preload="metadata" muted playsInline autoPlay loop>
                <source src={`Video/Taihan/Taihan1.mp4`} type="video/mp4"/>
            </video>
            
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="TaihanPageOne" data-swiper-autoplay="4000">
            <video preload="metadata" muted playsInline autoPlay loop>
                <source src={`Video/Taihan/Taihan2.mp4`} type="video/mp4"/>
            </video>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="TaihanPageOne" data-swiper-autoplay="5000">
            <video preload="metadata" muted playsInline autoPlay loop>
                <source src={`Video/Taihan/Taihan3.mp4`} type="video/mp4"/>
            </video>
        </div>
        </SwiperSlide>
      </Swiper>
  
       
    </div>)
}export default Taihan


