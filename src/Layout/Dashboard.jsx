import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="bg-orange-200 w-64 min-h-screen">
        <ul className="menu">
          <NavLink to="/dashboard">Home</NavLink>
          <NavLink to="/dashboard/cart">Cart</NavLink>
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
