import React, { Component } from "react";
import axios from "axios";
import "./css/ERMain.css";

class ERMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImg: "Season3",
    };
  }
  mama = () => {
    this.setState({ backgroundImg: "Season3" });
  };

  mama2 = () => {
    this.setState({ backgroundImg: "Season6" });
  };
  render() {
    return (
      <div
        id="ERMain"
        style={{
          width: "1920px",
          height: "80vh",
          background: `linear-gradient( to bottom,        rgba(255, 255, 255, 0) 10%,        rgba(255, 255, 255, 0.25) 25%,        rgba(255, 255, 255, 0.5) 50%,        rgba(255, 255, 255, 0.75) 75%,        rgba(255, 255, 255, 1) 100%        ), url('/image/Main/${this.state.backgroundImg}.png')   `,
          backgroundSize: "cover",
        }}
      >
        <button onClick={this.mama}>시즌3</button>
        <button onClick={this.mama2}>시즌6</button>
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

        <div id="Main2"></div>
      </div>
    );
  }
}

export default ERMain;
