import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";
import Header from "./componets/Header";
import ProductCard from "./componets/ProductCard";


export const router = createBrowserRouter([
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
// <<<<<<< HEAD
        id:"Main",
        path:"/main",
        element: <MainPage/>
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
// >>>>>>> origin/new_branch
    }
   
])