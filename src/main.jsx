import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import { App } from './App'
import { Notas } from './components/Notas'
import { Login } from './components/Login'
import { NavBar } from './components/NavBar'
//import { Context } from './context/StaticContext'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Login /> */}
    
    {/* <Notas /> */}
    {/* <StaticContext /> */}
  </React.StrictMode>,
  
)
