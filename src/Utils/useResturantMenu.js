import { useEffect,useState } from "react";
import { MENU_API } from "../Utils/constant";
import ResturantMenu from "../components/ResturantMenu"

const useResturantMenu=(resId)=>{
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    

      const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json);
        setresInfo(json.data);
      };
    return resInfo;
}

export default useResturantMenu;