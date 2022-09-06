import { Component } from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const axios = require("axios");
const TestView = () => {
  const url = window.location.href;
  const urlp = window.location.search;

  let urlpc = decodeURI(decodeURIComponent(urlp));
  return (
    <div>
      <div>{url}</div>
      <br></br>
      <div>{urlpc}</div>
    </div>
  );
};

export default TestView;
