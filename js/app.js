import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";
import './goals.js'
import MyGoals from "./goals";
const goals = document.querySelector("body > header > div > ul > li:nth-child(1) > a")

function App() {
  return <MyGoals/>
}


ReactDOM.render(<App/>, document.querySelector("body"));

