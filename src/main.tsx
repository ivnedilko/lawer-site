import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from './pages/MainPage';
import ContactsPage from './pages/ContactsPage';
import AboutUsPage from './pages/AboutUsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "/contacts",
    element: <ContactsPage/>
  },
  {
    path: "/about-us",
    element: <AboutUsPage/>
  },
], 
{
  basename: "/lawer-site",
}); 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
