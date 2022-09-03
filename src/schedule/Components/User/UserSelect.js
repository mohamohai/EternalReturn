import React, { Component } from 'react';
import axios from 'axios';

import '../../mainCss/UserSelect.css';

class UserSelect extends Component {
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
    const res = await axios.get('/get/data');

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
      <div className='App'>
        

        <br /> <br /><br></br>
          <div style={{  overflow : 'auto' }}>
            
            {list.length !== 0
              ? list.map( (info, key) => {
                return(
                  <div className='UserInfo' key={key} >
                    <div style={{ float : 'left'}}> {info.id}</div><br></br>
                    <div style={{ float : 'left'}}> {info.account}</div><br></br>
                    <div style={{ float : 'left'}}> {info.password}</div><br></br>
                    <div style={{ float : 'left'}}> {info.name}</div><br></br>
                    <div style={{ float : 'left'}}> {info.image}</div><br></br>
                    <div style={{ float : 'left'}}> {info.birthday}</div><br></br>
                    <div style={{ float : 'left'}}> {info.gender}</div><br></br>
                    <div> {info.job} </div>ㅡㅡ
                    
                  
                    
                  </div>
                )
              })
            
              : 'plzF5'}
          </div>
      </div>
    )
  }
}

export default UserSelect;