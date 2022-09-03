import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import './SignIn.css';

import { BrowserRouter,Route, Link,Switch } from "react-router-dom";

class SignIn extends Component{
    constructor(props) {
      super(props)
      this.state = {
        account  : '',
        password : ''
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
     
      
      const data = {
                    account:account,
                    password:password
                   
      };
      e.preventDefault();
     
      const res = await axios('/add/data', {
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
          <form method='POST' onSubmit={this._addData} className="SignInBox">
            <h2>Login</h2>
            <ul>
              <li><input type='text'      name="account"  maxLength='20' placeholder="ID"       className="idpa"  onChange={(e) => this.SignUp(e)}/></li><br></br> 
              <li><input type='password'  name="password" maxLength='20' placeholder="password" className="idpa"  onChange={(e) => this.SignUp(e)}/></li><br></br>
              <li><input type='submit' value='Add' className='idpaBtn'/></li>              
              <li className='SignInBoxSignUp'><Link to ="SignUp">Create account</Link></li>
            </ul>
          </form>
        </div>
      );  
    }
  }  
  export default SignIn;
