import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = ()=>{
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState();
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    // if(ListOfRestaurant.length == 0)
    // {
    //     return <Shimmer/>;
    // }

    if(onlineStatus === false)
    {
        return (<h1>You are offline, Please Check your internet connection!!</h1>);
    }

    return ListOfRestaurant.length == 0 ? (<Shimmer/>) :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="serachBtn" onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant = ListOfRestaurant.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={()=>{
                    // console.log(ListOfRestaurant);
                    const filteredData = ListOfRestaurant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    console.log(filteredData);
                    setFilteredRestaurant(filteredData);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
            {
            filteredRestaurant.map((restaurant)=>{
                return <Link to={"restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
            })
            }

            </div>
        </div>
    );
};
export default Body;