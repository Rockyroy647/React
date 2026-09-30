<<<<<<< HEAD

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(

    <StrictMode>

        <BrowserRouter>

            <App />

        </BrowserRouter>

    </StrictMode>

);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <ToastContainer/>
  </StrictMode>,
)
>>>>>>> b35adefc21cf5e1eacb3cea5191aeef77e137c03
