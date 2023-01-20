import React from 'react'
import { useContext } from "react"
import Context from "../context/StaticContext"
import { NavBar } from './NavBar'

export const Home = () => {

    // const { estilo, setEstilo } = useContext(Context)

    return (
        <>
        <NavBar />
            <div>Home</div>
            <h1>Hoemeee</h1>
            {/* <h2>Home page (Private) - el estilo es: { estilo ? 'es negro': 'es blanco' }</h2> */}
        </>
    )
}

export default Home