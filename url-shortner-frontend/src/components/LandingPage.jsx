import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

let desc =
    "Generate short, memorable links with ease using PocketLink's intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with PocketLink. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using PocketLink's intuitive interface. Share URLs effortlessly across platforms.";

const LandingPage = () => {
    const navigate = useNavigate();
    const { token } = useStoreContext();
    console.log("TOKEN FROM LANDING PAGE: " + token);

    const dashBoardNavigateHandler = () => {
        navigate('/dashboard');
    };
    return (
        <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="relative z-10">
                            <motion.h1
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-500 to-yellow-600">
                                    PocketLink
                                </span>
                                <br />
                                <span className="text-gray-800">Simplifies</span>
                                <br />
                                <span className="text-gray-700">URL Sharing</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
                            >
                                Transform your long URLs into powerful, trackable short links.
                                Gain insights, enhance sharing, and optimize your digital presence with our intuitive platform.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <button
                                    onClick={dashBoardNavigateHandler}
                                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 cursor-pointer"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                    <span>Start Shortening</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mt-16 grid grid-cols-3 gap-8"
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-800">10K+</div>
                                    <div className="text-sm text-gray-600">URLs Shortened</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-800">99.9%</div>
                                    <div className="text-sm text-gray-600">Uptime</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-800">5K+</div>
                                    <div className="text-sm text-gray-600">Happy Users</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Content - Visual Elements */}
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    opacity: { duration: 1, delay: 0.2 },
                                    scale: { duration: 1, delay: 0.2 },
                                    y: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-orange-200 rounded-3xl blur-xl opacity-35"></div>

                                {/* Main Visual Container */}
                                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200 shadow-2xl">
                                    {/* URL Shortening Visualization */}
                                    <div className="space-y-8">
                                        {/* Long URL */}
                                        <div className="bg-gray-100 rounded-2xl p-6 transform -rotate-1">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            </div>
                                            <div className="mt-4">
                                                <div className="text-xs text-gray-500 mb-2">Original URL</div>
                                                <div className="bg-white rounded-lg p-3 text-sm text-gray-700 overflow-hidden">
                                                    https://example.com/very/long/url/with/many/parameters?utm_source=...
                                                </div>
                                            </div>
                                        </div>

                                        {/* Arrow/Process */}
                                        <div className="flex justify-center">
                                            <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-4 shadow-lg">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Short URL */}
                                        <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-6 transform rotate-1">
                                            <div className="text-xs text-gray-500 mb-2">Shortened URL</div>
                                            <div className="bg-white rounded-lg p-4 text-lg font-semibold text-gray-800">
                                                pocketlink.co/abc123
                                            </div>
                                            <div className="mt-4 flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                    <span className="text-xs text-gray-600">Active</span>
                                                </div>
                                                <div className="text-xs text-gray-600">234 clicks</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                        Trusted by individuals and teams at the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                            world's best companies
                        </span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Background glow for cards section */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl blur-lg opacity-20"></div>

                    <div className="relative grid lg:gap-8 gap-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        <Card
                            title="Simple URL Shortening"
                            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
                        />
                        <Card
                            title="Powerful Analytics"
                            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
                        />
                        <Card
                            title="Enhanced Security"
                            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
                        />
                        <Card
                            title="Fast and Reliable"
                            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;