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
          element:<AddToys></AddToys>
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
          path:"/toy/:id",
          element:<SingleToy></SingleToy>,

        }

      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ]);

  export default router