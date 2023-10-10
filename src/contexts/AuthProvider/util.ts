import { message } from "antd"
import { api } from "../../hooks/useApi"
import { IUser } from "../../types/User"

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("us", JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("us")

  if (!json) {
    return null
  }
  const user = JSON.parse(json)
  return user ?? null
}

export async function loginRequest(username: string, password: string) {
  try {
    const request = await api.post("auth/login", { username, password })

    return request.data
  } catch (error) {
    return null
  }
}

export async function createUser(
  username: string,
  password: string,
  email_user: string,
  cpf_user: string,
) {
  try {
    const response = await api.post("users/create-user", {
      username,
      password,
      email_user,
      cpf_user,
    })
    if (response.data.message) {
      message.success(response.data.message)

      return response.data
    }
  } catch (error) {
    message.error("Erro na criação!")

    return null
  }
}
