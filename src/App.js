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
import ScheduleMain from "./schedule/Components/Schedule/ScheduleMain.js";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Switch,
  useParams,
} from "react-router-dom";

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
            

          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
