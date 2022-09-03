import { Component } from 'react';
import React, {useState} from 'react';
import axios from 'axios';
import './ScheduleAdd.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalPick from './Calendar'
class ScheduleAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            account : '',
            title: '',
            content: '',
            location:'',
            time: '',
            etc:''
            
        }
    }

   
    ScheduleAdd(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
      }
    
      _addData = async(e) => {
      
        const {account}     = this.state;
        const {title}       = this.state;
        const {content}     = this.state;
        const {location}    = this.state;
        const {time}        = this.state;
        const {etc}         = this.state;
        
        
        const data = {
                      account:sessionStorage.getItem('uid'),
                      title:title,
                      content:content,   
                      location:location,
                      time:time,
                      etc:etc
                      
        };
        e.preventDefault();
       
        const res = await axios('/add/Schedule', {
          method : 'POST',
          data :  data,
          headers: new Headers()
        })
        
       
          alert('데이터를 추가했습니다.');
          return window.location.reload();
      
      }

    render(){
    
        return(
          <div> 
            <form method='POST' onSubmit={this._addData} className="ScheduleAddBox">
            <CalPick></CalPick>
              <input className="ScheduleAddTitle"     type='text'  name="title"    maxLength='20' placeholder="titlePlz"   onChange={(e) => this.ScheduleAdd(e)}/><br></br>
              <input className="ScheduleAddContent"   type='text'  name="content"  maxLength='20' placeholder="content"    onChange={(e) => this.ScheduleAdd(e)}/><br></br>
              <input className="ScheduleAddLocation"  type='text'  name="location" maxLength='20' placeholder="location"   onChange={(e) => this.ScheduleAdd(e)}/><br></br>
              <input className="ScheduleAddTime"      type='text'  name="time"     maxLength='20' placeholder="time"       onChange={(e) => this.ScheduleAdd(e)}/><br></br>
              <input className="ScheduleAddEtc"       type='text'  name="etc"      maxLength='20' placeholder="etc"        onChange={(e) => this.ScheduleAdd(e)}/><br></br>
              <input className="ScheduleAddBtn"       type='submit' value='Add' />
            </form>
          </div>
        );
      }
    }  
export default ScheduleAdd;