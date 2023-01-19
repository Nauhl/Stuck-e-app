import { useContext } from "react"
import { Notas } from "../components/Notas"
import Context from "../context/StaticContext"

export const Landing = () => {

    const { estilo, setEstilo} = useContext( Context )

    return (

        <>
            <h2>Landing Page (Public) - El estilo { estilo ? 'es negro': 'es blanco' } 
            </h2>
            <button onClick={()=>{ 

                
                setEstilo( !estilo ) 
            }} >Toggle</button>
        
        </>

    )
}

export const Home = () =>{

    const {estilo} = useContext( Context )

   return(
        <>
            <h2>Home page (Private) - el estilo es: { estilo ? 'es negro': 'es blanco' }</h2>
        </>
   ) 
} 

export const Dashboard = () => <h2>Dashboard (Private)</h2>

export const NotasRoute = () => <Notas />