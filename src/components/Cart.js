import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useActionData } from "react-router-dom";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  
  const dispatch=useDispatch()
  const handleclearcart=()=>{
      dispatch(clearCart())
  }

  console.log(cartItems);
  return (
    <div className="text-center m-5 p-1 text-bold ">
      <h1>Cart</h1>
      <div className="width-6/12 m-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded-lg w-15 h-215"
          onClick={handleclearcart}
        >
          Clear Cart
        </button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
