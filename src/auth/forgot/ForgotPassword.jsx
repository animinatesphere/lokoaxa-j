import { useState } from "react";
import hero from "../../assets/Frame 2131332073 (3).png";
import hero2 from "../../assets/Frame 2131332073 (4).png";
import hero3 from "../../assets/Frame 2131332073 (5).png";
import hero4 from "../../assets/Frame 2131332073 (6).png";
import logo from "../../assets/logo-02 2.png";
import { Link } from "react-router-dom";
// ── Shared layout shell ──────────────────────────────────────────────────────
const heroImages = [
  hero, // white trousers
  hero2,
  hero3,
  hero4,
];

const Shell = ({ step, children }) => (
  <div className="flex min-h-screen w-full font-sans">
    {/* Left hero */}
    <div className="relative hidden lg:flex w-[52%] overflow-hidden bg-gray-100">
      <div className="absolute inset-4 rounded-br-[80px] pointer-events-none z-10" />
      <img
        src={heroImages[step]}
        alt="fashion"
        className="h-169.5 max-h-175 w-full object-cover object-top transition-all duration-700"
      />
      {/* Logo on image */}
    </div>

    {/* Right panel */}
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-12">
      {/* Logo (mobile only) */}
      <img src={logo} alt="" className="w-12.5 h-12" />
      {children}
    </div>
  </div>
);

// ── Eye icon ─────────────────────────────────────────────────────────────────
const EyeIcon = ({ off }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    {off ? (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    ) : (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

// ── Step 0 — Forgot Password (enter email) ───────────────────────────────────
const StepForgot = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    onNext();
  };

  return (
    <Shell step={0}>
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white px-8 py-8 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-1">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Please enter your registered email ID
        </p>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#b133ff]/40 focus:border-[#b133ff] mb-1
            ${error ? "border-red-400" : "border-gray-200"}`}
        />
        {error && <p className="text-xs text-red-500 mb-3">{error}</p>}

        <div className="mt-5">
          <button
            onClick={handleContinue}
            className="w-full rounded-xl py-3.5 text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ background: "linear-gradient(90deg,#b133ff,#d400ff)" }}
          >
            Continue
          </button>
        </div>
      </div>
    </Shell>
  );
};

// ── Step 1 — Email Sent ──────────────────────────────────────────────────────
const StepEmailSent = ({ onNext }) => (
  <Shell step={1}>
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white px-8 py-10 shadow-sm flex flex-col items-center text-center">
      {/* Envelope icon */}
      <div className="mb-6">
        <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
          {/* Envelope body */}
          <rect x="6" y="18" width="52" height="36" rx="4" fill="#b133ff" />
          {/* Envelope flap */}
          <path
            d="M6 22 L32 40 L58 22"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
          />
          {/* Check badge */}
          <circle cx="46" cy="18" r="12" fill="#7c00cc" />
          <path
            d="M40 18 L44 22 L52 14"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Lines on envelope */}
          <line
            x1="16"
            y1="46"
            x2="32"
            y2="46"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
          <line
            x1="16"
            y1="50"
            x2="28"
            y2="50"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      <h2 className="text-lg font-bold text-gray-900 mb-1">Email Sent</h2>
      <p className="text-sm text-gray-400 mb-8">Check your mail</p>

      <button
        onClick={onNext}
        className="w-full rounded-xl py-3.5 text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        style={{ background: "linear-gradient(90deg,#b133ff,#d400ff)" }}
      >
        Continue
      </button>
    </div>
  </Shell>
);

// ── Step 2 — Reset Password ──────────────────────────────────────────────────
const StepReset = ({ onNext }) => {
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleReset = () => {
    if (pw.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (pw !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    onNext();
  };

  return (
    <Shell step={2}>
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white px-8 py-8 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-1">Reset Password</h2>
        <p className="text-sm text-gray-500 mb-6">
          please enter a new password below
        </p>

        {/* Password */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative mb-4">
          <input
            type={showPw ? "text" : "password"}
            placeholder="Enter your Password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
              setError("");
            }}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-10 text-sm outline-none transition focus:ring-2 focus:ring-[#b133ff]/40 focus:border-[#b133ff]"
          />
          <button
            onClick={() => setShowPw((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#b133ff] transition"
          >
            <EyeIcon off={!showPw} />
          </button>
        </div>

        {/* Confirm */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <div className="relative mb-2">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter your Password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
              setError("");
            }}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-10 text-sm outline-none transition focus:ring-2 focus:ring-[#b133ff]/40 focus:border-[#b133ff]"
          />
          <button
            onClick={() => setShowConfirm((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#b133ff] transition"
          >
            <EyeIcon off={!showConfirm} />
          </button>
        </div>

        {error && <p className="text-xs text-red-500 mb-3">{error}</p>}

        <div className="mt-5">
          <button
            onClick={handleReset}
            className="w-full rounded-xl py-3.5 text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ background: "linear-gradient(90deg,#b133ff,#d400ff)" }}
          >
            Reset Password
          </button>
        </div>
      </div>
    </Shell>
  );
};

// ── Step 3 — Success ─────────────────────────────────────────────────────────
const StepSuccess = () => (
  <Shell step={3}>
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white px-8 py-10 shadow-sm flex flex-col items-center text-center">
      {/* Lock icon */}
      <div className="mb-6">
        <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
          <rect
            x="14"
            y="28"
            width="36"
            height="28"
            rx="5"
            fill="url(#lockGrad)"
          />
          <path
            d="M20 28 V22 a12 12 0 0 1 24 0 V28"
            stroke="url(#lockGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="32" cy="42" r="5" fill="white" opacity="0.9" />
          <rect
            x="30"
            y="42"
            width="4"
            height="6"
            rx="2"
            fill="white"
            opacity="0.9"
          />
          <defs>
            <linearGradient id="lockGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffb347" />
              <stop offset="100%" stopColor="#ff6b35" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h2 className="text-lg font-bold text-gray-900 mb-1">
        Password Reset Successful!
      </h2>
      <p className="text-sm text-gray-400 mb-8">
        Your password has been updated. You can now login
      </p>
      <Link to="/login" className="w-full">
        <button
          className="w-full rounded-xl py-3.5 text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{ background: "linear-gradient(90deg,#b133ff,#d400ff)" }}
        >
          Go To Login
        </button>
      </Link>
    </div>
  </Shell>
);

// ── Root ─────────────────────────────────────────────────────────────────────
export default function ForgotPassword() {
  const [step, setStep] = useState(0);

  if (step === 0) return <StepForgot onNext={() => setStep(1)} />;
  if (step === 1) return <StepEmailSent onNext={() => setStep(2)} />;
  if (step === 2) return <StepReset onNext={() => setStep(3)} />;
  return <StepSuccess onLogin={() => setStep(0)} />;
}
