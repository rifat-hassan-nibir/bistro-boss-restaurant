import CategoryMenu from "../../Components/CategoryMenu";
import CoverTitle from "../../Components/CoverTitle";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import cover from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";

const OurMenu = () => {
  const [menu] = useMenu();
  const offeredMenu = menu.filter((item) => item.category === "offered");
  const deserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <CoverTitle image={cover} title={"our menu"} subTitle={"would you like to try a new dish"}></CoverTitle>
      <div className="container mx-auto">
        {/* Today's offer */}
        <SectionTitle heading={"today's offer"} subHeading={"don't miss"}></SectionTitle>
        <CategoryMenu items={offeredMenu} btnText={"Order Your Favourite Food"} btnLink={""}></CategoryMenu>

        {/* Desert items */}
        <CoverTitle
          image={desertImg}
          title={"DESSERTS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverTitle>
        <CategoryMenu items={deserts} btnText={"Order Your Favourite Food"} btnLink={""}></CategoryMenu>

        {/* Salad items */}
        <CoverTitle
          image={desertImg}
          title={"DESSERTS"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverTitle>
        <CategoryMenu items={salad} btnText={"Order Your Favourite Food"} btnLink={""}></CategoryMenu>
      </div>
    </div>
  );
};

export default OurMenu;
