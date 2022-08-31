import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import SignUp from "./SignUp"
import AdminPage from './AdminPage';
import FormPage from './FormPage';
import AdminSignUp from './AdminSignUp.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      {/* <Route path='/' element={<App/>}/> */}
      <Route path='/adminSignUp' element={<AdminSignUp/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/formPage' element={<FormPage/>}/>
      <Route path='/adminPage' element={<AdminPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
