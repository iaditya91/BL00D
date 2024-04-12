import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';

const AccountDetails = () => {
  const [activeTab, setActiveTab] = useState('accountSetting');
  const [showImageUpload, setShowImageUpload] = useState(false);
  const fileInputRef = useRef(null);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    if (showImageUpload) {
      fileInputRef.current.click();
    }
  }, [showImageUpload]);

  const renderTabDetails = () => {
    switch (activeTab) {
      case 'notification':
        return <div>Details about your Notification settings</div>;
      case 'membershipPlan':
        return <div>Details about your Membership Plan</div>;
      case 'passwordSecurity':
        return <div>Details about your Password & Security settings</div>;
      default:
        return <div>Details about your Personal information</div>;
    }
  };

  const handleUpdateProfilePicture = () => {
    setShowImageUpload(true);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
    console.log('Uploaded file:', file);
    setShowImageUpload(false);
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-1">
      <div className="bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img
              src="profile-pic.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">Upload a New Photo</h2>
              <p>Profile-pic.jpg</p>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpdateProfilePicture}
          >
            Update
          </button>
        </div>
        <div className="flex">
          <div className="w-64 mr-8">
            <nav className="space-y-2">
              <button
                className={`w-full text-left px-4 py-2 rounded ${
                  activeTab === 'accountSetting'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => handleTabChange('accountSetting')}
              >
                Account Setting
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded ${
                  activeTab === 'notification'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => handleTabChange('notification')}
              >
                Notification
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded ${
                  activeTab === 'membershipPlan'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => handleTabChange('membershipPlan')}
              >
                Membership Plan
              </button>
              <button
                className={`w-full text-left px-4 py-2 rounded ${
                  activeTab === 'passwordSecurity'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => handleTabChange('passwordSecurity')}
              >
                Password & Security
              </button>
            </nav>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">
              Change User Information here
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold mb-2">Full Name*</label>
                <input
                  type="text"
                  value="Tonmoy karmoker"
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  readOnly
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Email Address*</label>
                <input
                  type="email"
                  value="tonmoydedesigner@gmail.com"
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  readOnly
                />
              </div>
              <div className="col-span-2">
                <label className="block font-bold mb-2">Address*</label>
                <input
                  type="text"
                  value="190 Upor Bazar, Natore Sadar, Natore"
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  readOnly
                />
              </div>
              <div>
                <label className="block font-bold mb-2">City</label>
                <input
                  type="text"
                  value="Natore"
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  readOnly
                />
              </div>
              <div>
                <label className="block font-bold mb-2">State/Province</label>
                <input
                  type="text"
                  value="Rajshahi"
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  readOnly
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Zip Code</label>
                <input
                  type="text"
                  value="6400"
                  className="w-full px-4 py-2 rounded-md border border-gray-300"
                  readOnly
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Country</label>
                <div className="flex items-center">
                  <img
                    src="https://purecatamphetamine.github.io/country-flag-icons/3x2/BD.svg"
                    alt="Bangladesh"
                    className="w-8 h-5 mr-2"
                  />
                  <span>Bangladesh</span>
                </div>
              </div>
            </div>
            {renderTabDetails()}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
              Update Information
            </button>
          </div>
        </div>
      </div>

      {showImageUpload && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Upload New Profile Picture</h3>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="mb-4"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={() => setShowImageUpload(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AccountDetails;