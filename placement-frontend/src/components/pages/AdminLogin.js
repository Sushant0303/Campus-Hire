import { useState } from "react";
import api from "../services/api";

export default function AdminLogin(){

  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const login = () => {

    if(!data.email || !data.password){
      setError("Please fill all fields");
      return;
    }

    api.post("/admin/login", data)
      .then(res => {
        if(res.data){

          // ✅ Store full admin object
          localStorage.setItem("admin", JSON.stringify(res.data));

          // Remove student if exists
          localStorage.removeItem("student");

          window.location="/admin/dashboard";

        }else{
          setError("Invalid Admin Credentials");
        }
      })
      .catch(()=>{
        setError("Login Failed");
      });
  };

  return(
    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"white"
    }}>

      <div style={{
        padding:"40px",
        borderRadius:"12px",
        width:"350px",
        boxShadow:"0px 10px 30px rgba(0,0,0,0.1)",
        textAlign:"center"
      }}>

        <h2>Admin Login</h2>

        <input
          placeholder="Email"
          onChange={e=>setData({...data,email:e.target.value})}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e=>setData({...data,password:e.target.value})}
          style={inputStyle}
        />

        {error && <p style={{color:"red"}}>{error}</p>}

        <button onClick={login} style={buttonStyle}>
          Login
        </button>

        <p style={{marginTop:"15px"}}>
          Student? <a href="/">Go to Student Login</a>
        </p>

      </div>
    </div>
  );
}

const inputStyle = {
  width:"100%",
  padding:"10px",
  margin:"10px 0",
  borderRadius:"6px",
  border:"1px solid #ddd"
};

const buttonStyle = {
  width:"100%",
  padding:"10px",
  background:"#007bff",
  color:"white",
  border:"none",
  borderRadius:"6px",
  cursor:"pointer"
};
