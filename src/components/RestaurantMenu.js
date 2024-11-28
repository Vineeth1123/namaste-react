import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    // const [restInfo, setRestInfo] = useState(null);
    const { restId } = useParams();

    const restInfo = useRestaurantMenu(restId);
    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     try {
    //         const data = await fetch(MENU_API + restId);
    //         const json = await data.json();
    //         setRestInfo(json.data);
    //     } catch (error) {
    //         console.error("Failed to fetch menu:", error);
    //     }
    // };

    if (!restInfo) {
        return <Shimmer />;
    }
console.log(restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card);
    // Use optional chaining and defaults to handle potential undefined properties
    const name = restInfo?.cards?.[2]?.card?.card?.info?.name || "Restaurant Name Unavailable";
    const cuisines = restInfo?.cards?.[2]?.card?.card?.info?.cuisines || [];
    const costForTwoMessage = restInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage || "Cost info unavailable";
    const itemCards = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards || [];

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.length > 0 ? (
                    itemCards.map((item) => (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - {"Rs. "} 
                            {(item.card.info.price || item.card.info.defaultPrice) / 100}
                        </li>
                    ))
                ) : (
                    <li>No menu items available</li>
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
