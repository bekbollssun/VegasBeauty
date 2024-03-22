import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Registration from "./pages/Auth/Registration";
import Login from "./pages/Auth/Login";

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

    }
])