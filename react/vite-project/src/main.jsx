import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css'
import {Inputs} from './assets/components/inputs.jsx'
import {Button} from './assets/components/button.jsx'
import {Header} from './assets/components/header.jsx'
import { HeaderMobile } from './assets/components/header_mobile.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <div>
        <Header />
        <HeaderMobile />
    </div>
)