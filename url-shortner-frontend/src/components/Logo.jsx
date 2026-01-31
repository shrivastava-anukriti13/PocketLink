import React from 'react';

const Logo = ({ className = "h-10" }) => {
    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            {/* Logo Icon */}
            <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-pink-400 to-orange-400 rounded-xl blur opacity-30"></div>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                        Pocket
                    </span>
                    <span className="text-gray-800">Link</span>
                </span>
                <span className="text-xs text-gray-500 tracking-wider uppercase font-medium">
                    URL Shortener
                </span>
            </div>
        </div>
    );
};

export default Logo;