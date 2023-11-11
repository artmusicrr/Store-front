import styled from "styled-components"
import { IModalStyleProps } from "../../types/modal"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export const ModalStyle = styled.div<IModalStyleProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: ${(props) => (props.size ? props.size : "20px")};
  transform: translate(-50%, -50%);
  //padding:
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`
export const ModalBody = styled.div`
  width: 100%;
  background: #fff;
`

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  button {
    display: flex;
    align-items: left;
    justify-content: left;
    width: 15px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
  .title-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    //background: green;
    height: 50px;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
  }
  .btn-x {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 30px;
    padding-top: 5px;
    color: #fff;
  }
`
export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn-footer-cancel {
    background: red;
  }
`

export const ContainerHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #354259;
  border-radius: 8px 8px 0 0;
`

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #354259;
  border-radius: 0px 0px 8px 8px;
`
