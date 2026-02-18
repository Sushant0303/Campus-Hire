import { useState } from "react";
import api from "../services/api";

export default function Login() {

  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const login = () => {

  if(!data.email || !data.password){
    setError("Please fill all fields");
    return;
  }

  api.post("/student/login", data)
    .then(res => {

      if(res.data){

        // STORE STUDENT OBJECT PROPERLY
        localStorage.setItem("student", JSON.stringify(res.data));

        // Remove admin if exists
        localStorage.removeItem("admin");

        window.location="/companies";

      }else{
        setError("Invalid Email or Password");
      }

    })
    .catch(()=>{
      setError("Login Failed");
    });
};



  return (
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
        boxShadow:"0px 10px 30px rgba(0,0,0,0.7)",
        textAlign:"center"
      }}>

        <h2 style={{marginBottom:"20px"}}>Student Login</h2>

        {/* Email Field */}
        <div style={inputWrapper}>
          <span style={iconStyle}>📧</span>
          <input
            type="email"
            placeholder="Email"
            onChange={e=>{
              setData({...data,email:e.target.value});
              setError("");
            }}
            style={inputStyle}
          />
        </div>

        {/* Password Field */}
        <div style={inputWrapper}>
          <span style={iconStyle}>🔒</span>
          <input
            type="password"
            placeholder="Password"
            onChange={e=>{
              setData({...data,password:e.target.value});
              setError("");
            }}
            style={inputStyle}
          />
        </div>

        {error && (
          <p style={{color:"red", fontSize:"14px"}}>{error}</p>
        )}

        <button
          onClick={login}
          style={buttonStyle}
          onMouseOver={e=>e.target.style.background="#0056b3"}
          onMouseOut={e=>e.target.style.background="#007bff"}
        >
          Login
        </button>

        <p style={{marginTop:"15px"}}>
          New user? <a href="/register" style={{color:"#007bff"}}>Register</a>
        </p>

      </div>
    </div>
  );
}

/* Styles */

const inputWrapper = {
  display:"flex",
  alignItems:"center",
  border:"1px solid #c9bebe",
  borderRadius:"6px",
  padding:"8px",
  margin:"10px 0"
};

const iconStyle = {
  marginRight:"8px"
};

const inputStyle = {
  border:"none",
  outline:"none",
  width:"100%"
};

const buttonStyle = {
  width:"100%",
  padding:"10px",
  background:"#007bff",
  color:"white",
  border:"none",
  borderRadius:"6px",
  cursor:"pointer",
  marginTop:"10px",
  transition:"0.3s"
};
