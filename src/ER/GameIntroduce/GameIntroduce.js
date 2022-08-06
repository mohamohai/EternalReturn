

import "./GameIntroduce.css";
import React, { Component, useState, useEffect } from "react";

class GameIntroduce extends Component {
    constructor(props) {
      super(props);
      this.state = {
        FullPage :0,
        TotheTop:window.innerHeight,
        tata:getBoundingClientRect().bottom,
      }
    }
  
ToScrollgogo = () =>{
  console.log(this.state.TotheTop)

  window.scrollTo({ left: 0, top: 2000, behavior: "smooth" });
}
componentDidMount = () => {

  };
    render(){


    return(<div className="FullPageScroll">
            <div className="Page">
              <button onClick={this.ToScrollgogo}>asdsad</button>
              <div className="heightcheck">{this.state.TotheTop}</div>
              <div className="heightcheck">{this.state.tata}</div>
            </div>
            <div className="Page"  style={{
          background: `linear-gradient( to bottom,        rgba(255, 255, 255, 0) 10%,        rgba(255, 255, 255, 0.25) 25%,        rgba(255, 255, 255, 0.5) 50%,        rgba(255, 255, 255, 0.75) 75%,        rgba(255, 255, 255, 1) 100%        ), url('/image/Main/Season3.png')   `,
          backgroundSize: "cover",
        }}
      ></div>
            
            <div 
        className="Page"
        style={{
          background: `linear-gradient( to bottom,        rgba(255, 255, 255, 0) 10%,        rgba(255, 255, 255, 0.25) 25%,        rgba(255, 255, 255, 0.5) 50%,        rgba(255, 255, 255, 0.75) 75%,        rgba(255, 255, 255, 1) 100%        ), url('/image/Main/Season6.png')   `,
          backgroundSize: "cover",
        }}
      ></div>

    </div>)
    }
}
export default GameIntroduce;


 
