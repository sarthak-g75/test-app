
import './App.css';
import {Link ,useNavigate} from "react-router-dom"
function App() {
  const history = useNavigate();
  const logoutAttempt =(e)=>{
    e.preventDefault();
    history("/")
    localStorage.removeItem("auth-token")
  }
  return (
   <>
   {!localStorage.getItem("auth-token") ? <div className=" d-flex justify-content-center my-3">
    <Link className='mx-2' to={"/login"}>Login</Link>
    <Link className='mx-2' to={"/signUp"}>SignUp</Link>
  </div>: <button className=" btn btn-danger justify-content-center my-3" onClick={logoutAttempt}>Logout</button> }
  
   </>
  );
}

export default App;
