import { Component } from 'react';

import React, {useState}         from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./SideBar.css"
import Cal from "./Calendar";
import 'react-calendar/dist/Calendar.css';

class SideBar extends Component{
  render(){
  
    return(
 
      <div className='SideBar'>
        <Cal></Cal>
      </div>
      
    );
  }
}  
export default SideBar;
