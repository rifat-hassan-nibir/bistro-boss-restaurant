import CoverTitle from "../../Components/CoverTitle";
import SectionTitle from "../../Components/SectionTitle";
import cover from "../../assets/menu/banner3.jpg";

const OurMenu = () => {
  return (
    <div>
      <CoverTitle image={cover} title={"our menu"} subTitle={"would you like to try a new dish"}></CoverTitle>
      <SectionTitle heading={"today's offer"} subHeading={"don't miss"}></SectionTitle>
    </div>
  );
};

export default OurMenu;
