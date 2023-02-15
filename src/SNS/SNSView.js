import './SNS.scss';
import { useState, useEffect, useRef, Component } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, orderBy } from "firebase/firestore";
import firebaseConfig from '../firebase.js';
import { collection, getDocs, doc, getDoc, query, where, setDoc, addDoc,  deleteDoc } from "firebase/firestore"; 
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";
import FileUp from './aswsdk';
function SNSView(){
    const [dataSearch,setdataSearch] = useState(false)
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [UserArr,setUserArr] = useState([]);

    const [cookies, setCookie,removeCookie] = useCookies(['guest']);
    const [inuser,setinuser]=useState(cookies.inuserid)


    const [SearchInuserData,setSearchInuserData]=useState([]);
    const [SearchInuserDatahit,setSearchInuserDatahit]=useState(false);
    const [SearchBoradData,setSearchBoradData]=useState([]);
    const [SearchBoradDatahit,setSearchBoradDatahit]=useState(false);
    /////////////////////////데이터 업인데 같은 거 있으면 체인지 부분으로
    async function SetData(){
        await setDoc(doc(db, "account", "admin3"), { //여기에 쿠키나 세션 변수로 아이디 잡고 ㅇㅇ
            name: "이종현",
            num: "CA",
            password: "USA"
          });
    }

    /////////////////////////데이터 추가

    
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
  
        // console.log("----------")
        // const q2 = query(collection(db, "mapping"),where("name","==","admin"));
        // const querySnapshot2 = await getDocs(q2);
        // querySnapshot2.forEach((doc2) => {
        // // doc.data() is never undefined for query doc snapshots
        // console.log(doc2.id, " => ", doc2.data());
        // });
        // console.log("----------")
    } 

    
    ///////////////////////////////////////하나만 계정정보 찾는 용도로 사용중
    async function SearchInuser() { //하나만 호출 where 하나 찾아서
        const q = query(collection(db, "account"), where("id", "==", inuser));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());  
        setSearchInuserData(doc.data())
        });
        setSearchInuserDatahit(true)
    }
    async function SearchBoard (){  //전체호출 이건 웨어 후하게 그냥 전체 글 불러오기
        const q = query(collection(db, "board"),orderBy("time", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          SearchBoradData.push([doc.data(),doc.id])
        });
        console.log(SearchBoradData)

        setSearchBoradDatahit(true)
    } 

    async function AddData(){
        const docRef = await addDoc(collection(db, "board"), {
            
            id: cookies.inuserid,
            content:"세번째",
            img:["bg_sec00.jpg"],
            time: new Date()
          });
    }

    async function DeleteData(id,docid) {//컬렉션   문서이름으로 해야 하는데 이게... 되나? 랜덤값으로 해놨는데 흠
        if(id==cookies.inuserid){
            await deleteDoc(doc(db, "board", docid));
        }else{
            alert("본인이 작성한 글이 아닙니다.")
        }
    }
 
    useEffect(()=>{ 
        // async: 비동기처리
        // SearchCollection()
         //SearchDocument()
        // SearchField()
        // SetData()
       // AddData()
      // DeleteData()
      loginCheck();
      SearchInuser();
      SearchBoard();
	}, []);
   const loginCheck= () =>{
    if(cookies.inuserid==undefined){
        alert("로그인을 해주세요 안된다면 게스트하던가!")
        window.location.href='/SNSLogIn'
    }else{
        console.log(cookies.inuserid)
   }
   }
   const logout=()=>{
    removeCookie('inuserid');
    window.location.href='/SNSLogIn'
   }
   const loginGuest=()=>{
    setCookie('inuserid', "guest", { path: '/' ,maxAge : 600});
   }
    return(
        <div className='SNS'>
            <nav className='SNSGNB'>
                {SearchInuserDatahit?SearchInuserData.name:"거짓"}
                <button onClick={()=>logout()}>로그아웃</button>      
                <button onClick={()=>loginGuest()}>게스트로그인</button>      
                <button onClick={()=>SearchBoard()}>데이터불</button> 
                <Link to="/SNSadd">Expenses</Link>
            </nav>
            <div className='SNSBoard'>
                {SearchBoradDatahit? SearchBoradData.map((row,key)=>{
                  
                    return(
                        <div className='SNSBoardElement' key={key}>
                            
                            <div className='SNSBoardElementTop'><img className='SNSBoardElementThumbPic'/>{row[0].id}<button className='deletex' onClick={()=>DeleteData(row[0].id,row[1])}>x</button></div>
                            {row[0].img.length==0?"":
                            <div className='SNSBoardElementImg'>
                                <div className='ssxx'   style={{
                                        maxWidth:"1200px",
                                        width:"1200px",
                                        background:`url(https://jonghyunportfolio.s3.ap-northeast-2.amazonaws.com/${row[0].img[0]})`,
                                        backgroundRepeat:"no-repeat",
                                        backgroundSize:"contain",
                                        backgroundPosition:"center"
                                    }}></div>
                                {/* <span>{row[0].img.length}</span> */}
                            </div>}
                            <div className='SNSBoardElementContent'>{row[0].content}</div>
                        </div>
                    )
                }):""}
            </div>
        </div>)
}export default SNSView;




