import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateFoods = () => {
    const paramsId = useParams();
    const [foods, setFoods] = useState({});
    const navigate = useNavigate();

    // update data functionality
    useEffect(() => {
        const loadedAllFood = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/request/${paramsId.id}`)
            setFoods(data)
        }
        loadedAllFood()
    }, [paramsId?.id])

    const { foodName, foodImage, pickupLocation,  expiredDateTime, notes, foodQuantity } = foods || {};


    // update request form
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const additionalNotes = form.additionalNotes.value;

        const updateData = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes }

        try {
            const res = await axios.put(`${import.meta.env.VITE_API_URL}/request/${paramsId.id}`, updateData)
            if (res.data.modifiedCount) {
                toast.success('Data Updated SuccessFull')
                navigate('/manageFood')
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="bg-gray-100 flex items-center mb-28 justify-center py-16 min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
                <h1 className="text-2xl font-bold mb-6 text-center">Update Food</h1>
                <form onSubmit={handleSubmit}>
                    {/* Food Name Form */}
                    <div className="mb-4">
                        <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">Food Name</label>
                        <input
                            type="text"
                            id="foodName"
                            name="foodName"
                            defaultValue={foodName}
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
                            defaultValue={foodImage}
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
                            defaultValue={foodQuantity}
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
                            defaultValue={pickupLocation}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Expired Date/Time Form*/}
                    <div className="mb-4">
                        <label htmlFor="expiredDateTime" className="block text-sm font-medium text-gray-700">Expired Date/Time</label>
                        {
                            expiredDateTime && <input
                            type="date"
                            id="expiredDateTime"
                            // defaultValue={format(new Date(expiredDateTime), "P")}
                            defaultValue={format(new Date(expiredDateTime), "yyyy-MM-dd")}
                            name="expiredDateTime"
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                        }
                    </div>

                    {/* Additional Notes Form*/}
                    <div className="mb-4">
                        <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
                        <textarea
                            id="additionalNotes"
                            name="additionalNotes"
                            defaultValue={notes}
                            className="mt-1 block w-full p-2 border rounded-md"
                        ></textarea>
                    </div>

                    {/* Add Button */}
                    <input type="submit" className="bg-violet-500 text-white py-2 w-full rounded-xl" value="Update Food" />
                    <Toaster></Toaster>
                </form>
            </div>
        </div>
    );
};

export default UpdateFoods;