import React, { useState } from 'react';
import { Star, Minus, Plus, Check } from 'lucide-react';
import DashboardLayout from '../component/DashboardLayout';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('pink');
  const [selectedSize] = useState('Medium size');
  const [showToast, setShowToast] = useState(false);

  const colors = [
    { id: 'beige', hex: '#E5D3B3' },
    { id: 'maroon', hex: '#800020' },
    { id: 'brown', hex: '#A0522D' },
    { id: 'blue', hex: '#4169E1' },
    { id: 'pink', hex: '#D87093' },
  ];

  const sizes = ['Small size', 'Medium size', 'Large size', 'Extra large', 'XXL'];

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 py-4 sm:py-6 bg-white p-3 sm:p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
        
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2 sm:gap-4">
          <div className="w-full h-64 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1515347619362-e9fd0fdd342c?w=800&h=1000&fit=crop" 
              alt="Main Product" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl overflow-hidden cursor-pointer border-2 border-[#B000FF] flex-shrink-0">
               <img src="https://images.unsplash.com/photo-1515347619362-e9fd0fdd342c?w=200&h=200&fit=crop" alt="thumb1" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-gray-200 flex-shrink-0">
               <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop" alt="thumb2" className="w-full h-full object-cover" />
            </div>
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-gray-200 flex-shrink-0">
               <img src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=200&h=200&fit=crop" alt="thumb3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="border-b border-[#9A8D8D] pb-3 sm:pb-4 mb-3 sm:mb-4">
            <h1 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D2C2E] mb-1">Pant</h1>
            <p className="text-[#9A8D8D] inter text-xs sm:text-sm lg:text-base">Boss Babe collection</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 sm:mb-6 gap-2">
            <span className="text-xl sm:text-2xl font-bold text-[#2D2C2E]">₦46,000</span>
            <div className="flex items-center gap-1">
              <span className="text-xs sm:text-sm font-bold text-gray-700">4.8</span>
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-400 ml-1">(12,334 sold)</span>
            </div>
          </div>

          <div className="mb-4 sm:mb-6">
            <h3 className="font-bold text-[#2D2C2E] inter mb-2 text-sm sm:text-base">Description</h3>
            <p className="text-[#6C666E] inter text-xs sm:text-sm leading-relaxed border-b border-gray-200 pb-4 sm:pb-6">
              Soft and stylish two-piece outfit designed for comfort and elegance. Features a trendy crop top with matching wide-leg pants, perfect for casual outings, vacations, parties, and special occasions. Made with breathable fabric to give you a classy and confident look all day long.
            </p>
          </div>

          <div className="mb-4 sm:mb-6 border-b border-gray-200 pb-4 sm:pb-6">
            <h3 className="font-bold text-[#6C666E] inter mb-2 sm:mb-3 text-sm sm:text-base">Color</h3>
            <div className="flex gap-2 sm:gap-3">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 transition-all ${selectedColor === color.id ? 'border-gray-400 scale-110' : 'border-transparent hover:scale-105'}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          <div className="mb-4 sm:mb-6 border-b border-gray-200 pb-4 sm:pb-6\">
            <h3 className="font-bold text-[#6C666E] inter mb-2 sm:mb-3 text-sm sm:text-base">Size</h3>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {sizes.map((size) => (
                <label key={size} className="flex items-center gap-2 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedSize === size ? 'border-[#B000FF]' : 'border-gray-300 group-hover:border-gray-400'}`}>
                    {selectedSize === size && <div className="w-2 h-2 rounded-full bg-[#B000FF]" />}
                  </div>
                  <span className={`text-xs sm:text-sm ${selectedSize === size ? 'text-gray-900 inter' : 'text-gray-500 inter'}`}>{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6 sm:mb-8 border-b border-gray-200 pb-6 sm:pb-8">
            <h3 className="font-bold text-[#6C666E] inter mb-2 sm:mb-3 text-sm sm:text-base">Quantity</h3>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center border border-gray-200 rounded-md w-max">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  <Minus size={14} />
                </button>
                <div className="w-10 h-9 sm:w-12 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-medium border-x border-gray-200">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Link to="/checkout" className="flex-1 py-2 sm:py-3 bg-[#B000FF] text-white rounded-xl font-medium hover:bg-purple-700 transition-colors flex justify-center items-center text-sm sm:text-base">
              Buy Now
            </Link>
            <button 
              onClick={() => {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
              }}
              className="flex-1 py-2 sm:py-3 bg-white text-[#B000FF] border border-[#B000FF] rounded-xl font-medium hover:bg-purple-50 transition-colors text-sm sm:text-base"
            >
              Add to Cart
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
             <div className="w-2 h-2 rounded-full border border-[#B000FF]"></div>
             <div className="w-2 h-2 rounded-full bg-[#B000FF]"></div>
          </div>

        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-4 right-4 sm:bottom-8 sm:right-8 sm:left-auto bg-green-500 text-white px-4 sm:px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
          <Check size={20} />
          <span className="font-medium text-sm sm:text-base">Item added to cart successfully!</span>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ProductDetail;
