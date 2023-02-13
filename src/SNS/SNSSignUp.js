import './SNS.scss';
import { useState, useEffect, useRef, Component } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, orderBy } from "firebase/firestore";
import firebaseConfig from '../firebase.js';
import { collection, getDocs, doc, getDoc, query, where, setDoc, addDoc,  deleteDoc  } from "firebase/firestore"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";

function SNSLogIn(){
    const [userid,setuserid]=useState("guest")
    const [useridCheck,setuseridCheck]=useState(false)
    const [username,setusername]=useState("guest")
    const [userpassword,setpassword]=useState("")
    const [userpassword2,setpassword2]=useState("")
    const [ChangePassWord, setChangePassWord]=useState({word:"password",icon:"faLock"})

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    
    const CheckId = () => {
      SearchField()
    }
    async function SearchField() { //하나만 호출 where 하나 찾아서
          console.log(userid)
          console.log(useridCheck)
          const q = query(collection(db, "account"), where("id", "==", "guest"));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(userid, doc.data().id,"??")
          console.log(doc.data().id)
          if(doc.data().id==userid){
            console.log(doc.id, " => ", doc.data());  
          }
          });
       
    } 
    async function AddData(){
      const docRef = await addDoc(collection(db, "account"), {
          id: userid,
          name: username,
          password: userpassword
        });
        console.log("Document written with ID: ", docRef.id);
  }
  const PlusAccount = () => {
    if(userpassword===userpassword2 && useridCheck){
      AddData();
      window.location.href="/SNSLogin"
    }else{
      alert("다시")
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
           <p>SignUp <span onClick={()=>CheckId()}>asdasd</span></p>
          <div className="SignInFormId"> 
            <input type="text" onChange={(e)=>setuserid(e.target.value)} maxLength={16} required></input>
            <span>Id</span>
           
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
            <span className="faLock" onClick={()=>{ChangePassWordFun()}}>{ChangePassWord.icon=="faLock"? <FontAwesomeIcon icon={faLock} size="1x"/>:<FontAwesomeIcon icon={faLockOpen} size="1x"/> }</span>
          </div>
          <button onClick={()=>PlusAccount()}  className="SignBtn">In</button>
         
         
          </div>
          </div>
    )
}export default SNSLogIn