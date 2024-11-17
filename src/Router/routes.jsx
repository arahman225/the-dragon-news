import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Pages/Error";
import CategoriesNews from "../Pages/CategoriesNews";
import Career from "../Pages/Career";
import AuthLayout from "../Auth/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/01" />
            },
            {
                path: '/category/:id',
                element: <CategoriesNews></CategoriesNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

            },

        ],

    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
        path:'/career',
        element: <Career></Career>
    },
])

export default routes