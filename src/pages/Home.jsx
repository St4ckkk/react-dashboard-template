import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaReact, FaBolt, FaHeart, FaBell, FaDownload, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaStar } from 'react-icons/fa'
import { SiTailwindcss, SiVite, SiJavascript } from 'react-icons/si'
import { MdDashboard, MdUpdate, MdBuild } from 'react-icons/md'
import { HiSparkles } from 'react-icons/hi'

const Home = () => {
    const [repoData, setRepoData] = useState({
        lastUpdated: '',
        reactVersion: '',
        tailwindVersion: '',
        stars: 0,
        forks: 0,
        loading: true
    })

    const GITHUB_REPO = 'St4ckkk/react-dashboard-template'


    const downloadRepository = async () => {
        try {
            const downloadUrl = `https://github.com/${GITHUB_REPO}/archive/refs/heads/main.zip`
            const link = document.createElement('a')
            link.href = downloadUrl
            link.download = `${GITHUB_REPO.split('/')[1]}-main.zip`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            console.log('Download started!')
        } catch (error) {
            console.error('Download failed:', error)
            window.open(`https://github.com/${GITHUB_REPO}`, '_blank')
        }
    }

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const repoResponse = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
                const repoInfo = await repoResponse.json()
                const packageResponse = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/package.json`)
                const packageData = await packageResponse.json()
                const packageContent = JSON.parse(atob(packageData.content))
                const reactVersion = packageContent.dependencies?.react || packageContent.devDependencies?.react
                const tailwindVersion = packageContent.dependencies?.tailwindcss || packageContent.devDependencies?.tailwindcss
                const lastUpdated = new Date(repoInfo.updated_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })

                setRepoData({
                    lastUpdated,
                    reactVersion: `React ${reactVersion?.replace('^', 'v') || 'v18.3.1'}`,
                    tailwindVersion: `Tailwind CSS ${tailwindVersion?.replace('^', 'v') || 'v3.4.0'}`,
                    stars: repoInfo.stargazers_count || 0,
                    forks: repoInfo.forks_count || 0,
                    loading: false
                })
            } catch (error) {
                console.error('Error fetching GitHub data:', error)
                setRepoData(prev => ({ ...prev, loading: false }))
            }
        }

        fetchGitHubData()
    }, [])

    return (
        <div className="min-h-screen bg-layout flex flex-col">
            <header className="bg-white border-gray-800">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center">
                                <img src="/static/img/template-logo2.png" alt="Logo" className="h-8 w-auto" />
                                <span className="ml-2 text-xl font-bold text-deep-blue">St4ckkk</span>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3 text-deep-blue">
                            <Link to="/" className="text-deep-blue hover:text-deep-bluepx-3 py-2 text-sm font-medium">
                                Home
                            </Link>
                            <Link to="/docs" className="text-deep-blue hover:text-deep-blue px-3 py-2 text-sm font-medium">
                                Docs
                            </Link>
                            <Link to="/showcase" className="text-deep-blue hover:text-deep-blue px-3 py-2 text-sm font-medium">
                                Showcase
                            </Link>
                            <a
                                href={`https://github.com/${GITHUB_REPO}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-deep-blue  transition-all duration-200"
                            >
                                Star On GitHub
                                <span className="ml-2 px-2 py-1 text-xs bg-light-blue rounded">{repoData.stars || '0'}</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mb-8"
                            >
                                <h1 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-4">
                                    React Dashboard Template
                                    <span className="block text-light-blue text-2xl lg:text-3xl font-medium mt-2">
                                        Free React Admin Template
                                    </span>
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative mb-8"
                            >
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden ">
                                    <img
                                        src="/static/img/cover.png"
                                        alt="React Dashboard Preview"
                                        className="w-full h-auto"
                                    />
                                </div>

                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="absolute -top-4 -right-4 bg-deep-blue text-white p-3 rounded-full shadow-lg z-10"
                                >
                                    <FaReact className="h-6 w-6" />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                        x: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: 1
                                    }}
                                    className="absolute -bottom-4 -left-4 bg-deep-blue text-white p-3 rounded-full shadow-lg z-10"
                                >
                                    <SiTailwindcss className="h-6 w-6" />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="prose prose-lg max-w-none text-gray-300 mb-8"
                            >
                                <p className="text-lg text-black leading-relaxed mb-4">
                                    <strong className="text-deep-blue">St4ckkk Template</strong> is a powerful admin and dashboard template based on the latest version of React framework.
                                    It provides a clean and intuitive design that is focused on user experience. The custom components included
                                    have been carefully customized to fit with the overall look of the theme, working seamlessly across browsers, tablets and phones.
                                </p>
                                <p className="text-lg text-black leading-relaxed mb-4">
                                    St4ckkk Template comes with lots of reusable and beautiful UI elements and components like tables, charts, forms,
                                    modals, notifications and many more. It will just fit to any app and project you're building.
                                </p>
                                <p className="text-lg text-black leading-relaxed">
                                    St4ckkk Template has a fully responsive layout. It displays perfectly on all the modern displays and resolutions
                                    from laptops to smartphones, including Retina screens and mobile devices.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link
                                        to="/dashboard"
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-deep-blue hover:bg-light-blue  transition-all duration-200 shadow-sm"
                                    >
                                        <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                                        Live Demo
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <button
                                        onClick={downloadRepository}
                                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-deep-blue hover:bg-light-blue transition-all duration-200 shadow-sm"
                                    >
                                        <FaDownload className="mr-2 h-4 w-4" />
                                        Download
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <h3 className="text-lg font-semibold text-white">
                                            Free React admin template
                                        </h3>
                                        {!repoData.loading && (
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                <FaStar className="h-3 w-3" />
                                                <span className="text-xs font-medium">{repoData.stars}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                            <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                <FaCalendarAlt className="h-3 w-3" />
                                                Last Updated:
                                            </span>
                                            <span className="text-sm text-white">
                                                {repoData.loading ? (
                                                    <div className="h-4 w-20 bg-gray-700 rounded animate-pulse"></div>
                                                ) : (
                                                    repoData.lastUpdated
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                            <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                <FaReact className="h-3 w-3 text-blue-500" />
                                                Built with:
                                            </span>
                                            <span className="text-sm text-white">
                                                {repoData.loading ? (
                                                    <div className="h-4 w-24 bg-gray-700 rounded animate-pulse"></div>
                                                ) : (
                                                    repoData.reactVersion
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                            <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                <SiTailwindcss className="h-3 w-3 text-cyan-500" />
                                                Framework:
                                            </span>
                                            <span className="text-sm text-white">
                                                {repoData.loading ? (
                                                    <div className="h-4 w-28 bg-gray-700 rounded animate-pulse"></div>
                                                ) : (
                                                    repoData.tailwindVersion
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                                <FaCode className="h-3 w-3" />
                                                GitHub Stars:
                                            </span>
                                            <span className="text-sm text-white">
                                                {repoData.loading ? (
                                                    <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
                                                ) : (
                                                    `${repoData.stars} stars`
                                                )}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        <Link
                                            to="/dashboard"
                                            className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg text-white bg-deep-blue hover:bg-light-blue transition-all duration-200"
                                        >
                                            Live Demo
                                        </Link>
                                        <a
                                            href={`https://github.com/${GITHUB_REPO}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg text-white bg-deep-blue hover:bg-light-blue transition-all duration-200"
                                        >
                                            <FaGithub className="mr-2 h-4 w-4" />
                                            View on GitHub
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                                    <div className="space-y-3">
                                        {[
                                            { icon: <FaReact className="h-4 w-4 text-blue-500" />, text: "Modern React 19" },
                                            { icon: <SiTailwindcss className="h-4 w-4 text-cyan-500" />, text: "Tailwind CSS" },
                                            { icon: <SiVite className="h-4 w-4 text-purple-500" />, text: "Vite Build Tool" },
                                            { icon: <MdDashboard className="h-4 w-4 text-green-500" />, text: "Responsive Design" },
                                            { icon: <FaBell className="h-4 w-4 text-red-500" />, text: "Rich Components" },
                                            { icon: <HiSparkles className="h-4 w-4 text-yellow-500" />, text: "Modern UI/UX" }
                                        ].map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                {feature.icon}
                                                <span className="text-sm text-gray-300">{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6"
                                >
                                    <h3 className="text-lg font-semibold text-white mb-4">Technology Stack</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { icon: <FaReact className="h-8 w-8 text-blue-500" />, name: "React" },
                                            { icon: <SiTailwindcss className="h-8 w-8 text-cyan-500" />, name: "Tailwind" },
                                            { icon: <SiVite className="h-8 w-8 text-purple-500" />, name: "Vite" },
                                            { icon: <SiJavascript className="h-8 w-8 text-yellow-500" />, name: "JavaScript" }
                                        ].map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ scale: 1.05 }}
                                                className="flex flex-col items-center p-3 border border-gray-700 rounded-lg hover:shadow-sm hover:border-deep-blue transition-all duration-200"
                                            >
                                                {tech.icon}
                                                <span className="text-xs font-medium text-gray-300 mt-2">{tech.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <div className="flex items-center">
                                <img src="/static/img/template-logo2.png" alt="Logo" className="h-8 w-auto" />
                                <span className="ml-2 text-xl font-bold">St4ckkk</span>
                            </div>
                            <p className="text-sm text-gray-400 mt-2">
                                Free and Open Source React Dashboard Template
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                            <div>
                                <h4 className="text-sm font-semibold mb-3">Resources</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/docs" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/showcase" className="text-sm text-gray-400 hover:text-white transition-colors">
                                            Showcase
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold mb-3">Connect</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href={`https://github.com/${GITHUB_REPO}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                                        >
                                            <FaGithub className="mr-2 h-4 w-4" />
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-xs text-gray-400">
                            &copy; {new Date().getFullYear()} St4ckkk. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0 flex items-center">
                            <span className="text-xs text-gray-400 mr-2">Made with</span>
                            <FaHeart className="h-3 w-3 text-red-500" />
                            <span className="text-xs text-gray-400 ml-2">by St4ckkk</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home