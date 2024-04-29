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

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <div className='m-12 flex flex-col gap-5' >
         <Header />
        <HeaderMobile />
      {/*   <Login /> */}
        {/* <Cuentanos/>  */}
         <div className=" flex flex-col  gap-5  sm:flex-row ">
         <Calendario />
          <div className="flex flex-col w-full overflow-y-auto  bg-sky-600  rounded-2xl p-4 gap-4 h-[36.5rem] relative">
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