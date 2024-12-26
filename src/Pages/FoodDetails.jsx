import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

const FoodDetails = () => {
    const paramsId = useParams();
    const [foods, setFoods] = useState({});
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notes, setNotes] = useState('');
    const navigate = useNavigate();

    // console.log(foods)
    useEffect(() => {
        loadedAllFood()
    }, [])
    const loadedAllFood = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods/${paramsId.id}`)
        setFoods(data)
        setNotes(data.additionalNotes)
    }

    const todayDate = format(new Date(), 'yyyy-MM-dd');

    const { foodName, foodImage, _id: foodID, donatorEmail, donatorName, pickupLocation, foodStatus, expiredDateTime, additionalNotes, foodQuantity } = foods || {};

   

    // console.log(requestFoodInfo)
    const handleRequest = async (e) => {
        e.preventDefault();
        // const notes = e.target.notes.value;
        const requestFoodInfo = { foodName, foodImage, foodID, donatorEmail, donatorName, pickupLocation, foodStatus, expiredDateTime, notes, foodQuantity, userEmail: user?.email, todayDate }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/request`,  requestFoodInfo);
            if (data.insertedId) {
                toast.success('Request added successfully!');
                // navigate('/availableFoods');
            }

            const updateData = {
                additionalNotes: notes,
                foodStatus: "requested",
            };
            const res = await axios.patch(`${import.meta.env.VITE_API_URL}/foods/${paramsId.id}`, updateData)
            if (res.data.modifiedCount) {
                toast.success('Data Updated SuccessFull')
                navigate('/myFoodRequest')
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-14">
            <div className="mx-auto overflow-hidden bg-gray-900 dark:bg-gray-50 rounded-lg shadow-lg text-gray-100 dark:text-gray-800">
                <img
                    src={foodImage}
                    alt={foodName}
                    className="object-cover object-center w-full h-56 lg:h-72"
                />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-violet-400 dark:text-violet-600">
                        {foodName || "Food Name Not Available"}
                    </h2>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                        <strong>Pickup Location:</strong> {pickupLocation || "Not Provided"}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                        <strong>Food Quantity:</strong> {foodQuantity || "Not Available"}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                        <strong>Expire Date:</strong> {expiredDateTime ? format(new Date(expiredDateTime), "P") : "Not Available"}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                        <strong>User Email:</strong> {user?.email}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                        <strong>Donator Name:</strong> {donatorName || "Anonymous"}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                        <strong>Toady Date:</strong> {todayDate || "Today Date"}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                        <strong>Donator Email:</strong> {donatorEmail || "Not Available"}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                        <strong>Food Id:</strong> {foodID || "Not Available"}
                    </p>
                    <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                        <strong>Notes:</strong> {additionalNotes || "No additional notes provided"}
                    </p>
                    <button onClick={() => setIsModalOpen(true)} className="w-full mt-3 px-4 py-3 font-semibold text-white bg-violet-500 rounded-md hover:bg-violet-600 dark:hover:bg-violet-700">Request</button>

                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center pt-[120px] px-3">
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white p-6 rounded-lg max-w-xl w-full h-[600px] overflow-y-scroll">
                                <h2 className="text-lg font-bold mb-4">Request Food Form</h2>
                                <div className="space-y-4">
                                    <form noValidate="" className="container w-full max-w-xl mx-auto space-y-3 rounded-md shadow dark:bg-gray-50">
                                        <div>
                                            <label className="block mb-1 ml-1">Food Name</label>
                                            <input type="text" readOnly name="foodName" value={foodName} className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Food Image</label>
                                            <input type="text" readOnly name="foodName" value={foodImage} className="block w-full border-2 text-black p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Food Id</label>
                                            <input value={foodID} name="foodId" readOnly className="block w-full p-2 border-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100 text-black" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Food Donator Email</label>
                                            <input type="email" readOnly name="donatorEmail" value={donatorEmail} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Food Donator Name</label>
                                            <input type="text" readOnly name="donatorName" value={donatorName} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">User Email</label>
                                            <input type="text" readOnly name="userEmail" value={user?.email} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Current Date</label>
                                            <input type="date" readOnly name="currentDate" value={todayDate} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Pickup Location</label>
                                            <input type="text" readOnly name="location" value={pickupLocation} className="block w-full p-2 border-2 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Expire Date</label>
                                            <input type="date" name="expireDate" readOnly defaultValue={expiredDateTime ? format(new Date(expiredDateTime), "yyyy-MM-dd") : ""} className="p-2 border-2 w-full text-black " id="" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 ml-1">Additional Notes</label>
                                            <textarea type="text" name="notes" onChange={(e) => setNotes(e.target.value)} value={notes} className="block w-full p-2 border-2 text-black rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-rose-600 dark:bg-gray-100"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="mt-6 flex justify-end space-x-4">
                                    <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500">Cancel</button>
                                    <Toaster></Toaster>
                                    <button onClick={handleRequest} className="px-4 py-3 font-semibold text-white bg-violet-500 rounded-md hover:bg-violet-600 dark:hover:bg-violet-700">Request</button>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;