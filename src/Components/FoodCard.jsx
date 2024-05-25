import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // add user info to cartCollection db
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
          navigate("/login");
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
