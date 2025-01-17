import { useState } from "react";
import { LOGO_url } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Grocery from "./Grocery";
const Header = () =>{
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_url}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:<span>{onlineStatus? "Online":"Offline"}</span></li>
                    <li><Link t0="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={
                        ()=> {
                            btnNameReact === "Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
                        }       
                    }>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};
export default Header;