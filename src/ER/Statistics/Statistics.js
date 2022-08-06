import React, { Component, useState, useEffect } from "react";
import axios from "axios";

class Statistics extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
   

first  = async() =>{


    const axios = require('axios');
    axios.get(`https://thebook.io/080212`)
    .then(dataa => {
        console.log(dataa);
    });

    
}


componentDidMount = () => {
    this.first();
  };
    render(){


    return(<div>통계</div>)
    }
}
export default Statistics;


