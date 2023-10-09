import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayout from "../Root/MainLayout";
import About from "../Component/About/About";
import Wedding from "../Pages/Wedding/Wedding";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import AboutPage from "../Pages/About/AboutPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('/public/service.json')
        },
        {
            path:"/about",
            element:<PrivateRoute><AboutPage></AboutPage></PrivateRoute>
        },
        {
            path:"/Wedding",
            element:<PrivateRoute><Wedding></Wedding></PrivateRoute>
        },
        {
            path:"/Services/:id",
            element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
            loader : () => fetch('/public/service.json')
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/Register",
            element:<Registration></Registration>
        },
      ]
    },
  ]);