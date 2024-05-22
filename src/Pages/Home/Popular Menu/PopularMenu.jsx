import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../../Components/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

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
