import React from "react"
//import Modal from "../../components/Modal"
//import Button from "../../components/Button"
//import { Link } from "react-router-dom"

export const Home = () => {
  //const [openModal, setOpenModal] = useState(false)
  //const [confirm, setConfirm] = useState(false)

  return (
    <div>
      <h1>Home</h1>

      <div>
        <div>Teste de Modal!</div>
        {/* <Button onClick={() => setOpenModal(true)}>abrir o MODAL</Button> */}
      </div>
      {/* <Modal
        isOpen={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
        size="20%"
        setConfirm={setConfirm}
      >
        teste
      </Modal> */}
      {/* <Link to={"/login"}>Login</Link> */}
    </div>
  )
}

export default Home
