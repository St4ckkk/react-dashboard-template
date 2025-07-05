import React from 'react'

const ProfileBanner = () => {
    return (
        <>
            <div className="absolute inset-0 bg-black/50 bg-opacity-50 overflow-hidden">
                <img
                    src="/static/img/cover.jpg"
                    alt="Barangay Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
            </div>
        </>
    )
}

export default ProfileBanner