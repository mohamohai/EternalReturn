import React, { Component } from "react";
import axios from "axios";
import "./css/ERMain.css";
class ERMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="ERMain">
        {/* <img
          id="MainImg"
          src="/image/Character_Img/Rio/Thumbnail/Default/Full.png"
        /> */}
        <form action="/Search_User/">
          <input
            className="SearchNickNameBox"
            type="text"
            name="NickName"
            maxLength="50"
            placeholder="닉네임"
            onChange={(e) => this.NickNameAdd(e)}
            onClick={this.conlog}
            href={`Search_User/?NickName=${this.state.TextBoxNickName}`}
          />
          <a href={`Search_User/?NickName=${this.state.TextBoxNickName}`}></a>
        </form>
      </div>
    );
  }
}

export default ERMain;
