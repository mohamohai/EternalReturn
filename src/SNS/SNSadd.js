import './SNS.scss';
import './SNSadd.css';
import { useState, useEffect, useRef, Component } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, orderBy } from "firebase/firestore";
import firebaseConfig from '../firebase.js';
import { collection, getDocs, doc, getDoc, query, where, setDoc, addDoc,  deleteDoc } from "firebase/firestore"; 
import { useCookies } from 'react-cookie';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture, faImage } from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faYoutube,faFacebook } from '@fortawesome/free-brands-svg-icons'
import UploadImageToS3WithNativeSdk from'./aswsdk';

import AWS from 'aws-sdk'

const S3_BUCKET ='jonghyunportfolio';
const REGION ='ap-northeast-2';


AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})



function SNSView(){
    const [dataSearch,setdataSearch] = useState(false)
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [UserArr,setUserArr] = useState([]);

    const [cookies, setCookie,removeCookie] = useCookies(['guest']);
    const [inuser,setinuser]=useState(cookies.inuserid)

    const [addcontent,setaddcontent]=useState("")

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const [addfilename, setaddfilename]=useState([]);

    const handleFileInput = (e) => {
        setSelectedFile(() => ({SelectedFile: e.target.files}))
        uploadFile(e.target.files)
    }


    const uploadFile = (file) => {
        for(let i=0; i<file.length;i++){
            addfilename.push(file[i].name)
        }
            for(let i =0; i<file.length ;i++){
            const params = {
                ACL: 'public-read',
                Body: file[i],
                Bucket: S3_BUCKET,
                Key: file[i].name
            };
            myBucket.putObject(params)
                .on('httpUploadProgress', (evt) => {
                    setProgress(Math.round((evt.loaded / evt.total) * 100))
                })
                .send((err) => {
                    if (err) console.log(err)
                })
         }
    }

    async function AddData(){
        const docRef = await addDoc(collection(db, "board"), {
            id: cookies.inuserid,
            content:addcontent,
            img:addfilename,
            time: new Date()
          });
          window.location.href='/SNSView'
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

	}, []);
   const loginCheck= () =>{
        if(cookies.inuserid==undefined){
            alert("로그인을 해주세요 안된다면 게스트하던가!")
            window.location.href='/SNSLogIn'
        }else{
            console.log(cookies.inuserid)
        }
   }
   const onChangeText=(e)=>{

   }
  
    return(
        <div className='SNSadd'>
            <div className='SNSContainer'>
                <p>글쓰기</p>
                <p>{cookies.inuserid}</p>
                <textarea placeholder="문구 입력" onChange={(e)=>setaddcontent(e.target.value)}></textarea><br></br>

           

                <input type="file" onChange={handleFileInput} multiple/>
                <div className='btnMo'>
                    <FontAwesomeIcon size='2x' icon={faImage} style={{width:"40px"} }/>{progress}
                </div>
                <button className='SNSaddBtn' onClick={()=>AddData()}>데이터 넣기</button> 

            </div>
        </div>)
}export default SNSView;




