import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import OurMenu from "../Pages/Our Menu/OurMenu";
import OurShop from "../Pages/Our Shop/OurShop";

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
        path: "our-shop",
        element: <OurShop></OurShop>,
      },
    ],
  },
]);

export default router;
