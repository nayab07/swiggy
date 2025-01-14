import React from "react";
import { CDN_URL } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

function ItemList({ items }) {

const Dispatch=useDispatch();
const handleAddItem=(item)=>{
  // Dispatch action
  Dispatch(addItem(item))
}


  return (
    <div>
      {items.map((item) => (
        <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
          <div className="p-2 w-9/12">
            <span>{item?.card?.card?.info?.name}</span>
            <span>
              -₹:{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div>
            <div className="absolute">
              <button className="p-1 flex justify-bottom items-center h-6 bg-gray-200 rounded-sm"
               onClick={()=>handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-[110px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
