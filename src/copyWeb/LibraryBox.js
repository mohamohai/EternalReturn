


import { useState, useEffect, useRef } from "react";
import "./LibraryBox.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture } from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faYoutube,faFacebook } from '@fortawesome/free-brands-svg-icons'

function LibraryBox() {
  const LibraryBoxRef= useRef();
  const [Text, setText] = useState('');    //입력 할 문자 하나
  const [Count, setCount] = useState(0);   //val iaaaa
  const [rangeProgress, setrangeProgress] = useState(50);
  const aazz = document.getElementById("aazz");

  useEffect(()=>{
    const wheelCircle = document.getElementsByClassName("wheelCircle")
    
   
    
    
    const wheelHandler = (e) =>{
      setrangeProgress(document.getElementById("aazz").value)
      let scrollLocation = document.documentElement.scrollTop;
      var pageHeight = window.innerHeight;
      var winY = window.pageYOffset/100;
      wheelCircle[0].style.transform=`scale(${winY})`
      }
      const LibraryBoxCurrent = LibraryBoxRef.current;
      LibraryBoxCurrent.addEventListener("wheel", wheelHandler);
});
  return (
    <div className="LibraryBox"ref={LibraryBoxRef} >
        <div className="Part">
            <ul>
            <div className="rainbow"></div>
            </ul> 
        </div>
        <div className="Part">
        
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
        </div>


        <div className="Part">
            <div className="boxbox"> asd
                <div className="boxboxfront chch"><h1>front</h1></div>
                <div className="boxboxback chch"><img src="./image/Pixel/Main3/jinu.jpg"></img></div>
            </div>
        </div>

        <div className="Part">
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
        </div>


        <div className="Part">
        <div className="circleRotate">
            ss
          <div className="circleRotatea"></div>
        </div>
          <div className="wheelCircle"></div>
        </div>

        <div className="Part">
          <div className="dragBox">
          
            <input type="range" id="aazz" className="rangeBox" min="0" max="100"></input>
            {rangeProgress}
          </div>
        </div>

        <div className="Part">
          <div className="WaterMillPageOne">awsdasd
                    
          </div>
        </div>

        <div className="Part">
          <div className="CirleRoading">
            <div className="CirleRoadingOne"></div>
          </div>
        </div>

        <div className="Part">

        </div>
    </div>
    
  );
}

export default LibraryBox;