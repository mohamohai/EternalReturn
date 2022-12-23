import { useState, useEffect, useRef, Component } from "react";


import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './Notice.css'

function Notice(){
    const [ChangePassWord, setChangePassWord]=useState({word:"password",icon:"faLock"})
    const [Notice,setNotice]=useState([]);
    const [hit, sethit] = useState(false)



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
          <div className="LoginForm">
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
          <div className="SignBtn"> In </div>
          </div>

          <div className="NoticeInput">
        
          </div>
        </div>
    )
}export default Notice