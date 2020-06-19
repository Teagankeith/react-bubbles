import React, {useState} from "react";
import axios from "axios"
import {useHistory} from 'react-router-dom';





const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const { push } = useHistory();
  
  



  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const submitHandler = event => {
    event.preventDefault();
    axios
    .post("http://localhost:5000/api/login", login)
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        push("/bubblepage")
    })
    .catch(err => {
        console.log(err)
    })
}



      const changeHandler = event => {
        setLogin({
            ...login,
            [event.target.name] : event.target.value
        })
    }
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      

      <div id="form">
        <form onSubmit={submitHandler}>

        <label> Username: </label>
        <input 
        type="text"
        value = {login.username}
        placeholder="Username"
        name="username"
        onChange={changeHandler}
        />

        <label>Password: </label>
        <input 
        type="password"
        value={login.password}
        name="password"
        placeholder="Password"
        onChange={changeHandler}
        />

        <button id="log-in">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
