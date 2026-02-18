import { useState } from "react";
import api from "../services/api";

export default function Register() {

  const [student, setStudent] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (password) => {
    if(password.length < 6){
      setStrength("Weak");
    }
    else if(password.match(/[A-Z]/) && password.match(/[0-9]/)){
      setStrength("Strong");
    }
    else{
      setStrength("Medium");
    }
  };

  const register = () => {

    if(!student.name || !student.email || !student.password || !student.branch || !student.cgpa){
      setError("Please fill all fields");
      setSuccess("");
      return;
    }

    api.post("/student/register", student)
    .then(()=>{
      setSuccess("Registration Successful!");
      setError("");
      setStudent({});
      setStrength("");
    })
    .catch(()=>{
      setError("Registration Failed");
      setSuccess("");
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
        padding:"35px",
        borderRadius:"12px",
        width:"380px",
        boxShadow:"0px 10px 30px rgba(0,0,0,0.1)",
        textAlign:"center"
      }}>

        <h2 style={{marginBottom:"20px"}}>Student Registration</h2>

        {/* Name */}
        <div style={inputWrapper}>
          <span style={iconStyle}>👤</span>
          <input
            placeholder="Full Name"
            value={student.name || ""}
            onChange={e=>{
              setStudent({...student,name:e.target.value});
              setError("");
            }}
            style={inputStyle}
          />
        </div>

        {/* Email */}
        <div style={inputWrapper}>
          <span style={iconStyle}>📧</span>
          <input
            type="email"
            placeholder="Email"
            value={student.email || ""}
            onChange={e=>{
              setStudent({...student,email:e.target.value});
              setError("");
            }}
            style={inputStyle}
          />
        </div>

        {/* Password */}
        <div style={inputWrapper}>
          <span style={iconStyle}>🔒</span>
          <input
            type="password"
            placeholder="Password"
            value={student.password || ""}
            onChange={e=>{
              setStudent({...student,password:e.target.value});
              checkStrength(e.target.value);
              setError("");
            }}
            style={inputStyle}
          />
        </div>

        {/* Strength Indicator */}
        {student.password && (
          <div style={{marginBottom:"10px"}}>
            <div style={{
              height:"6px",
              borderRadius:"5px",
              background:
                strength === "Weak" ? "red" :
                strength === "Medium" ? "orange" :
                strength === "Strong" ? "green" : "#ddd"
            }}></div>
            <p style={{
              fontSize:"13px",
              color:
                strength === "Weak" ? "red" :
                strength === "Medium" ? "orange" :
                strength === "Strong" ? "green" : "#000"
            }}>
              {strength} Password
            </p>
          </div>
        )}

        {/* Branch */}
        <div style={inputWrapper}>
          <span style={iconStyle}>🎓</span>
          <input
            placeholder="Branch"
            value={student.branch || ""}
            onChange={e=>{
              setStudent({...student,branch:e.target.value});
              setError("");
            }}
            style={inputStyle}
          />
        </div>

        {/* CGPA */}
        <div style={inputWrapper}>
          <span style={iconStyle}>📊</span>
          <input
            type="number"
            placeholder="CGPA"
            value={student.cgpa || ""}
            onChange={e=>{
              setStudent({...student,cgpa:e.target.value});
              setError("");
            }}
            style={inputStyle}
          />
        </div>

        {error && (
          <p style={{color:"red", fontSize:"14px"}}>{error}</p>
        )}

        {success && (
          <p style={{color:"green", fontSize:"14px"}}>{success}</p>
        )}

        <button
          onClick={register}
          style={buttonStyle}
          onMouseOver={e=>e.target.style.background="#0056b3"}
          onMouseOut={e=>e.target.style.background="#007bff"}
        >
          Register
        </button>

        <p style={{marginTop:"15px"}}>
          Already have account? <a href="/" style={{color:"#007bff"}}>Login</a>
        </p>

      </div>
    </div>
  );
}

/* Styles */

const inputWrapper = {
  display:"flex",
  alignItems:"center",
  border:"1px solid #ddd",
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
