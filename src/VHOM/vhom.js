


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
        <div className="VHOMGNBRight">
          <div className="VHOMGNBUserInfo">
            <ul>
              <li>회원가입</li>
              <li>고객센터</li>
              <li>로그인</li>
            </ul>
          </div>
          <br></br>
          <div className="VHOMGNBMenu">
            <ul className="VHOMGNBMenuRightThree">
              <li><a>icon</a></li>
              <li><a>icon</a></li>
              <li><a>icon</a></li>
            </ul>
            <ul className="VHOMGNBMenuRightTwo">
              <li><a>우리동네봄</a></li>
              <li><a>스타일갤러리</a></li>
            </ul>
            <ul className="VHOMGNBMenuRightOne">
              <li><a>이벤트 기획전</a>           </li>
              <li><a>스토어</a>
             
              </li>
              <li><a>VHOM나들이</a></li>
              <li><a>토탈인테리어</a></li>
            </ul>
            
        </div>
        </div>
        
      </div><div className="clear"></div>
      
      <div className="VHOMSideBarText" style={{top:`${SideBarVh}vh`}}>
        {SideBarText}
      </div>
      <div className="VHOMSideBarBorder" style={{height:`${SideBarBorder}vh`}}></div>
      <details><summary>abc</summary>
      <li>asdsadsad</li></details>
      <div className="flexbox">
        <div className="boax"></div>
        <div className="boax"></div>
        <div className="boax"></div>
        <div className="boax"></div>
      </div>
    </div>
    
  );
}

export default VHOM;