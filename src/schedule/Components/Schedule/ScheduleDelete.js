import React, { Component } from "react";
import axios from "axios";

class ScheduleDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      update: false,
    };
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get("/get/ScheduleS");

    if (res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);
      return this.setState({ list: cover });
    }
    this.setState({ list: res.data });
  };

  _delete = async (info) => {
    const remove = window.confirm(info.title + "을 삭제합니까?");

    if (remove) {
      const body = { id: info.id };
      const res = await axios("/delete/Schedule", {
        method: "POST",
        data: { delete: body },
        headers: new Headers(),
      });

      if (res.data) {
        alert("데이터를 삭제했습니다.");
        return window.location.reload();
      }
    }
  };

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <br /> <br />
        <br></br>
        <div style={{ height: "250px", overflow: "auto" }}>
          {list.length !== 0
            ? list.map((info, key) => {
                return (
                  <div className="colStyle" key={key}>
                    <div> {info.account} </div>
                    <br></br>
                    <div> {info.title} </div>
                    <br></br>
                    <div> {info.content} </div>
                    <br></br>
                    <div> {info.location}</div>
                    <br></br>
                    <div> {info.time} </div>
                    <br></br>
                    <div> {info.etc} </div>
                    <br></br>

                    <div
                      style={{ color: "#ababab" }}
                      onClick={() => this._delete(info)}
                    >
                      {" "}
                      Delete{" "}
                    </div>
                  </div>
                );
              })
            : "a"}
        </div>
      </div>
    );
  }
}

export default ScheduleDelete;
