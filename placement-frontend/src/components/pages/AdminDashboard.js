import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../Navbar";
import "./AdminDashboard.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




export default function AdminDashboard(){

  const [applications, setApplications] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
const [filterStatus, setFilterStatus] = useState("ALL");

const [darkMode, setDarkMode] = useState(false);



  useEffect(()=>{

    const admin = JSON.parse(localStorage.getItem("admin"));

    if(!admin){
      window.location="/admin";
      return;
    }

    loadApplications();
    loadCompanies();

  },[]);

  const loadApplications = () => {
    api.get("/apply/all")
       .then(res => setApplications(res.data));
  };

  const loadCompanies = () => {
    api.get("/company/all")
       .then(res => setCompanies(res.data));
  };

  const updateStatus = (id, status)=>{
    api.put(`/apply/status/${id}?status=${status}`)
       .then(()=> loadApplications());
  };

  const addCompany = () => {

    if(!company.name || !company.role || !company.packageAmount || !company.eligibility){
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    api.post("/company/add", company)
       .then(()=>{
          alert("Company Added Successfully");
          setCompany({});
          setLoading(false);
          loadCompanies();
       });
  };

  const selectedCount = applications.filter(a => a.status === "SELECTED").length;

  const filteredApplications = applications.filter(a => {

  const matchesSearch =
    a.student.name.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    filterStatus === "ALL" || a.status === filterStatus;

  return matchesSearch && matchesStatus;
});

const chartData = {
  labels: ["Applied", "Selected", "Rejected"],
  datasets: [
    {
      label: "Applications",
      data: [
        applications.filter(a=>a.status==="APPLIED").length,
        applications.filter(a=>a.status==="SELECTED").length,
        applications.filter(a=>a.status==="REJECTED").length
      ],
      backgroundColor: [
        "#ffc107",
        "#28a745",
        "#dc3545"
      ]
    }
  ]
};

  

  return(
    <div>
      <Navbar/>

      <div style={{textAlign:"right", padding:"10px 30px"}}>
  <button onClick={()=>setDarkMode(!darkMode)}>
    {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
  </button>
</div>


      {/* <div className="dashboard-container"> */}

      <div className={`dashboard-container ${darkMode ? "dark" : ""}`}>


        <h2 className="dashboard-title">Admin Dashboard</h2>

        {/* Statistics Cards */}
        <div className="stats-container">

          <div className="stat-card">
            <h3>{companies.length}</h3>
            <p>Total Companies</p>
          </div>

          <div className="stat-card">
            <h3>{applications.length}</h3>
            <p>Total Applications</p>
          </div>

          <div className="stat-card success">
            <h3>{selectedCount}</h3>
            <p>Selected Students</p>
          </div>

        </div>

        <div style={{width:"60%", margin:"30px auto"}}>
  <Bar data={chartData}/>
</div>


        {/* Add Company Section */}
        <div className="add-company-section">

          <h3>Add New Company</h3>

          <div className="form-row">

            <input
              placeholder="Company Name"
              value={company.name || ""}
              onChange={e=>setCompany({...company,name:e.target.value})}
            />

            <input
              placeholder="Role"
              value={company.role || ""}
              onChange={e=>setCompany({...company,role:e.target.value})}
            />

            <input
              placeholder="Package"
              type="number"
              value={company.packageAmount || ""}
              onChange={e=>setCompany({...company,packageAmount:e.target.value})}
            />

            <input
              placeholder="Eligibility"
              type="number"
              value={company.eligibility || ""}
              onChange={e=>setCompany({...company,eligibility:e.target.value})}
            />

            <button onClick={addCompany}>
              {loading ? "Adding..." : "Add"}
            </button>

          </div>
        </div>

        <div className="filter-container">

  <input
    type="text"
    placeholder="Search by student name..."
    value={search}
    onChange={e=>setSearch(e.target.value)}
  />

  <select
    value={filterStatus}
    onChange={e=>setFilterStatus(e.target.value)}
  >
    <option value="ALL">All</option>
    <option value="APPLIED">Applied</option>
    <option value="SELECTED">Selected</option>
    <option value="REJECTED">Rejected</option>
  </select>

</div>


        {/* Applications Section */}
        <h3 className="section-title">All Applications</h3>

        <div className="applications-container">

          {filteredApplications.map(a => (

            <div key={a.id} className="application-card">

              <div className="app-left">
                <p><b>{a.student.name}</b></p>
                <p>{a.student.branch} | CGPA: {a.student.cgpa}</p>
                <p>{a.company.name} - {a.company.role}</p>
              </div>

              <div className="app-right">

                <span className={`status ${a.status}`}>
                  {a.status}
                </span>

                <div className="btn-group">
                  <button
                    className="select-btn"
                    onClick={()=>updateStatus(a.id,"SELECTED")}
                  >
                    Select
                  </button>

                  <button
                    className="reject-btn"
                    onClick={()=>updateStatus(a.id,"REJECTED")}
                  >
                    Reject
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
