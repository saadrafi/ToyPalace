import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import App from "../../App";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

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
            }
        ]
        
    }
])

export default router;