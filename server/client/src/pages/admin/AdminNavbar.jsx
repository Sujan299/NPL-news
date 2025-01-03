import React from 'react'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div className=" w-full p-4">
            <nav className="container mx-auto flex justify-between items-center">
                {/* Logo or Brand Name (Optional) */}
                <div className="text-lg font-bold">
                    <Link to="/admin/dashboard" className="hover:text-gray-400">
                        Admin Dashboard
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="/admin/create_post"
                            className="hover:text-blue-500 transition duration-300"
                        >
                            Create Post
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/message"
                            className="hover:text-blue-500 transition duration-300"
                        >
                            Messages
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/create_admin"
                            className="hover:text-blue-500 transition duration-300"
                        >
                            Create Admin
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/settings"
                            className="hover:text-blue-500 transition duration-300"
                        >
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/logout"
                            className="hover:text-red-500 transition duration-300"
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AdminNavbar