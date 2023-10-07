import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayout from "../Root/MainLayout";
import About from "../Pages/About/About";
import Wedding from "../Pages/Wedding/Wedding";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";

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
            element:<About></About>
        },
        {
            path:"/Wedding",
            element:<Wedding></Wedding>
        },
        {
            path:"/Services/:id",
            element:<ServiceDetail></ServiceDetail>,
            loader : () => fetch('/public/service.json')
        },
      ]
    },
  ]);