import './SNS.scss';
import { useState, useEffect, useRef, Component } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, orderBy } from "firebase/firestore";
import firebaseConfig from '../firebase.js';
import { collection, getDocs, doc, getDoc, query, where, setDoc, addDoc,  deleteDoc  } from "firebase/firestore"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from 'react-cookie';

function SNSLogIn(){
    const [userid,setuserid]=useState("guest")
    const [userpassword,setpassword]=useState("0")
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [ChangePassWord, setChangePassWord]=useState({word:"password",icon:"faLock"})

    const [cookies, setCookie,removeCookie] = useCookies(['guest']);
            //get 방법 {cookies.inuserid}
    const s3name = "jonghyunportfolio";




    
    async function SearchField() { //하나만 호출 where 하나 찾아서
        const q = query(collection(db, "account"), where("id", "==", userid), where("password","==", userpassword ));
        const querySnapshot = await getDocs(q)
        if(querySnapshot._snapshot.docs.sortedSet.root.size>=1){
          if(querySnapshot._snapshot.docs.sortedSet.root.key.data.value.mapValue.fields.id.stringValue==userid){
            if(querySnapshot._snapshot.docs.sortedSet.root.key.data.value.mapValue.fields.password.stringValue==userpassword){
              loginData(userid);

            }
          }
        }else{
          alert("아이디나 비밀번호가 틀렸습니다.")
        }
    } 

    
    function loginData(id){
      if(id=="guest"){
        setCookie('inuserid', "guest", { path: '/' ,maxAge : 3000});
        window.location.href="/SNSView"
      }else{
        setCookie('inuserid', userid, { path: '/' ,maxAge : 3000});
        window.location.href="/SNSView"
      }
    }
    useEffect(()=>{
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
            <input type="text" onChange={(e)=>setuserid(e.target.value)} required></input>
            <span>Userid</span>
            
          </div>
          <div className="SignInFormId">
            <input type={ChangePassWord.word} onChange={(e)=>setpassword(e.target.value)}  required></input>
            <span>Password </span>
            <span className="faLock" onClick={()=>{ChangePassWordFun()}}>{ChangePassWord.icon=="faLock"? <FontAwesomeIcon icon={faLock} size="1x"/>:<FontAwesomeIcon icon={faLockOpen} size="1x"/> }</span>
          </div>
          <input onClick={()=>SearchField()}  className="SignBtn" type="button" value="In"></input>
         
         <div className='NoticeBottom'>
            <div onClick={()=>{loginData("guest")}}>Guest in</div>
            <div onClick={()=>window.location.href="/SNSSignUp"}>Sign Up</div>
         </div>
          </div>
          </div>
    )
}export default SNSLogIn


