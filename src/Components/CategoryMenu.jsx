/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

const CategoryMenu = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-[32px]">
      {items?.map((menu) => (
        <MenuItem item={menu} key={menu._id}></MenuItem>
      ))}
    </div>
  );
};

export default CategoryMenu;
