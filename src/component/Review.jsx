import React, { useState } from "react";
import { Star, X, Users, TrendingUp, Gift } from "lucide-react";

const Review = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - you can add API call here
    setSubmitted(true);
  };

  const handleDone = () => {
    setRating(0);
    setMessage("");
    setDisplayName("");
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 p-4">
      {!submitted ? (
        // Review Form with Info Box
        <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Review & Feedback
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Star Rating */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-3">
                    Your rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          size={28}
                          className={`${
                            star <= rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    Your message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="share you experience with other shopper"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm"
                    rows="4"
                  />
                </div>

                {/* Display Name */}
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-2">
                    Name( optional)
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Display name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#B000FF] text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
                >
                  Submit feedback
                </button>
              </form>
            </div>

            {/* Info Box Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Why leave a review?
              </h3>

              <div className="space-y-5">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users size={24} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    Helps others shop confidently
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <TrendingUp size={24} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm">Improves our products</p>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Gift size={24} className="text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    Earns 500 Loosaaka Points
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Thank You Screen
        <div className="bg-white rounded-2xl max-w-md w-full p-12 text-center relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>

          {/* Star Icon */}
          <div className="relative w-48 h-48 flex items-center justify-center mb-8 mx-auto">
            <div className="absolute inset-0 bg-yellow-100 rounded-full"></div>
            <div className="absolute inset-4 bg-yellow-200 rounded-full"></div>
            <div className="absolute inset-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <Star size={56} className="text-white fill-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You</h2>
          <p className="text-gray-500 mb-8 text-base">
            We've shared your feedback with our team. You've earned{" "}
            <span className="text-[#B000FF] font-bold">
              500 Loosaaka Points!
            </span>
          </p>

          {/* Done Button */}
          <button
            onClick={handleDone}
            className="w-full py-3 px-4 bg-[#B000FF] text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default Review;
