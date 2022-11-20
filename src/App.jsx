import React from 'react';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import MainLayout from './Component/MainLayout/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Gallery from './Component/Gallery/Gallery';
import Contact from './Component/Contact/Contact';


const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {index:true, element: <Home/> },
      { path:"about", element: <About/>},
      { path:"gallery", element: <Gallery/>},
      { path:"contact", element: <Contact/>}
    ]

  }
])


export default function App() {
  return  <RouterProvider router = {routers}/>
}
