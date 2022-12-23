import { useState, useEffect, useRef, Component } from "react";
import axios from "axios";

function NoticeInsert(){

    const [insertId,setinsertId]=useState('admin');
    const [insertPassword,setinsertPassword]=useState('');
    const [insertTitle,setinsertTitle]=useState('');
    const [insertContent,setinsertContent]=useState('');
    const newPosting = () => {
      console.log(insertId,insertPassword,insertTitle,insertContent)
        axios.post('/api/NoticeInsert',{
          params: {
            post_user_id : insertId,
            post_password : insertPassword,
            post_title: insertTitle,
            post_content: insertContent,
            //sessionStorage.getItem('user_id'),
            
          } 

        })
          .then(res => {
            console.log(res.data)

            alert("글 작성이 완료되었습니다.")
            document.location.href = '/'
          })
          .catch(function(error){
           console.log(error);
           console.log("에러위치")
        })
    }
    return(<div>
            <input type="text" onChange={(e)=>setinsertId(e.target.value)}></input>id<br></br>
            <input type="text" onChange={(e)=>setinsertPassword(e.target.value)}></input>비번<br></br>
            <input type="text" onChange={(e)=>setinsertTitle(e.target.value)}></input> 제목<br></br>
            <input type="text" onChange={(e)=>setinsertContent(e.target.value)}></input> 내용 <br></br>
            <input type="button" onClick={()=>newPosting()} value="asd"></input>
            </div>)
}export default NoticeInsert