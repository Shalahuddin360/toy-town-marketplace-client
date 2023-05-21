import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddToys from "../pages/AddToys/AddToys";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import AllToys from "../pages/Home/AllToys/AllToys";
import MyToys from "../pages/Home/Home/MyToys/MyToys";
import SingleToy from "../pages/Home/Home/SingleToy/SingleToy";
import PrivateRoutes from "./PrivateRoutes.jsx/PrivateRoutes";
import Blog from "../pages/Home/Home/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [

        {
            path:'/',
            element:<Home></Home>


        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/addToys',
          element:<PrivateRoutes><AddToys></AddToys></PrivateRoutes>
        },
        {
          path:"allToys",
          element:<AllToys></AllToys>
    
        },
        {
         path:"myToys",
         element:<MyToys></MyToys>
       
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:"/toy/:id",
          element:<PrivateRoutes><SingleToy></SingleToy>,</PrivateRoutes>
          // loader:({params})=>{fetch(`https://toy-town-server-smoky.vercel.app/singleToy/${params.id}`)}

        }

      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ]);

  export default router