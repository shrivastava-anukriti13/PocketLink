import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden">
            {/* Background with solid color */}
            <div className="absolute inset-0 bg-[#F9F4FF]"></div>

            {/* Content */}
            <div className="relative border-t border-gray-200 py-6 z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        {/* Brand Section */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-500 to-yellow-600">
                                PocketLink
                            </h2>
                            <p className="text-gray-600 text-sm">
                                Simplifying URL shortening for efficient sharing
                            </p>
                        </div>

                        {/* Social Media Section */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600 hidden lg:block">Follow us:</span>
                            <div className="flex space-x-3">
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-white rounded-lg border border-gray-200 hover:border-pink-300 flex items-center justify-center text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110"
                                >
                                    <FaFacebook size={16} />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-white rounded-lg border border-gray-200 hover:border-pink-300 flex items-center justify-center text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110"
                                >
                                    <FaTwitter size={16} />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-white rounded-lg border border-gray-200 hover:border-pink-300 flex items-center justify-center text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110"
                                >
                                    <FaInstagram size={16} />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-white rounded-lg border border-gray-200 hover:border-pink-300 flex items-center justify-center text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110"
                                >
                                    <FaLinkedin size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Copyright Section */}
                        <div className="text-center lg:text-right">
                            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-1 border border-gray-200">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-600">
                                    &copy; 2024 PocketLink. All rights reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle decorative element */}
            <div className="absolute top-0 right-1/3 w-16 h-16 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-10 blur-xl"></div>
        </footer>
    );
};

export default Footer;