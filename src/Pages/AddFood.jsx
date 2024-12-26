import { useState } from 'react';
import useAuth from '../hook/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hook/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';

const AddFood = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const [formData, setFormData] = useState({
        foodName: '',
        foodImage: '',
        foodQuantity: '',
        pickupLocation: '',
        expiredDateTime: '',
        additionalNotes: '',
    });

    const [foodStatus] = useState('available');

    const { user } = useAuth();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const {isPending, mutateAsync} = useMutation({
        mutationFn: async foodFormData => {
            const reponse  = await axiosSecure.post(`/foods`, foodFormData);
            return reponse
        } 
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const foodData = {
            ...formData,
            foodQuantity: Number(formData.foodQuantity),
            foodStatus,
            donatorImage: (user?.photoURL),
            donatorName: (user?.displayName),
            donatorEmail: (user?.email),
        };


        try {
            
            const response = await mutateAsync(foodData)
            if (response?.data?.insertedId) {
                navigate('/availableFoods');
                toast.success('Food added successfully!!!');
            }
        } catch (error) {
            toast.error(error.message); 
            console.error("Error adding food:", error);
        }
        setFormData({
            foodName: '',
            foodImage: '',
            foodQuantity: '',
            pickupLocation: '',
            expiredDateTime: '',
            additionalNotes: '',
        });
    };

    return (
        <div className="bg-gray-100 flex items-center mb-28 justify-center py-16 min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
                <h1 className="text-2xl font-bold mb-6 text-center">Add Food</h1>
                <form onSubmit={handleSubmit}>
                    {/* Food Name Form */}
                    <div className="mb-4">
                        <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">Food Name</label>
                        <input
                            type="text"
                            id="foodName"
                            name="foodName"
                            value={formData.foodName}
                            onChange={handleChange}
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
                            value={formData.foodImage}
                            onChange={handleChange}
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
                            value={formData.foodQuantity}
                            onChange={handleChange}
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
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
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
                            value={formData.expiredDateTime}
                            onChange={handleChange}
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
                            value={formData.additionalNotes}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                        ></textarea>
                    </div>

                    {/* Add Button */}
                    <input type="submit" className="bg-violet-500 text-white py-2 w-full rounded-xl" value={`${isPending ? 'Add Food.....' : 'Add Food'}`} />
                    <Toaster></Toaster>
                </form>
            </div>
        </div>
    );
}

export default AddFood