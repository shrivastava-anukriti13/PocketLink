import React from 'react';

const Logo = ({ className = "h-10" }) => {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <div className="flex flex-col leading-none text-white">
                <span className="text-3xl font-black tracking-tight drop-shadow-sm">
                    Pocket<span className="text-amber-400">Link</span>
                </span>
            </div>
        </div>
    );
};

export default Logo;