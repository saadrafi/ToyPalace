import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import App from "../../App";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import AddToy from "../../pages/addtoypage/AddToy";
import AllToys from "../../pages/allToysPage/AllToys";
import ToyDetails from "../../pages/toyDetailsPage/ToyDetails";
import MyToys from "../../pages/myToysPage/MyToys";
import UpdateToy from "../../pages/updatePage/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../../pages/error/ErrorPage";
import BlogPage from "../../pages/blog/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://legoserver-saadrafi.vercel.app/alltoys"),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://legoserver-saadrafi.vercel.app/toy/${params.id}`),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://legoserver-saadrafi.vercel.app/toy/${params.id}`),
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
    ],
  },
]);

export default router;
