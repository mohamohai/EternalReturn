import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Cheerio } from "cheerio";
class Statistics extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
   

first  = async() =>{
    let ab = await axios.get("https://playeternalreturn.com/stats");
    console.log(ab.data)
}


componentDidMount = () => {
    this.first();
  };
    render(){


    return(<div>통계</div>)
    }
}
export default Statistics;


