import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import './SignUp.css';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
class SignUp extends Component{
    constructor(props) {
      super(props)
      this.state = {
        account  : '',
        name     : '',
        password : '',
        image    : '',
        birthday : '',
        gender   : '',
        job      : ''
      }
    }
   
    SignUp(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }
   
    _addData = async(e) => {
      
      const {account}  = this.state;
      const {password} = this.state;
      const {name}     = this.state;
      const {image}    = this.state;
      const {birthday} = this.state;
      const {gender}   = this.state;
      const {job}      = this.state;
      
      const data = {
                    account :account,
                    password:password,
                    name    :name,   
                    image   :image,
                    birthday:birthday,
                    gender  :gender,
                    job     :job
      };
      e.preventDefault();
     
      const res = await axios('/add/data', {
        method : 'POST',
        data :  data,
        headers: new Headers()
      })
      
     
        alert('회원가입 완료');
        return window.location.href="";
    }
    
    render(){
      return(
        <div> 
          <form method='POST' onSubmit={this._addData} className="SignUpBox">
            <input type='text'      name="account"  maxLength='20' placeholder="ID"         onChange={(e) => this.SignUp(e)}/><br></br>
            <input type='password'  name="password" maxLength='20' placeholder="password"   onChange={(e) => this.SignUp(e)}/><br></br>
            <input type='text'      name="name"     maxLength='20' placeholder="name"       onChange={(e) => this.SignUp(e)}/><br></br>
            <input type='text'      name="image"    maxLength='20' placeholder="image"      onChange={(e) => this.SignUp(e)}/><br></br>
            <input type='text'      name="birthday" maxLength='20' placeholder="birthday"   onChange={(e) => this.SignUp(e)}/><br></br>
            <input type='text'      name="job"      maxLength='20' placeholder="job"        onChange={(e) => this.SignUp(e)}/><br></br>
          남<input type='radio'     name="gender"   value="남"     onChange={(e) => this.SignUp(e)}/><br></br>
          여<input type='radio'     name="gender"   value="여"     onChange={(e) => this.SignUp(e)}/><br></br>
            <input type='submit'    value='Add' />
          </form>
        </div>
      );
    }
  }  
  export default SignUp;
