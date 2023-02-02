import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"        // necesario para trabajar rutas
// import { Landing, HomeRoute, Dashboard, NotasRoute, LoginRoute, NotFoundRoute } from "../routes/rutas"        // permito traer la funcion 'landing' 
// import { Login } from "../routes/rutas"
import '../../index.css'
import { useState } from "react"
import Context from '../context/StaticContext'
import Switch from '@mui/material/Switch';
import { Dialog } from 'primereact/dialog';
import { useRef, useEffect } from 'react';
import './App.css'

export const NavBar = () => {

    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const refSun = useRef(null);
    const refMoon = useRef(null);
    

    const navToggle = () => {
        active === "nav_menu"
            ? setActive("nav_menu nav_active")
            : setActive("nav_menu");

        // Toggler Icon 

        toggleIcon === "nav_toggler"
            ? setToggleIcon("nav_toggler toggle")
            : setToggleIcon("nav_toggler");
    }

    let showicon = true;

    // useEffect(() => {
    //     let element = refSun.current;
    //     let elementMoon = refMoon.current
    //     element = { ...refSun, elementMoon }
    //     console.log(element);
    //     console.log(element.current.id);
    //     console.log(element.elementMoon.id);


    //     if (element.current.id == "sun") {
    //         showicon
    //     } else if (element.elementMoon.id) {
    //         showicon = false
    //     }
    // }, []);



    function Navigation({ children }) {
        const [estilo, setEstilo] = useState(true)
        const [showHtml, setShowHtml] = useState(false)


        

        const switchBackground = () => {

            setEstilo(false)
            setShowHtml(true)

            estilo ? setShowHtml(showHtml) :  setShowHtml(!showHtml)
            showHtml ? document.body.className = "backgroundBlack" : document.body.className = "backgroundWhite";


            //console.log("estilo",estilo);
            // if (estilo === true) {
            //     //console.log("fondo blanco");
            //     //setShowHtml(!showHtml);
            //     document.body.className = "backgroundWhite";
                
            //     console.log("HTML true",showHtml);

            // } else if (estilo === false) {
            //     //console.log("fondo negro");
            //     //setShowHtml(showHtml)
            //     document.body.className = "backgroundBlack";
                
            //     console.log(" HTMTL false",showHtml);
            // }
        }

        return <>
            <Context.Provider value={{ estilo, setEstilo }}>
                <nav className='nav'>
                    <h1 href="/home" className="nav_brand" style={{ color: "#fff" }}>Prueba</h1>
                    <ul className={active}>
                        <h1 className='nav_item'><Link to="/landing" className='nav_link'> Landing </Link></h1>
                        <h1 className='nav_item'><Link to="/home" className='nav_link'> Home </Link></h1>
                        <h1 className='nav_item'><Link to="/dashboard" className='nav_link'> Dashboard </Link></h1>
                        <h1 className='nav_item'><Link to="/landing" className='nav_link'> Landing </Link></h1>
                        <h1 className='nav_item'><Link to="/notas" className='nav_link'> Notas </Link></h1>
                        <h1 className='nav_item'><Switch onClick={switchBackground} /></h1>
                        
                        <li className='nav_item' value={{showHtml, setShowHtml}}> { showHtml ? <i className="pi pi-moon" style={{ 'fontSize': '2em', 'color': '#fff' }}></i> : <i className="pi pi-sun" style={{ 'fontSize': '2em', 'color': '#fff' }}></i> }  </li>
                        {/* <li className='nav_item' value={{showHtml, setShowHtml}}> <i className="pi pi-moon" style={{ 'fontSize': '2em', 'color': '#fff' }}></i> </li> */}
                        
                        <li className='nav_item'><i className="pi pi-user" style={{ 'fontSize': '2em', 'color': '#fff' }}></i></li>

                    </ul>
                    <div onClick={navToggle} className={toggleIcon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>

                {children}

            </Context.Provider>
        </>
    }

    return (

        <Navigation></Navigation>
        // <BrowserRouter>

        //     <Navigation>
        //         <Routes>
        //             {/* <Route path="/" element={<Landing />} /> */}
        //             <Route path="/home" element={<HomeRoute />} />
        //             <Route path="/landing" element={<Landing />} />
        //             <Route path="/dashboard" element={<Dashboard />} />
        //             <Route path="/notas" element={<NotasRoute />} />
        //             <Route path="/" element={<LoginRoute />} />
        //             <Route path="*" element={<NotFoundRoute />} />
        //         </Routes>
        //     </Navigation>

        // </BrowserRouter >

    )

}

