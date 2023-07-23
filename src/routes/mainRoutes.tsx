import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/block/LayOut"
import LandingPage from "../pages/LandingPage"
import Register from "../pages/auth/register"
import SignIn from "../pages/auth/SignIn"
import PrivateRoutes from "./PrivateRoutes"
import SuperiorRoom from "../pages/SuperiorRoom"
import DeluxeRoom from "../pages/DeluxeRoom"
import SignatureRoom from "../pages/SignatureRoom"
import LuxurySuite from "../pages/LuxurySuite"
import BookNow from "../pages/BookNow"
import InputRoom from "../pages/InputRoom"
import PostRooms from "../pages/PostRooms"


export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element: 
            <LayOut />,
        children: [
            {
                index: true,
                element: <PrivateRoutes>
                    <LandingPage />
                </PrivateRoutes>
            },{
                path: "/superior",
                element: <SuperiorRoom />
            }
            ,{
                path: "/deluxe",
                element: <DeluxeRoom />
            }
            ,{
                path: "/signature",
                element: <SignatureRoom />
            }
            ,{
                path: "/luxury",
                element: <LuxurySuite />
            }
            ,{
                path: "/booknow",
                element: <BookNow />
            }
            
        ]
    },{
        path: "/register",
        element: <Register />
    }
    ,{
        path: "/signIn",
        element: <SignIn />
    },{
        path: "/input",
        element: <InputRoom />
    }
    ,{
        path: "/post",
        element: <PostRooms />
    }
])