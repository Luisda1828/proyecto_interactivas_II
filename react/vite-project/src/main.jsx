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


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <div>
       {/*  <Header />
        <HeaderMobile /> */}
      {/*   <Login /> */}
       <Cuentanos/>
    </div>
)