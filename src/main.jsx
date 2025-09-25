import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createHashRouter, RouterProvider} from "react-router";
import Breeds from './Components/Breeds.jsx';
import BreedsExtended from './Components/BreedsExtended.jsx'
import Frontpage from './Components/Frontpage.jsx';



  const router = createHashRouter([
     {
    path: "/",
    element: <App />, 
    children: [
      {index: true,
        element: <Frontpage />
      },
      { path: "Breeds", 
        element: <Breeds /> 
      },
      { path: "BreedsExtended", 
        element: <BreedsExtended /> 
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
