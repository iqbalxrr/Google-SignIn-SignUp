import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Main from './Layout/Main';
import Login from './Components/Login/Login';
import PractiseLogin from './Components/Login/PractiseLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[

     {
      path:'/',
      element:<Home></Home>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/practiselogin',
      element:<PractiseLogin></PractiseLogin>
     }
     
    ]
    

  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
