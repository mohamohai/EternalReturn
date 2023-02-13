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
    const [userpassword,setpassword]=useState("12451245")
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [ChangePassWord, setChangePassWord]=useState({word:"password",icon:"faLock"})
    
    
    async function SearchField() { //하나만 호출 where 하나 찾아서
        
        const q = query(collection(db, "account"), where("id", "==", userid), where("password","==", userpassword ));
        let querySnapshot
        try {
            querySnapshot = await getDocs(q)
        } catch(e){
            console.error("err",e);
        }finally{
            if(querySnapshot._snapshot.docs.sortedSet.root.key.data.value.mapValue.fields.id.stringValue==userid){
                if(querySnapshot._snapshot.docs.sortedSet.root.key.data.value.mapValue.fields.password.stringValue==userpassword){
                    console.log("여기 쿠키나 세션 관련 쿼리")
                }
            }else{
                console.log("너 아이디나 비번 틀렸다잉")
            }
        }
        
       
        
        // querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.data())
        // })
        // const q = query(collection(db, "account"), where("id", "==", userid), where("password","==", userpassword ));
        // const querySnapshot = await getDocs(q);
        // if (querySnapshot.exists()) {
        //         console.log(querySnapshot.data());
        //       } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //       }
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.data())
        // })
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
            <span>Username</span>
          </div>
          <div className="SignInFormId">
            <input type={ChangePassWord.word} onChange={(e)=>setpassword(e.target.value)}  required></input>
            <span>Password </span>
            <span className="faLock" onClick={()=>{ChangePassWordFun()}}>{ChangePassWord.icon=="faLock"? <FontAwesomeIcon icon={faLock} size="1x"/>:<FontAwesomeIcon icon={faLockOpen} size="1x"/> }</span>
          </div>
          <input onClick={()=>SearchField()}  className="SignBtn" type="button" value="In"></input>
         
         <div className='NoticeBottom'>
            <div>Guest in</div>
            <div onClick={()=>window.location.href="/SNSSignUp"}>Sign Up</div>
         </div>
          </div>
          </div>
    )
}export default SNSLogIn