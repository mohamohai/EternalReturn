import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import '../mainCss/SignIn.css';

class SignIn extends Component{
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

    
    render(){

      const { list } = this.state;
      return(
        <div> 
            
          
          <form method='POST' onSubmit={this._addData} className="SignInBox">
            <h2>Login</h2>
            <ul>
              <li>Account</li>
              <li><input type='text'  name="account"  maxLength='20' placeholder="ID"         onChange={(e) => this.SignUp(e)}/></li><br></br>
              <li>Password</li> 
              <li><input type='password'  name="password" maxLength='20' placeholder="password"   onChange={(e) => this.SignUp(e)}/></li><br></br>
              <li><input type='submit' value='Add' /></li>
            </ul>
          </form>
        </div>
      );  
    }
  }  
  export default SignIn;
