
import { Star } from "lucide-react";

function Review() {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center" aria-label="4.9 out of 5 stars rating">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" aria-hidden="true" />
                <span className="ml-2 font-semibold">4.9</span>
            </div>
            <div className="text-sm text-gray-600">
                Over 100+ satisfied customers
            </div>
        </div>
    );
}

export default Review;
