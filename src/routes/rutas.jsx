import { useContext } from "react"
import Context from "../context/StaticContext"
import { Notas } from "../components/Notas"
import { Login } from "../components/Login"
import { NotFound } from "../components/NotFound"
import { NavBar } from "../components/NavBar"
import { Home } from "../components/Home"

export const Landing = () => {

    //const { estilo, setEstilo} = useContext( Context )

    return (

        <>
        <NavBar />
        <h1>landing</h1>
            {/* <h2>Landing Page (Public) - El estilo { estilo ? 'es negro': 'es blanco' } 
            </h2>
            <button onClick={()=>{ 
                
                setEstilo( !estilo ) 
            }} >Toggle</button> */}
        
        </>

    )
}

export const HomeRoute = () => <Home />

//     {
    
//     const {estilo} = useContext( Context )

//    return(
//         <>
//             <h2>Home page (Private) - el estilo es: { estilo ? 'es negro': 'es blanco' }</h2>
//         </>
//    ) 
// } 

export const Dashboard = () => <h2>Dashboard (Private)</h2>

export const NotasRoute = () => <Notas />

export const LoginRoute = () => <Login />

export const NavBarRoute = () => <NavBar />

export const NotFoundRoute = () => <NotFound />