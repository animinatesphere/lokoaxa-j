import { useState, useRef } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Tag,
  BarChart2,
  Star,
  Bell,
  User,
  Settings,
  LogOut,
  Search,
  TrendingUp,
  Plus,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  Menu,
  X,
  Upload,
  ImagePlus,
} from "lucide-react";

const SIZES = ["M", "L", "XL", "XXL"];
const CATEGORIES = [
  "Gown",
  "Dress",
  "Pants",
  "Shirt",
  "Jacket",
  "Accessories",
  "Shoes",
];

function AddItemModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    style: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    sizes: [],
    images: [],
  });
  const fileRef = useRef();

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const toggleSize = (s) =>
    set(
      "sizes",
      form.sizes.includes(s)
        ? form.sizes.filter((x) => x !== s)
        : [...form.sizes, s],
    );

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((f) => URL.createObjectURL(f));
    set("images", [...form.images, ...previews]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const previews = files.map((f) => URL.createObjectURL(f));
    set("images", [...form.images, ...previews]);
  };

  const handleSubmit = () => {
    if (!form.style || !form.category || !form.price) return;
    onAdd(form);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(20, 0, 40, 0.72)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 leading-tight">
              Create
            </h2>
            <h2 className="text-xl font-semibold text-gray-900 leading-tight">
              Merchant Item
            </h2>
          </div>
          <button
            onClick={onClose}
            className="mt-1 p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-6 space-y-4">
          {/* Product style */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Product style
            </label>
            <input
              type="text"
              placeholder="e.g: evening dress"
              value={form.style}
              onChange={(e) => set("style", e.target.value)}
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-50 transition placeholder-gray-300"
            />
          </div>

          {/* Category + Retail price */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-50 transition bg-white text-gray-500 appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  e.g: evening dress, pant
                </option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Retail price
              </label>
              <input
                type="number"
                placeholder="e.g: 1500"
                value={form.price}
                onChange={(e) => set("price", e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-50 transition placeholder-gray-300"
              />
            </div>
          </div>

          {/* Stock + Sale count */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Available Stock
              </label>
              <input
                type="number"
                placeholder="e.g: 50"
                value={form.stock}
                onChange={(e) => set("stock", e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-50 transition placeholder-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Sale count (Initial)
              </label>
              <input
                type="text"
                value="0 (calculated)"
                readOnly
                className="w-full px-3 py-2.5 text-sm border border-gray-100 rounded-xl bg-gray-50 text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Description / Specifications
            </label>
            <textarea
              placeholder="Describe styling, materials, standard size..."
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={3}
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-50 transition resize-none placeholder-gray-300"
            />
          </div>

          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Upload item images
            </label>
            <div
              className="border-2 border-dashed border-gray-200 rounded-xl p-4 hover:border-purple-300 transition cursor-pointer"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileRef.current.click()}
            >
              {form.images.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-2 py-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <Upload size={18} className="text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-400">
                    Click or drag images here
                  </p>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {form.images.map((src, i) => (
                    <div key={i} className="relative w-16 h-16">
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          set(
                            "images",
                            form.images.filter((_, j) => j !== i),
                          );
                        }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center"
                      >
                        <X size={9} className="text-white" />
                      </button>
                    </div>
                  ))}
                  <div className="w-16 h-16 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                    <ImagePlus size={16} className="text-gray-300" />
                  </div>
                </div>
              )}
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFiles}
            />
          </div>

          {/* Sizes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select available sizes
            </label>
            <div className="flex gap-2 flex-wrap">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSize(s)}
                  className={`w-10 h-10 rounded-lg border text-xs font-medium transition ${
                    form.sizes.includes(s)
                      ? "border-purple-600 bg-purple-600 text-white"
                      : "border-gray-200 text-gray-600 hover:border-purple-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition"
            >
              Add to Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Products", icon: Package, path: "/products" },
  { label: "Orders", icon: ShoppingCart, path: "/orders" },
  { label: "Manage Users", icon: Users, path: "/users" },
  { label: "Categories", icon: Tag, path: "/categories" },
  { label: "Report & Analytics", icon: BarChart2, path: "/analytics" },
  { label: "Review & Feedback", icon: Star, path: "/reviews" },
  { label: "Notification", icon: Bell, path: "/notifications" },
  { label: "Profile", icon: User, path: "/profile" },
];

const bottomItems = [
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Logout", icon: LogOut, path: "/logout" },
];

const tableData = Array(7).fill({
  name: "Wade Warren",
  category: "Gown",
  week02: "24,000",
  week03: "12 units",
  week04: "54",
});

const barData = [520, 280, 640, 430, 560, 490, 780, 600, 930, 590, 460, 310];
const barLabels = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

function Sidebar({
  activePath,
  setActivePath,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-gray-100">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center text-white font-bold text-sm">
            L
          </div>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center w-7 h-7 rounded-md hover:bg-gray-100 text-gray-400 transition"
        >
          {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </button>
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden flex items-center justify-center w-7 h-7 rounded-md hover:bg-gray-100 text-gray-400"
        >
          <X size={15} />
        </button>
      </div>

      {/* Main Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {navItems.map(({ label, icon: Icon, path }) => {
          const active = activePath === path;
          return (
            <button
              key={path}
              onClick={() => {
                setActivePath(path);
                setMobileOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                active
                  ? "bg-purple-600 text-white shadow-sm shadow-purple-200"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
              }`}
              title={collapsed ? label : undefined}
            >
              <Icon
                size={18}
                className={`shrink-0 ${active ? "text-white" : "text-gray-400 group-hover:text-gray-600"}`}
              />
              {!collapsed && <span className="truncate">{label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom Nav */}
      <div className="px-3 py-4 border-t border-gray-100 space-y-0.5">
        {bottomItems.map(({ label, icon: Icon, path }) => (
          <button
            key={path}
            onClick={() => setActivePath(path)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
              activePath === path
                ? "bg-purple-600 text-white"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            }`}
            title={collapsed ? label : undefined}
          >
            <Icon
              size={18}
              className={`shrink-0 ${
                activePath === path
                  ? "text-white"
                  : label === "Logout"
                    ? "text-red-400 group-hover:text-red-500"
                    : "text-gray-400 group-hover:text-gray-600"
              }`}
            />
            {!collapsed && (
              <span
                className={
                  label === "Logout"
                    ? "text-red-400 group-hover:text-red-500"
                    : ""
                }
              >
                {label}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 transition-all duration-200 ${
          collapsed ? "w-16" : "w-56"
        }`}
        style={{ height: "100vh", position: "sticky", top: 0 }}
      >
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative z-50 w-56 h-full">{sidebarContent}</aside>
        </div>
      )}
    </>
  );
}

function BarChart() {
  const max = Math.max(...barData);
  return (
    <div className="flex items-end gap-1.5 h-40 px-2">
      {barData.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t-md bg-purple-500 hover:bg-purple-400 transition-colors cursor-pointer"
            style={{ height: `${(val / max) * 100}%` }}
          />
          {i % 3 === 0 && (
            <span className="text-[10px] text-gray-400">
              {barLabels[Math.floor(i / 3)]}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AdminDashboard() {
  const [activePath, setActivePath] = useState("/dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Day");
  const [currentPage, setCurrentPage] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [catalogItems, setCatalogItems] = useState(tableData);

  const handleAddItem = (form) => {
    setCatalogItems((prev) => [
      {
        name: form.style,
        category: form.category,
        week02: form.price,
        week03: `${form.stock} units`,
        week04: "0",
      },
      ...prev,
    ]);
  };

  const activeLabel =
    [...navItems, ...bottomItems].find((n) => n.path === activePath)?.label ||
    "Dashboard";

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar
        activePath={activePath}
        setActivePath={setActivePath}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 lg:px-6 py-3 flex items-center gap-3">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-500"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>

          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search for dresses, accessories, shoes..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-purple-400 focus:bg-white transition"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-gray-100 text-gray-500">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full" />
            </button>
            <button className="p-2 rounded-xl hover:bg-gray-100 text-gray-500">
              <Settings size={18} />
            </button>
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/32?img=5"
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="hidden sm:block text-right">
                <p className="text-xs text-gray-400 leading-tight">
                  Good morning!
                </p>
                <p className="text-sm font-medium text-gray-800 leading-tight">
                  Adeyemo Aduke
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 space-y-5">
          {activePath === "/dashboard" ? (
            <>
              {/* Stat cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    label: "Total Revenue This Month",
                    value: "₦2.5M",
                    change: "+3%",
                    note: "Up from past week",
                    up: true,
                  },
                  {
                    label: "Catalog Items",
                    value: "460",
                    change: "+14.9%",
                    note: "Up from past week",
                    up: true,
                  },
                  {
                    label: "Storage Capacity",
                    value: "46,000",
                    change: "+1.8%",
                    note: "Up from yesterday",
                    up: true,
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="bg-white rounded-2xl border border-gray-100 p-5"
                  >
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                      {card.label}
                    </p>
                    <p className="text-2xl font-semibold text-gray-900 mb-2">
                      {card.value}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs">
                      <TrendingUp size={13} className="text-green-500" />
                      <span className="text-green-600 font-medium">
                        {card.change}
                      </span>
                      <span className="text-gray-400">{card.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-gray-800">
                    Sales Trends
                  </h2>
                  <div className="flex gap-1">
                    {["Day", "Week", "Month", "Year"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setActiveTab(t)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                          activeTab === t
                            ? "bg-purple-600 text-white"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <BarChart />
              </div>

              {/* Table */}
              <div className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">
                      Dynamic Product Catalog
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Total list of designer products, pricing, and stock levels
                    </p>
                  </div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-medium transition"
                  >
                    <Plus size={14} />
                    Add New Item
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        {[
                          "Name",
                          "Category",
                          "Week 02",
                          "Week 03",
                          "Week 04",
                          "Action",
                        ].map((h) => (
                          <th
                            key={h}
                            className="text-left text-xs font-medium text-gray-400 pb-3 pr-4"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {catalogItems.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-gray-50 hover:bg-gray-50 transition"
                        >
                          <td className="py-3 pr-4 text-gray-700">
                            {row.name}
                          </td>
                          <td className="py-3 pr-4 text-purple-600 font-medium">
                            {row.category}
                          </td>
                          <td className="py-3 pr-4 text-gray-600">
                            {row.week02}
                          </td>
                          <td className="py-3 pr-4">
                            <span className="flex items-center gap-1.5 text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              {row.week03}
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-purple-600 font-medium">
                            {row.week04}
                          </td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition">
                                <Edit size={14} />
                              </button>
                              <button className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition">
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400">Page 1 of 30</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, "...", 10, 11, 12].map((p, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          typeof p === "number" && setCurrentPage(p)
                        }
                        className={`w-7 h-7 rounded-lg text-xs font-medium transition ${
                          p === currentPage
                            ? "bg-purple-600 text-white"
                            : p === "..."
                              ? "text-gray-400 cursor-default"
                              : "text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-600 hover:bg-gray-50 transition">
                      <ChevronLeft size={13} /> Previous
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-600 hover:bg-gray-50 transition">
                      Next <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Placeholder for other pages */
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-4">
                {(() => {
                  const item = [...navItems, ...bottomItems].find(
                    (n) => n.path === activePath,
                  );
                  const Icon = item?.icon || LayoutDashboard;
                  return <Icon size={24} className="text-purple-500" />;
                })()}
              </div>
              <h2 className="text-base font-semibold text-gray-700 mb-1">
                {activeLabel}
              </h2>
              <p className="text-sm text-gray-400">
                This page is under construction. Connect your router here.
              </p>
            </div>
          )}
        </main>
      </div>
      {showModal && (
        <AddItemModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddItem}
        />
      )}
    </div>
  );
}
