import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../Navbar";
import "./Applications.css";

export default function MyApplications(){

  const [applications, setApplications] = useState([]);

  useEffect(()=>{
    const student = JSON.parse(localStorage.getItem("student"));

    if(!student){
      window.location="/";
      return;
    }

    api.get(`/apply/student/${student.id}`)
       .then(res => setApplications(res.data));

  },[]);

  return(
    <div>
      <Navbar/>

      <h2 className="title">My Applications</h2>

      <div className="app-container">

        {applications.length === 0 && (
          <p>No Applications Found</p>
        )}

        {applications.map(a => (
          <div key={a.id} className="app-card">
            <p><b>Company:</b> {a.company.name}</p>
            <p><b>Role:</b> {a.company.role}</p>

            <p>
              <b>Status:</b>
              <span className={`status ${a.status}`}>
                {a.status}
              </span>
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
