import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
const AdminPage = () => {
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");

  const [submitted, setsubmitted] = useState(false);
  const history = useNavigate;
  const [responses, setresponse] = useState([]);
  const host = "https://testt7838.herokuapp.com";
  const fetchingAllResponse = async () => {
    const response = await fetch(`${host}/api/response/fetchAllResponse`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    setresponse(json);

    // return json
  };
  const checkingDate = (elem) => {
    if (
      new Date(elem.date) >= new Date(startdate) &&
      new Date(elem.date) <= new Date(enddate)
    ) {
      return elem;
    }
  };
  
  const submitAttempt = (e) => {
    e.preventDefault();
    fetchingAllResponse();
    setsubmitted(true);

  };
  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      history("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <form onSubmit={submitAttempt}>
          <label>Start Date</label>
          <input
            className="mx-2"
            value={startdate}
            onChange={(e) => {
              setStartdate(e.target.value);
            }}
            type="date"
          />
          <label>End Date</label>
          <input
            className="mx-2"
            value={enddate}
            onChange={(e) => {
              setEnddate(e.target.value);
            }}
            type="date"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {submitted ? (
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
            {responses.filter(checkingDate).map((elem, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
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
      ) : (
        <></>
      )}
    </>
  );
};

export default AdminPage;
