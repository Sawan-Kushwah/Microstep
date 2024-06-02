import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import Programming from './pages/Programming.jsx'
import Webdevelopment from './pages/Webdevelopment.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/programming',
    element: <Programming />
  },
  {
    path: '/webdevelopment',
    element: <Webdevelopment />
  },
  {
    path: '/contact',
    element: <Contact />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
