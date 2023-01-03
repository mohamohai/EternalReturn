import { useState, useEffect, useRef, Component } from "react";
import './E1GNB.css'
import { useTranslation } from 'react-i18next'

function E1GNB(){
    const { t, i18n } = useTranslation();
    const changelanguageToLan = () =>{
        if(i18n.language=='ko'){
            i18n.changeLanguage('en');
        }else{
            i18n.changeLanguage('ko');
        }
    }
    return(
        <div className="E1GNB">
            <div div className="logoLine">
                <div className="E1Logo">E1</div>
            </div>
            <div className="E1GNBRight">
                <ul>
                    <li>COMPANY</li>
                    <li>BUSINESS</li>
                    <li>SUSTAINABILITY</li>
                    <li>RELATION</li>
                    <li>RECRUIT</li>
                    <li>CS CENTER</li>
                    <li onClick={()=>changelanguageToLan()}>{i18n.language}</li>
                    
                    <li>ham</li>
                </ul>
            </div>

        </div>
    )
}export default E1GNB