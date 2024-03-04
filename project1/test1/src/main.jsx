import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/header/Header.jsx'
import Banner from './components/banner/Banner.jsx'
import './assets/css/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Banner/>
  </React.StrictMode>,
)
