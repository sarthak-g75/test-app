import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import Table from "react-bootstrap/Table";
const AdminPage = () => {
  const history = useNavigate
  const [response, setresponse] = useState([]);
  const host = "https://testt7838.herokuapp.com";
  const fetchingAllResponse = async () => {
    const response = await fetch(`${host}/api/response/fetchAllResponse`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    // console.log(json)
    setresponse(json);
    // return json
  };
  useEffect(() => {
    if(localStorage.getItem("auth-token")){

      fetchingAllResponse();
    }
    else{
      history('/')
    }
  }, []);

  return (
    <>
      <Table className="container my-5" striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email </th>
            <th>Member</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {response.sort((elem1,elem2)=>elem1.date>elem2.date ? 1: -1).map((elem, index) => {
            {console.log(elem)};
            return (
              <tr>
                <td>{index+1}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.member}</td>
                <td>{elem.date}</td>
                <td>{elem.time}</td>
              </tr>
            );
          })}

        </tbody>
      </Table>
    </>
  );
};

export default AdminPage;
