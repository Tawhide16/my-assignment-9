import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Navbar from '../components/Navbar';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import LogIn from '../Pages/LogIn';
import LogOut from '../Pages/LogOut';

 export const router = createBrowserRouter([
    {
      path: "/",
      Component:HomeLayout,
      children:[
        {
          path:"/",
          Component:Home,
          loader: ()=> fetch("event.json")
        },
        {
          path:"/profile",
          Component:Profile
        },
        {
          path:"/login",
          Component:LogIn
        },
        {
          path:"/logout",
          Component:LogOut
        },
      ]
    },
  ]);
  