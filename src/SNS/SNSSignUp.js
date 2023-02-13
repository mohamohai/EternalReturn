import './SNS.scss';
import { useState, useEffect, useRef, Component } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, orderBy } from "firebase/firestore";
import firebaseConfig from '../firebase.js';
import { collection, getDocs, doc, getDoc, query, where, setDoc, addDoc,  deleteDoc  } from "firebase/firestore"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";

function SNSLogIn(){
    const [userid,setuserid]=useState("guest")
    const [useridCheck,setuseridCheck]=useState(false)
    const [username,setusername]=useState("guest")
    const [userpassword,setpassword]=useState("")
    const [userpassword2,setpassword2]=useState("12")
    const [ChangePassWord, setChangePassWord]=useState({word:"password",icon:"faLock"})

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    const CheckId = () => {
      SearchField()
    }
    async function SearchField() { //하나만 호출 where 하나 찾아서
          const q = query(collection(db, "account"), where("id", "==", userid));
          const querySnapshot = await getDocs(q);
          // console.log(querySnapshot._snapshot.docs.sortedSet.root.size)
          if(querySnapshot._snapshot.docs.sortedSet.root.size>=1){
            alert("이미 있는 아이디입니다.")
            setuseridCheck(false)
          }else{
            alert("사용 가능한 아이디입니다.")
            setuseridCheck(true)
          }
      //  console.log("----------------")
    } 
    async function AddData(){
      if(useridCheck && userpassword==userpassword2){
        const docRef = await addDoc(collection(db, "account"), {
          id: userid,
          name: username,
          password: userpassword
        });
        window.location.href="/SNSLogIn"
      }else{
        alert("입력하신 정보를 다시 확인해주십시오");
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
           <p>SignUp</p>
          <div className="SignInFormId"> 
            <input type="text" onChange={(e)=>setuserid(e.target.value)} onBlur={()=>CheckId()} maxLength={16} required></input>
            <span>Id</span>
            <span className="faLock">{useridCheck ? <FontAwesomeIcon icon={faCheck} size="1x"/>:"" }</span>
          </div>
          <div className="SignInFormId">
            <input type="text" onChange={(e)=>setusername(e.target.value)} maxLength={16} required></input>
            <span>Username</span>
          </div>
          <div className="SignInFormId">
            <input type={ChangePassWord.word} onChange={(e)=>setpassword(e.target.value)} maxLength={16}  required></input>
            <span>Password </span>
            <span className="faLock" onClick={()=>{ChangePassWordFun()}}>{ChangePassWord.icon=="faLock"? <FontAwesomeIcon icon={faLock} size="1x"/>:<FontAwesomeIcon icon={faLockOpen} size="1x"/> }</span>
          </div>
          <div className="SignInFormId">
            <input type={ChangePassWord.word} onChange={(e)=>setpassword2(e.target.value)} maxLength={16} required></input>
            <span>Password </span>
            <span className="faLock" onClick={()=>{ChangePassWordFun()}}>{userpassword==userpassword2? <FontAwesomeIcon icon={faCheck} size="1x"/>:<FontAwesomeIcon icon={faLockOpen} size="1x"/> }</span>
          </div>
          <button onClick={()=>AddData()}  className="SignBtn">In</button>
         
         
          </div>
          </div>
    )
}export default SNSLogIn