import React, { useState } from "react";
import DashboardLayout from "../component/DashboardLayout";
import {
  Moon,
  Globe,
  DollarSign,
  Lock,
  Bell,
  Mail,
  MessageSquare,
  Package,
  Zap,
  Heart,
  Sparkles,
  CreditCard,
  Shield,
  Download,
  Trash2,
  Smartphone,
  LogOut,
  ChevronRight,
  Check,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    darkMode: true,
    language: "EN",
    currency: "USD",
    twoFactor: false,
    pushNotifications: true,
    emailNotifications: false,
    smsAlerts: false,
    orderUpdates: true,
    flashSales: true,
    wishlistRestocks: false,
    styleRecommendations: true,
    analyticsData: true,
    personalizedAds: false,
    locationData: false,
    thirdPartySharing: false,
    autoRenew: true,
    emailReceipts: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const ToggleSwitch = ({ checked, onChange }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? "bg-[#B000FF]" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  const SettingItem = ({
    icon: Icon,
    title,
    subtitle,
    value,
    onChange,
    type = "toggle",
  }) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 py-3 sm:py-4 px-3 sm:px-6 border-b border-gray-100 last:border-b-0">
      <div className="flex items-start sm:items-center gap-2 sm:gap-4 flex-1">
        <div className="p-1 sm:p-2 bg-purple-100 rounded-lg flex-shrink-0">
          <Icon size={16} className="sm:w-5 sm:h-5 text-[#B000FF]" />
        </div>
        <div className="min-w-0">
          <h3 className="text-gray-900 font-medium text-sm sm:text-base">
            {title}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm">{subtitle}</p>
        </div>
      </div>
      {type === "toggle" && (
        <ToggleSwitch checked={value} onChange={onChange} />
      )}
      {type === "select" && (
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-xs sm:text-sm font-medium">{value}</span>
          <ChevronRight size={16} />
        </div>
      )}
    </div>
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 sm:gap-8 pb-12 px-3 sm:px-0">
        {/* Header */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
            Settings
          </h1>
          <p className="text-xs sm:text-base text-gray-500">
            Manage your preferences and account
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-200 overflow-x-auto">
          {["general", "notifications", "privacy", "billing"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-medium capitalize transition-colors border-b-2 whitespace-nowrap ${
                activeTab === tab
                  ? "text-[#B000FF] border-[#B000FF]"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* General Tab */}
        {activeTab === "general" && (
          <div className="max-w-2xl space-y-6">
            {/* Appearance */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Appearance
                </h3>
              </div>
              <SettingItem
                icon={Moon}
                title="Dark mode"
                subtitle="Switch between light and dark themes"
                value={settings.darkMode}
                onChange={() => toggleSetting("darkMode")}
              />
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Preferences
                </h3>
              </div>
              <SettingItem
                icon={Globe}
                title="Language"
                subtitle="English (US)"
                value={settings.language}
                type="select"
              />
              <SettingItem
                icon={DollarSign}
                title="Currency"
                subtitle="US Dollar"
                value={settings.currency}
                type="select"
              />
            </div>

            {/* Account */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Account
                </h3>
              </div>
              <SettingItem
                icon={Lock}
                title="Two-factor authentication"
                subtitle="Extra layer of security"
                value={settings.twoFactor}
                onChange={() => toggleSetting("twoFactor")}
              />
              <div className="flex items-center justify-between py-4 px-6 border-b border-gray-100">
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <LogOut size={20} className="text-[#B000FF]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">
                      Change password
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Last changed 2 months ago
                    </p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
              <div className="flex items-center justify-between py-4 px-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Smartphone size={20} className="text-[#B000FF]" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">
                      Connected devices
                    </h3>
                    <p className="text-gray-500 text-sm">2 active sessions</p>
                  </div>
                </div>
                <span className="bg-purple-100 text-[#B000FF] text-xs font-semibold px-3 py-1 rounded-full">
                  2
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <div className="max-w-2xl space-y-6">
            {/* Channels */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Channels
                </h3>
              </div>
              <SettingItem
                icon={Bell}
                title="Push notifications"
                subtitle="Alerts sent to your device"
                value={settings.pushNotifications}
                onChange={() => toggleSetting("pushNotifications")}
              />
              <SettingItem
                icon={Mail}
                title="Email notifications"
                subtitle="notify@mail.com"
                value={settings.emailNotifications}
                onChange={() => toggleSetting("emailNotifications")}
              />
              <SettingItem
                icon={MessageSquare}
                title="SMS alerts"
                subtitle="+1 (555) 123-4567"
                value={settings.smsAlerts}
                onChange={() => toggleSetting("smsAlerts")}
              />
            </div>

            {/* Activity */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Activity
                </h3>
              </div>
              <SettingItem
                icon={Package}
                title="Order updates"
                subtitle="Shipping and delivery status"
                value={settings.orderUpdates}
                onChange={() => toggleSetting("orderUpdates")}
              />
              <SettingItem
                icon={Zap}
                title="Flash sales & deals"
                subtitle="Exclusive offers for you"
                value={settings.flashSales}
                onChange={() => toggleSetting("flashSales")}
              />
              <SettingItem
                icon={Heart}
                title="Wishlist restocks"
                subtitle="When saved items are back"
                value={settings.wishlistRestocks}
                onChange={() => toggleSetting("wishlistRestocks")}
              />
              <SettingItem
                icon={Sparkles}
                title="Style recommendations"
                subtitle="Curated picks based on taste"
                value={settings.styleRecommendations}
                onChange={() => toggleSetting("styleRecommendations")}
              />
            </div>
          </div>
        )}

        {/* Privacy Tab */}
        {activeTab === "privacy" && (
          <div className="max-w-2xl space-y-6">
            {/* Privacy Score */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Privacy Score
                </h3>
                <span className="text-[#B000FF] text-2xl font-bold">
                  83/100
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[83%] bg-[#B000FF] rounded-full"></div>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Your data protection health
              </p>
            </div>

            {/* Data Sharing */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Data Sharing
                </h3>
              </div>
              <SettingItem
                icon={Globe}
                title="Analytics & usage data"
                subtitle="Help improve our platform"
                value={settings.analyticsData}
                onChange={() => toggleSetting("analyticsData")}
              />
              <SettingItem
                icon={Sparkles}
                title="Personalised ads"
                subtitle="Ads based on your browsing"
                value={settings.personalizedAds}
                onChange={() => toggleSetting("personalizedAds")}
              />
              <SettingItem
                icon={Shield}
                title="Location data"
                subtitle="For local availability and stores"
                value={settings.locationData}
                onChange={() => toggleSetting("locationData")}
              />
              <SettingItem
                icon={Shield}
                title="Third-party sharing"
                subtitle="Share data with brand partners"
                value={settings.thirdPartySharing}
                onChange={() => toggleSetting("thirdPartySharing")}
              />
            </div>

            {/* Data You've Shared */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-4">
                Data You've Shared
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Browsing history",
                  "Purchase history",
                  "Location",
                  "Device info",
                  "Social profile",
                  "Style preferences",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-[#B000FF] text-[#B000FF] rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-xl border border-red-200 p-6">
              <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-4">
                Danger Zone
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <h4 className="text-gray-900 font-medium">
                      Download my data
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Export a copy of all your data
                    </p>
                  </div>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Export
                  </button>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <h4 className="text-gray-900 font-medium">
                      Delete account
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Permanently remove all your data
                    </p>
                  </div>
                  <button className="px-6 py-2 bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-200 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Billing Tab */}
        {activeTab === "billing" && (
          <div className="max-w-2xl space-y-6">
            {/* Your Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Your Plan
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {/* Free Plan - Selected */}
                <div className="flex items-center justify-between p-6 border-2 border-[#B000FF] rounded-2xl bg-purple-50/30">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Free</h4>
                    <p className="text-[#B000FF] font-bold text-lg">
                      $0
                      <span className="text-sm font-normal text-gray-500">
                        /mo
                      </span>
                    </p>
                  </div>
                  <div className="p-2 bg-[#B000FF] rounded-full">
                    <Check size={20} className="text-white" />
                  </div>
                </div>

                {/* Style+ Plan */}
                <div className="flex items-center justify-between p-6 border border-gray-200 rounded-2xl hover:border-[#B000FF] transition-colors cursor-pointer">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Style+</h4>
                    <p className="text-[#B000FF] font-bold text-lg">
                      $9
                      <span className="text-sm font-normal text-gray-500">
                        /mo
                      </span>
                    </p>
                  </div>
                </div>

                {/* Luxe Pro Plan */}
                <div className="flex items-center justify-between p-6 border border-gray-200 rounded-2xl hover:border-[#B000FF] transition-colors cursor-pointer">
                  <div>
                    <h4 className="text-gray-900 font-semibold">Luxe Pro</h4>
                    <p className="text-[#B000FF] font-bold text-lg">
                      $19
                      <span className="text-sm font-normal text-gray-500">
                        /mo
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Payment Methods
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {/* Visa Card */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 bg-gray-100 rounded">
                      <span className="text-xs font-bold text-blue-600">
                        VISA
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">
                        •••• •••• •••• 4242
                      </p>
                      <p className="text-gray-500 text-xs">Expires 08 / 27</p>
                    </div>
                  </div>
                  <button className="text-[#B000FF] font-semibold text-xs hover:text-purple-700">
                    Default
                  </button>
                </div>

                {/* Mastercard */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 bg-orange-50 rounded">
                      <span className="text-xs font-bold text-orange-600">
                        MC
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">
                        •••• •••• •••• 8801
                      </p>
                      <p className="text-gray-500 text-xs">Expires 12 / 26</p>
                    </div>
                  </div>
                  <button className="text-gray-600 font-semibold text-xs hover:text-gray-900">
                    Set default
                  </button>
                </div>

                {/* Add Payment Method */}
                <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors">
                  + Add payment method
                </button>
              </div>
            </div>

            {/* Billing Cycle */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Billing Cycle
                </h3>
                <span className="text-[#B000FF] text-sm font-semibold">
                  15th
                </span>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 text-xs uppercase tracking-wide font-medium">
                  Billing date
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-xs font-medium">1st</span>
                  <div className="flex-1 relative h-2 bg-gray-200 rounded-full">
                    <div className="h-full w-1/2 bg-[#B000FF] rounded-full"></div>
                  </div>
                  <span className="text-gray-500 text-xs font-medium">
                    30th
                  </span>
                </div>
                <div className="flex justify-center -mt-2">
                  <div className="w-5 h-5 bg-[#B000FF] rounded-full border-2 border-white shadow-md"></div>
                </div>
              </div>
            </div>

            {/* Auto-renew & Receipts */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Auto-Renew & Receipts
                </h3>
              </div>
              <SettingItem
                icon={CreditCard}
                title="Auto-renew subscription"
                subtitle=""
                value={settings.autoRenew}
                onChange={() => toggleSetting("autoRenew")}
              />
              <SettingItem
                icon={Mail}
                title="Email receipts"
                subtitle=""
                value={settings.emailReceipts}
                onChange={() => toggleSetting("emailReceipts")}
              />
            </div>

            {/* Second Auto-renew & Receipts Section */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                  Auto-Renew & Receipts
                </h3>
              </div>
              <SettingItem
                icon={CreditCard}
                title="Auto-renew subscription"
                subtitle=""
                value={settings.autoRenew}
                onChange={() => toggleSetting("autoRenew")}
              />
              <SettingItem
                icon={Mail}
                title="Email receipts"
                subtitle=""
                value={settings.emailReceipts}
                onChange={() => toggleSetting("emailReceipts")}
              />
            </div>

            {/* Promotional Banner */}
            <div className="bg-gray-700 rounded-2xl overflow-hidden p-8">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Elevate your lifestyle</h3>
                  <p className="text-gray-300 text-sm mt-1">
                    Experience the full Luxe ecosystem.
                  </p>
                </div>
                <div className="hidden lg:block w-48 h-32 bg-gray-600 rounded-lg"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
