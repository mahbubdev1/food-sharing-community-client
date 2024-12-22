import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const AvailableFoods = () => {
    const [allFoods, setAllFoods] = useState([]);
    const [search, setSearch] = useState('');
    // console.log(search)

    useEffect(() => {
        loadedAllFood()
    }, [search])
    const loadedAllFood = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods?search=${search}`)
        const availableFoods = data.filter((food) => food.foodStatus === "available")
        setAllFoods(availableFoods)
    }

    console.log(allFoods)
    return (
        <div className="container mx-auto my-16">
            <div className="flex items-center space-x-8 mb-4">
                <h1 className="text-2xl font-bold mb-6">Available Foods: <span className="text-violet-600">{allFoods?.length}</span></h1>
                <form  onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                    <div className='flex p-1 overflow-hidden border rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-violet-400 focus-within:ring-violet-300'>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            className='px-6 py-2 text-gray-700 placeholder-violet-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            value={search}
                            name='search'
                            placeholder='Enter Job Title'
                            aria-label='Enter Job Title'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-pink-700 rounded-md hover:bg-pink-600 focus:bg-violet-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-3 gap-14">
                {
                    allFoods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;