import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import Programming from './pages/Programming.jsx'
import Webdevelopment from './pages/Webdevelopment.jsx'
import Contact from './pages/Contact.jsx'
import WebIntern1 from './webInternship/WebIntern1.jsx'
import ApplyNow from './ApplyNow.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

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
  {
    path: '/applicationPageWeb1Month',
    element: <WebIntern1 />
  },
  {
    path: '/applyNow',
    element: <ApplyNow />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-b7v5v16ra678oylf.us.auth0.com"
    clientId="EPPpywMvlHKyN2RgS9TBoHY7mTsnRbsy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <RouterProvider router={router} />
  </Auth0Provider>

)
