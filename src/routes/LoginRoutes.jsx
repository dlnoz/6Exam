import { Route, Routes } from "react-router-dom"
import Home from "../pages/Auth/Home"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"
import { Dashboard } from '../pages'


const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default LoginRoutes