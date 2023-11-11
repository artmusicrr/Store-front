import { ChangeEvent, FormEvent } from "react"

export interface FormDataProps {
  name: string
  email: string
  message: string
  password: string
  token: string
  //e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
}

export type InputChangeHandler = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void
export type FormSubmitHandler = (e: FormEvent<HTMLFormElement>) => void
