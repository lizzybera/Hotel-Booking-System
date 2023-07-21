import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/block/LayOut"
import LandingPage from "../pages/LandingPage"
import Register from "../pages/auth/register"
import SignIn from "../pages/auth/SignIn"
import PrivateRoutes from "./PrivateRoutes"
import SuperiorRoom from "../pages/SuperiorRoom"
import DeluxeRoom from "../pages/DeluxeRoom"


export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element: 
        <PrivateRoutes>
            <LayOut />
            </PrivateRoutes>,
        children: [
            {
                index: true,
                element: <LandingPage />
            },{
                path: "/superior",
                element: <SuperiorRoom />
            }
            ,{
                path: "/deluxe",
                element: <DeluxeRoom />
            }
        ]
    },{
        path: "/register",
        element: <Register />
    }
    ,{
        path: "/signIn",
        element: <SignIn />
    }
])