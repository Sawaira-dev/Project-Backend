import React, { createContext, useEffect, useReducer } from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { reducer } from "./reducer";
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Context/context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <ContextProvider>
          <App />
      </ContextProvider>
      </BrowserRouter>
  </React.StrictMode>
)





