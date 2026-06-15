import { useState } from "react";
import logo from "../../assets/logo-02 2.png";
import left from "../../assets/Frame 2131332073 (1).png";
import { Link } from "react-router-dom";
const accountTypes = [
  { id: "client", label: "Client" },
  { id: "wholeseller", label: "Whole seller" },
  { id: "corporate", label: "Corporate Organization" },
];

export default function Signup() {
  const [selected, setSelected] = useState("client");

  const toggle = (id) => {
    setSelected(id);
  };

  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* ── Left panel: hero image ── */}
      <div className="relative hidden lg:flex w-[52%] items-end overflow-hidden bg-[#dce3e8]">
        {/* Decorative dashed border inset */}
        <div className="absolute inset-4 rounded-br-[80px] border-2pointer-events-none z-10" />

        {/* Fashion photo — using a placeholder gradient figure */}
        <div className="absolute inset-0 flex items-end justify-center  rounded-br-[3rem] ">
          <img
            src={left}
            alt="Fashion model in red dress"
            className="h-full w-full object-cover object-top"
            style={{ objectPosition: "50% 10%" }}
          />
          {/* Subtle bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#dce3e8]/60 to-transparent" />
        </div>
      </div>

      {/* ── Right panel: form ── */}
      <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-12">
        {/* Logo */}
        <div className="mb-10 select-none">
          <img src={logo} alt="" className="w-12.5 h-12" />
        </div>

        {/* Card */}
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white px-8 py-8 shadow-sm">
          {/* Heading */}
          <h2 className="text-lg font-bold text-gray-900 tracking-tight mb-1">
            Personal Information
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            To continue, kindly complete the following fields.
          </p>

          {/* Account type label */}
          <p className="text-sm font-bold text-gray-900 mb-4">
            Select Account Type
          </p>

          {/* Options */}
          <div className="flex flex-col gap-3 mb-8">
            {accountTypes.map(({ id, label }) => {
              const isChecked = selected === id;
              return (
                <button
                  key={id}
                  onClick={() => toggle(id)}
                  className="flex items-center gap-3 text-left group focus:outline-none"
                >
                  {/* Custom checkbox */}
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-150
                      ${
                        isChecked
                          ? "border-[#b133ff] bg-[#b133ff]"
                          : "border-gray-300 bg-white group-hover:border-[#b133ff]/60"
                      }`}
                  >
                    {isChecked && (
                      <svg
                        className="h-3 w-3 text-white"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="2,6 5,9 10,3" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`text-sm font-medium transition-colors duration-150 ${
                      isChecked ? "text-[#b133ff]" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <Link to="/signup/personal">
            <button
              className="w-full rounded-xl py-3.5 text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#b133ff]/50 focus:ring-offset-2"
              style={{
                background: "linear-gradient(90deg, #b133ff 0%, #d400ff 100%)",
              }}
            >
              Continue
            </button>
          </Link>
          {/* Sign in link */}
          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-[#b133ff] hover:underline underline-offset-2"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
