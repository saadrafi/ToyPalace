import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import App from "../../App";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import AddToy from "../../pages/addtoypage/AddToy";
import AllToys from "../../pages/allToysPage/AllToys";

const router= createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path:"/login",
                element:<Login></Login>

            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/addtoy",
                element:<AddToy></AddToy>
            },
            {
                path:"/alltoys",
                element:<AllToys></AllToys>
            }
        ]
        
    }
])

export default router;