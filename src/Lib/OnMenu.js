import { useState, useEffect, useRef, Component } from "react";
import "./memo.css"
import "./memo.scss"
import { faTwitter,faYoutube,faFacebook,faGoogle,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";;
function OnMenu(){
    const PlusOnClick = document.getElementsByClassName("ScaleBox");
    const PoPon = document.getElementsByClassName("PoPon");

    const OnMenuPoP = () => {
        PlusOnClick[0].classList.toggle('PoPClick')
        PoPon[0].classList.toggle('PoPonT')
        PoPon[1].classList.toggle('PoPonT')
        PoPon[2].classList.toggle('PoPonT')
        PoPon[3].classList.toggle('PoPonT')
        PoPon[4].classList.toggle('PoPonT')
        PoPon[5].classList.toggle('PoPonT')
    }
    return(
        <div className="OnMenu">
            <div className="PoP" onClick={()=>OnMenuPoP()}>
            <div className="ClickMe">ClickMe</div>
            <div className="ScaleBox">
                <div className="ScaleBoxCir">
                    <div></div>
                </div>
            </div>
                <ul className="PoPUl">
                    <li className="PoPon "><FontAwesomeIcon icon={faTwitter}   className="CircleMenuIcon"/></li>
                    <li className="PoPon "><FontAwesomeIcon icon={faYoutube}   className="CircleMenuIcon"/></li>
                    <li className="PoPon "><FontAwesomeIcon icon={faFacebook}  className="CircleMenuIcon"/></li>
                    <li className="PoPon "><FontAwesomeIcon icon={faGoogle}    className="CircleMenuIcon"/></li>
                    <li className="PoPon "><FontAwesomeIcon icon={faGithub}    className="CircleMenuIcon"/></li>
                    <li className="PoPon "><FontAwesomeIcon icon={faInstagram} className="CircleMenuIcon"/></li>
                </ul>
            </div>
        </div>
    )
}export default OnMenu