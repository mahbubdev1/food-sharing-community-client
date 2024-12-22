import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import router from './Router/Router.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </StrictMode>
  </AuthProvider>
)
