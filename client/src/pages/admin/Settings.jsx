import { useState } from 'react';

function AdminSettingsPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [siteName, setSiteName] = useState('My Blog');
  const [theme, setTheme] = useState('light');
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log('Profile saved:', { email, password });
  };

  const handleSaveSiteSettings = (e) => {
    e.preventDefault();
    console.log('Site settings saved:', { siteName, theme });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Settings</h2>

      {/* Admin Profile Settings */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Admin Profile</h3>
        <form onSubmit={handleSaveProfile} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          >
            Save Profile
          </button>
        </form>
      </div>

      {/* Site Settings */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Site Settings</h3>
        <form onSubmit={handleSaveSiteSettings} className="space-y-4">
          <div>
            <label htmlFor="siteName" className="block text-gray-700">Site Name:</label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter site name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Theme Preference:</label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="light"
                  checked={theme === 'light'}
                  onChange={() => setTheme('light')}
                  className="mr-2"
                />
                <span className="text-gray-700">Light</span>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={theme === 'dark'}
                  onChange={() => setTheme('dark')}
                  className="mr-2"
                />
                <span className="text-gray-700">Dark</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          >
            Save Site Settings
          </button>
        </form>
      </div>

      {/* User Management */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">User Management</h3>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex justify-between items-center border-b pb-4">
              <div>
                <h4 className="text-lg font-semibold">{user.name}</h4>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <button
                onClick={() => alert(`Edit user: ${user.name}`)}
                className="text-blue-500 hover:text-blue-600"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* General Settings */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">General Settings</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="security" className="block text-gray-700">Security Settings:</label>
            <select
              name="security"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Enable 2FA</option>
              <option>Disable 2FA</option>
            </select>
          </div>

          <div>
            <label htmlFor="privacy" className="block text-gray-700">Privacy Settings:</label>
            <select
              name="privacy"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          >
            Save General Settings
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminSettingsPage;
