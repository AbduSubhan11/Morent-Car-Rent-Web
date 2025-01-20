"use client";

import React, { useState } from "react";

const SettingsModal = ({ isSettingOpen, toggleModal }: { isSettingOpen: boolean; toggleModal: () => void }) => {
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(true);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  if (!isSettingOpen) return null;

  return (
    <>
      {isSettingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6 relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            <h1 className="text-xl sm:text-2xl font-bold mb-6">Settings</h1>
            <div className="space-y-6">
              {/* Language*/}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className=" sm:text-xl font-semibold mb-4">Language</h2>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-1xl">
                  Select your preferred language:
                </label>
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Arabic</option>
                  <option value="French">Urdu</option>
                </select>
              </div>

              {/* Notification */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="sm:text-xl font-semibold mb-4">Notifications</h2>
                <div className="flex items-center gap-4">
                  <label className="text-gray-700 font-medium text-sm sm:text-1xl">
                    Enable Notifications:
                  </label>
                  <button
                    onClick={toggleNotifications}
                    className={`px-4 py-2 text-sm sm:text-1xl rounded-md font-medium ${
                      notifications
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-900"
                    }`}
                  >
                    {notifications ? "On" : "Off"}
                  </button>
                </div>
              </div>

              {/* Account Management */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="sm:text-xl font-semibold mb-4">Account Management</h2>
                <div className="flex flex-col gap-4">
                  <button className="w-full text-sm sm:text-[17px] bg-blue-600 text-white py-2 px-4 rounded-md font-medium">
                    Change Password
                  </button>
                  <button className="w-full text-sm sm:text-[17px] bg-red-600 text-white py-2 px-4 rounded-md font-medium">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsModal;
