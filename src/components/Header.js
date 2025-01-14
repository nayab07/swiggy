import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constant";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-pink-50 p-4">
      {/* Container for the logo and navigation */}
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo Section */}
        <div className="logo-container  bg-pink-50">
          <img className="w-32 md:w-40" src={LOGO_URL} alt="Logo" />
        </div>

        {/* Navigation and User Section */}
        <div className="flex items-center space-x-4">
          {/* Online Status */}
          <span className="text-sm text-gray-700">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </span>

          <ul className="hidden md:flex space-x-6 text-lg font-semibold">
            <li>
              <Link to="/" className="hover:text-pink-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500 transition-colors">
                Contact Us
              </Link>
            </li>
            {/* <li>
              <Link to="/Grocery" className="hover:text-pink-500 transition-colors">
                Grocery
              </Link>
            </li> */}
            <li className="font-bold">
              <Link
                to="/cart"
                className="hover:text-pink-500 transition-colors"
              >
                Cart ({cartItems.length} items)
              </Link>
            </li>
          </ul>

          {/* User Login/Logout Button */}
          <button
            className="py-1 px-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
            onClick={() => {
              btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>

          {/* Logged in User Display */}
          {/* <li className="px-4 font-bold text-lg">{loggedInUser}</li> */}
        </div>
      </div>

    </div>
  );
};

export default Header;
