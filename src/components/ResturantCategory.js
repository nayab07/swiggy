import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data,showitems,setshowindex }) {
  // console.log(data)
  // const [showitems,setShowitems] = useState(false);

  const handleClick = () => {
    setshowindex()
  };
  
  return (
    <div>
      <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>

          <span>{showitems && <ItemList items={data?.itemCards} />}</span>
          <span>⬇️</span>
          
        </div>
      </div>
    </div>
  );
}

export default RestaurantCategory;
