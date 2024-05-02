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
import { NextEvent } from './assets/components/prueba/nextEvent.jsx'
import { Courses } from './assets/components/prueba/courses.jsx'
import { Filters } from './assets/components/prueba/filters.jsx'
import { MainSection } from './assets/components/prueba/mainSection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
    
    <div className='overflow-x-hidden h-[100vh]'>
     {/*  <Login />
        <Cuentanos/>  */}
=======
    <div className='overflow-x-hidden h-[100vh] '>
        {/*  <Login /> */}
        {/* <Cuentanos/>  */}
>>>>>>> 130181ef388cf2dfddfd8b543b86b7f476a70b33

        <NavDrawer />
        <MainSection/>
    </div>
);
