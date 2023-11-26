import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/style.scss'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
)
