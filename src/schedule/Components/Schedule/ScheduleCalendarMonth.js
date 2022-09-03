import { Component } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import "./ScheduleCalendarMonth.css";
import Modal from 'react-awesome-modal';




class ScheduleCalendarMonth extends Component { //달력 양식
  
  constructor(props){
    super(props);
      this.state = {
        visible : false
    }
  }
  _openModal = function() {
    this.setState({
        visible : true
    });
  }
  
  _closeModal = function() {
    this.setState({
        visible : false
    });
  }


  render() {
    let ScheduleContent = "여기서부터 여기까지입니다.";
    return(
      <div className='ScheduleCalendarMonth'>
        
    
        <h5 onClick={() => this._openModal()}> 여기에 달력값 </h5>
  <Modal visible={this.state.visible} width="800" height="800" effect="fadeInDown" onClickAway={() => this._closeModal()}>

    <div>
      {ScheduleContent}<br></br>
      <input  value='닫기' type='button' onClick={() => this._closeModal()}/>
    </div>
  </Modal>


         <table className="MonthView">
         <tr className='MonthShow'>
            <td colSpan={7}>5월</td>
          </tr>
          <tr className='MonthDay'>
            <td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td>토</td><td>일</td>
          </tr>
          <tr className='MonthRow'>
            <td>1 </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className='MonthRow'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className='MonthRow'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className='MonthRow'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr className='MonthRow'>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>

         </table>
             
      </div>
    )
  }
}

export default ScheduleCalendarMonth;