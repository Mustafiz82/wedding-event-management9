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
                loader: () => fetch('/service.json')
            },
            {
                path:"/about",
                element:<AboutPage></AboutPage>
            },
            {
                path:"/Wedding",
                element:<Wedding></Wedding>
            },
            {
                path:"/Services/:id",
                element:<ServiceDetail></ServiceDetail>,
                loader : () => fetch('/service.json')
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/Registration",
                element:<Registration></Registration>
            },
        ]
        },
    ]);