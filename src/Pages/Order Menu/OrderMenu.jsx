import CoverTitle from "../../Components/CoverTitle";
import shopImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OrderMenu = () => {
  const categories = ["salad", "pizza", "soup"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <CoverTitle image={shopImg} title={"order menu"}></CoverTitle>

      {/* Tabs */}
      <div className="container mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
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

export default OrderMenu;
