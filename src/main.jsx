import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './Components/Routes'
import "./index.css";
import "boxicons/css/boxicons.min.css";




const router = createBrowserRouter(routes)
console.log(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
 
 
  </StrictMode>,
)
