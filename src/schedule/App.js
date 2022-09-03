import { Component } from 'react';

import React, {useState}         from 'react';


import {GNB, NotFound} from './mainContents/mainExport';
import {ScheduleView ,ScheduleSelect, ScheduleDelete, ScheduleCalendarMonth, ScheduleAdd} from './Components/Schedule/ScheduleExport';
import {SignUp, SignIn} from './Components/Sign/SignExport';

import UserSelect from './Components/User/UserSelect';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";


class App extends Component{
    
  render(){
    
    
  

    return(
 
      <div>
        <BrowserRouter>
        <GNB></GNB>


        <Switch>
            <Route exact path="/"         component={ScheduleCalendarMonth} />
            <Route path="/SignIn"         component={SignIn} />
            <Route path="/SignUp"         component={SignUp} />
            <Route path="/UserSelect"     component={UserSelect} />
            <Route path="/ScheduleAdd"    component={ScheduleAdd}/>
            <Route path="/ScheduleDelete" component={ScheduleDelete}/>
            <Route path="/ScheduleView"   component={ScheduleView}/>
            <Route path="whereTest"       component={ScheduleSelect}/>


            <Route path='*'               component={NotFound}/>
            
        </Switch>
        </BrowserRouter>
        
       </div>
    );
  }
}  
export default App;
