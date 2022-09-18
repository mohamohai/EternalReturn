


import { useState, useEffect, useRef } from "react";
import "./copyWeb.css";

function CopyWeb() {

  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0);   //val iaaaa
  return (
    <div className="copyWeb" >
      <div className="copyWebGNB">
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul> 
        <div className="copyWebMainOne">
          
          
          <form className="neonBox">
             <div className="neonBoxOne"></div> 
             <div className="neonLogin">
              <div className="neonLoginId">
              <input type="text" className="neonLoginIdInput neoninput" required></input>
              <span className="neonLoginIdText neonLoginText">ID</span>
             </div>
             <div className="neonLoginPw">
              <input type="password" className="neonLoginIdInput neoninput" required ></input>
              <span className="neonLoginPwText neonLoginText">PassWord</span>
             </div>
             </div>
           
          </form>
          <div className="clean"></div>
         
         
          <div className="boxbox"> 
            <div className="boxboxfront chch"><h1>front</h1></div>
            <div className="boxboxback chch"><img src="./image/Pixel/Main3/jinu.jpg"></img></div>
          </div><div className="clean"></div>
        </div>
      </div>
    </div>
    
  );
}

export default CopyWeb;