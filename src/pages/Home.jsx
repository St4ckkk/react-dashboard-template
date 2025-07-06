import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaReact, FaBolt, FaHeart, FaBell } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { MdDashboard } from 'react-icons/md'
import { HiSparkles } from 'react-icons/hi'

const Home = () => {
    return (
        <div className="min-h-screen bg-layout">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white shadow-lg backdrop-blur-sm sticky top-0 z-50"
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
                                    className="ml-3 text-xl font-bold text-deep-blue R"
                                >
                                    St4ckkk
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
                                className="text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                            >
                                Login
                            </Link>
                            <Link
                                to="/dashboard"
                                className="bg-brand-gradient text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                            >
                                Dashboard
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-layout">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 py-16 lg:py-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className="text-center lg:text-left">
                                <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                                >
                                    <span className="block">Modern React Dashboard</span>

                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                    className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    Professional dashboard templates and UI components built with modern React and Tailwind CSS.
                                    Clean, responsive, and production-ready solutions for your next project.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            to="/dashboard"
                                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-brand-gradient hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                                        >
                                            <MdDashboard className="mr-2" />
                                            Explore Dashboard
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            to="/login"
                                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-gray-700 bg-white border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transition-all duration-200"
                                        >
                                            Get Started
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Right Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: 0.4, duration: 1.2, type: "spring", stiffness: 100 }}
                                className="relative"
                            >
                                <div className="relative">
                                    {/* Background decorations */}
                                    <div className="absolute -inset-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl opacity-20 transform rotate-3"></div>
                                    <div className="absolute -inset-2 bg-gradient-to-tr from-gray-500 to-gray-700 rounded-3xl opacity-30 transform -rotate-2"></div>

                                    {/* Main image */}
                                    <motion.img
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                                        src="/static/img/cover.png"
                                        alt="St4ckkk Dashboard Preview"
                                    />

                                    {/* Floating elements */}
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
                                        className="absolute -top-4 -right-4 bg-gray-700 text-white p-3 rounded-full shadow-lg z-20"
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
                                        className="absolute -bottom-4 -left-4 bg-gray-600 text-white p-3 rounded-full shadow-lg z-20"
                                    >
                                        <SiTailwindcss className="h-6 w-6" />
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: 2
                                        }}
                                        className="absolute top-1/2 -left-6 bg-yellow-500 text-white p-2 rounded-full shadow-lg z-20"
                                    >
                                        <HiSparkles className="h-4 w-4" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-20 bg-white"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase mb-2">What We Offer</h2>
                        <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Professional Dashboard Solutions
                        </p>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to build modern, responsive dashboards with ease and efficiency.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaBell className="h-6 w-6" />,
                                title: "Interactive Components",
                                description: "Rich UI components including notifications, modals, and interactive elements for engaging user experiences.",
                                color: "from-red-500 to-pink-500"
                            },
                            {
                                icon: <HiSparkles className="h-6 w-6" />,
                                title: "Modern Design System",
                                description: "Consistent design language with beautiful styling and professional layouts that adapt to any brand.",
                                color: "from-yellow-500 to-orange-500"
                            },
                            {
                                icon: <SiTailwindcss className="h-6 w-6" />,
                                title: "Responsive Framework",
                                description: "Built with Tailwind CSS for rapid development and perfect responsiveness across all devices.",
                                color: "from-cyan-500 to-blue-500"
                            },
                            {
                                icon: <FaReact className="h-6 w-6" />,
                                title: "React Architecture",
                                description: "Modern React patterns with hooks, functional components, and optimized performance for scalable applications.",
                                color: "from-blue-500 to-purple-500"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gray-700 text-white mb-4"
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-brand-gradient"
            >
                <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-white mb-4"
                    >
                        <span className="block">Ready to Get Started?</span>
                        <span className="block">Explore Our Dashboard!</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
                    >
                        Experience our professional dashboard solutions and see how they can transform your next project.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/dashboard"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            <span className="mr-2">View Dashboard</span>
                            <MdDashboard className="h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Home