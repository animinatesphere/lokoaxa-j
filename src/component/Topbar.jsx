import { Bell, Settings, Menu } from "lucide-react";

export default function Topbar({ onMenuClick }) {
  return (
    <nav className="flex items-center justify-between gap-3 sm:gap-4 bg-[white] px-4 sm:px-6 h-16 border-b border-gray-100">
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
      >
        <Menu size={24} className="text-gray-600" />
      </button>

      {/* Welcome */}
      <span className="inter text-xs sm:text-sm whitespace-nowrap shrink-0 text-[#4F4A52] hidden sm:inline">
        Welcome Adeyemo Aduke
      </span>

      {/* Search */}
      <div className="relative flex-1 max-w-xl hidden sm:block">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search for dresses, accessories, shoes..."
          className="w-full h-9.5 text-sm border border-[#333] rounded-lg pl-10 pr-4 text-[#4F4A52] placeholder-[#555] outline-none border-none transition-colors"
        />
      </div>

      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <Bell className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 flex-shrink-0" />
        <Settings className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 flex-shrink-0" />
        {/* Avatar */}
        <div className="w-8 sm:w-9.5 h-8 sm:h-9.5 rounded-full bg-[#2a2a2a] border border-[#444] flex items-center justify-center text-[#ccc] text-[11px] sm:text-[13px] font-medium shrink-0">
          AA
        </div>
      </div>
    </nav>
  );
}
