import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import {
  LayoutDashboard,
  Compass,
  ShoppingBag,
  ShoppingCart,
  Heart,
  Package,
  Headphones,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import logo from "../assets/f6d9e4caf0e8582f0a13e8be68aa9331d2e489b1.png";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Discover", path: "/discover", icon: Compass },
    { name: "Categories", path: "/categories", icon: ShoppingBag },
    { name: "Cart", path: "/cart", icon: ShoppingCart },
    { name: "Whichlist", path: "/wishlist", icon: Heart }, // Kept spelling from image
    { name: "Orders", path: "/orders", icon: Package },
    { name: "Help Center", path: "/help", icon: Headphones },
    { name: "Profile", path: "/profile", icon: User },
  ];

  const bottomItems = [
    { name: "Settings", path: "/settings", icon: Settings },
    { name: "Logout", path: "/login", icon: LogOut }, // Redirects to login for now
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-56 sm:w-64 bg-white h-screen flex flex-col fixed left-0 top-0 border-r border-gray-100 font-sans z-40 transform transition-transform duration-300 lg:translate-x-0 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Area */}
        <div className="h-16 sm:h-20 md:h-24 flex items-center justify-between px-3 sm:px-4 md:px-8 border-b border-gray-50 flex-shrink-0">
          <div className="flex items-center gap-2">
            {/* Mock Logo */}
            <img
              src={logo}
              alt="logo"
              className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14"
            />
          </div>
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} className="sm:w-6 sm:h-6 text-gray-500" />
          </button>
        </div>

        {/* Main Menu */}
        <div className="flex-1 overflow-y-auto py-3 sm:py-4 md:py-6 px-2 sm:px-3 md:px-4 flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl transition-colors duration-200 ${
                  isActive
                    ? "bg-[#BD00FF] text-[#FBFBFB] shadow-md shadow-purple-500/20"
                    : "text-[#4F4A52] hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon
                  size={16}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`flex-shrink-0 sm:w-5 sm:h-5 ${isActive ? "text-white" : "text-gray-400"}`}
                />
                <span
                  className={`text-xs sm:text-sm md:text-base whitespace-nowrap ${isActive ? "font-medium" : ""}`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Menu */}
        <div className="p-2 sm:p-3 md:p-4 flex flex-col gap-1 border-t border-gray-50 mb-2 sm:mb-3 md:mb-4 flex-shrink-0">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className="flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
              >
                <Icon
                  size={16}
                  strokeWidth={2}
                  className="flex-shrink-0 sm:w-5 sm:h-5 text-gray-400"
                />
                <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
