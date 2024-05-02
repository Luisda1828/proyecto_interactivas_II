import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css'
import {Inputs} from './assets/components/inputs.jsx'
import {Button} from './assets/components/button.jsx'
import {Header} from './assets/components/header.jsx'
import { HeaderMobile } from './assets/components/header_mobile.jsx'
import { Login } from './assets/components/login.jsx'
import { Cuentanos } from './assets/components/cuentanos_de_ti.jsx'
import { Eventos } from './assets/components/eventos.jsx'
import { Calendario } from './assets/components/calendario.jsx'
import { NavDrawer } from './assets/components/prueba/navDrawer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <div className='overflow-x-hidden h-[100vh]'>
     {/*  <Login />
        <Cuentanos/>  */}

      <NavDrawer/>
      
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-4 px-8  h-[30rem] ">
       
        <Calendario />  
            <div class="overflow-y-auto scrollbar-hide  col-span-2  p-4 bg-sky-600 rounded-3xl ">
            <h1 class="text-center titulo mt-4 mb-4 text-white">Jueves 25 Abril 2024</h1>
            <Eventos />
            <Eventos />
            <Eventos />
            <Eventos />
            <Eventos />
            <Eventos />
            </div>
        </div>
        
    </div>
)