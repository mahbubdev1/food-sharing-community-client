import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateFoods = () => {
    const paramsId = useParams();
    const [foods, setFoods] = useState({});
    console.log(foods)

    useEffect(() => {
        const loadedAllFood = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/request/${paramsId.id}`)
            setFoods(data)
        }
        loadedAllFood()
    }, [paramsId?.id])


    return (
        <div>

        </div>
    );
};

export default UpdateFoods;