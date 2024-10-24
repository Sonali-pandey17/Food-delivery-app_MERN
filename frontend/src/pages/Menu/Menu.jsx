import React, { useContext, useState } from "react";
import "./Menu.css";
import ExploreMenu from "../../Components/Explore Menu/ExploreMenu";
import FoodDisplay from "../../Components/Food display/FoodDisplay";
import FoodItem from "../../Components/Food item/FoodItem";
import AppDownload from "../../Components/AppDownload/AppDownload";
import { StoreContext } from "../../contexts/StoreContext";
import { menu_list } from '../../assets/assets'

const Menu = () => {
  const [category, setCategory] = useState("All");
  const { food_list } = useContext(StoreContext);
  return (
    <div className="home">
      {/* <ExploreMenu category={category} setCategory={setCategory}/> */}
      {/* <FoodDisplay category={category}/> */}
     
      <div className="food-display1" id="food-display1">
        <div className="menu-combine">
        <div className="explore-menu1" id="explore-menu">
          {/* <h1>Explore our menu</h1> */}
          <div className="explore-menu-list1">
            <h1>Category</h1>
            {menu_list.map((item, ind) => {
              return (
                <div
                  onClick={() =>
                    setCategory((prev) =>
                      prev === item.menu_name ? "All" : item.menu_name
                    )
                  }
                  key={ind}
                  className="explore-menu-list-item1"
                >
                  <img
                    className={category === item.menu_name ? "active" : ""}
                    src={item.menu_image}
                    alt=""
                  />
                  <p>{item.menu_name}</p>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        <div className="food-display-lists">
            <h2></h2>
            <div className="food-display-list1">
          {food_list.map((item, ind) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
        </div>
        
        </div>
        
          
      </div>
      <AppDownload />
    </div>
  );
};

export default Menu;
