import { ReactNode } from "react"

export interface IModal {
  isOpen: boolean
  children: ReactNode
  size?: string
  setOpenModal: (isOpen: boolean) => void
  setConfirm?: (isConfirm: boolean) => void
}

export interface IModalStyleProps {
  size?: string
}
