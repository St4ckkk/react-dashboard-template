import React from 'react'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'

const Avatar = () => {
    const [imageError, setImageError] = useState(false);
    return (
        <>
            <div className="relative flex flex-col mb-2">
                <div className="w-15 h-15 rounded-full overflow-hidden flex items-center justify-center text-deep-blue shadow-md">
                    {!imageError ? (
                        <img
                            src="/static/img/officials/keyan.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <FaUser className="w-5 h-5 text-gray-500" />
                    )}
                </div>
                <div className="mt-2">
                    <p className="font-bold text-sm text-white">Keyan Andy Delgado</p>
                    <p className="text-xs text-white opacity-90">keyanandydelgado@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Avatar