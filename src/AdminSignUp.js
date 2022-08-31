import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
const AdminSignUp = () => {
  const history =useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setMail = (e) => {
    setEmail(e.target.value);
  };
  const setPass = (e) => {
    setPassword(e.target.value);
  };
  const setname = (e) => {
    setName(e.target.value);
  };
  const host = "https://testt7838.herokuapp.com";
  const signUpAttempt = async (e) => {
    e.preventDefault();

    const response = await fetch(`${host}/api/auth/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ name: name, email: email, password: password }),
    });
    const json = await response.json();
    // console.log(json)
    if (json.success === true) {
      localStorage.setItem("auth-token", json.authToken);
     history("/adminPage")
    } else {
      alert("Invalid Details");
    }
  };
  return (
    <>
      <form onSubmit={signUpAttempt}>
        <div className="container">
          <label>Name : </label>
          <input
            value={name}
            onChange={setname}
            type="name"
            placeholder="Enter Email"
            name="username"
            required
          />
          <label>Email : </label>
          <input
            onChange={setMail}
            value={email}
            type="email"
            placeholder="Enter Email"
            name="username"
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
          <Link to={"/login"}>Already,Have an Account?</Link>
        </div>
      </form>
    </>
  );
};

export default AdminSignUp;
