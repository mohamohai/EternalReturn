import { Component } from "react";
import React, { useState } from "react";

const axios = require("axios");
class testClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: "",
      title: "",
      content: "",
      location: "",
      time: "",
      etc: "",
      hour: "",
      min: "",
      clock: "",
      year: new Date().getFullYear() + "",
    };
  }
  getdataplz = () => {
    let dataa = [];

    return console.log(dataa);
  };
  render() {
    return <div>{this.getdataplz()}</div>;
  }
}
export default testClass;
