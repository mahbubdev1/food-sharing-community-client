import { format } from "date-fns";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
    const { additionalNotes, foodImage, foodName, _id,expiredDateTime } = food;
    return (
        <div className="w-full rounded-md h-full shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <img src={foodImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{foodName}</h2>
                    <p className="font-medium">Expire Date: {format(new Date(expiredDateTime), 'P')}</p>
                    <p className="text-gray-100 dark:text-gray-800">{additionalNotes}</p>
                </div>
                <Link to={`/foodDetails/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Read more</button>
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;