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
import Admin from './pages/Admin.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import SubmittedSuccessfully from './components/SubmittedSuccessfully.jsx'

// let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz0123456789";
// let charLen = char.length;
// let randomString = "";
// for (let i = 0; i < charLen; i++) {
//   randomString += char.charAt(Math.floor(Math.random() * charLen));
// }
// console.log(randomString);


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
  {
    path: `/admin/u/login/state=FhxU3Frk6fje5MBCY8zAIroa4Y5k6UYgNeqsP5yJUWNu4ISBzC4YQmdra1ceFqsxoAhm7Scmn6I8DQdOYkMBfgjeMGaHROvYSNZz2EzC7iGxV1tpSV14L1lDcl`,
    element: <Admin />
  },
  {
    path: '/successfullySubmitted',
    element: <SubmittedSuccessfully />
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


// /admin/u/login/state=FhxU3Frk6fje5MBCY8zAIroa4Y5k6UYgNeqsP5yJUWNu4ISBzC4YQmdra1ceFqsxoAhm7Scmn6I8DQdOYkMBfgjeMGaHROvYSNZz2EzC7iGxV1tpSV14L1lDcl