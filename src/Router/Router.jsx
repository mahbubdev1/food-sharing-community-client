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
import FoodDetails from "../Pages/FoodDetails";
import UpdateFoods from "../Pages/UpdateFoods";
import MyFoodRequest from "../Pages/MyFoodRequest";
import About from "../Pages/About";

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
                element: <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: '/foodDetails/:id',
                element: <FoodDetails></FoodDetails>
            },
            {
                path: '/updateFood/:id',
                element: <PrivateRoute><UpdateFoods></UpdateFoods></PrivateRoute>
            },
            {
                path: '/myFoodRequest',
                element: <MyFoodRequest></MyFoodRequest>
            },
            {
                path: '/about',
                element: <About></About>
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