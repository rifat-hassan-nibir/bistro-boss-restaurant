import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut();
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="our-menu">Our Menu</Link>
      </li>
      <li>
        <Link to="order-menu/salad">Order Menu</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard/cart">
              <button className="btn">
                <IoCartOutline />
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
          </li>
          <li>
            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <Link to="login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="relative">
      <div className="navbar bg-black bg-opacity-30 text-white fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <p className="text-white text-lg">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
