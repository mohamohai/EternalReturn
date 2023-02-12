import './SNS.scss';
import { useState, useEffect, useRef, Component } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from '../firebase.js';
import { collection, getDocs, doc, getDoc  } from "firebase/firestore"; 
function SNS(){

    const [dataSearch,setdataSearch] = useState(false)
 //https://firebase.google.com/docs/firestore/quickstart?hl=ko#web-version-9_1
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [UserArr,setUserArr] = useState([]);
    async function SelectAccount (){  //전체호출
        const query = await getDocs(collection(db, "account"));
		query.forEach((doc) => { // forEach: getDocs로 가져온 객체 안에 포함된 반복문 내장함수
            UserArr.push(doc.data())
			console.log(doc.id, doc.data(), doc.data().password); //forEach에서 doc은 도큐멘트 한 개를 의미
		});
        setdataSearch(true)
    }

    async function SelectUserId() { //하나만 호출
        const docRef = doc(db, "account", "admin");
        const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //     console.log(docSnap.data());
        //   } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        //   }
       
      //  console.log(docSnap._document.data.value.mapValue.fields)
        console.log(docSnap)
    } 
    
    useEffect(()=>{ // async: 비동기처리
        SelectAccount()
        SelectUserId()

	}, []);
   
    return(
        <div className='SNS'>
            <div>례프트</div>
            { dataSearch===true ? UserArr.map((row,key)=>{
                return(<div key={key}>{console.log(row.num)}{row.num}</div>)
            }) : "zxc" }
            <div>R</div>
        </div>)
}export default SNS;
