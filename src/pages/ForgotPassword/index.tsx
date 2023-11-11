import React, { useState } from "react"
import "./login.css"
import { message } from "antd"
import { forgotRequest, tokenRequest } from "../../contexts/AuthProvider/util"
import { useNavigate } from "react-router-dom"

export const ForgotPasword = () => {
  const [responseMessage, setResponseMessage] = useState<string>("")
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true)
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const [name, setName] = useState("")
  const [token, setToken] = useState("")

  const handleForgotRequest = async (name: string) => {
    try {
      const result = await forgotRequest(name)
      if (result && result.message) {
        setResponseMessage(result.message)
        setOpenModal(true)
        console.log("Solicitação de redefinição de senha enviada com sucesso.")
      } else {
        message.error(
          "Erro ao solicitar redefinição de senha. Tente novamente mais tarde.",
        )
      }
    } catch (error) {
      console.error(
        "Ocorreu um erro ao enviar a solicitação de redefinição de senha:",
        error,
      )
      message.error(
        "Ocorreu um erro ao enviar a solicitação. Tente novamente mais tarde.",
      )
    }
  }

  const handleTokenRequest = async (
    token: string,
    confirmPassword: string,
    password: string,
  ) => {
    try {
      const result = await tokenRequest(token, confirmPassword, password)
      if (result && result.message) {
        setResponseMessage(result.message)

        console.log("Solicitação de redefinição de senha enviada com sucesso.")
      } else {
        message.error(
          "Erro ao solicitar redefinição de senha. Tente novamente mais tarde.",
        )
      }
    } catch (error) {
      console.error(
        "Ocorreu um erro ao enviar a solicitação de redefinição de senha:",
        error,
      )
      message.error(
        "Ocorreu um erro ao enviar a solicitação. Tente novamente mais tarde.",
      )
    }
  }

  const handleModalOk = () => {
    setOpenModal(false)
    navigate("/login")
  }

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault
    const value = e.target.value
    setToken(value)
    if (value !== password) {
      setPasswordMatch(false)
    } else {
      setPasswordMatch(true)
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault
    const value = e.target.value
    setPassword(value)
    if (value !== password) {
      setPasswordMatch(false)
    } else {
      setPasswordMatch(true)
    }
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    e.preventDefault
    const value = e.target.value
    setConfirmPassword(value)
    if (value !== confirmPassword) {
      setPasswordMatch(false)
    } else {
      setPasswordMatch(true)
    }
  }

  return (
    <div>
      <form onSubmit={() => handleForgotRequest(name)}>
        <h1>FORMULÁRIO DE RECUPERAÇÃO</h1>
        <input
          type="text"
          onChange={(event) => setName(event.target.value || "")}
          value={name}
          placeholder="Nome de usuário"
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <form
        onSubmit={() => handleTokenRequest(token, password, confirmPassword)}
      >
        <h1>Recuperação</h1>
        <input
          type="text"
          onChange={handleTokenChange}
          value={token}
          placeholder="Digite o token"
          required
        />
        <input
          type="text"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Digite sua nova senha"
          required
        />
        <input
          type="text"
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
          placeholder="Repita sua nova senha"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
