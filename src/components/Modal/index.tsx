import React from "react"
import { IModal } from "../../types/modal"
import {
  Container,
  ContainerFooter,
  ContainerHeader,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalStyle,
} from "./styles"
import Button from "../Button"

const Modal: React.FC<IModal> = ({
  isOpen,
  setOpenModal,
  children,
  size,
  setConfirm,
  
}) => {
  const handleClose = () => {
    setOpenModal(false)
  }
  const handleConfirm = () => {
    setConfirm && setConfirm(false)
  }

  if (isOpen) {
    return (
      <Container>
        <ModalStyle size={size}>
          <ContainerHeader>
            <ModalHeader>
              <div className="title-modal">
                <span>Modal Header</span>
              </div>
              <div className="btn-x">
                <button className="btn-x" onClick={handleClose}>
                  X
                </button>
              </div>
            </ModalHeader>
          </ContainerHeader>

          <ModalBody>{children}</ModalBody>

          <ContainerFooter>
            <ModalFooter>
              <Button className="btn-footer-cancel" onClick={handleClose}>
                Fehar
              </Button>
              <Button
                onClick={handleConfirm}
                htmlType="submit"
                className="btn-footer"
              >
                Continue
              </Button>
            </ModalFooter>
          </ContainerFooter>
        </ModalStyle>
      </Container>
    )
  } else {
    return null
  }
}

export default Modal
