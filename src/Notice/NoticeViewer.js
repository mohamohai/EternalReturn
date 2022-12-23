import { useState, useEffect, useRef, Component } from "react";
import axios from "axios";


function NoticeViewer(){
    const [Notice,setNotice]=useState([]);
    const [hit, sethit] = useState(false)


    async function getNotice() {
        try {
          //응답 성공
          const response = await axios.get('/api/Notice');
          console.log(response);
          setNotice(response)
          sethit(true);
        } catch (error) {
          //응답 실패 
          console.error(error);
        }
      }
     
  
        useEffect(()=>{
          getNotice();
   
        },[])
    return(
        <div>
                {hit?
              Notice.data.data.map((row,index)=>{
                return(
                <div>
                  <div> {row.Id}{row.Title} {row.Content}</div>
                </div>
                )
              })
            :console.log("Fail")}

        </div>
    )
}export default NoticeViewer