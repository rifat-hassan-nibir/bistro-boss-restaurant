import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
  const { image, name, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // add menu item info to db
      const cartItem = {
        menuId: _id,
        email: user?.email,
        image,
        name,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((data) => {
        console.log(data.data);
        if (data.data.acknowledged) {
          Swal.fire({
            title: `${name} added to cart`,
            width: 600,
            padding: "3em",
            color: "#716add",
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={item.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>Category: $ {item.price}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(item)} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
