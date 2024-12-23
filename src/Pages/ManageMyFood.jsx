import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import axios from "axios";

const ManageMyFood = () => {
    const { user } = useAuth();
    const [foods, setFoods] = useState([])


    useEffect(() => {
        loadedUserFoods()
    }, [user?.email])
    const loadedUserFoods = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/request`, {
            params: {
                email: user?.email
            }
        })
        setFoods(data)
    }
    console.log(foods)
    return (
        <div>

        </div>
    );
};

export default ManageMyFood;