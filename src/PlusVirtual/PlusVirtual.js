import { useState, useEffect, useRef, Component } from "react";
import "./PlusVirtual.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-regular-svg-icons'
import { faLink } from "@fortawesome/free-solid-svg-icons";


function PlusVirtual(){

    return(<div className="VirtualPlus">{Math.random().toString(36).substring(2, 10)}</div>)
}export default PlusVirtual