import React, { Component, useState } from "react";
import "./Character_Introduce.css";
import CharAll from "../JsonFile/Char.json";
import ERGNB from "../ERGNB";
import Aos from "aos";
import { useParams } from "react-router-dom";
  function Character_Introduce(props) {
    const {key1}=useParams()
    console.log(key1)
    return (
      <div className="Character_Introduce">
        <ERGNB></ERGNB>
        {CharAll[0].EngName}
      </div>
        
 
    );
  }

export default Character_Introduce;
