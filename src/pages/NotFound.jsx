import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <main className="grid place-items-center  px-6 py-24 sm:py-32 lg:px-8  max-w-3xl w-full mx-auto">
                <div className="text-center">
                    <p className="text-base font-semibold text-deep-blue">404</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
                    <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn't find the page you're looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" className="rounded-md bg-deep-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-light-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
                        <Link href="/" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NotFound