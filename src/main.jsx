import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import "./assets/css/bootstrap.min.css";
import './assets/css/all.min.css'
import "./assets/css/style.css";
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
)
