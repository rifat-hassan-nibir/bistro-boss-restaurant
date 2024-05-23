import CategoryMenu from "../../Components/CategoryMenu";
import CoverTitle from "../../Components/CoverTitle";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import cover from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";

const OurMenu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <CoverTitle image={cover} title={"our menu"} subTitle={"would you like to try a new dish"}></CoverTitle>
      <div className="container mx-auto">
        {/* Today's offer */}
        <SectionTitle heading={"today's offer"} subHeading={"don't miss"}></SectionTitle>
        <CategoryMenu items={salad} btnText={"Order Salad"} btnLink={""}></CategoryMenu>

        {/* Desert items */}
        <CoverTitle
          image={desertImg}
          title={"pizza"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverTitle>
        <CategoryMenu items={pizza} title={"pizza"} btnText={"Order Pizza"} btnLink={""}></CategoryMenu>

        {/* Salad items */}
        <CoverTitle
          image={saladImg}
          title={"soup"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></CoverTitle>
        <CategoryMenu items={soup} title={"soup"} btnText={"Order Soup"} btnLink={""}></CategoryMenu>
      </div>
    </div>
  );
};

export default OurMenu;
