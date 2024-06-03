import React from 'react'
// import Props from './Component/Props'
// import Axios from './Component/Axios'
// import MultipleApi from './Component/MultipleApi'
// import MuiPract from './Component/MuiPract'

import MuiStudent from './ReduxUserList/MuiStudent'

// import Home from "./Component/Router/Home"
// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// import Layout from "./Component/Router/Layout";
// import Contact from "./Component/Router/Contact";



const App = () => {
  return (
    <div>
      {/* <Props z={"Hola"}></Props> */}
      {/* <Axios/> */}
      {/* <MultipleApi/> */}
      {/* <MuiPract/> */}
      <MuiStudent/>
      {/* <App/> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path='/home' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
      



    </div>
  )
}

export default App