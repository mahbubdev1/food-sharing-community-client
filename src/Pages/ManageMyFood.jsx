import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import axios from "axios";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageMyFood = () => {
    const { user } = useAuth();
    const [foods, setFoods] = useState([])


    useEffect(() => {
        loadedUserFoods()
    }, [user?.email])


    // get all request data
    const loadedUserFoods = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/request`, {
            params: {
                email: user?.email
            }
        })
        setFoods(data)
    }

    // Foods Update Functionality

    // const handleUpdate = async (id) => {
    //     try {
    //         const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/request/${id}`)
    //         console.log(data)
    //     }
    //     catch (error) {
    //         toast.error(error.message)
    //     }
    // }


    // Delete Functionality
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/request/${id}`)
            console.log(data)
            loadedUserFoods()
            if (data.deletedCount) {
                toast.success('Foods Deleted Success !!!!')
            }
        }
        catch (error) {
            toast.error(error.message)
        }
    }

    const deleteWithToast = (id) => {
        toast(
            (t) => (
                <div className="flex items-center gap-3">
                    <div>
                        Are You <b>Sure?</b>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-1 bg-red-500 text-white rounded-xl text-base " onClick={() => {
                            handleDelete(id)
                            toast.dismiss(t.id)
                        }}>Yes</button>
                        <button className="px-3 py-1 bg-violet-500 text-white text-base rounded-xl" onClick={() => toast.dismiss(t.id)}>Cancel</button>
                    </div>
                </div>
            ))
    }

    return (
        <div className="container mx-auto p-4">
            <div className="p-4 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-xl font-semibold leading-tight text-gray-700">
                    Manage My Foods
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="bg-gray-100 text-gray-700 uppercase">
                            <tr>
                                <th className="px-4 py-2">No</th>
                                <th className="px-4 py-2">Food Image</th>
                                <th className="px-4 py-2">Food Name</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Expire Date</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {foods.map((food, index) => (
                                <tr key={food._id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2"><img className="w-12 h-12 rounded-full" src={food.foodImage} alt="" /></td>
                                    <td className="px-4 py-2">{food.foodName}</td>
                                    <td className="px-4 py-2">{food.foodQuantity}</td>
                                    <td className="px-4 py-2">{format(new Date(food.expiredDateTime), 'P')}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 font-medium rounded ${food.foodStatus === "available"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {food.foodStatus}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 flex space-x-2">
                                        <Link to={`/updateFood/${food._id}`}><button
                                            className="px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                        >
                                            Update
                                        </button></Link>
                                        <button
                                            className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                                            onClick={() => deleteWithToast(food._id)}
                                        >
                                            Delete
                                        </button>
                                        <Toaster></Toaster>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageMyFood;