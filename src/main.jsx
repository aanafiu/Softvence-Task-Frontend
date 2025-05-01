import { StrictMode } from 'react'
import {
  RouterProvider,
} from "react-router";

import ReactDOM from "react-dom/client";
import { router } from './Routes/router';

// Custom CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
