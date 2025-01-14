import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const SWIGGY_API_URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${CORS_PROXY}${SWIGGY_API_URL}`
    );
    const json = await data.json();
    setListOfResturants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1 className="text-center text-xl mt-4">You're offline</h1>;

  if (listOfResturants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto px-4">
      {/* Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center my-4 space-y-4 md:space-y-0">
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="p-2 w-full md:w-72 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Search for a restaurant"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
            onClick={() => {
              const filteredResturant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturants(filteredResturant);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <div>
          <button
            className="px-4 py-2 bg-green-100 rounded-lg text-sm text-green-800 hover:bg-green-200 transition-colors"
            onClick={() => {
              const filteredList = listOfResturants.filter((res) => res.info.avgRating > 5);
              setFilteredResturants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* Restaurant List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredResturants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/resturant/" + restaurant.info.id}>
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
