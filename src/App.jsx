// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"        // necesario para trabajar rutas
import { Landing, Home, Dashboard, NotasRoute } from "./routes/rutas"                               // permito traer la funcion 'landing' 
//import "./App.css"
import { useState } from "react"
import Context from './context/StaticContext'
import Switch from '@mui/material/Switch';
//import {index as background} from "index.css"

export const App = () => {

  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    // Toggler Icon 

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  }
  
  function Navigation({children}) {
    const [estilo, setEstilo] = useState(false)

    const switchBackground = () => {
      setEstilo( !estilo ) 

      if (estilo == true) {
        console.log("fondo blanco");
        document.body.className = "backgroundWhite";
      } else {
        console.log("fondo negro");
        document.body.className = "backgroundBlack";
      }
    }
  
    return <>
      <Context.Provider value={{estilo, setEstilo}}>
        <nav className='nav'>
          <a href="/" className="nav_brand">Prueba</a>
          <ul className={active}>
            <li className='nav_item'><Link to="/landing" className='nav_link'> Landing </Link></li>
            <li className='nav_item'><Link to="/home" className='nav_link'> Home </Link></li>
            <li className='nav_item'><Link to="/dashboard" className='nav_link'> Dashboard </Link></li>
            <li className='nav_item'><Link to="/landing" className='nav_link'> Landing </Link></li>
            <li className='nav_item'><Link to="/notas" className='nav_link'> Notas </Link></li>
            <li className='nav_item'><Switch onClick={switchBackground}/></li>
          </ul>
          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>

        { children }

      </Context.Provider>
    </>
  }

  return (
    <BrowserRouter>

      <Navigation>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notas" element={<NotasRoute />} />
        </Routes>
      </Navigation>

    </BrowserRouter >

  )
}



export default App