import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooterInLogin = location.pathname.includes("login");
  const noHeaderFooterInRegister = location.pathname.includes("register");

  return (
    <div>
      {noHeaderFooterInLogin || noHeaderFooterInRegister || <Navbar></Navbar>}
      <div className="min-h-[60vh]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooterInLogin || noHeaderFooterInRegister || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
