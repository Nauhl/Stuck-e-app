import * as React from "react";
import ReactDOM from 'react-dom/client'
// import App from './App'
// import { App } from './App'
import { AppRoutes } from './routesSRC/AppRoutes'
import { BrowserRouter, HashRouter } from "react-router-dom";
// import { Notas } from './components/Notas'
// import { Login } from './components/Login'
// import { NavBar } from './components/NavBar'
//import { Context } from './context/StaticContext'
import './index.css'
// import './App.css'

export function Main(): React.ReactElement<Record<string, unknown>> {

  return (
    <React.StrictMode>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
      {/* <Login /> */}

      {/* <Notas /> */}
      {/* <StaticContext /> */}
    </React.StrictMode>

  );
  //ReactDOM.createRoot(document.getElementById('root')).render(

}
