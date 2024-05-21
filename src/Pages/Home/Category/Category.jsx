import SectionTitle from "../../../Components/SectionTitle";
import CategorySlider from "./CategorySlider";

const Category = () => {
  return (
    <div className="container mx-auto">
      <section>
        <SectionTitle subHeading={"--From 11:00am to 11:00pm--"} heading={"Order Online"}></SectionTitle>
        <CategorySlider></CategorySlider>
      </section>
    </div>
  );
};

export default Category;
