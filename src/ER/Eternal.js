import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayer.css";
import CharList from "./JsonFile/Char.json"  //characterNum은 1부터니까 -1
import ItemList from "./JsonFile/Item.json" 
import axios from "axios";
import { useParams } from "react-router-dom";
import Hyun from "../Hyun/Hyun";
import SearchPlayerGame from './SearchPlayerGame.js';
import SearchPlayer from './SearchPlayer.js';
<SearchPlayerGame value={22170006}></SearchPlayerGame>


const API_KEY = process.env.REACT_APP_ERKEY;

function Eternal(){
    const { key1 } = useParams(); // 

    return(
        <div>
            <SearchPlayer value={key1}></SearchPlayer>
        </div>
    )
}export default Eternal