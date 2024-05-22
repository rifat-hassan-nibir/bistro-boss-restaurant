import CoverTitle from "../../Components/CoverTitle";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard";

const OurShop = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <CoverTitle image={shopImg} title={"our shop"}></CoverTitle>

      {/* Tabs */}
      <div className="container mx-auto">
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3 gap-3">
              {salad.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-3">
              {pizza.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-3">
              {soup.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
