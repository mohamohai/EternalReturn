


import { useState, useEffect, useRef } from "react";
import "./vhom.css";

function Vhom() {

  const [Text, setText] = useState('');  
  const [Count, setCount] = useState(0); 
  return (
    <div className="Vhom" >
      <div className="VhomGNB">
        <ul className="VhomGNBMenu">
            <li>토탈인테리어</li>
            <li>VHOM나들이</li>
            <li>스토어</li>
            <li>이벤트/기획전</li>
        </ul>
      </div>

    </div>
    
  );
}

export default Vhom;