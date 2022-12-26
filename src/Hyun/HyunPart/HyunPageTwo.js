import { useState, useEffect, useRef, Component } from "react";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import "./css/HyunPageTwo.css"



function HyunPageTwo(){
    const axios = require('axios');
   
    const log = console.log;
    
    async function getHTMLolive(){
        try{
            return await axios.get('https://www.daum.net');
        } catch (error){
            console.log(error);
        }
    };

    console.log(getHTMLolive())
    useState(()=>{
       

    },[])
    return(<div className="HyunPageTwo">
        <div data-aos="fade-up" >가나가나다</div>
    </div>)
}export default HyunPageTwo;


