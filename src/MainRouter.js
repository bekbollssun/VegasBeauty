import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";
import Header from "./componets/Header";
import ProductCard from "./componets/ProductCard";
import Search from "./contact us/search";
import CosmeticBasket from "./pages/Cart";


export const router = createBrowserRouter([
    {
        id:"Page",
        path:"/cart",
        element:<CosmeticBasket/>
    },
    {
        id:"search",
        path:"/search",
        element:<Search/>
    },
    {
        id: "Base",
        path: "/",
        element: <MainPage />
    },
    {
        id:"Auth",
        path:"/registration",
        element: <Registration/>
        
    },
    {
        id:"Login",
        path:"/login",
        element: <Login />

    },
    
    {
        id:"Header",
        path:"/header",
        element: <Header/>
    },
    {
        id:"ProductCard",
        path:"/card",
        element:<ProductCard/>
    }
    ]);