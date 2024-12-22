import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { format } from "date-fns";
import { Toaster } from "react-hot-toast";

const FoodDetails = () => {
    const paramsId = useParams();
    const [foods, setFoods] = useState({});
    const { user } = useAuth();

    console.log(paramsId.id)
    useEffect(() => {
        loadedAllFood()
    }, [])
    const loadedAllFood = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods/${paramsId.id}`)
        setFoods(data)
    }

    const todayDate = format(new Date(), 'yyyy-MM-dd');

    const { foodName, foodImage, _id, donatorEmail, donatorName, userEmail = user.email, pickupLocation, expiredDateTime, additionalNotes, foodQuantity } = foods;


    return (
        <div className="bg-gray-100 flex items-center mb-28 justify-center py-16 min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Add Food</h1>
                <form >
                    <div className="grid grid-cols-2 gap-3">
                        {/* Food Name Form */}
                        <div className="mb-4">
                            <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">Food Name</label>
                            <input
                                type="text"
                                id="foodName"
                                name="foodName"
                                // value={formData.foodName}
                                // onChange={handleChange}
                                className="mt-1 block w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Food Image Form*/}
                        <div className="mb-4">
                            <label htmlFor="foodImage" className="block text-sm font-medium text-gray-700">Food Image URL</label>
                            <input
                                type="url"
                                id="foodImage"
                                name="foodImage"
                                // value={formData.foodImage}
                                // onChange={handleChange}
                                className="mt-1 block w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Food Quantity Form*/}
                        <div className="mb-4">
                            <label htmlFor="foodQuantity" className="block text-sm font-medium text-gray-700">Food Quantity</label>
                            <input
                                type="number"
                                id="foodQuantity"
                                name="foodQuantity"
                                // value={formData.foodQuantity}
                                // onChange={handleChange}
                                className="mt-1 block w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Pickup Location Form*/}
                        <div className="mb-4">
                            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">Pickup Location</label>
                            <input
                                type="text"
                                id="pickupLocation"
                                name="pickupLocation"
                                value={pickupLocation}
                                // onChange={handleChange}
                                className="mt-1 block disabled:cursor-not-allowed w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Expired Date/Time Form*/}
                        <div className="mb-4">
                            <label htmlFor="expiredDateTime" className="block text-sm font-medium text-gray-700">Expired Date/Time</label>
                            <input
                                type="datetime-local"
                                id="expiredDateTime"
                                name="expiredDateTime"
                                value={expiredDateTime}
                                // onChange={handleChange}
                                className="mt-1 block w-full p-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Additional Notes Form*/}
                        <div className="mb-4">
                            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
                            <textarea
                                id="additionalNotes"
                                name="additionalNotes"
                                // value={formData.additionalNotes}
                                // onChange={handleChange}
                                className="mt-1 block w-full p-2 border rounded-md"
                            ></textarea>
                        </div>
                    </div>

                    {/* Add Button */}
                    <input type="submit" className="bg-violet-500 text-white py-2 w-full rounded-xl" value="Add Food" />
                    <Toaster></Toaster>
                </form>
            </div>
        </div>
    );
};

export default FoodDetails;