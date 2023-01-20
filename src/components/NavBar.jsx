import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"        // necesario para trabajar rutas
import { Landing, HomeRoute, Dashboard, NotasRoute, LoginRoute, NotFoundRoute } from "../routes/rutas"        // permito traer la funcion 'landing' 
import "../App.css"
import { useState } from "react"
import Context from '../context/StaticContext'
import Switch from '@mui/material/Switch';
import { Dialog } from 'primereact/dialog';
import {useRef, useEffect} from 'react';

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

    useEffect(() => {
        let element = refSun.current;
        let elementMoon = refMoon.current
        element = {...refSun, elementMoon}
        console.log(element);
        console.log(element.current.id);
        console.log(element.elementMoon.id);

        
        if (element.current.id == "sun") {
            showicon
        } else if (element.elementMoon.id) {
            showicon = false
        }
      }, []);

      

    function Navigation({ children }) {
        const [estilo, setEstilo] = useState(false)

        
        // let showicon = true;

        // const iconSun = get.elementById("sun");
        // const iconMoon = get.elementById("moon");

        // const sunIcon = () => (

        //     <li className='nav_item' id='sun'><i className="pi pi-sun" style={{ 'fontSize': '2em', 'color': '#fff' }}></i></li>
        // )

        // const moonIcon = () => (

        //     <li className='nav_item' id='sun'><i className="pi pi-moon" style={{ 'fontSize': '2em', 'color': '#fff' }}></i></li>
        // )
        

        const switchBackground = () => {
            setEstilo(!estilo)

            if (estilo == true) {
                console.log("fondo blanco");
                document.body.className = "backgroundWhite";
                // showicon = true;
                // console.log("icon", showicon);
                // console.log("sun", iconSun); 

            } else {
                console.log("fondo negro");
                document.body.className = "backgroundBlack";
                // showicon = false;
                // console.log("icon", showicon);
                //console.log("moon", iconMoon); 
            }
        }

        return <>
            <Context.Provider value={{ estilo, setEstilo }}>
                <nav className='nav'>
                    <a href="/home" className="nav_brand">Prueba</a>
                    <ul className={active}>
                        <li className='nav_item'><Link to="/landing" className='nav_link'> Landing </Link></li>
                        <li className='nav_item'><Link to="/home" className='nav_link'> Home </Link></li>
                        <li className='nav_item'><Link to="/dashboard" className='nav_link'> Dashboard </Link></li>
                        <li className='nav_item'><Link to="/landing" className='nav_link'> Landing </Link></li>
                        <li className='nav_item'><Link to="/notas" className='nav_link'> Notas </Link></li>
                        <li className='nav_item'><Switch onClick={switchBackground} /></li>
                        {/* <li className='nav_item'><Link to="/" className='nav_link'> Login </Link></li> */}
                        {/* {
                            showicon ? <li className='nav_item' ref={refSun} id='sun'><i className="pi pi-sun" style={{ 'fontSize': '2em', 'color': '#fff' }}></i></li> : <li className='nav_item' ref={refMoon} id='sun'><i className="pi pi-moon" style={{ 'fontSize': '2em', 'color': '#fff' }}></i></li>
                            //!showicon ? <li className='nav_item' id='sun'><i className="pi pi-sun" style={{ 'fontSize': '2em', 'color': '#fff' }}></i></li> : <li className='nav_item' id='sun'><i className="pi pi-moon" style={{ 'fontSize': '2em', 'color': '#fff' }}></i></li>
                        } */}
                        <li className='nav_item' ref={refSun} id="sun"><i className="pi pi-sun" style={{ 'fontSize': '2em', 'color': '#fff' }}></i></li>
                        <li className='nav_item' ref={refMoon} id="moon"><i className="pi pi-moon" style={{ 'fontSize': '2em', 'color': '#fff' }}></i></li>
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

