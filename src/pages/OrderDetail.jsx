import React from 'react';
import { ArrowLeft, Package, Truck, Check } from 'lucide-react';
import DashboardLayout from '../component/DashboardLayout';
import { Link, useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams();

  // Mock order data - replace with actual API call
  const order = {
    id: id,
    status: 'Delivered',
    date: '2024-01-15',
    total: '₦46,000',
    items: [
      {
        id: 1,
        name: 'Pant',
        color: 'Pink',
        size: 'Medium size',
        quantity: 1,
        price: '₦46,000',
        image: 'https://images.unsplash.com/photo-1515347619362-e9fd0fdd342c?w=200&h=200&fit=crop'
      }
    ],
    shippingAddress: 'San Francisco, CA 94102, USA',
    estimatedDelivery: '2024-01-20'
  };

  const statusSteps = [
    { label: 'Order Placed', icon: Package, completed: true },
    { label: 'Processing', icon: Package, completed: true },
    { label: 'Shipped', icon: Truck, completed: true },
    { label: 'Delivered', icon: Check, completed: true }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 sm:gap-6 px-3 sm:px-0">
        {/* Back Button */}
        <Link to="/orders" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 w-max text-sm sm:text-base">
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          <span className="font-medium">Back to Orders</span>
        </Link>

        {/* Order Header */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-4 mb-4">
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Order #{order.id}</h1>
              <p className="text-gray-500 text-xs sm:text-sm">Placed on {order.date}</p>
            </div>
            <span className=\"px-3 sm:px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap\">
              {order.status}
            </span>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Order Status</h2>
          <div className="flex items-center justify-between">
            {statusSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    step.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    <Icon size={24} />
                  </div>
                  <p className={`text-sm text-center font-medium ${
                    step.completed ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.label}
                  </p>
                  {index < statusSteps.length - 1 && (
                    <div className={`absolute h-1 w-20 ml-24 ${
                      step.completed ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Items Ordered</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <div className="text-sm text-gray-500 mt-1 space-y-1">
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4 pb-4 border-b border-gray-100">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₦46,000</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>₦2,500</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>₦2,000</span>
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>{order.total}</span>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Shipping Details</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Shipping Address</p>
              <p className="font-semibold text-gray-900">{order.shippingAddress}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Estimated Delivery</p>
              <p className="font-semibold text-gray-900">{order.estimatedDelivery}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OrderDetail;
