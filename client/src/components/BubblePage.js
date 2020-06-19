import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth"

import "./BubblePage.css"


import {useHistory} from "react-router-dom"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const {push} = useHistory();
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
    .get("/api/colors")
    .then(res => {
      console.log(res)
      setColorList(res.data)
    })
  }, [])

  const logOut= () => {
    window.localStorage.removeItem("token")
    push("/")
}


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      <button id="logout" onClick={logOut}> Log Out</button>
    </>
  );
};

export default BubblePage;
