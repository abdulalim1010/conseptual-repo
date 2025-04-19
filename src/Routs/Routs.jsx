import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import Mainlayouts from "../Layout/Mainlayouts";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Favorites from "../Pages/Favorites";
import Navbar from "../components/Navbar/Navbar";
import PhoneDetails from "../Pages/PhoneDetails";

export const router = createBrowserRouter([
 
  {
    path: "/",
    Component: Mainlayouts,
    errorElement:<Error />,
    children: [
      {
         path:'/',
    element:<Home/>,
    loader:()=>fetch('phones.json')
  
      },
      {
      path: '/favorite',
      element: <Favorites/>

      },
      {
    path: "about",
    element:<About/>
  },
      {
    path: "/phones-details",
    element:<PhoneDetails/>
  },
      {
    path: "navbar",
    element:<Navbar/>
  },

     ],
      
  },
  
]);