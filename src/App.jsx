
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"        // necesario para trabajar rutas
import { Landing, HomeRoute, Dashboard, NotasRoute, LoginRoute, NotFoundRoute, NavBarRoute } from "./routes/rutas"        // permito traer la funcion 'landing' 
import { Login } from './components/Login'
import { useState } from "react"
import Context from './context/StaticContext'
import Switch from '@mui/material/Switch';

// PrimeReact
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

export const App = () => {

  // const [active, setActive] = useState("nav_menu");
  // const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  // const navToggle = () => {
  //   active === "nav_menu"
  //     ? setActive("nav_menu nav_active")
  //     : setActive("nav_menu");

  //   // Toggler Icon 

  //   toggleIcon === "nav_toggler"
  //     ? setToggleIcon("nav_toggler toggle")
  //     : setToggleIcon("nav_toggler");
  // }

  // function Navigation({children}) {
  //   const [estilo, setEstilo] = useState(false)

  //   const switchBackground = () => {
  //     setEstilo( !estilo ) 

  //     if (estilo == true) {
  //       console.log("fondo blanco");
  //       document.body.className = "backgroundWhite";
  //     } else {
  //       console.log("fondo negro");
  //       document.body.className = "backgroundBlack";
  //     }
  //   }

  //   return <>
  //     <Context.Provider value={{estilo, setEstilo}}>
  //       <nav className='nav'>
  //         <a href="/" className="nav_brand">Prueba</a>
  //         <ul className={active}>
  //           <li className='nav_item'><Link to="/landing" className='nav_link'> Landing </Link></li>
  //           <li className='nav_item'><Link to="/" className='nav_link'> Home </Link></li>
  //           <li className='nav_item'><Link to="/dashboard" className='nav_link'> Dashboard </Link></li>
  //           <li className='nav_item'><Link to="/landing" className='nav_link'> Landing </Link></li>
  //           <li className='nav_item'><Link to="/notas" className='nav_link'> Notas </Link></li>
  //           <li className='nav_item'><Switch onClick={switchBackground}/></li>
  //           <li className='nav_item'><Link to="/login" className='nav_link'> Login </Link></li>
  //         </ul>
  //         <div onClick={navToggle} className={toggleIcon}>
  //           <div className="line1"></div>
  //           <div className="line2"></div>
  //           <div className="line3"></div>
  //         </div>
  //       </nav>

  //       { children }

  //     </Context.Provider>
  //   </>
  // }

  // return (
  //   <BrowserRouter>

  //     <Navigation>
  //       <Routes>
  //         {/* <Route path="/" element={<Landing />} /> */}
  //         <Route path="/" element={<Home />} />
  //         <Route path="/landing" element={<Landing />} />
  //         <Route path="/dashboard" element={<Dashboard />} />
  //         <Route path="/notas" element={<NotasRoute />} />
  //         <Route path="/login" element={<LoginRoute />} />
  //         <Route path="*" element={<NotFoundRoute />} />
  //       </Routes>
  //     </Navigation>

  //   </BrowserRouter >

  // )

  return (
    <>

      {/* <Login /> */}
      <BrowserRouter>

        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/home" element={<HomeRoute />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notas" element={<NotasRoute />} />
          <Route path="/" element={<LoginRoute />} />
          <Route path="/navbar" element={<NavBarRoute />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}



export default App