import useCart from "../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();

  return (
    <div>
      <div className="flex justify-between py-10 px-[100px] text-2xl font-semibold">
        <h1>Total Items: {cart.length}</h1>
        <h1>Total Price: {cart.reduce((total, item) => total + item.price, 0)}</h1>
        <button className="btn">Pay</button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto px-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <img src={item.image} className="size-16"></img>
                </td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
