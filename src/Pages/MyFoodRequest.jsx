import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import axios from "axios";

const MyFoodRequest = () => {
    const { user } = useAuth();

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchUserRequests = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/request?email=${user?.email}`);
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

        </div>
    );
};

export default MyFoodRequest;