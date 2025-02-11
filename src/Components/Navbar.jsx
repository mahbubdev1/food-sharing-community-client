import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // React Icons Import
import logo from "../assets/logo.png";
import useAuth from "../hook/useAuth";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, handleSignOut } = useAuth();

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const link = (
        <div className="lg:flex gap-2 items-center max-lg:space-y-3 max-lg:p-4">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `flex px-3 text-sm border-2 border-violet-500 rounded-xl py-2 -mb-1 ${isActive ? "bg-violet-500 text-white" : "text-violet-500"}`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/availableFoods"
                className={({ isActive }) =>
                    `flex px-3 text-sm border-2 border-violet-400 rounded-xl py-2 -mb-1 ${isActive ? "bg-violet-600 text-white" : "text-violet-500"}`
                }
            >
                Available Foods
            </NavLink>
            {user && (
                <>
                    <NavLink
                        to="/addFood"
                        className={({ isActive }) =>
                            `flex px-3 text-sm border-2 border-violet-500 rounded-xl py-2 -mb-1 ${isActive ? "bg-violet-600 text-white" : "text-violet-500"}`
                        }
                    >
                        Add Food
                    </NavLink>
                    <NavLink
                        to="/manageFood"
                        className={({ isActive }) =>
                            `flex px-3 text-sm border-2 border-violet-500 rounded-xl py-2 -mb-1 ${isActive ? "bg-violet-600 text-white" : "text-violet-500"}`
                        }
                    >
                        Manage My Foods
                    </NavLink>
                    <NavLink
                        to="/myFoodRequest"
                        className={({ isActive }) =>
                            `flex px-3 text-sm border-2 border-violet-500 rounded-xl py-2 -mb-1 ${isActive ? "bg-violet-600 text-white" : "text-violet-500"}`
                        }
                    >
                        My Food Request
                    </NavLink>
                </>
            )}
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    `flex px-3 text-sm border-2 border-violet-400 rounded-xl py-2 -mb-1 ${isActive ? "bg-violet-600 text-white" : "text-violet-500"}`
                }
            >
                About
            </NavLink>
        </div>
    );

    const links = (
        <div className="max-lg:space-y-3 lg:space-x-3 max-lg:py-2 max-lg:p-4">
            <Link to="/login">
                <button className="px-6 py-3 text-sm font-semibold text-white bg-violet-500 hover:bg-violet-400 rounded">
                    Sign In
                </button>
            </Link>
            <Link to="register">
                <button className="px-6 py-3 font-semibold text-sm bg-rose-600 text-gray-50 rounded">
                    Sign up
                </button>
            </Link>
        </div>
    );

    const logOutLinks = (
        <div className="flex flex-col lg:flex-row items-center max-lg:space-y-3 lg:space-x-3">
            {user && (
                <img
                    alt="User Photo"
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full ring-2 ring-offset-4"
                    src={user.photoURL}
                />
            )}
            <button
                onClick={handleSignOut}
                type="button"
                className="px-4 py-[10px] font-semibold rounded bg-violet-700 text-gray-100"
            >
                Logout
            </button>

        </div>
    );

    return (
        <div>
            <header className="p-4 bg-gray-100 text-gray-100">
                <div className="container flex justify-between items-center h-16 mx-auto">
                    {/* Logo Section */}
                    <Link
                        to="/"
                        className="flex text-lg xl:text-xl font-bold tracking-wide text-violet-600 items-center p-2"
                    >
                        <img className="w-10" src={logo} alt="" />
                        <span>Food Sharing</span>
                    </Link>

                    {/* Navigation Links for Large Screens */}
                    <ul className="items-stretch hidden space-x-3 lg:flex">{link}</ul>

                    {/* Drop Down Button for Small Screens */}
                    <div className="relative lg:hidden z-50">
                        <button onClick={toggleDropdown} className="px-4 py-2 text-gray-800 bg-gray-300 rounded">
                            {dropdownOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
                        </button>

                        {/* Dropdown Content */}
                        <div
                            className={`absolute right-0 w-48 mt-2 rounded shadow-md py-3 bg-gray-100 text-gray-800 ${dropdownOpen ? "block" : "hidden"
                                }`}
                        >
                            {link}
                            {user ? logOutLinks : links}
                        </div>
                    </div>

                    {/* User Info Section for Large Screens */}
                    <div className="items-center flex-shrink-0 hidden lg:flex">{user ? logOutLinks : links}</div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
