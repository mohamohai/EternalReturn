import { useState, useEffect, useRef, Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/HyunPageOne.css"
import "./css/HyunPageOne.scss"

function HyunPageOne(){

    
    return(
        <div className="HyunPageOne">
            <p data-aos="fade-down" data-aos-delay="1000">익명이</p>
            <div>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
                <div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/><div className="FallingSnow"/>
            </div>
            <div className="ikmyeong"></div>
        </div>)
}export default HyunPageOne;