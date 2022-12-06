import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../layout/pages/Category/Category";
import Home from "../layout/pages/Home/Home";
import Login from "../layout/pages/Login/Login";
import Register from "../layout/pages/Login/Register";
import News from "../layout/pages/News/News";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [{
            path: '/',
            element: <Home />,
            loader: () => fetch('https://dragon-news-server-red-one.vercel.app/news')
        },
        {
            path: 'category/:id',
            element: <Category />,
            loader: ({ params }) => fetch(`https://dragon-news-server-red-one.vercel.app/category/${params.id}`)
        },
        {
            path: '/news/:id',
            element: <PrivateRoute> <News /></PrivateRoute>,
            loader: ({ params }) => fetch(`https://dragon-news-server-red-one.vercel.app/news/${params.id}`)
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }]
    }
])