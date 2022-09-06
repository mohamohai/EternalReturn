import React, { Component } from "react";
import axios from "axios";

import Character_Infomation from "./ER/Character_Information/Character_Infomation.js";
import GNB from "./ER/Skeleton/GNB.js";
import ERMain from "./ER/Skeleton/ERMain.js";
import Record from "./ER/Record/Record.js";
import Search_User from "./ER/Search_User/Search_User.js";
import GameIntroduce from "./ER/GameIntroduce/GameIntroduce.js";
import Statistics from "./ER/Statistics/Statistics.js";
import Character_Detail from "./ER/Character_Information/Character_Detail.js";
import MainSite from "./MainSite.js";

import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Switch,
  useParams,
} from "react-router-dom";

import {
  ScheduleMain,
  ScheduleDelete,
  ScheduleAdd,
  ScheduleAddSelect,
  testViewTwo,
  ScheduleDeleteModal,
  ScheduleDeleteSelect,
  ScheduleUpdate,
  testView,
  testClass,
} from "./schedule/Components/Schedule/ScheduleExport";
import { SignUp, SignIn } from "./schedule/Components/Sign/SignExport";

import UserSelect from "./schedule/Components/User/UserSelect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <GNB></GNB>
        <Routes>
          <Route exact path="/" element={<MainSite />} />
          <Route
            path="/ER"
            element={<ERMain />}
          />
          <Route
            path="/Character_Infomation"
            element={<Character_Infomation />}
          />
          <Route path="/Character_Infomation/Character_Detail/:CharName" element={<Character_Detail/>}/>
          <Route path="/Search_User" element={<Search_User />} />
          <Route path="/Search_User/:NickName" element={<Search_User />} />
          <Route path="/Record" element={<Record />} />
          <Route path="/GameIntroduce" element={<GameIntroduce/>}/>
          <Route path="/Statistics" element={<Statistics/>}/>
          

          <Route path="/ScheduleMain" element={<ScheduleMain/>}/>
        
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/testView" element={<testView/>} />
          <Route path="/testClass" element={<testClass/>} />
          <Route path="/ScheduleMain" element={<ScheduleMain/>} />
          <Route path="/ScheduleAdd/" element={<ScheduleAdd/>} />
          <Route
            path="/ScheduleAddSelect/:Date/:Clock"
            element={<ScheduleAddSelect/>}
          />
          <Route path="/ScheduleDelete" element={<ScheduleDelete/>} />
          <Route
            path="/ScheduleDeleteSelect/:Date/:Title/"
            element={<ScheduleDeleteSelect/>}
          />
          <Route
            path="/ScheduleUpdate/:Id/:Title/:Content/:Location/:Etc/:Date/:Clock"
            element={<ScheduleUpdate/>}
          />

          {/* 
          <Route
            path="/ScheduleUpdate/:Date/:Title/:content/:location/:time/:etc" element={}/> */}
          <Route path="/UserSelect" element={<UserSelect/>} />

          <Route path="*"  element={<MainSite />} />
          <Route exact path="/" element={<MainSite />} />

        </Routes>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
