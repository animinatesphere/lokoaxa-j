import React, { useState } from "react";
import { Heart, Star, ShoppingCart, Trash2 } from "lucide-react";
import DashboardLayout from "../component/DashboardLayout";
import { mockProducts } from "../demo/dashboardData";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onRemove }) => (
  <div className="flex flex-col gap-3 group">
    <Link
      to={`/product/${product.id}`}
      className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100 block"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {product.badge && (
        <div
          className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${product.badgeColor}`}
        >
          {product.badge}
        </div>
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          onRemove(product.id);
        }}
        className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm text-red-500 hover:bg-white hover:text-red-600 transition-colors"
      >
        <Trash2 size={18} />
      </button>
    </Link>

    <div>
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-gray-600 font-medium text-sm">{product.name}</h3>
        <div className="flex items-center gap-1">
          <span className="text-gray-600 text-xs font-medium">
            {product.rating}
          </span>
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-gray-900">{product.price}</span>
        <button className="p-1.5 rounded-lg border border-[#B000FF] text-[#B000FF] hover:bg-[#B000FF] hover:text-white transition-colors">
          <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  </div>
);

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(mockProducts);

  const handleRemove = (productId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
  };

  const handleAddAllToCart = () => {
    // Add all items to cart logic here
    console.log("Adding all items to cart:", wishlistItems);
  };

  if (wishlistItems.length === 0) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 sm:gap-6 px-4">
          {/* Empty Heart Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-purple-100 flex items-center justify-center">
            <Heart size={48} className="text-[#B000FF]" />
          </div>

          <div className="text-center max-w-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">
              Bookmark items on the Discover runway by toggling the heart icons
              to save your preferred styles here.
            </p>
          </div>

          <Link
            to="/discover"
            className="py-2 sm:py-3 px-6 sm:px-8 bg-[#B000FF] text-white rounded-xl font-medium hover:bg-purple-700 transition-colors text-sm"
          >
            Examine Catalog
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 sm:gap-8 pb-12">
        {/* Header with Add All to Cart */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 px-3 sm:px-0">
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              My Wishlist
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm">
              You have {wishlistItems.length} items saved in your wishlist
            </p>
          </div>
          <button
            onClick={handleAddAllToCart}
            className="py-2 px-4 bg-[#B000FF] text-white rounded-lg font-medium hover:bg-purple-700 transition-colors text-xs sm:text-sm whitespace-nowrap"
          >
            Add all to cart
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {wishlistItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Wishlist;
