import React, { Component } from "react";
import axios from "axios";

import Character_Infomation from "./ER/Character_Information/Character_Infomation.js";
import GNB from "./ER/Skeleton/GNB.js";
import ERMain from "./ER/Skeleton/ERMain.js";
import Record from "./ER/Record/Record.js";
import Search_User from "./ER/Search_User/Search_User.js";
import { BrowserRouter, Route, Link, Routes, Switch } from "react-router-dom";

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
            <Route exact path="/" element={<ERMain />} />
            <Route
              path="/Character_Infomation"
              element={<Character_Infomation />}
            />
            <Route path="/Search_User" element={<Search_User />} />
            <Route path="/Record" element={<Record />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
