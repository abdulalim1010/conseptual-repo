import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: '/favorite',
      element: <h1>this is favorite page</h1>,

    },

     ],
      
  },
  {
    path: "/about",
    element:<h1>this is bout page</h1>
  },
]);

const root = createRoot(document.getElementById('root')).render(    <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,) 
