import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../../Components/MenuItem";

const PopularMenu = () => {
  const [popularMenu, setPopularMenu] = useState();

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menu = data.filter((item) => item.category === "popular");
        setPopularMenu(menu);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <SectionTitle subHeading={"Check it out"} heading={"From our menu"}></SectionTitle>
      <div className="grid grid-cols-2 gap-[32px]">
        {popularMenu?.map((menu) => (
          <MenuItem item={menu} key={menu._id}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="btn">Show all menu</button>
      </div>
    </div>
  );
};

export default PopularMenu;
