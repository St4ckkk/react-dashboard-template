import React from 'react';

const Cards = ({ title, count, icon, color, children, className = '' }) => {
    // If children are provided, treat as a general container card
    if (children) {
        return (
            <div className={`bg-white rounded-md shadow-sm ${className}`}>
                {children}
            </div>
        );
    }

    // Otherwise, render as a stat card
    const gradientMap = {
        'bg-amber-300': 'bg-gradient-to-r from-amber-300 to-amber-400',
        'bg-red-400': 'bg-gradient-to-r from-red-400 to-red-500',
        'bg-cyan-400': 'bg-gradient-to-r from-cyan-400 to-cyan-500',
        'bg-emerald-400': 'bg-gradient-to-r from-emerald-400 to-emerald-500',
        'bg-amber-700': 'bg-gradient-to-r from-amber-600 to-amber-700',
        'bg-blue-600': 'bg-gradient-to-r from-blue-500 to-blue-600',
        'bg-pink-500': 'bg-gradient-to-r from-pink-400 to-pink-500',
        'bg-purple-600': 'bg-gradient-to-r from-purple-500 to-purple-600'
    };

    const gradientClass = gradientMap[color] || color;

    return (
        <div
            className={`${gradientClass} rounded-md p-4 flex items-center justify-between 
                      shadow-lg h-20 relative overflow-hidden backdrop-blur-sm 
                      border border-white/10 backdrop-filter ${className}`}
            style={{
                background: `linear-gradient(135deg, ${getComputedColorWithOpacity(color, 0.85)}, ${getComputedColorWithOpacity(color, 0.95)})`,
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)'
            }}
        >
            <div className="flex flex-col justify-center z-10">
                <h3 className="text-white font-medium text-lg">{title}</h3>
            </div>
            <div className="flex items-center">
                <p className="text-3xl font-bold text-white z-10">{count}</p>
                <div className="absolute right-3 opacity-30 transform scale-150">
                    {React.cloneElement(icon, { className: "text-4xl text-white" })}
                </div>
            </div>

            {/* Add glass effect elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-white/10"></div>
        </div>
    );
};

// Helper function to get computed color with opacity
const getComputedColorWithOpacity = (tailwindClass, opacity) => {
    const colorMap = {
        'bg-amber-300': `rgba(252, 211, 77, ${opacity})`,
        'bg-red-400': `rgba(248, 113, 113, ${opacity})`,
        'bg-cyan-400': `rgba(34, 211, 238, ${opacity})`,
        'bg-emerald-400': `rgba(52, 211, 153, ${opacity})`,
        'bg-amber-700': `rgba(180, 83, 9, ${opacity})`,
        'bg-blue-600': `rgba(37, 99, 235, ${opacity})`,
        'bg-pink-500': `rgba(236, 72, 153, ${opacity})`,
        'bg-purple-600': `rgba(147, 51, 234, ${opacity})`,
    };

    return colorMap[tailwindClass] || `rgba(107, 114, 128, ${opacity})`;
};

export default Cards;