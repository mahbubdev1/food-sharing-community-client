import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { FaTh, FaThLarge } from "react-icons/fa";

const AvailableFoods = () => {
    const [allFoods, setAllFoods] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [isThreeColumn, setIsThreeColumn] = useState(true);

    const toggleLayout = () => {
        setIsThreeColumn(!isThreeColumn)
    }
    // console.log(sort)

    useEffect(() => {
        loadedAllFood()
    }, [search, sort])

    const loadedAllFood = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods?search=${search}&sort=${sort}`)
        const availableFoods = data.filter((food) => food.foodStatus === "available")
        setAllFoods(availableFoods)
    }

    console.log(allFoods)
    return (
        <div className="container mx-auto my-8 sm:my-16">
            <div className="flex max-sm:flex-col space-y-2 items-center justify-center sm:justify-between space-x-8 mb-3">
                <h1 className="text-lg sm:text-2xl font-bold">Available Foods: <span className="text-violet-600">{allFoods?.length}</span></h1>
                <div className="flex gap-4 max-sm:flex-col items-center">
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div className='flex overflow-hidden sm:p-2 border rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-violet-400 focus-within:ring-violet-300'>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            className='px-4 py-1 text-gray-700 placeholder-violet-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            value={search}
                            name='search'
                            placeholder='Enter Job Title'
                            aria-label='Enter Job Title'
                        />
                    </div>
                </form>
                <div>
                    <button onClick={() => setSort('dsc')} className="px-4 py-2 sm:py-3 font-semibold text-white bg-violet-500 rounded-md hover:bg-violet-600 dark:hover:bg-violet-700">Sort By DSC</button>
                </div>
                </div>
            </div>
            <div className="flex justify-center sm:justify-end mb-5 sm:mb-7">
                <button
                    onClick={toggleLayout}
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    {isThreeColumn ? <FaTh /> : <FaThLarge />}
                    <span className="ml-2">{isThreeColumn ? 'Three Column' : 'Two Column'}</span>
                </button>
            </div>
            <div className={`grid gap-14 max-sm:p-2 ${isThreeColumn ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': 'grid-cols-1 md:grid-cols-2'}`}>
                {
                    allFoods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;