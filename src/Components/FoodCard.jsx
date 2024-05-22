/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
