import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}

      {/* Body */}
      <Outlet></Outlet>

      {/* Footer */}
    </div>
  );
};

export default MainLayout;
