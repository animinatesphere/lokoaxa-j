import React, { useState } from "react";
import DashboardLayout from "../component/DashboardLayout";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "Kathryn",
    email: "kathryn@gmail.com",
    address: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    language: "English",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Profile saved:", formData);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl mx-auto px-3 sm:px-0">
        {/* Personal Info Header */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Personal Info
          </h2>
        </div>

        {/* User Profile Card */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-gray-200">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
            OG
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Oncoh Gamme
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Fashion Enthusiast & Style Curator
            </p>
            <p className="text-xs text-gray-500">Registered: 2 years ago</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 sm:space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-sm"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-sm"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-sm"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Save
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
