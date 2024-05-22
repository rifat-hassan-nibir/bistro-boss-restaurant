import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import CategoryMenu from "../../../Components/CategoryMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <div className="container mx-auto">
      <SectionTitle subHeading={"Check it out"} heading={"From our menu"}></SectionTitle>
      <CategoryMenu items={popularMenu} btnText={"Order Your Favourite Food"} btnLink={""}></CategoryMenu>
    </div>
  );
};

export default PopularMenu;
