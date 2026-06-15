import React, { useState } from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import DashboardLayout from "../component/DashboardLayout";
import {
  mainCategories,
  subCategoriesMap,
  heroBannerData,
  mockProducts,
} from "../demo/dashboardData";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="flex flex-col gap-3 group shadow-md border-[#DED5E1] rounded-2xl p-4">
    <Link
      to={`/product/${product.id}`}
      className="relative rounded-2xl  overflow-hidden aspect-[4/5] bg-gray-100 block"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {product.badge && (
        <div
          className={`absolute top-3 left-3 px-2 py-1  inter rounded text-[10px] font-bold uppercase tracking-wider ${product.badgeColor}`}
        >
          {product.badge}
        </div>
      )}
      <button
        onClick={(e) => e.preventDefault()}
        className="absolute top-3 right-3 p-2 rounded-full  text-white hover:bg-white hover:text-red-500 transition-colors"
      >
        <Heart size={18} />
      </button>
    </Link>

    <div>
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-[#6C666E] font-normal inter  text-sm">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-gray-600 text-xs font-medium">
            {product.rating}
          </span>
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-[#2D2C2E] inter">{product.price}</span>
        <button className="p-1.5 rounded-lg border border-[#BD00FF] text-[#BD00FF] hover:bg-[#B000FF] hover:text-white transition-colors">
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState("Dresses");
  // Ensure we select the 'name' of the first subcategory if available
  const [activeSubCategory, setActiveSubCategory] = useState(
    subCategoriesMap["Dresses"] ? subCategoriesMap["Dresses"][0].name : null,
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (subCategoriesMap[category]) {
      setActiveSubCategory(subCategoriesMap[category][0].name);
    } else {
      setActiveSubCategory(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 sm:gap-8 pb-12">
        {/* Hero Banner */}
        <div className="w-full h-48 sm:h-64 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden relative flex bg-gradient-to-r from-[#D4BEE4] via-[#E9D9F2] to-white">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-[#D4BEE4] skew-x-12 -ml-10"></div>
            <div className="w-1/2 bg-white skew-x-12"></div>
          </div>

          {/* Background Images Overlay */}
          <div className="absolute inset-0 flex justify-between px-12 pointer-events-none opacity-90">
            <img
              src={heroBannerData.image1}
              alt="banner-bg-1"
              className="h-[120%] object-cover -mt-10 -ml-10 mix-blend-multiply opacity-80"
            />
            <img
              src={heroBannerData.image2}
              alt="banner-bg-2"
              className="h-[120%] object-cover -mt-10 mr-20"
            />
          </div>

          <div className="relative z-10 flex flex-col justify-center h-full px-12 max-w-lg">
            <span className="px-4 py-1.5 rounded-full border border-[#FFFFFF] text-[#FFFFFF] text-xs font-semibold w-max mb-4 inter">
              {heroBannerData.badge}
            </span>
            <h1 className="text-3xl font-bold text-[#FFFFFF] mb-2 inter">
              {heroBannerData.title}
            </h1>
            <p className="text-[#FFFFFF] inter text-sm leading-relaxed max-w-sm whitespace-pre-line">
              {heroBannerData.subtitle}
            </p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex flex-col gap-4 mt-2">
          {/* Main Categories */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {mainCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-colors border ${
                  activeCategory === category
                    ? "border-[#BD00FF] text-[#BD00FF] font-medium inter bg-purple-50/50"
                    : "border-gray-200 text-[#9A8D8D] inter hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <h2 className="text-lg font-bold text-[#000000] inter text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
            Recommended For You
          </h2>
        </div>

        {/* Recommended For You */}
        <div className="flex flex-col gap-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {mockProducts.map((product) => (
              <ProductCard key={`rec-${product.id}`} product={product} />
            ))}
          </div>
        </div>

        {/* Best deal For You */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={`deal-${product.id}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
