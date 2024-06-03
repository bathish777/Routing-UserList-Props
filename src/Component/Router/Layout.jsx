import React from 'react'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
  let navigate = useNavigate()
  let home = () =>{
    navigate("/home")
  }
  let contact = () =>{
    navigate("/contact")
  }
  return (
    <div>
      <button onClick={home}>Home</button>
      <button onClick={contact}>Contact</button>
    </div>
  )
}

export default Layout