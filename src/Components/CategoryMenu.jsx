/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const CategoryMenu = ({ items, btnText, btnLink }) => {
  console.log(btnText);
  return (
    <div>
      <div className="grid grid-cols-2 gap-[32px]">
        {items?.map((menu) => (
          <MenuItem item={menu} key={menu._id}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link to={`/${btnLink}`} className="btn">
          <p>{btnText}</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryMenu;
