import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/style.scss'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)