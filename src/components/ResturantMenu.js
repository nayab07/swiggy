import { useState } from "react";
import useResturantMenu from "../Utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  const[showindex,setshowindex]=useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2].card.card.info;

  // itemcards
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //categories
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>

      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {/* Accordian.. */}
      {categories.map((category ,index) => (
        <ResturantCategory data={category?.card?.card}
        showitems={index===showindex?true:false}
        setshowindex={()=>setshowindex(index)}
         />
      ))}
  
    </div>
  );
};
export default ResturantMenu;
