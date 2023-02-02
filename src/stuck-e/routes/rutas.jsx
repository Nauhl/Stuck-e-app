// import { useContext } from "react"
// import Context from "../context/StaticContext"
// import { Notas } from "../components/Notas"
// import { Login } from "../components/Login"
// import { NotFound } from "../components/NotFound"
// import { NavBar } from "../components/NavBar"
// import { Home } from "../components/Home"

// export const Landing = () => {

//     //const { estilo, setEstilo} = useContext( Context )

//     return (

//         <>
//         <NavBar />
//         <h1>landing</h1>
//             {/* <h2>Landing Page (Public) - El estilo { estilo ? 'es negro': 'es blanco' } 
//             </h2>
//             <button onClick={()=>{ 
                
//                 setEstilo( !estilo ) 
//             }} >Toggle</button> */}
        
//         </>

//     )
// }

// export const HomeRoute = () => <Home />

// //     {
    
// //     const {estilo} = useContext( Context )

// //    return(
// //         <>
// //             <h2>Home page (Private) - el estilo es: { estilo ? 'es negro': 'es blanco' }</h2>
// //         </>
// //    ) 
// // } 

// export const Dashboard = () => <h2>Dashboard (Private)</h2>

// export const NotasRoute = () => <Notas />

// export const LoginRoute = () => <Login />

// export const NavBarRoute = () => <NavBar />

// export const NotFoundRoute = () => <NotFound />


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { ListaNotas } from '../Pages/ListaNotas'
import { Login } from '../Pages/Login'
import { Notas } from '../Pages/Notas'
// import { MainMenu } from '../pages/MainMenu/MainMenu'
// import { OperationWCURoutes } from '../pages/OperationWCU/routes/OperationWCURoutes'
// import { AdminWCURoutes } from '../pages/AdminWCU/routes/AdminWCURoutes'
// import { ProductionPlanRoutes } from '../pages/ProductionPlan/routes/ProductionPlanRoutes' 



export const Rutas = () => {
    return (
        <Routes>
            <Route path='/Notas/*' element={ <Notas /> } />
            <Route path='/ListaNotas/*' element={<ListaNotas/> } />
            <Route path='/Home/*' element={ <Home /> } />
            <Route path='/*' element={ <Login /> } />
        </Routes>
    )
}
