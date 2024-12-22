import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { format } from "date-fns";

const FoodDetails = () => {
    const paramsId = useParams();
    const [foods, setFoods] = useState({});
    const { user } = useAuth();

    console.log(foods)
    useEffect(() => {
        loadedAllFood()
    }, [])
    const loadedAllFood = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods/${paramsId.id}`)
        setFoods(data)
    }

    const todayDate = format(new Date(), 'yyyy-MM-dd');
    
    const { foodName, foodImage, _id, donatorEmail, donatorName, userEmail = user.email, pickupLocation, expiredDateTime, additionalNotes, foodQuantity } = foods || {};
    
    // const expireDate = format(new Date(expiredDateTime), 'P')

    return (
        <section className="p-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 my-20">
            <form noValidate="" action="" className="container flex flex-col mx-auto">
                <h2 className="text-3xl font-bold text-center py-3">Requested Form</h2>
                <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm bg-gray-900 dark:bg-gray-50">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full space-y-2 sm:col-span-3">
                            <label htmlFor="foodName" className="font-bold pb-2">Food Name</label>
                            <input id="foodName" type="text" value={foodName} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 p-3 focus:ring-gray-400 font-thin focus:dark:ring-gray-600 border-gray-900" />
                        </div>
                        <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                            <label htmlFor="foodImage" className="font-bold pb-2">Food Image</label>
                            <input id="foodImage" type="text" value={foodImage} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                        </div>
                        <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                            <label htmlFor="foodId" className="font-bold pb-2">Food Id</label>
                            <input id="foodId" type="text" value={_id} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                        </div>
                        <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                            <label htmlFor="DonatorEmail" className="font-bold pb-2">Donator Email</label>
                            <input id="DonatorEmail" type="text" value={donatorEmail} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                        </div>
                        <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                            <label htmlFor="DonatorName" className="font-bold pb-2">Donator Name</label>
                            <input id="DonatorName" type="text" value={donatorName} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                        </div>
                        <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                            <label htmlFor="userEmail" className="font-bold pb-2">User Email</label>
                            <input id="userEmail" type="text" value={userEmail} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                        </div>
                        <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                            <label htmlFor="newDate" className="font-bold pb-2">New Date</label>
                            <input id="newDate" type="date" value={todayDate} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                        </div>
                        <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                            <label htmlFor="pickerLocation" className="font-bold pb-2">Picker Location</label>
                            <input id="pickerLocation" type="text" value={pickupLocation} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                        </div>
                        <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                            <label htmlFor="expireDate" className="font-bold pb-2">Expire Date</label>
                            <input id="expireDate" type="date" value={expiredDateTime} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                        </div>
                        <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                            <label htmlFor="foodQuality" className="font-bold pb-2">Food Quality</label>
                            <input id="foodQuality" type="text" value={foodQuantity} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                        </div>
                    </div>
                    <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                        <label htmlFor="additionalNotes" className="font-bold pb-2">Additional Notes</label>
                        <input id="additionalNotes" type="text" defaultValue={additionalNotes} className="w-full rounded-md focus:ring focus:ring-opacity-50 text-gray-900 dark:text-gray-800 font-thin p-3 focus:ring-violet-400 focus:dark:ring-violet-600 border-gray-900" />
                    </div>
                    <div className="col-span-full space-y-2 sm:col-span-3 border-gray-700">
                        <input type="submit" className="w-full px-4 py-3 font-semibold text-white bg-violet-500 rounded-md hover:bg-violet-600 dark:hover:bg-violet-700" value="Requested" />
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default FoodDetails;