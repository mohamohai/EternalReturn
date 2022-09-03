import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import './ScheduleSelect.css'

class ScheduleId extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list : [],
      update : false,
    }
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get('/get/ScheduleId');

    if(res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);
      return this.setState({ list : cover })
    }
    this.setState({ list : res.data });
  }

  render() {
    const { list } = this.state;
    return(
      <div className='ScheduleFull'>
         <br/>
         <table className="MonthView">
         <tr className='MonthShow'>
            <td colSpan={7}>5월</td>
          </tr>
          <tr className='MonthDay'>
            <td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td>토</td><td>일</td>
          </tr>
           {list.length !== 0
             ? list.map( (info, key) => {
              return(
                <div key={key} className='ScheduleData' >
             
                </div>
              )
            }) 
           :'plz f5'}  
           </table>
      </div>
    )
  }
}

export default ScheduleId;