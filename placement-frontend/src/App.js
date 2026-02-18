import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Companies from "./components/pages/Companies";
import MyApplications from "./components/pages/MyApplications";
import AdminLogin from "./components/pages/AdminLogin";
import AdminDashboard from "./components/pages/AdminDashboard";





export default function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/companies" element={<Companies/>}/>
    <Route path="/applications" element={<MyApplications/>}/>
    <Route path="/admin" element={<AdminLogin/>}/>
    <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
  </Routes>
</BrowserRouter>

  );
}
