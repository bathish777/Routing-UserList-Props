import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 let Navigation=useNavigate()
let Transfer = () =>{    
  
  Navigation("/contact")

}
  return (
    <div>
      <button>Layout</button>
      <button onClick={Transfer}>Contact</button>
    </div>
  )
}

export default Home