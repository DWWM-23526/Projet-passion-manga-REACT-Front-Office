import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/core/App.jsx'
import { BrowserRouter } from "react-router-dom";

import './assets/styles/App.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/passion-manga/">
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
