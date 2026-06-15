import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import DashboardLayout from "../component/DashboardLayout";
import { mockProducts } from "../demo/dashboardData";
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
const Discover = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 sm:gap-8 pb-12 px-3 sm:px-0">
        {/* Trending Now Section */}
        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
            Trending Now
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Best Deals Section */}
        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
            Best Deals For You
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Recommended Section */}
        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">
            Recommended For You
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Discover;
