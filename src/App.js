import React, { Component } from "react";
import axios from "axios";


import Character_Infomation from "./ER/Character_Information/Character_Infomation.js";

import ERMain from "./ER/Skeleton/ERMain.js";
import Record from "./ER/Record/Record.js"; //뭐여 이건;;
import Search_User from "./ER/Search_User/Search_User.js";
import GameIntroduce from "./ER/GameIntroduce/GameIntroduce.js";
import Statistics from "./ER/Statistics/Statistics.js";
import Character_Detail from "./ER/Character_Information/Character_Detail.js";
import Character_Chose from "./ER/Character_Information/Character_Chose.js";
import Front from "./Front/Front.js";

import Ingredient from "./ingredient.js";
import Pixel from "./MainSite.js";

import CopyWeb from "./copyWeb/copyWeb.js";

import Vhom from "./VHOM/vhom.js";
import Stealien from "./Stealien/Stealien.js";
import My from "./my/my.js";
import MyMy from "./mymy/mymy.js"
import Weather from "./Weather/Weather.js"
import HerenNow from "./HerenNow/HerenNow.js"
import LibraryBox from "./copyWeb/LibraryBox.js";
import Zip from "./Zip/Zip.js";
import FourZeroFour from "./FourZeroFour/FourZeroFour.js"

import Oconnect from "./Oconnect/Oconnect.js";
import Hyun from "./Hyun/Hyun.js";
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

import {
  SearchPlayer,
  Eternal,
  Ereturn,
  Character_Introduce,
}from "./ER/ERExport.js";
import{
  CalendarN,
}from "./Calendar/CalExport"



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
     
        <Routes>
          <Route exact path="/" element={<Front/>} />
          <Route path="/in" element={<Ingredient />} />
          <Route
            path="/ER"    element={<ERMain />}
          />
          <Route
            path="/Character_Infomation"
            element={<Character_Infomation />}
          />
          <Route path ="/CA" element={<ScheduleMain/>}/>
          <Route path="/Character_Infomation/Character_Detail/:CharName" element={<Character_Detail/>}/>
          <Route path="/Search_User" element={<Search_User />} />
          <Route path="/Search_User/:NickName" element={<Search_User />} />
          <Route path="/Record" element={<Record />} />
          <Route path="/GameIntroduce" element={<GameIntroduce/>}/>
          <Route path="/Statistics" element={<Statistics/>}/>


          {/* <Route path="/ScheduleMain" element={<ScheduleMain/>}/> */}
        
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/testView" element={<testView/>} />
          <Route path="/testClass" element={<testClass/>} />
          {/* <Route path="/ScheduleMain" element={<ScheduleMain/>} /> */}
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


          <Route path="/copyWeb" element={<CopyWeb/>}/>
          
          <Route path="/vhom" element={<Vhom/>}/>
          <Route path="/Stealien" element={<Stealien/>}/>
          <Route path="/HerenNow" element={<HerenNow/>}/>
          <Route path="/My" element={<My/>}/>
          <Route path="/MyMy" element={<MyMy/>}/>
          <Route path="/Main" element={<Weather/>}/>
          <Route path="Pixel"  element={<Pixel />} />
          <Route path="LibraryBox"  element={<LibraryBox />} />
          <Route path="Zip" element={<Zip/>}/>
          <Route path="Oconnect" element={<Oconnect/>}/>
          <Route path ="IK" element={<Hyun/>}/>
          <Route path="/E" element={<SearchPlayer/>}/>
          <Route path="/E/:key1" element={<SearchPlayer/>}/>
          <Route path="/Eternal/:key1" element={<Eternal/>}/>
          <Route path="/Eternal/:key1/:key2" element={<Ereturn/>}/>
          <Route path="/Character" element={<Character_Chose/>}/>
          <Route path="/Character/:key1" element={<Character_Introduce/>}/>


          <Route path="/Weather" element={<CalendarN/>}/>

          <Route path="*"  element={<FourZeroFour />} />

            
          
        </Routes>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
