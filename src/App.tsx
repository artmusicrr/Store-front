import React from "react"
import "./App.css"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import { NewUser } from "./pages/NewUser"
import { ProtectedLayout } from "./components/ProtectedLayout"
import { Login } from "./pages/Login"
import Privada from "./pages/Privada"
import { useAuth } from "./contexts/AuthProvider/useAuth"
import { ForgotPasword } from "./pages/ForgotPassword"
//import { Button } from "antd"

function App() {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout()
    navigate("/")
  }

  return (
    <div className="App">
      <header>
        <div className="header">
          <h1>Header do site</h1>
          <div className="user-logout">
            {auth.username ? (
              <Link onClick={handleLogout} to="/">
                Sign Out
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
        <div className="nav-header">
          <nav className="navegation">
            <Link to="/">Home</Link>
            <Link to="/privada">Página privada </Link>
            <Link to="/new-user">New user </Link>
          </nav>
        </div>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPasword />} />
        <Route
          path="/privada"
          element={
            <ProtectedLayout>
              <Privada />
            </ProtectedLayout>
          }
        />
      </Routes>
    </div>
  )
}

export default App
