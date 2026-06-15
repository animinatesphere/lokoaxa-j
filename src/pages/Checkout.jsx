import React, { useState } from "react";
import { ArrowLeft, Copy, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "../component/DashboardLayout";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [paymentTab, setPaymentTab] = useState("card");
  const navigate = useNavigate();

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1); // go back to previous page
    }
  };

  const Breadcrumbs = () => (
    <div className="flex items-center gap-1 sm:gap-2 text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-8 overflow-x-auto pb-2">
      <span
        className={`${step >= 1 ? "text-[#B000FF]" : "text-gray-400"} whitespace-nowrap`}
      >
        CONTACT
      </span>
      <span className="text-gray-300">&gt;</span>
      <span
        className={`${step >= 2 ? "text-[#B000FF]" : "text-gray-400"} whitespace-nowrap`}
      >
        SHIPPING
      </span>
      <span className="text-gray-300">&gt;</span>
      <span
        className={`${step >= 3 ? "text-[#B000FF]" : "text-gray-400"} whitespace-nowrap`}
      >
        PAYMENT
      </span>
    </div>
  );

  const Step1Contact = () => (
    <div className="max-w-3xl w-full px-3 sm:px-0">
      <div className="bg-purple-50/50 border border-purple-200 text-[#B000FF] text-xs sm:text-sm p-2 sm:p-3 rounded-md mb-6 sm:mb-8">
        Please enter your name exactly as it appears on your ID to avoid issues
        at collection.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div>
          <label className="block text-xs sm:text-sm text-gray-600 mb-2">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-xs sm:text-sm focus:outline-none focus:border-[#B000FF]"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm text-gray-600 mb-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-xs sm:text-sm focus:outline-none focus:border-[#B000FF]"
          />
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <label className="block text-xs sm:text-sm text-gray-600 mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-xs sm:text-sm focus:outline-none focus:border-[#B000FF]"
        />
      </div>

      <div className="mb-4 sm:mb-6">
        <label className="block text-xs sm:text-sm text-gray-600 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="Enter your Email"
          className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-xs sm:text-sm focus:outline-none focus:border-[#B000FF]"
        />
      </div>

      <div className="mb-4 sm:mb-6 flex gap-2 sm:gap-4">
        <div className="w-20 sm:w-24">
          <label className="block text-xs sm:text-sm text-gray-600 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="+234"
            className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-xs sm:text-sm focus:outline-none focus:border-[#B000FF]"
          />
        </div>
        <div className="flex-1 pt-6 sm:pt-7">
          <input
            type="tel"
            className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-xs sm:text-sm focus:outline-none focus:border-[#B000FF]"
          />
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <label className="block text-xs sm:text-sm text-gray-600 mb-2">
          Address
        </label>
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-xs sm:text-sm focus:outline-none focus:border-[#B000FF]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div>
          <label className="block text-xs sm:text-sm text-gray-600 mb-2">
            City
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-xs sm:text-sm focus:outline-none focus:border-[#B000FF]"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm text-gray-600 mb-2">
            State
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full border border-gray-200 rounded-lg p-2 sm:p-3 text-xs sm:text-sm focus:outline-none focus:border-[#B000FF]"
          />
        </div>
      </div>

      <label className="flex items-center gap-3 mb-6 sm:mb-8 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-300 text-[#B000FF] focus:ring-[#B000FF]"
        />
        <span className="text-xs sm:text-sm text-gray-600">
          Text me with news and offer
        </span>
      </label>

      <button
        onClick={() => setStep(2)}
        className="w-full py-3 sm:py-4 bg-[#B000FF] text-white rounded-xl font-medium hover:bg-purple-700 transition-colors text-sm sm:text-base"
      >
        Continue to shipping
      </button>
    </div>
  );

  const Step2Shipping = () => (
    <div className="max-w-3xl">
      {/* Review Items */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop"
                className="w-full h-full object-cover"
                alt="item"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Boss Babe collection</p>
              <p className="text-sm text-gray-500 mb-1">Color: Blue</p>
              <p className="text-sm text-gray-500">
                Size: XL{" "}
                <span className="text-[#B000FF] text-[10px] ml-1">
                  (change)
                </span>
              </p>
            </div>
          </div>
          <span className="font-bold text-gray-900">₦46,000</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1515347619362-e9fd0fdd342c?w=200&h=200&fit=crop"
                className="w-full h-full object-cover"
                alt="item"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Boss Babe collection</p>
              <p className="text-sm text-gray-500 mb-1">Color: Blue</p>
              <p className="text-sm text-gray-500">
                Size: XL{" "}
                <span className="text-[#B000FF] text-[10px] ml-1">
                  (change)
                </span>
              </p>
            </div>
          </div>
          <span className="font-bold text-gray-900">₦46,000</span>
        </div>
      </div>

      {/* Readonly Info */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="text-sm text-gray-500">Contact person</label>
          <button onClick={() => setStep(1)} className="text-[#B000FF] text-xs">
            Change
          </button>
        </div>
        <div className="w-full border border-gray-200 rounded-md p-3 text-sm bg-gray-50 text-gray-700 font-medium">
          Adeyemo aduke
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <label className="text-sm text-gray-500">Address</label>
          <button onClick={() => setStep(1)} className="text-[#B000FF] text-xs">
            Change
          </button>
        </div>
        <div className="w-full border border-gray-200 rounded-md p-3 text-sm bg-gray-50 text-gray-700 font-medium">
          Awoloowo street
        </div>
      </div>

      {/* Shipping Method */}
      <div className="mb-8">
        <label className="block text-sm text-gray-500 mb-2">
          Shipping Method
        </label>
        <div className="w-full border border-[#B000FF] rounded-md p-3 text-sm flex justify-between items-center bg-white cursor-pointer">
          <div>
            <div className="font-bold text-gray-900 text-xs">
              DHL EXPRESS INTERNATIONAL
            </div>
            <div className="text-gray-400 text-[10px] mt-1">
              10 business days
            </div>
          </div>
          <div className="text-[#B000FF] text-xs flex items-center gap-2">
            Selected
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#B000FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Promo Code */}
      <div className="mb-8">
        <label className="block text-sm text-gray-500 mb-2">
          Discount code (optional)
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter promo code"
            className="flex-1 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#B000FF]"
          />
          <button className="px-6 bg-[#B000FF] text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
            Apply
          </button>
        </div>
      </div>

      {/* Order Summary embedded */}
      <div className="border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Sub-total</span>
            <span className="font-bold text-gray-900">₦46,000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Shipping fee</span>
            <span className="font-bold text-gray-900">₦6,000</span>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-4 flex justify-between">
          <span className="font-bold text-gray-900">Total</span>
          <span className="font-bold text-gray-900">₦106,000</span>
        </div>
      </div>

      <button
        onClick={() => setStep(3)}
        className="w-full py-4 bg-[#B000FF] text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
      >
        Continue to Payment
      </button>
    </div>
  );

  const Step3Payment = () => (
    <div className="max-w-3xl">
      {/* Tabs */}
      <div className="flex border border-gray-200 rounded-lg mb-8 overflow-hidden bg-white">
        <button
          onClick={() => setPaymentTab("bank")}
          className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 ${paymentTab === "bank" ? "bg-[#F3D9FF] text-gray-900" : "text-gray-500 hover:bg-gray-50"}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
          </svg>
          Bank Transfer
        </button>
        <button
          onClick={() => setPaymentTab("card")}
          className={`flex-1 py-3 text-sm font-medium border-l border-gray-200 flex items-center justify-center gap-2 ${paymentTab === "card" ? "bg-[#F3D9FF] text-gray-900" : "text-gray-500 hover:bg-gray-50"}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
          Card
        </button>
        <button
          onClick={() => setPaymentTab("saved")}
          className={`flex-1 py-3 text-sm font-medium border-l border-gray-200 flex items-center justify-center gap-2 ${paymentTab === "saved" ? "bg-[#F3D9FF] text-gray-900" : "text-gray-500 hover:bg-gray-50"}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
          Saved
        </button>
      </div>

      {paymentTab === "bank" && (
        <>
          <p className="text-sm font-bold text-gray-900 mb-4">
            Confirm you made payment to the following :
          </p>

          <div className="border border-gray-200 rounded-lg mb-4 bg-white">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <span className="text-xs text-gray-500">Bank Name</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">
                  Fidelity Bank
                </span>
                <Copy size={14} className="text-gray-400 cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <span className="text-xs text-gray-500">Bank Account Number</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">
                  36373838363
                </span>
                <Copy size={14} className="text-gray-400 cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-between items-center p-4">
              <span className="text-xs text-gray-500">Bank Accont Name</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900">
                  Chessball
                </span>
                <Copy size={14} className="text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-600 mb-8">
            Transfer the exact amount then confirm below
          </p>
        </>
      )}

      {paymentTab === "card" && (
        <div className="mb-8">
          <div className="mb-4">
            <label className="block text-xs text-gray-500 mb-2">
              Card Number
            </label>
            <input
              type="text"
              placeholder="2738939303003773"
              className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#B000FF]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs text-gray-500 mb-2">Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#B000FF]"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-2">CVV</label>
              <input
                type="text"
                placeholder="***"
                className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#B000FF]"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-2">
              Nme On card
            </label>
            <input
              type="text"
              placeholder="2738939303003773"
              className="w-full border border-gray-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#B000FF]"
            />
          </div>
        </div>
      )}

      {paymentTab === "saved" && (
        <div className="mb-8 flex flex-col gap-3">
          <div className="border border-[#B000FF] rounded-lg p-4 flex items-center justify-between cursor-pointer bg-white">
            <div className="flex items-center gap-4">
              <div className="w-8 h-6 bg-gray-100 rounded flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  *** ***** 7666
                </p>
                <p className="text-xs text-gray-500">Expires 04/28 · Visa</p>
              </div>
            </div>
            <div className="w-4 h-4 rounded-full border-4 border-[#B000FF]"></div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between cursor-pointer bg-white">
            <div className="flex items-center gap-4">
              <div className="w-8 h-6 bg-gray-100 rounded flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  *** ***** 7666
                </p>
                <p className="text-xs text-gray-500">Expires 04/28 · Visa</p>
              </div>
            </div>
            <div className="w-4 h-4 rounded-full border border-gray-300"></div>
          </div>
          <button className="w-full py-4 border border-gray-200 rounded-lg text-gray-500 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Plus size={16} /> Add New Card
          </button>
        </div>
      )}

      {/* Order Summary embedded */}
      <div className="border border-gray-200 rounded-xl p-6 mb-8 bg-white">
        <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Sub-total</span>
            <span className="font-bold text-gray-900">₦46,000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Shipping fee</span>
            <span className="font-bold text-gray-900">₦6,000</span>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-4 flex justify-between">
          <span className="font-bold text-gray-900">Total</span>
          <span className="font-bold text-gray-900">₦106,000</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/success")}
          className="w-full py-4 bg-[#B000FF] text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
        >
          {paymentTab === "bank" ? "I've sent the money" : "Complete Order"}
        </button>
        <button className="w-full py-4 bg-white text-gray-500 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
          Cancel the payment
        </button>
      </div>
    </div>
  );

  const getStepTitle = () => {
    if (step === 1) return "Contact Info";
    if (step === 2) return "Shipping Info";
    if (step === 3) return "Shipping Info"; // Replicating typo from design as requested, or maybe it should be Payment. The design screenshot says "Shipping Info" on step 3.
    return "";
  };

  return (
    <DashboardLayout>
      <div className="py-6 px-4 md:px-8 max-w-4xl">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">{getStepTitle()}</h1>
        </div>

        <Breadcrumbs />

        <div className="mt-8">
          {step === 1 && <Step1Contact />}
          {step === 2 && <Step2Shipping />}
          {step === 3 && <Step3Payment />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Checkout;
