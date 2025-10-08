import React from 'react';

import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import AllApps from '../pages/AllApps';
import Installation from '../pages/Installation';



 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
          path:'/apps',
          element:<AllApps></AllApps>
        },
        {
          path:'/installation',
          element:<Installation></Installation>
        }
        
    ]
  },
]);

