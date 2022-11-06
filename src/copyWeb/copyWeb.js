


import { useState, useEffect, useRef } from "react";
import "./copyWeb.css";

function CopyWeb() {
  const CopyWebRef= useRef();
  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0);   //val iaaaa

  useEffect(()=>{
    const wheelCircle = document.getElementsByClassName("wheelCircle")
    
   
    
    
    const wheelHandler = (e) =>{
      let scrollLocation = document.documentElement.scrollTop;
      var pageHeight = window.innerHeight;
      var winY = window.pageYOffset/100;
      console.log(window.pageYOffset)
      wheelCircle[0].style.transform=`scale(${winY})`
      }
      const CopyWebRefCurrent = CopyWebRef.current;
      CopyWebRefCurrent.addEventListener("wheel", wheelHandler);
});
  return (
    <div className="copyWeb"ref={CopyWebRef} >
        <ul>
          <div className="rainbow"></div>
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

        <div className="flipPage">
          <div className="flipPagew">
            <span className="flip1"></span>
            <span className="flip2"></span>
            <span className="flip3"></span>
            <span className="flip4"></span>
          </div>
          <div className="flipshadow">
            <span className="flip1"></span>
            <span className="flip2"></span>
            <span className="flip3"></span>
            <span className="flip4"></span>
          </div>
        </div>

        <div className="circleRotate">
          <div className="circleRotatea"></div>
        </div>
          <div className="wheelCircle"></div>
        </div>
      
    </div>
    
  );
}

export default CopyWeb;