import React from 'react'

const HeaderText = (
    { title, TitleHeader, className } = {
        title: '',
        TitleHeader: '',
        className: '',
    }
) => {
    return (
        <>
            <h2 className={`text-3xl mb-4 border-l-4 border-deep-blue pl-2 ${className}`}>
                {TitleHeader && <span className="font-bold">{TitleHeader}</span>}{' '}
                {title && title}
            </h2>
        </>
    )
}

export default HeaderText