import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Logo";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
    const navigate = useNavigate();
    const { token, setToken } = useStoreContext();
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth >= 768 : false,
    );

    useEffect(() => {
        const handleResize = () => {
            const wide = window.innerWidth >= 768;
            setIsDesktop(wide);
            if (wide) setNavbarOpen(false);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const onLogOutHandler = () => {
        setToken(null);
        localStorage.removeItem("JWT_TOKEN");
        navigate("/login");
    };

    return (
        <nav className="sticky top-0 z-50 shadow-sm border-b border-gray-100 bg-[#F9F4FF]" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
                    >
                        <Logo className="h-8" />
                    </Link>

                    {isDesktop && (
                        <div className="flex items-center space-x-8">
                            <Link
                                to="/"
                                className={`relative px-3 py-2 text-base font-medium transition-all duration-300 ${path === "/"
                                    ? "text-pink-600 font-semibold"
                                    : "text-gray-900 hover:text-pink-600 hover:scale-105"
                                    }`}
                            >
                                Home
                                {path === "/" && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-md shadow-pink-400/50"></div>
                                )}
                            </Link>

                            <Link
                                to="/about"
                                className={`relative px-3 py-2 text-base font-medium transition-all duration-300 ${path === "/about"
                                    ? "text-pink-600 font-semibold"
                                    : "text-gray-900 hover:text-pink-600 hover:scale-105"
                                    }`}
                            >
                                About
                                {path === "/about" && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-md shadow-pink-400/50"></div>
                                )}
                            </Link>

                            {token && (
                                <Link
                                    to="/dashboard"
                                    className={`relative px-3 py-2 text-base font-medium transition-all duration-300 ${path === "/dashboard"
                                        ? "text-pink-600 font-semibold"
                                        : "text-gray-900 hover:text-pink-600 hover:scale-105"
                                        }`}
                                >
                                    Dashboard
                                    {path === "/dashboard" && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-md shadow-pink-400/50"></div>
                                    )}
                                </Link>
                            )}

                        </div>
                    )}

                    {isDesktop && (
                        <div className="flex items-center space-x-4">
                            {!token && (
                                <>
                                    {path === "/login" ? (
                                        <Link
                                            to="/register"
                                            className="inline-flex items-center px-6 py-2.5 border border-pink-400 text-sm font-medium rounded-xl text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700 hover:border-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            Sign Up
                                        </Link>
                                    ) : (
                                        <Link
                                            to={path === "/register" ? "/login" : "/register"}
                                            className="inline-flex items-center px-6 py-2.5 border border-pink-400 text-sm font-medium rounded-xl text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700 hover:border-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                        >
                                            {path === "/register" ? "Sign In" : "Sign Up"}
                                        </Link>
                                    )}
                                </>
                            )}
                            <>
                                {token && (
                                    <button
                                        onClick={onLogOutHandler}
                                        className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pink-500/25 transform hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        Log Out
                                    </button>
                                )}
                            </>
                        </div>
                    )}

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-900 hover:text-pink-600 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-all duration-300"
                        >
                            {navbarOpen ? (
                                <RxCross2 className="h-6 w-6" />
                            ) : (
                                <IoIosMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden ${navbarOpen ? 'block' : 'hidden'}`}>
                <div className="px-4 pt-2 pb-3 space-y-1 border-t border-gray-100 bg-[#F9F4FF]">
                    <Link
                        to="/"
                        className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-all duration-300 ${path === "/"
                            ? "text-pink-600 bg-pink-100 border border-pink-300"
                            : "text-gray-900 hover:text-pink-600 hover:bg-pink-50"
                            }`}
                        onClick={() => setNavbarOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-all duration-300 ${path === "/about"
                            ? "text-pink-600 bg-pink-100 border border-pink-300"
                            : "text-gray-900 hover:text-pink-600 hover:bg-pink-50"
                            }`}
                        onClick={() => setNavbarOpen(false)}
                    >
                        About
                    </Link>

                    {token && (
                        <Link
                            to="/dashboard"
                            className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-all duration-300 ${path === "/dashboard"
                                ? "text-pink-600 bg-pink-100 border border-pink-300"
                                : "text-gray-900 hover:text-pink-600 hover:bg-pink-50"
                                }`}
                            onClick={() => setNavbarOpen(false)}
                        >
                            Dashboard
                        </Link>
                    )}

                    <div className="pt-3 border-t border-gray-200">
                        {!token ? (
                            <Link
                                to="/register"
                                className="block w-full text-center px-4 py-3 text-sm font-medium text-pink-600 bg-pink-50 border border-pink-200 hover:bg-pink-100 hover:text-pink-700 rounded-lg transition-all duration-300"
                                onClick={() => setNavbarOpen(false)}
                            >
                                Sign Up
                            </Link>
                        ) : (
                            <div className="space-y-3">
                                <button
                                    onClick={() => {
                                        setNavbarOpen(false);
                                        onLogOutHandler();
                                    }}
                                    className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 rounded-lg transition-all duration-300 shadow-lg cursor-pointer"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;