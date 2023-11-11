import React from "react"
import { ButtonProps } from "../../types/button"
import { ButtonStyled } from "./styles"

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  htmlType,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      className={className}
      type={htmlType === "submit" ? "submit" : "button"}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button
