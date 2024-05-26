import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import OurMenu from "../Pages/Our Menu/OurMenu";
import OrderMenu from "../Pages/Order Menu/OrderMenu";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AdminHome from "../Pages/Dashboard/AdminHome";
import AddItem from "../Pages/Dashboard/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "order-menu/:category",
        element: <OrderMenu></OrderMenu>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "add-item",
        element: <AddItem></AddItem>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default router;
