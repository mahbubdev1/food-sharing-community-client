import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { format } from "date-fns";
import useAxiosSecure from "../hook/useAxiosSecure";

const MyFoodRequest = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchUserRequests = async () => {
            try {
                const { data } = await axiosSecure.get(`/request?email=${user?.email}`);
                setRequests(data);
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        };
        fetchUserRequests();
    }, [user?.email]);

    console.log(requests)

    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                    <h2 className="mb-6 text-xl font-semibold leading-tight text-gray-700">
                        Manage My Foods
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-gray-600">
                            <thead className="bg-gray-100 text-gray-700 uppercase">
                                <tr>
                                    <th className="px-4 py-2">No</th>
                                    <th className="px-4 py-2">Donner Name</th>
                                    <th className="px-4 py-2">Pickup Location</th>
                                    <th className="px-4 py-2">Expire Date</th>
                                    <th className="px-4 py-2">Request Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((request, index) => (
                                    <tr key={request._id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-2">{index + 1}</td>
                                        <td className="px-4 py-2">{request.donatorName}</td>
                                        <td className="px-4 py-2">{request.pickupLocation}</td>
                                        <td className="px-4 py-2">{format(new Date(request.expiredDateTime), 'P')}</td>
                                        <td className="px-4 py-2">{format(new Date(request.todayDate), 'P')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFoodRequest;