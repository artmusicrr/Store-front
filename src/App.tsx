import React from "react"
import "./App.css"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { NewUser } from "./pages/NewUser"
import { ProtectedLayout } from "./components/ProtectedLayout"
import { Login } from "./pages/Login"
import Privada from "./pages/Privada"

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/privada">Página privada </Link>
          <Link to="/new-user">New user </Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
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
