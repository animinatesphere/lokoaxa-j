// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Signup from "./auth/signup/Signup";
import Login from "./auth/signin/Login";
import Personal from "./auth/signup/Personal";
import ForgotPassword from "./auth/forgot/ForgotPassword.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Discover from "./pages/Discover.jsx";
import Categories from "./pages/Categories.jsx";
import Cart from "./pages/Cart.jsx";
import Orders from "./pages/Orders.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Profile from "./pages/Profile.jsx";
import HelpCenter from "./pages/Help.jsx";
import Settings from "./pages/Settings.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Success from "./pages/Success.jsx";
import OrderDetail from "./pages/OrderDetail.jsx";
import DashboardLayout from "./component/DashboardLayout.jsx";
import AdminDashboard from "./admin/page/AdminDashboard.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/personal" element={<Personal />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/order/:id" element={<OrderDetail />} />
        <Route path="/success" element={<Success />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
