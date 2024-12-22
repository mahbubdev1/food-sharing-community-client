import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from '../Router/Router.jsx';
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </StrictMode>
  </AuthProvider>
)
