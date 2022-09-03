import React, { Component } from 'react';
import axios from 'axios';
import '../../mainCss/selectTable.css'
class UserDelete extends Component {
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

  _delete = async (info) => {
    const remove = window.confirm(info.name + '을 삭제합니까?');

    if(remove) {
      const body = { id : info.id }
      const res = await axios('/delete/data', {
        method : 'POST',
        data : { 'delete' : body },
        headers: new Headers()
      })
      
      if(res.data) {
        alert('데이터를 삭제했습니다.')
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
              ? list.map( (info, key) => {
                return(
                  <div className='colStyle' key={key} >
                   
                    <div style={{ float : 'left'}}> {info.account}</div>
                    <div style={{ float : 'left'}}> {info.password}</div>
                    <div style={{ float : 'left'}}> {info.name}</div>
                    <div style={{ float : 'left'}}> {info.image}</div>
                    <div style={{ float : 'left'}}> {info.birthday}</div>
                    <div style={{ float : 'left'}}> {info.gender}</div>
                    <div style={{ float : 'left'}}> {info.job} </div>
                    
                    <div
                      style={{ color : '#ababab' }} 
                      onClick={() => this._delete(info)}> Delete </div>
                  </div>
                )
              })
            
              : 'a'}
          </div>
      </div>
    )
  }
}

export default UserDelete;