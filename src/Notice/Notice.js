import { useState, useEffect, useRef, Component } from "react";


import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


import './Notice.css'



import { useTranslation } from "react-i18next";

function Notice(){
    const [ChangePassWord, setChangePassWord]=useState({word:"password",icon:"faLock"})
    const [Notice,setNotice]=useState([]);
    const [hit, sethit] = useState(false)

    const { t } = useTranslation('ko', {useSuspense: false});

    async function getUser() {
        try {
          //응답 성공
          const response = await axios.get('/api/User');
          console.log(response);
        } catch (error) {
          //응답 실패 
          console.error(error);
        }
      }
 

      useEffect(()=>{
        getUser();
 
      },[])



    const ChangePassWordFun = () =>{
      if(ChangePassWord.word=="password"){
        setChangePassWord({word:"text", icon:"faLockOpen"})
      }else{
        setChangePassWord({word:"password", icon:"faLock"})
      }
    }
    return(
        <div className="Notice">
          <form onsubmit={console.log("d")} className="LoginForm">
           <p>Login</p>
          <div className="SignInFormId">
            <input type="text"  required></input>
            <span>Username</span>
          </div>
          <div className="SignInFormId">
            <input type={ChangePassWord.word}  required></input>
            <span>Password </span>
            <span className="faLock" onClick={()=>{ChangePassWordFun()}}>{ChangePassWord.icon=="faLock"? <FontAwesomeIcon icon={faLock} size="1x"/>:<FontAwesomeIcon icon={faLockOpen} size="1x"/> }</span>
          </div>
          <input className="SignBtn" type="submit" value="In"></input>
          </form>
{/* 
          <div className="Signal">
            <svg viewBox="0 0 1000 300">
              <text x="50%" y= "50%" dy="40px" textAnchor="middle">Signal</text>
            </svg>
          </div>
          <svg>
  <polygon 
    points="75,5  125,80  25,80" 
    fill="#4b6eec" />
</svg>
<svg>
  <polygon 
    points="75,5  125,80  25,80" 
     />
</svg> */}
        </div>
    )
}export default Notice