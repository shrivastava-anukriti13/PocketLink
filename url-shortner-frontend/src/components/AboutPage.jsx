import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
const AboutPage = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-500 to-yellow-600 mb-6">
                        About PocketLink
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        PocketLink revolutionizes URL shortening with powerful analytics, enhanced security, and lightning-fast performance.
                        Transform your long URLs into smart, trackable links that provide valuable insights into your audience engagement and sharing patterns.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-pink-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                                    <FaLink className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                        Simple URL Shortening
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Experience the ease of creating short, memorable URLs in just a few clicks.
                                        Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-cyan-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                                    <FaShareAlt className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                        Powerful Analytics
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Gain insights into your link performance with our comprehensive analytics dashboard.
                                        Track clicks, geographical data, and referral sources to optimize your marketing strategies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-emerald-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                                    <FaEdit className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                        Enhanced Security
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Rest assured with our robust security measures. All shortened URLs are protected with
                                        advanced encryption, ensuring your data remains safe and secure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-200 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 hover:border-orange-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                                    <FaChartLine className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                        Fast and Reliable
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Enjoy lightning-fast redirects and high uptime with our reliable infrastructure.
                                        Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;