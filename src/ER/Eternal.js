import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayer.css";
import "./Eternal.css";
import { useParams } from "react-router-dom";
import SearchPlayerGame from './SearchPlayerGame.js';
import SearchPlayer from './SearchPlayer.js';
import ERGNB from "./ERGNB";
import CharList from "./JsonFile/Char.json" 



const API_KEY = process.env.REACT_APP_ERKEY;

function Eternal(){
    const { key1 } = useParams(); // 

    return(
        <div className="EternalZip1">
            {/* <img className="ImgLeft" src={`/image/Character_Img/${CharList[CharList.length-2].EngName}/Thumbnail/Default/Half.png`}></img>
            <img className="ImgRight" src={`/image/Character_Img/${CharList[CharList.length-4].EngName}/Thumbnail/Default/Half.png`}></img> */}
            <ERGNB></ERGNB> 
            <SearchPlayer value={key1}></SearchPlayer>
        </div>
    )
}export default Eternal