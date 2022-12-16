import { useState, useEffect, useRef, Component } from "react";
import "./SearchPlayer.css";
import CharList from "./JsonFile/Char.json"  //characterNum은 1부터니까 -1
import ItemList from "./JsonFile/Item.json" 
import axios from "axios";
import { useParams } from "react-router-dom";
import Hyun from "../Hyun/Hyun";
import SearchPlayerGame from './SearchPlayerGame.js';
import SearchPlayer from './SearchPlayer.js';



const API_KEY = process.env.REACT_APP_ERKEY;

function EReturn(){
    const { key1 } = useParams(); // 
    const { key2 } = useParams(); // 
    console.log(key1)
    return(
        <div>
            <SearchPlayerGame value={key2}></SearchPlayerGame>
        </div>
    )
}export default EReturn