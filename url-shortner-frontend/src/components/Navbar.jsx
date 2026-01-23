import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const navigate = useNavigate();
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="z-50 sticky top-0" style={{ backgroundImage: "linear-gradient(to right, #3b82f6, #9333ea)" }}>
            <div className="lg:px-14 sm:px-8 px-4 h-16 flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    <h1 className="font-bold text-3xl text-white italic">
                        PocketLink
                    </h1>
                </Link>

                {/* Desktop Menu - Always visible on desktop */}
                <div className="flex items-center gap-10 max-md:hidden">
                    <Link
                        to="/"
                        className={`font-medium transition-all duration-150 hover:text-gray-200 ${path === "/" ? "text-white font-semibold" : "text-gray-200"
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`font-medium transition-all duration-150 hover:text-gray-200 ${path === "/about" ? "text-white font-semibold" : "text-gray-200"
                            }`}
                    >
                        About
                    </Link>
                    <Link
                        to="/dashboard"
                        className={`font-medium transition-all duration-150 hover:text-gray-200 ${path === "/dashboard" ? "text-white font-semibold" : "text-gray-200"
                            }`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/register"
                        className="bg-rose-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-rose-800 transition-all duration-150"
                    >
                        SignUp
                    </Link>
                    <button
                        className="bg-rose-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-rose-800 transition-all duration-150"
                    >
                        LogOut
                    </button>
                </div>

                {/* Mobile Menu Button - Visible only on mobile */}
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className="md:hidden text-white"
                >
                    {navbarOpen ? (
                        <RxCross2 className="text-3xl" />
                    ) : (
                        <IoIosMenu className="text-3xl" />
                    )}
                </button>
            </div>

            {/* Mobile Menu - Dropdown */}
            {navbarOpen && (
                <div
                    className="md:hidden flex flex-col items-center gap-4 py-5 shadow-lg"
                    style={{ backgroundImage: "linear-gradient(to right, #3b82f6, #9333ea)" }}
                >
                    <Link
                        to="/"
                        onClick={() => setNavbarOpen(false)}
                        className={`font-medium transition-all duration-150 hover:text-white ${path === "/" ? "text-white font-semibold" : "text-gray-200"
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setNavbarOpen(false)}
                        className={`font-medium transition-all duration-150 hover:text-white ${path === "/about" ? "text-white font-semibold" : "text-gray-200"
                            }`}
                    >
                        About
                    </Link>
                    <Link
                        to="/dashboard"
                        onClick={() => setNavbarOpen(false)}
                        className={`font-medium transition-all duration-150 hover:text-white ${path === "/dashboard" ? "text-white font-semibold" : "text-gray-200"
                            }`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/register"
                        onClick={() => setNavbarOpen(false)}
                        className="bg-rose-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-rose-800 transition-all duration-150"
                    >
                        SignUp
                    </Link>
                    <button
                        onClick={() => setNavbarOpen(false)}
                        className="bg-rose-700 text-white font-semibold px-6 py-2 rounded-md hover:bg-rose-800 transition-all duration-150"
                    >
                        LogOut
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;