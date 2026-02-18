import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../Navbar";
import "./Companies.css";

export default function Companies() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const student = JSON.parse(localStorage.getItem("student"));

    if(!student){
      window.location="/";
      return;
    }

    api.get("/company/all")
       .then(res => setCompanies(res.data));

  }, []);

  const apply = (company) => {

    const student = JSON.parse(localStorage.getItem("student"));

    api.post("/apply", {
      student: student,
      company: company
    }).then(()=>alert("Applied Successfully"));

  };

  return (
    <div>
      <Navbar/>

      <h2 className="title">Available Companies</h2>

      <div className="company-container">
        {companies.map(c => (
          <div key={c.id} className="company-card">
            <h3>{c.name}</h3>
            <p><b>Role:</b> {c.role}</p>
            <p><b>Package:</b> {c.packageAmount} LPA</p>
            <p><b>Eligibility:</b> {c.eligibility} CGPA</p>

            <button onClick={()=>apply(c)}>
              Apply
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}
