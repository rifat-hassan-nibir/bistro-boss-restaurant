import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="bg-orange-200 w-64 min-h-screen">
        <ul className="menu p-4 space-y-3">
          <li>
            <NavLink to="/dashboard/home" className="bg-orange-500 p-3 rounded-md text-white font-bold">
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-item" className="bg-orange-500 p-3 rounded-md text-white font-bold">
              Add Item
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className="bg-orange-500 p-3 rounded-md text-white font-bold">
              Cart
            </NavLink>
          </li>
        </ul>

        {/* Divider */}
        <div className="divider"></div>

        <ul className="menu p-4 space-y-3">
          <li>
            <NavLink to="/" className="bg-orange-500 p-3 rounded-md text-white font-bold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order-menu/salad" className="bg-orange-500 p-3 rounded-md text-white font-bold">
              Order menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
