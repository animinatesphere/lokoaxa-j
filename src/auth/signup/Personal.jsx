import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-02 2.png";
export default function Personal() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen flex font-sans bg-white">
      {/* Left Panel — shoe image + brand */}
      <div className="relative w-1/2 hidden md:flex flex-col overflow-hidden rounded-br-[3rem] ">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center me1" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Brand name */}
        {/* <div className="relative z-10 p-10 flex justify-end">
          <img src={logo} alt="" className="w-12.5 h-12" />
        </div> */}
      </div>

      {/* Right Panel — form */}
      <div className="flex-1 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white border border-[#A9A9B4] rounded-2xl shadow-sm px-10 py-10">
            {/* Heading */}
            <h1 className="text-2xl font-bold text-[#2D2C2E] mb-1 inter">
              Personal Information
            </h1>
            <p className="text-sm text-[#6C666E] inter font-normal mb-7">
              To continue, kindly complete the following fields.
            </p>

            {/* Google Button */}
            <button className="w-full flex items-center justify-center gap-3 border border-[#D2D6DB] rounded-lg py-3 text-sm text-[#4D5761] hover:bg-gray-50 transition mb-5 font-medium urbanist">
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-[#E5E7EB]" />
              <span className="text-xs text-[#6C727E] outfit">
                or sign up with email
              </span>
              <div className="flex-1 h-px bg-[#E5E7EB]" />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#4D5761] mb-1 inter ">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#D2D6DB] rounded-lg px-4 py-3 text-sm text-[#9DA4AE] inter placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition font-medium"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#4D5761] mb-1 inter ">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-[#D2D6DB] rounded-lg px-4 py-3 text-sm text-[#9DA4AE] inter placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition font-medium"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#4D5761] mb-1 inter">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password minium 8 character"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-[#D2D6DB] rounded-lg px-4 py-3 text-sm text-[#9DA4AE] inter placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition pr-11 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {/* confirm Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#4D5761] mb-1 inter">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-[#D2D6DB] rounded-lg px-4 py-3 text-sm text-[#9DA4AE] inter placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition pr-11 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
                <div
                  onClick={() => setRemember(!remember)}
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition ${remember ? "border-fuchsia-500 bg-fuchsia-500" : "border-gray-300"}`}
                >
                  {remember && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                Remember me.
              </label>
              <Link to="/forgot-password">
                <button className="text-xs  text-[#0B0013] inter font-medium hover:text-fuchsia-600 transition">
                  Forget Password?
                </button>
              </Link>
            </div>

            {/* Continue Button */}
            <button className="w-full py-3 rounded-lg text-[#FFFFFF] text-sm font-semibold tracking-wide transition hover:opacity-90 active:scale-[0.98] bg-[#BD00FF] urbanist">
              Continue
            </button>

            {/* Sign in link */}
            <p className="text-center text-sm text-[#000000] mt-5 inter font-medium">
              Already have an account?{" "}
              <a href="/login" className="text-[#BD00FF] inter font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
