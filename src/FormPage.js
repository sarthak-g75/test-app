import React , {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import {  useNavigate } from "react-router-dom";

// import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
const FormPage = () => {
  const history = useNavigate();
 const arrayItems = ["member1","member2","member3","member4","member5"]
 const [ member,setmember] = useState("")
const [date, setdate] = useState("")
const [time, settime] = useState("")
const host = "https://testt7838.herokuapp.com";
const submitAttempt = async(e)=>{
  e.preventDefault();
  if(localStorage.getItem("auth-token")){
    const response = await fetch(`${host}/api/response/addResponse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({
        member:member,
        date:date,
        time:time
      }),
    });
    const json = await response.json();
    if(json.success === true ){
      alert("form Submitted Successfully")
    }
  }
  else{
    history("/")
  }
 
  // console.log(json)
}
  return (
    <>
    <form onSubmit={submitAttempt} className="my-5 container" >
      {/* <DatePicker selected={date}  onChange={(e)=>{setdate(e)}} dateFormat = 'yyyy/MM/dd' /> */}
      <input value={date} onChange={(e)=>{setdate(e.target.value)}} type="date" />
      <input value={time} onChange={(e)=>{settime(e.target.value)}} type="time" name="" id="" />
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Member
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {arrayItems.map((item)=>{
       return(
         
         <Dropdown.Item onClick={()=>{setmember(item)}} key={item}>{item}</Dropdown.Item>
       )  
        })}
        
      </Dropdown.Menu>
    </Dropdown>
    <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default FormPage;
