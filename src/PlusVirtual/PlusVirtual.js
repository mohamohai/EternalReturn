import { useState, useEffect, useRef, Component } from "react";
import "./PlusVirtual.scss"

// const MusicArr = [
//   //["제목","가수","주소","시간"],
//     ["비상","임재범","lA2yNzojHEk",500],
//     ["사랑이 어떻게 그래요","이승환","An3BID6vgeo",455],
//     ["좋니","이승기","SdzCJbDX_rE",541],
//     ["응급실","이승기","fF5B1ZH2y7E",420],
//     ["응급실","이승기","fF5B1ZH2y7E",10],
// ]

const MusicArr = [
      ["비상","임재범","lA2yNzojHEk",500],
      ["사랑이 어떻게 그래요","이승환","An3BID6vgeo",455],
      ["좋니","이승기","SdzCJbDX_rE",541],
      ["응급실","이승기","fF5B1ZH2y7E",420],
  ]
  


function  PlusVirtual(){
    const [MusicUrl,setMusicUrl]=useState(MusicArr[0][2]);
    const [MusicTime,setMusicTime]=useState(MusicArr[0][3]);
    const [MusicEffectCnt,setMusicEffectCnt]=useState(0);
    useEffect(()=>{
        changeMusicfunc();
    }, []); 
    useEffect(()=>{
        changeMusicfunc();
    }, [MusicEffectCnt]); 

const changeMusicfunc = () =>{
    let timeSetting = Math.floor(MusicTime/100)*60 + MusicTime%100;
    if(MusicEffectCnt!=MusicArr.length-1){
        let changeMusic = setTimeout(function() {
                setMusicEffectCnt(MusicEffectCnt+1)
                setMusicUrl(MusicArr[MusicEffectCnt+1][2])
                setMusicTime(MusicArr[MusicEffectCnt+1][3])
        },timeSetting*1000);
    }else{
        let changeMusic = setTimeout(function() {
            setMusicEffectCnt(0)
            setMusicUrl(MusicArr[0][2])
            setMusicTime(MusicArr[0][3])
        },timeSetting*1000);
    }
}


       
    return(<div className="VirtualPlus">
        {/* {Math.random().toString(36).substring(2, 3)} */}
        <iframe className="MusicVideo" width="400" height="225" src={`https://www.youtube.com/embed/${MusicUrl}?autoplay=1`} title="Music" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <div onClick={()=> setMusicEffectCnt(0)} className="asdasd">{MusicUrl},{MusicEffectCnt}
                {MusicArr.map((row,key)=>{
                    return(
                        <div key={key} >
                            <img className="MusicThumb" onClick={()=>{setMusicUrl(row[2])
                                                                      setMusicTime(row[3])
                                                                      setMusicEffectCnt(key)
                                                                      console.log(key)
                            }} src={`https://img.youtube.com/vi/${row[2]}/maxresdefault.jpg`}></img>
                        </div>
                    )
                })}
            </div>
            
    </div>)
}export default PlusVirtual





