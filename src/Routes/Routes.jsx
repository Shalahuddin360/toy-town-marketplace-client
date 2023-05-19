import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddToys from "../pages/AddToys/AddToys";

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
        }

      ]
    },
  ]);

  export default router