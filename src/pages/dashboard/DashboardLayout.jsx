import React, { useState } from "react";
import {
  FaBars,
  FaTh,
  FaUserAlt,
  FaDiagnoses,
  FaBrain,
  FaFileMedicalAlt,
  FaChartLine,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: <FaTh /> },
    { path: "/dashboard/start-diagnosis", name: "Start", icon: <FaDiagnoses /> },
    { path: "/dashboard/flashcards", name: "Flashcards", icon: <FaBrain /> },
    { path: "/dashboard/case-bank", name: "Case Bank", icon: <FaFileMedicalAlt /> },
    { path: "/dashboard/progress", name: "Progress", icon: <FaChartLine /> },
  ];

  const profileItem = { path: "/dashboard/profile", name: "Profile", icon: <FaUserAlt /> };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white duration-300 ${
          isOpen ? "w-64" : "w-16"
        } flex flex-col`}
      >
        {/* Top: toggle + scrollable menu */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Toggle button */}
          <div className="flex justify-end p-4">
            <FaBars className="cursor-pointer text-2xl" onClick={toggleSidebar} />
          </div>

          {/* Scrollable menu area */}
          <div className="flex-1 overflow-y-auto px-2 space-y-2 min-h-0">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-2 rounded-md no-underline text-white transition-all ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-800"
                  }`
                }
              >
                <div className="text-xl">{item.icon}</div>
                {isOpen && <div className="text-sm font-medium">{item.name}</div>}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Bottom: Profile always pinned */}
        <div className="p-2 border-t border-gray-700">
          <NavLink
            to={profileItem.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-md no-underline text-white transition-all ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`
            }
          >
            <div className="text-xl">{profileItem.icon}</div>
            {isOpen && <div className="text-sm font-medium">{profileItem.name}</div>}
          </NavLink>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
