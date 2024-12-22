import { format } from "date-fns";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
    const { additionalNotes, foodImage, foodName, _id, expiredDateTime, foodQuantity, pickupLocation } = food;
    return (
        <div className="mx-auto overflow-hidden bg-gray-900 dark:bg-gray-50 rounded-lg shadow-lg text-gray-100 dark:text-gray-800">
            <img
                src={foodImage}
                alt={foodName}
                className="object-cover object-center w-full h-56"
            />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-violet-400 dark:text-violet-600">{foodName}</h2>
                <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                    <strong>Pickup Location:</strong> {pickupLocation}
                </p>
                <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                    <strong>Food Quantity:</strong> {foodQuantity}
                </p>
                <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                    <strong>Expire Date:</strong> {format(new Date(expiredDateTime), 'P')}
                </p>
                <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
                    <strong>Notes:</strong> {additionalNotes || "No additional notes provided"}
                </p>

                <Link to={`/foodDetails/${_id}`} className="mt-4 block">
                    <button
                        type="button"
                        className="w-full px-4 py-2 font-semibold text-white bg-violet-500 rounded-md hover:bg-violet-600 dark:hover:bg-violet-700"
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;