import { format } from "date-fns";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
    const { additionalNotes, foodImage, foodName, _id, expiredDateTime, foodQuantity, pickupLocation, foodStatus } = food;

    return (
        <div className="mx-auto w-full overflow-hidden bg-gray-50 rounded-lg shadow-lg text-gray-800">
            <img
                src={foodImage}
                alt={foodName}
                className="object-cover object-center w-full h-56"
            />
            <div className="p-6">
                {/* Title and Status */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-violet-600">{foodName}</h2>
                    <h4 className="bg-green-100 text-green-800 px-3 py-1 font-medium rounded-md shadow-sm">{foodStatus}</h4>
                </div>

                {/* Details Section */}
                <div className="space-y-3">
                    <div className="flex">
                        <strong className="w-1/3 font-bold pr-2">Pickup Location</strong>
                        <span className="w-2/3 text-gray-600">: {pickupLocation}</span>
                    </div>
                    <div className="flex">
                        <strong className="w-1/3 font-bold pr-2">Food Quantity</strong>
                        <span className="w-2/3 text-gray-600">: {foodQuantity}</span>
                    </div>
                    <div className="flex">
                        <strong className="w-1/3 font-bold pr-2">Expire Date</strong>
                        <span className="w-2/3 text-gray-600">: {format(new Date(expiredDateTime), 'P')}</span>
                    </div>
                    <div className="flex">
                        <strong className="w-1/3 font-bold pr-2">Notes</strong>
                        <span className="w-2/3 text-gray-600">
                            : {additionalNotes || "No additional notes provided"}
                        </span>
                    </div>
                </div>

                {/* Action Button */}
                <Link to={`/foodDetails/${_id}`} className="mt-6 block">
                    <button
                        type="button"
                        className="w-full px-4 py-2 font-semibold text-white bg-violet-500 rounded-md shadow-md hover:bg-violet-700"
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FoodCard;
