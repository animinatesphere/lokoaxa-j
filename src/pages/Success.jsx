import React, { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Review from "../component/Review";

const Success = () => {
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans px-4">
      <div className="max-w-md w-full flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-[#E8F5E9] rounded-full"></div>
          <div className="absolute inset-4 bg-[#C8E6C9] rounded-full"></div>
          <div className="absolute inset-10 bg-[#22C55E] rounded-full flex items-center justify-center">
            <Check size={48} className="text-white sm:w-14 sm:h-14" strokeWidth={3} />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Successful</h1>

        <p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base">
          You've successfully Purchase rose pink gown from <br />
          <span className="text-[#B000FF] font-medium">Looxaka Fashion</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
          <Link
            to="/orders"
            className="flex-1 py-2 sm:py-3 px-4 border border-gray-300 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Track Order
          </Link>
          <button
            onClick={() => setShowReview(true)}
            className="flex-1 py-2 sm:py-3 px-4 bg-[#B000FF] text-white rounded-xl font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Leave a review
          </button>
        </div>
      </div>

      <Review isOpen={showReview} onClose={() => setShowReview(false)} />
    </div>
  );
};

export default Success;
