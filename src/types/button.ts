export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  type?: "button" | "submit" | "reset" | undefined
  htmlType?: "button" | "submit" | "reset" | "primary"
  children: React.ReactNode
}
