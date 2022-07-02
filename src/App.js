import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  _addData = async (e) => {
    const { name } = this.state;
    e.preventDefault();

    const res = await axios("/add/data", {
      method: "POST",
      data: { data: name },
      headers: new Headers(),
    });

    if (res.data) {
      alert("데이터를 추가했습니다.");
      return window.location.reload();
    }
  };

  _nameUpdate(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <h3>
          {" "}
          Welcome to <u> sejun </u> Blog!{" "}
        </h3>
        <h5> https://sejun3278.blog.me/ </h5>

        <br />
        <form method="POST" onSubmit={this._addData}>
          <input
            type="text"
            maxLength="10"
            onChange={(e) => this._nameUpdate(e)}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default App;
