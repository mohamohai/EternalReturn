import React, { Component, useState } from "react";
import axios from "axios";
import "./Calendar.css";
function Calendar(){
    const CalendarDay = document.getElementsByClassName("CalendarDay");
    const CalendarDayDate = document.getElementsByClassName("CalendarDayDate");
    const CalendarDayTitle = document.getElementsByClassName("CalendarDayTitle");
    const CalendarDayContent = document.getElementsByClassName("CalendarDayContent");
    const maxArr = [31,30,31,30,31,30,31,31,30,31,30,31]
    const dataarr = ["20221220","title","content"]
    const DayCnt = ["일","월","화","수","목","금","토","일","월","화","수","목","금","토","일","월","화","수","목","금","토","일","월","화","수","목","금","토","일","월","화","수","목","금","토","일","월","화","수","목","금","토"]
    const DayKor = ["일","월","화","수","목","금","토"]
    const today = {
        year: new Date().getFullYear(), //오늘 연도
        month: new Date().getMonth() + 1, //오늘 월
        date: new Date().getDate(), //오늘 날짜
        day: new Date().getDay(), //오늘 요일
    };
    const [abx,setabx]=useState(0);
    useState(()=>{
        for(let i =0; i<CalendarDay.length;i++){
            if(new Date().getDay()==i){
                for(let j=0; j<=maxArr[new Date().getMonth()];j++){
                    CalendarDay[i+j].innerText="asd";
                }
            }

        }
    },[abx])
    return(
        <div className="CalendarN">
            <div className="CalendarNContainer">
            {DayCnt.map((row,index)=>{
                return(
                <div className="CalendarDay">
                    <div className="CalendarDayDate">
                    </div>
                    <div className="CalendarDayTitle">
                    </div>
                    <div className="CalendarDayContent">
                    </div>
                </div>
                )
                })}
            </div>
            
            
        </div>
    )
}export default Calendar