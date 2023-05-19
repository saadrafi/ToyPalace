import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import App from "../../App";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import AddToy from "../../pages/addtoypage/AddToy";
import AllToys from "../../pages/allToysPage/AllToys";
import ToyDetails from "../../pages/toyDetailsPage/ToyDetails";
import MyToys from "../../pages/myToysPage/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/alltoys"),
      },
      {
        path: "/toy/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);

export default router;
