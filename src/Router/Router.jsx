import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Social/Login";
import Register from "../Components/Social/Register";
import AddFood from "../Pages/AddFood";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ManageMyFood from "../Pages/ManageMyFood";
import AvailableFoods from "../Pages/AvailableFoods";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/manageFood',
                element: <ManageMyFood></ManageMyFood>
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router