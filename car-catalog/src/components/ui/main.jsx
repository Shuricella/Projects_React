import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from '../screens/home/Home.jsx'
import Router from './Router.jsx'
// import './index.css'
import '../../assets/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    {/* <Home /> */}
  </React.StrictMode>,
)
