import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const setMail = (e) => {
    setemail(e.target.value);
  };
  const setPass = (e) => {
    setpassword(e.target.value);
  };
  const host = "https://testt7838.herokuapp.com";
  const loginAttempt = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await response.json();
    // console.log(json.user.admin)
    if (json.success === true) {
      localStorage.setItem("auth-token", json.authToken);
      if (json.user.admin === true) {
        history("/adminPage");
      } else {
        history("/formPage");
      }
    } else {
      alert("Incorrect Credentials");
    }
  };
  return (
    <>
      <form onSubmit={loginAttempt}>
        <div style={{width:"50%"}} className=" d-flex justify-content-evenly my-5 mx-5">
          <label>Email : </label>
          <input
            onChange={setMail}
            type="email"
            placeholder="Enter Email"
            name="username"
            value={email}
            required
          />
          <label>Password : </label>
          <input
            onChange={setPass}
            value={password}
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />
          <button type="submit">Login</button>
          <Link to={"/signUp"}>New,Here?</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
