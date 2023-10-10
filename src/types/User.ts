export interface IUser {
  username?: string
  token?: string
  email_user?: string
  cpf_user?: string
}

export interface IContext extends IUser {
  authenticate: (username: string, password: string) => Promise<void>
  logout: () => void
  create_user: (
    username: string,
    password: string,
    email_user: string,
    cpf_user: string,
  ) => Promise<void>
}

export interface IAuthProvider {
  children: JSX.Element
}
