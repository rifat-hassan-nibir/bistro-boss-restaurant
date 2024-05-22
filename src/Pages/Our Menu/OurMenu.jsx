import CategoryMenu from "../../Components/CategoryMenu";
import CoverTitle from "../../Components/CoverTitle";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import cover from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
  const [menu] = useMenu();
  const offeredMenu = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <CoverTitle image={cover} title={"our menu"} subTitle={"would you like to try a new dish"}></CoverTitle>
      <div className="container mx-auto">
        <SectionTitle heading={"today's offer"} subHeading={"don't miss"}></SectionTitle>
        <CategoryMenu items={offeredMenu}></CategoryMenu>
      </div>
    </div>
  );
};

export default OurMenu;
