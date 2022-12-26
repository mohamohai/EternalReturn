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
        
  asdasd
       
    </div>)
}export default Taihan


