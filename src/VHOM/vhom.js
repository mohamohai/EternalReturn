


import { useState, useEffect, useRef } from "react";
import "./VHOM.css";

function VHOM() {

  const [SideBarText, setSideBarText] = useState('VHOM서비스소개');  
  const [SideBarVh, setSideBarVh] = useState(10);
  const [SideBarBorder, setSideBarBorder] = useState(SideBarVh+10);
  const [Count, setCount] = useState(0); 
  return (
    <div className="VHOM" >
      <div className="VHOMGNB">
        <div className="VHOMGNBLeft">
          <a href="#">VHOM</a>
          <span>한솔이 만든 토탈 인테리어</span>
        </div>
        <div className="VHOMGNBRight">zz</div>
      </div><div className="clear"></div>
      
      <div className="VHOMSideBarText" style={{top:`${SideBarVh}vh`}}>
        {SideBarText}
      </div>
      <div className="VHOMSideBarBorder" style={{height:`${SideBarBorder}vh`}}></div>
      
      
    </div>
    
  );
}

export default VHOM;