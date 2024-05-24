import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooterInLogin = location.pathname.includes("login") || location.pathname.includes("register");

  return (
    <div>
      {noHeaderFooterInLogin || <Navbar></Navbar>}
      <div className="min-h-[60vh]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooterInLogin || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
