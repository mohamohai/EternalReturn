import './SNS.scss';
import { useState, useEffect, useRef, Component } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, orderBy } from "firebase/firestore";
import firebaseConfig from '../firebase.js';
import { collection, getDocs, doc, getDoc, query, where, setDoc, addDoc,  deleteDoc  } from "firebase/firestore"; 

import FileUp from './aswsdk';
function SNS(){
    const [dataSearch,setdataSearch] = useState(false)
 //https://firebase.google.com/docs/firestore/quickstart?hl=ko#web-version-9_1
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [UserArr,setUserArr] = useState([]);
    /////////////////////////데이터 업인데 같은 거 있으면 체인지 부분으로
    async function SetData(){
        await setDoc(doc(db, "account", "admin3"), { //여기에 쿠키나 세션 변수로 아이디 잡고 ㅇㅇ
            name: "이종현",
            num: "CA",
            password: "USA"
          });
    }
    /////////////////////////데이터 추가
    async function AddData(){
        const docRef = await addDoc(collection(db, "mapping"), {
            name: "guest",
            location: "경기광주역",
            time: new Date()
          });
          console.log("Document written with ID: ", docRef.id);
    }
    ////////////////////////////////////컬렉션단위 호출
    async function SearchCollection (){  //전체호출
        const query = await getDocs(collection(db, "mapping"));
		query.forEach((row) => { // forEach: getDocs로 가져온 객체 안에 포함된 반복문 내장함수
            UserArr.push(row)
			console.log(row.id, row.data().time.toDate()); //forEach에서 doc은 도큐멘트 한 개를 의미
		});
        setdataSearch(true)
    }
    //////////////////////////////////문서 단위 호출
    async function SearchDocument() { //전체 호출
        const docRef = doc(db, "account", "admin3");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
       
      //  console.log(docSnap._document.data.value.mapValue.fields)
      //  console.log(docSnap.data())
    } 
    ////////////////////////////////필드 단위 호출
    async function SearchField() { //하나만 호출 where 하나 찾아서
        const q = query(collection(db, "mapping"), where("name", "==", "guest"), where("location","==","경기광주역"),orderBy("time", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data().time.toDate())
        console.log(doc.id, " => ", doc.data());  
        });
  
    } 
    
    ///////////////////////////////////////하나만
    
    async function DeleteData() {//컬렉션   문서이름으로 해야 하는데 이게... 되나? 랜덤값으로 해놨는데 흠
        await deleteDoc(doc(db, "mapping", "PpXXLrOMLUnqtuDxtQD1"));
    }
    
    
    useEffect(()=>{ // async: 비동기처리
        // SearchCollection()
         //SearchDocument()
        // SearchField()
        // SetData()
       // AddData()
      // DeleteData()
	}, []);
   
    return(
        <div className='SNS'>
            <div>례프트</div>
            <div>
                <button onClick={()=>{SearchCollection()}}>컬렉션찾기</button>
                <button onClick={()=>{SearchDocument()}}>문서찾기</button>
                <button onClick={()=>{SearchField()}}>필드찾기</button>
                <button onClick={()=>{SetData()}}>수정하기</button>
                <button onClick={()=>{AddData()}}>추가데이터</button>
                <button onClick={()=>{DeleteData()}}>딜리트데이터</button>
            </div>
            { dataSearch===true ? UserArr.map((row,key)=>{
                return(<div key={key}>{row.id}{console.log(row.data().time.toDate())}</div>)
            }) : "zxc" }
            <div><FileUp></FileUp></div>
        </div>)
}export default SNS;




