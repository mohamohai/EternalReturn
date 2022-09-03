import React, { Component } from 'react';
import axios from 'axios';
import '../../mainCss/selectTable.css'
class UserUpdate extends Component {
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
  _modify = async (modiNum) => {
    const modify = prompt(modiNum.name + '을 어떤 이름으로 변경할까요?')

    if(modify !== null) {
      const body = {
        name : modify,
        id : modiNum.id
      }

      const res = await axios('/modify/data', {
        method : 'POST',
        data : { 'modify' : body },
        headers: new Headers()
      })

      if(res.data) {
        alert('데이터를 수정했습니다.')
        return window.location.reload();
      }
    }
  }
  


  render() {
    const { list } = this.state;
    return(
      <div className='App'>
        

        <br /> <br /><br></br>
          <div style={{ height : '250px', overflow : 'auto' }}>
            
          {list.length !== 0
              ? list.map( (modiNum, key) => {
                return(
                  <div key={key} style={{ display : 'grid', lineHeight : '40px', gridTemplateColumns : '32% 35% 30%', width : '50%', marginLeft : '25%'}}>
                    <div> {modiNum.id} </div>
                    <div> {modiNum.name} </div>
                    <div
                      style={{ color : '#ababab' }} 
                      onClick={() => this._modify(modiNum)}> Modify </div>
                  </div>
                )
              })
            
              : null}
          </div>
      </div>
    )
  }
}

export default UserUpdate;