import React, { createContext, useEffect, useState } from "react"
import { IAuthProvider, IContext, IUser } from "../../types/User"
import {
  createUser,
  getUserLocalStorage,
  loginRequest,
  setUserLocalStorage,
} from "./util"
import { message } from "antd"

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>()

  useEffect(() => {
    const user = getUserLocalStorage()
    if (user) {
      setUser(user)
    }
  }, [])

  async function authenticate(username: string, password: string) {
    const response = await loginRequest(username, password)

    const payload = { token: response.token, username }

    setUser(payload)
    setUserLocalStorage(payload)
  }

  async function create_user(
    username: string,
    password: string,
    email_user: string,
    cpf_user: string,
  ) {
    const response = await createUser(username, password, email_user, cpf_user)

    const payload = { user: response.username, password, email_user, cpf_user }

    if (response.data.success) {
      message.success(response.data.message)
    } else {
      message.error(response.data.message)
    }

    setUser(payload)
    //setUserLocalStorage(payload)
  }

  function logout() {
    setUser(null)
    setUserLocalStorage(null)
  }

  return (
    <AuthContext.Provider
      value={{ ...user, authenticate, logout, create_user }}
    >
      {children}
    </AuthContext.Provider>
  )
}
