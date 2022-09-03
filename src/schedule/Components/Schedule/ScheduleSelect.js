import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import './ScheduleSelect.css'

class ScheduleSelect extends Component {
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
    const res = await axios.get('/get/Schedule');

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
           {list.length !== 0
             ? list.map( (info, key) => {
              return(
                <div key={key} className='ScheduleData' >
                  <div > {info.account} </div><br></br>
                  <div > {info.title}   </div><br></br>
                  <div > {info.content} </div><br></br>
                  <div > {info.location}</div><br></br>
                  <div > {info.time}    </div><br></br>
                  <div > {info.etc }    </div><br></br>
                </div>
              )
            }) 
           :'plz f5'}  
      </div>
    )
  }
}

export default ScheduleSelect;