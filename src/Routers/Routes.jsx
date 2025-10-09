import React from 'react';

import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import AllApps, { appsLoader } from '../pages/AllApps'
import Installation from '../pages/Installation';
import AppDetails, { appLoader } from '../pages/AppDetails';



 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>loding</p>,
    children:[
        {
            index:true,
            element:<Home></Home>,
            loader:appsLoader
        },
        {
          path:'/apps',
          element:<AllApps></AllApps>,
          loader:appsLoader
        },
        {
          path:'/installation',
          element:<Installation></Installation>,
          loader:appsLoader
        },
        {
          path:'/appDetails/:id',
          element:<AppDetails></AppDetails>,
          loader:appLoader
        },
    ]
  },
]);

