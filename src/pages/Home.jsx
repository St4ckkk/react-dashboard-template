import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaReact, FaBolt, FaHeart, FaBell, FaDownload, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaStar } from 'react-icons/fa'
import { SiTailwindcss, SiVite, SiJavascript } from 'react-icons/si'
import { MdDashboard, MdUpdate, MdBuild } from 'react-icons/md'
import { HiSparkles } from 'react-icons/hi'

const Home = () => {
    const [repoData, setRepoData] = useState({
        lastUpdated: 'Dec 15, 2024',
        reactVersion: 'React v18.3.1',
        tailwindVersion: 'Tailwind CSS v3.4.0',
        stars: 0,
        forks: 0,
        loading: true
    })

    // GitHub repository details
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
                // Fetch repository data
                const repoResponse = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
                const repoInfo = await repoResponse.json()

                // Fetch package.json to get dependency versions
                const packageResponse = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/package.json`)
                const packageData = await packageResponse.json()
                const packageContent = JSON.parse(atob(packageData.content))

                // Extract React and Tailwind versions
                const reactVersion = packageContent.dependencies?.react || packageContent.devDependencies?.react
                const tailwindVersion = packageContent.dependencies?.tailwindcss || packageContent.devDependencies?.tailwindcss

                // Format last updated date
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
        <div className="min-h-screen bg-layout">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white shadow-sm backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 rounded-lg"
                                >
                                    <img
                                        src="/static/img/template-logo2.png"
                                        alt="St4ckkk Logo"
                                        className="h-8 w-8 object-contain"
                                    />
                                </motion.div>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="ml-3 text-xl font-bold text-deep-blue"
                                >
                                    St4ckkk Template
                                </motion.span>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center space-x-4"
                        >
                            <Link
                                to="/login"
                                className="text-light-blue hover:text-deep-blue px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                            >
                                Login
                            </Link>
                            <Link
                                to="/dashboard"
                                className="bg-deep-blue text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-light-blue transition-all duration-200 transform hover:scale-105 shadow-sm"
                            >
                                Live Demo
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Content - 2/3 width */}
                    <div className="lg:col-span-2">
                        {/* Hero Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-4">
                                React Dashboard Template
                                <span className="block text-deep-blue text-2xl lg:text-3xl font-medium mt-2">
                                    Free React Admin Template
                                </span>
                            </h1>
                        </motion.div>

                        {/* Dashboard Preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative mb-8"
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                                <img
                                    src="/static/img/cover.png"
                                    alt="React Dashboard Preview"
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Floating Tech Icons */}
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
                                className="absolute -bottom-4 -left-4 bg-light-blue text-white p-3 rounded-full shadow-lg z-10"
                            >
                                <SiTailwindcss className="h-6 w-6" />
                            </motion.div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="prose prose-lg max-w-none text-gray-600 mb-8"
                        >
                            <p className="text-lg leading-relaxed mb-4">
                                <strong className="text-deep-blue">St4ckkk Template</strong> is a powerful admin and dashboard template based on the latest version of React framework.
                                It provides a clean and intuitive design that is focused on user experience. The custom components included
                                have been carefully customized to fit with the overall look of the theme, working seamlessly across browsers, tablets and phones.
                            </p>
                            <p className="text-lg leading-relaxed mb-4">
                                St4ckkk Template comes with lots of reusable and beautiful UI elements and components like tables, charts, forms,
                                modals, notifications and many more. It will just fit to any app and project you're building.
                            </p>
                            <p className="text-lg leading-relaxed">
                                St4ckkk Template has a fully responsive layout. It displays perfectly on all the modern displays and resolutions
                                from laptops to smartphones, including Retina screens and mobile devices.
                            </p>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    to="/dashboard"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-deep-blue hover:bg-light-blue transition-all duration-200 shadow-sm"
                                >
                                    <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                                    Live Demo
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <button
                                    onClick={downloadRepository}
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-light-blue hover:bg-deep-blue transition-all duration-200 shadow-sm"
                                >
                                    <FaDownload className="mr-2 h-4 w-4" />
                                    Download
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Sidebar - 1/3 width */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            {/* Template Info Card - Now Dynamic */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <h3 className="text-lg font-semibold text-deep-blue">
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
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-sm font-medium text-light-blue flex items-center gap-2">
                                            <FaCalendarAlt className="h-3 w-3" />
                                            Last Updated:
                                        </span>
                                        <span className="text-sm text-deep-blue">
                                            {repoData.loading ? (
                                                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                                            ) : (
                                                repoData.lastUpdated
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-sm font-medium text-light-blue flex items-center gap-2">
                                            <FaReact className="h-3 w-3 text-blue-500" />
                                            Built with:
                                        </span>
                                        <span className="text-sm text-deep-blue">
                                            {repoData.loading ? (
                                                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                            ) : (
                                                repoData.reactVersion
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-sm font-medium text-light-blue flex items-center gap-2">
                                            <SiTailwindcss className="h-3 w-3 text-cyan-500" />
                                            Framework:
                                        </span>
                                        <span className="text-sm text-deep-blue">
                                            {repoData.loading ? (
                                                <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                                            ) : (
                                                repoData.tailwindVersion
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-sm font-medium text-light-blue flex items-center gap-2">
                                            <FaCode className="h-3 w-3" />
                                            GitHub Stars:
                                        </span>
                                        <span className="text-sm text-deep-blue">
                                            {repoData.loading ? (
                                                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
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
                                        className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg text-white bg-light-blue hover:bg-deep-blue transition-all duration-200"
                                    >
                                        <FaGithub className="mr-2 h-4 w-4" />
                                        View on GitHub
                                    </a>
                                </div>
                            </motion.div>

                            {/* Features Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                            >
                                <h3 className="text-lg font-semibold text-deep-blue mb-4">Key Features</h3>
                                <div className="space-y-3">
                                    {[
                                        { icon: <FaReact className="h-4 w-4 text-blue-500" />, text: "Modern React 18" },
                                        { icon: <SiTailwindcss className="h-4 w-4 text-cyan-500" />, text: "Tailwind CSS" },
                                        { icon: <SiVite className="h-4 w-4 text-purple-500" />, text: "Vite Build Tool" },
                                        { icon: <MdDashboard className="h-4 w-4 text-green-500" />, text: "Responsive Design" },
                                        { icon: <FaBell className="h-4 w-4 text-red-500" />, text: "Rich Components" },
                                        { icon: <HiSparkles className="h-4 w-4 text-yellow-500" />, text: "Modern UI/UX" }
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            {feature.icon}
                                            <span className="text-sm text-light-blue">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tech Stack Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                            >
                                <h3 className="text-lg font-semibold text-deep-blue mb-4">Technology Stack</h3>
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
                                            className="flex flex-col items-center p-3 border border-gray-100 rounded-lg hover:shadow-sm hover:border-deep-blue transition-all duration-200"
                                        >
                                            {tech.icon}
                                            <span className="text-xs font-medium text-light-blue mt-2">{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>


                        </div>
                    </div>
                </div>
                {/* Pricing Section */}
                <section className="bg-[#f5faff] py-12 mt-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-8">
                            <div className="border border-blue-200 rounded-lg py-2 px-4 inline-block mb-4 bg-white text-blue-700 font-semibold text-sm">
                                Exclusive Deal: <span className="font-bold">Save 30%</span> on Lifetime Access!
                            </div>
                            <h2 className="text-2xl font-bold text-deep-blue mb-2">Choose Your Plan</h2>
                            <p className="text-light-blue">Get access to all React & Laravel dashboard templates. Pay securely with GCash.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Pro Plan */}
                            <div className="bg-white rounded-xl shadow p-6 flex flex-col">
                                <h3 className="text-lg font-semibold text-deep-blue mb-2">Starter Plan</h3>
                                <div className="text-3xl font-bold text-blue-600 mb-2">₱999</div>
                                <div className="text-sm text-gray-500 mb-4">One website / One-time payment</div>
                                <ul className="mb-6 space-y-2 text-sm">
                                    <li className="text-green-600">✔ Use in personal projects</li>
                                    <li className="text-green-600">✔ Create websites for clients</li>
                                    <li className="text-green-600">✔ Remove footer credit link</li>
                                    <li className="text-green-600">✔ Fully working <span className="font-semibold">Laravel API</span> backend</li>
                                    <li className="text-green-600">✔ Premium support via Email</li>
                                    <li className="text-green-600">✔ Source code access</li>
                                    <li className="text-red-500 line-through">✘ Access to all templates</li>
                                </ul>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-semibold transition mb-2">
                                    Pay with GCash
                                </button>
                            </div>
                            {/* Premium Plan */}
                            <div className="bg-white rounded-xl shadow-lg border-2 border-blue-600 p-6 flex flex-col scale-105">
                                <div className="mb-2">
                                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">Recommended</span>
                                </div>
                                <h3 className="text-lg font-semibold text-deep-blue mb-2">Premium Plan</h3>
                                <div className="text-3xl font-bold text-blue-600 mb-2">₱2,499</div>
                                <div className="text-sm text-gray-500 mb-4">Unlimited websites / One-time payment</div>
                                <ul className="mb-6 space-y-2 text-sm">
                                    <li className="text-green-600">✔ Use in personal & client projects</li>
                                    <li className="text-green-600">✔ Remove footer credit link</li>
                                    <li className="text-green-600">✔ All React & Laravel dashboard templates</li>
                                    <li className="text-green-600">✔ Fully working <span className="font-semibold">Laravel API</span> backend</li>
                                    <li className="text-green-600">✔ Premium support via Email</li>
                                    <li className="text-green-600">✔ Source code access</li>
                                    <li className="text-green-600">✔ Lifetime updates</li>
                                </ul>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-semibold transition mb-2">
                                    Pay with GCash
                                </button>
                            </div>
                            {/* Free Plan */}
                            <div className="bg-white rounded-xl shadow p-6 flex flex-col opacity-60">
                                <h3 className="text-lg font-semibold text-deep-blue mb-2">Free Plan</h3>
                                <div className="text-3xl font-bold text-gray-400 mb-2">₱0</div>
                                <div className="text-sm text-gray-500 mb-4">Limited features</div>
                                <ul className="mb-6 space-y-2 text-sm">
                                    <li className="text-green-600">✔ Use in personal projects</li>
                                    <li className="text-red-500 line-through">✘ Create websites for clients</li>
                                    <li className="text-red-500 line-through">✘ Remove footer credit link</li>
                                    <li className="text-red-500 line-through">✘ Laravel API backend</li>
                                    <li className="text-red-500 line-through">✘ Premium support</li>
                                    <li className="text-red-500 line-through">✘ Source code access</li>
                                    <li className="text-red-500 line-through">✘ Lifetime updates</li>
                                </ul>
                                <button className="bg-gray-300 text-gray-500 rounded-lg py-2 font-semibold cursor-not-allowed" disabled>
                                    Not Available
                                </button>
                            </div>
                        </div>
                        <div className="text-center mt-8 text-xs text-gray-500">
                            All payments are processed via <span className="font-semibold text-blue-600">GCash</span>. After payment, you will receive access instructions by email.<br />
                            For custom plans or questions, <a href="mailto:support@example.com" className="text-blue-600 underline">contact support</a>.
                        </div>
                    </div>
                </section>

            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white border-t border-gray-200 mt-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <img
                                src="/static/img/template-logo2.png"
                                alt="St4ckkk Logo"
                                className="h-6 w-6 object-contain mr-2"
                            />
                            <span className="text-sm text-light-blue">
                                © 2024 St4ckkk Template. Built with <FaHeart className="inline h-3 w-3 text-red-500 mx-1" /> using React.
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a
                                href={`https://github.com/${GITHUB_REPO}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light-blue hover:text-deep-blue transition-colors duration-200"
                            >
                                <FaGithub className="h-5 w-5" />
                            </a>
                            <Link
                                to="/dashboard"
                                className="text-sm text-deep-blue hover:text-light-blue font-medium transition-colors duration-200"
                            >
                                View Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    )
}

export default Home