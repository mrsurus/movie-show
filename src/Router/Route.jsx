import Home from "../Components/Home";
import ShowDetails from "../Components/ShowDetails";
import LayOut from "../Layouts/LayOut";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut></LayOut>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/summary/:id',
                element: <ShowDetails></ShowDetails>,
                loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
            }
        ]
    }
])