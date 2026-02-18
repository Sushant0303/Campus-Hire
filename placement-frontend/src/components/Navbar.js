import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){

  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("student"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  const logout = ()=>{
    localStorage.clear();
    navigate("/");
  }

  const userName = student?.name || admin?.name;
  const role = student ? "Student" : admin ? "Admin" : "";

  return(
    <div className="navbar">

      <h2 className="logo" onClick={()=>navigate("/")}>
        🎓 Placement Portal
      </h2>

      <div className="nav-links">

        {student && (
          <>
            <span onClick={()=>navigate("/companies")}>Companies</span>
            <span onClick={()=>navigate("/applications")}>My Applications</span>
          </>
        )}

        {admin && (
          <span onClick={()=>navigate("/admin/dashboard")}>Dashboard</span>
        )}

      </div>

      <div className="user-section">

        {userName && (
          <div className="user-info">
            <span className="user-name">👤 {userName}</span>
            {/* <span className={`role-badge ${role}`}>
              {role}
            </span> */}
          </div>
        )}

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  )
}
