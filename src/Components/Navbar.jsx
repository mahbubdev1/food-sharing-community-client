import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import useAuth from "../hook/useAuth";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, handleSignOut } = useAuth();

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const link = (
        <>
            <div className="lg:flex gap-2 items-center max-lg:space-y-3 max-lg:p-4">
                <NavLink to="/" rel="noopener noreferrer" className={({ isActive }) => `flex px-3 text-sm border-2 border-violet-500 rounded-xl py-2 -mb-1 ${isActive ? 'bg-violet-500 text-white' : 'text-violet-500'}`}>Home</NavLink>
                <NavLink to="/availableFoods" rel="noopener noreferrer" className={({ isActive }) => `flex px-3 text-sm border-2 border-violet-400 rounded-xl py-2 -mb-1 ${isActive ? 'bg-violet-600 text-white' : 'text-violet-500'}`}>Available Foods</NavLink>
                <NavLink to="/addFood" rel="noopener noreferrer" className={({ isActive }) => `flex px-3 text-sm border-2 border-violet-500 rounded-xl py-2 -mb-1 ${isActive ? 'bg-violet-600 text-white' : 'text-violet-500'}`}>Add Food</NavLink>
                <NavLink to="/manageFood" rel="noopener noreferrer" className={({ isActive }) => `flex px-3 text-sm border-2 border-violet-500 rounded-xl py-2 -mb-1 ${isActive ? 'bg-violet-600 text-white' : 'text-violet-500'}`}>Manage My Foods</NavLink>
                <NavLink to="/myFood" rel="noopener noreferrer" className={({ isActive }) => `flex px-3 text-sm border-2 border-violet-500 rounded-xl py-2 -mb-1 ${isActive ? 'bg-violet-600 text-white' : 'text-violet-500'}`}>My Food Request</NavLink>
            </div>
        </>
    );

    const links = (
        <>
            <div className="max-lg:space-y-3 lg:space-x-3 max-lg:py-2 max-lg:p-4">
                <Link to="/login">
                    <button className="px-6 py-3 text-sm font-semibold text-white bg-violet-500 hover:bg-violet-400 rounded">Sign In</button>
                </Link>
                <Link to="register">
                    <button className="px-6 py-3 font-semibold text-sm bg-rose-400 dark:bg-rose-600 text-gray-900 dark:text-gray-50 rounded">Sign up</button>
                </Link>
            </div>
        </>
    );

    const logOutLinks = (
        <>
            <div className="flex space-x-3">
                <button onClick={handleSignOut} type="button" className="px-4 font-semibold rounded dark:bg-violet-700 dark:text-gray-100">Logout</button>
                {user && (
                    <img
                        alt="User Photo"
                        referrerPolicy="no-referrer"
                        className="w-11 h-11 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                        src={user.photoURL}
                    />
                )}
            </div>
        </>
    );

    return (
        <div>
            <header className="p-4 bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container flex justify-between items-center h-16 mx-auto">
                    {/* Logo Section */}
                    <Link to="/" rel="noopener noreferrer" aria-label="Back to homepage" className="flex text-lg xl:text-xl font-bold tracking-wide text-violet-400 dark:text-violet-600 items-center p-2">
                        <img className="w-10" src={logo} alt="" />
                        <span>Food Sharing</span>
                    </Link>

                    {/* Navigation Links for Large Screens */}
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        {link}
                    </ul>

                    {/* Drop Down Button for Small Screens */}
                    <div className="relative lg:hidden z-50">
                        {/* Dropdown Toggle Button */}
                        <button onClick={toggleDropdown} className="px-4 py-2 text-gray-800 bg-gray-300 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Dropdown Content */}
                        <div
                            className={`absolute right-0 w-48 mt-2 rounded shadow-md py-3 bg-gray-700 text-white ${
                                dropdownOpen ? "block" : "hidden"
                            }`}
                        >
                            {link}
                            {user ? logOutLinks : links}
                        </div>
                    </div>

                    {/* User Info Section for Large Screens */}
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {user ? logOutLinks : links}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
