import { Star } from "lucide-react";

function Review() {
    return (
        <div className="flex items-center gap-4">
            {/* Star Rating */}
            <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" aria-hidden="true" />
                <span className="ml-2 font-semibold" aria-label="Rating: 4.9 stars">4.9</span>
            </div>
            {/* Customer Satisfaction Text */}
            <div className="text-sm text-gray-600">
                Over 1,000+ satisfied customers
            </div>
        </div>
    );
}

export default Review;