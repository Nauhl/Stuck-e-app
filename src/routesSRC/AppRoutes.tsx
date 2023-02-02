import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Rutas } from '../stuck-e/routes/rutas'

export const AppRoutes = () => {
  return (
        <Routes>
            {
                // status == 'logged-off' ?
                // ( <Route path='/*' element={ <AuthRoutes /> } /> )
                //:( 
                    
                <Route path='/*' element={ <Rutas /> } />
                // )

            }


            

        </Routes>
  )
}
