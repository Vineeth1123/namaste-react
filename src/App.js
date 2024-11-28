import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search 
 *  - Resturant container
 *   -- Restuarant card
 *       -- img
 *       --Name, Star rating, cuisine, 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<Suspense fallback={"<h1>LOADING...</h1>"}><About /></Suspense>
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurants/:restId",
                element:<RestaurantMenu />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={"<h1>LOADING...</h1>"}><Grocery /></Suspense>
            }

        ],
        errorElement:<Error />
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);