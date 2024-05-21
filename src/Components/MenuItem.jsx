/* eslint-disable react/prop-types */
const MenuItem = ({ item }) => {
  return (
    <div>
      <div className="flex items-center gap-[32px]">
        <div>
          <img className="w-[118px] h-[104px] rounded-b-[50%] rounded-tr-[50%]" src={item.image} alt="" />
        </div>
        <div>
          <h3 className="text-2xl">{item.name} ----------</h3>
          <p className="text-md text-gray-500">{item.recipe}</p>
        </div>
        <div>
          <p className="text-yellow-600">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
