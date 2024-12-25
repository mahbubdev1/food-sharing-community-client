import axios from "axios";
// import { useEffect, useState } from "react";
import FoodCard from "../Pages/FoodCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader/Loader";

const FeaturedFoods = () => {
    // const [featured, setFeatured] = useState([]);
    // useEffect(() => {
    //     const loadedAllFood = async () => {
    //         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food`)
    //         // const availableFoods = data.filter((food) => food.foodStatus === "available")
    //         setFeatured(data)
    //     }
    //     loadedAllFood()
    // }, [])

    const {data:featured, isLoading} = useQuery({ queryKey: ['foods'], queryFn: async() => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food`)
        return data
    } })

    if(isLoading)  return <Loader></Loader>

    return (
        <div className="container mx-auto mt-12">
            <div className="text-center">
                <h2 className="text-2xl sm:text-4xl font-bold">Featured Food</h2>
                <div className="mx-auto mt-2 w-72 sm:w-80 border-b-4 border-red-600"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-14 mt-6 mb-10 max-sm:p-2">
                {
                    featured?.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="text-center mb-9">
                <Link to='/availableFoods'><button className="px-5 py-2 bg-violet-600 text-white text-lg rounded-xl">Show All</button></Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;