import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createHashRouter, RouterProvider} from "react-router";
import Breeds from './Components/Breeds.jsx';
import BreedsExtended from './Components/BreedsExtended.jsx'



  const router = createHashRouter([
    {
      path: "/",
      Component: App,
    },
    {
      path: "/Breeds",
      Component: Breeds,
    },
    {
      path: "/BreedsExtended",
      Component: BreedsExtended,
    },
  ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
