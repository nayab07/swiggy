import { CDN_URL } from "../Utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;
  // console.log(resData.info);
  // if (!resData || !resData.info) return "not available";
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo } =
    resData.info;
  return (
    <div className=" restro-card m-2 p-4 w-[280px] shadow-xl rounded-xl transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 hover:bg-slate-300 bg-[#f0f0f0] object-cover">
      <img
        className=" w-[300px] h-[220px] rounded-xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold p-1 text-lg ml-3">{name}</h3>
      <h4>{cuisines?.slice(1, 4)}</h4>
      <h4>{avgRating}</h4>
      <h4>{areaName}</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
};
export default ResturantCard;
