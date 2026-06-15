import React from "react";
import DashboardLayout from "../component/DashboardLayout";
import { Mail, MessageCircle, ChevronRight } from "lucide-react";

const HelpCenter = () => {
  const supportOptions = [
    {
      id: 1,
      title: "Email support",
      subtitle: "support@looxaka.com",
      icon: Mail,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      link: "mailto:support@looxaka.com",
    },
    {
      id: 2,
      title: "WhatsApp chat",
      subtitle: "+2337779886855",
      icon: MessageCircle,
      color: "bg-green-100",
      iconColor: "text-green-600",
      link: "https://wa.me/2337779886855",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 sm:gap-8 pb-12 px-3 sm:px-0">
        {/* Header */}
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
            Help center
          </h1>
          <p className="text-xs sm:text-base text-gray-500\">
            Chat with our customer care team anytime
          </p>
        </div>

        {/* Support Options */}
        <div className="max-w-2xl flex flex-col gap-3 sm:gap-4\">
          {supportOptions.map((option) => {
            const Icon = option.icon;
            return (
              <a
                key={option.id}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-md transition-all cursor-pointer group"
              >
                {/* Icon */}
                <div
                  className={`p-3 sm:p-4 rounded-lg ${option.color} flex-shrink-0 w-fit`}
                >
                  <Icon
                    size={20}
                    className={option.iconColor}
                    strokeWidth={2}
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 font-semibold mb-1 text-sm sm:text-base">
                    {option.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {option.subtitle}
                  </p>
                </div>

                {/* Chevron */}
                <ChevronRight
                  size={18}
                  className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 hidden sm:block"
                />
              </a>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpCenter;
