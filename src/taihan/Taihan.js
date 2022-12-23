import { useState, useEffect, useRef, Component } from "react";
import TaihanGNB from './TaihanGNB.js';
import './Taihan.css';
import Aos from "aos";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Taihan(){
   const [PageOneCnt,setPageOneCnt]=useState(1);
   useEffect(()=>{
    Aos.init({
        duration: 1200,
      })
   })
    return(
    <div className="taihanMain">
        <TaihanGNB></TaihanGNB>

          <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="zxczxc"></div>
      </SwiperSlide>
      <SwiperSlide><div className="zxczxc"></div></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      ...
    </Swiper>
       asdsadsad
       {/* <div className="TaihanPageOne">
            <video preload="metadata" muted playsInline autoPlay loop>
                <source src={`Video/Taihan/Taihan1.mp4`} type="video/mp4"/>
            </video>
            {PageOneCnt}
            <input type="button" onClick={()=>setPageOneCnt(PageOneCnt+1)} value="plus"/>
        </div> */}
       
        <div data-aos="fade-up" className="asdasd">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
    </div>)
}export default Taihan


