import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css'
import { Inputs } from './assets/components/inputs.jsx'
import { Button } from './assets/components/button.jsx'
import { Header } from './assets/components/header.jsx'
import { HeaderMobile } from './assets/components/header_mobile.jsx'
import { Login } from './assets/components/login.jsx'
import { Sing_up } from './assets/components/sing_up.jsx'
import { Cuentanos } from './assets/components/cuentanos_de_ti.jsx'
import { Eventos } from './assets/components/eventos.jsx'
import { Calendario } from './assets/components/calendario.jsx'
import { NavDrawer } from './assets/components/prueba/navDrawer.jsx'
import { NextEvent } from './assets/components/prueba/nextEvent.jsx'
import { Courses } from './assets/components/prueba/courses.jsx'
import { Filters } from './assets/components/prueba/filters.jsx'
import { MainSection } from './assets/components/prueba/mainSection.jsx'
import { Formulario } from './assets/components/formulario.jsx'
import { Actividades_diarias } from './assets/components/actividades_diarias.jsx'
import { ListaEvent } from './assets/components/listaEvent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
    
    <div className='overflow-x-hidden h-[100vh]'>
     {/* <Login />  */}
        {/* <Cuentanos/>   */}

        <NavDrawer />
        <Actividades_diarias/>
        <ListaEvent/>
        {/* <Formulario/> */}
=======


    <div className='overflow-x-hidden h-[100vh]'>
        {/*  <Login />
        <Cuentanos/>  */}

        {/* <NavDrawer /> */}
        {/* <MainSection/> */}
        {/*<Formulario />*/}
        <div className='overflow-x-hidden h-[100vh]'>
            {/*<Login />*/}
            {/*<Cuentanos/>*/}
            {/*<Sing_up />*/}
            {<NavDrawer />}
            {<MainSection/>}
        </div>
>>>>>>> 7b4a9cad8d194e05cde938dbc3eaa7b1843ffdb0
    </div>
);
