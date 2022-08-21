import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./Statistics.css"
class Statistics extends Component {
    constructor(props) {
      super(props);
      this.state = {

      
    }
      
    }


componentDidMount = () => {
 
  };
    render(){
      const content = "Hi. I'm Somi.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
    }
}
setInterval(typing, 200)
    return(
    
    <div className="tape" data-trigger>
  <span className="text">aaaa</span>
</div>
    
  )
    }
}
export default Statistics;


