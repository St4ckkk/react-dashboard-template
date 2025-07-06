import React from 'react';
import Container from '@components/ui/container/Container';
import HeaderText from '@components/HeaderText';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaUniversalAccess,
    FaSpinner,
    FaDesktop,
    FaMobile,
    FaImage,
    FaShoppingCart,
    FaNewspaper,
    FaUserCheck,
    FaBullhorn,
    FaChartBar,
    FaLayerGroup,
    FaArrowRight,
    FaSearch,
    FaFilter,
    FaBookOpen,
    FaBell,
    FaCube,
    FaChartLine,
    FaPlay,
    FaHeart,
    FaStar,
    FaBuilding,
    FaCalendar,
    FaUser,
    FaEye,
    FaEdit,
    FaCog,
    FaFileAlt,
    FaVideo,
    FaMusic,
    FaTh,
    FaList,
    FaGripHorizontal
} from 'react-icons/fa';

const CardGuidelines = () => {
    return (
        <>
            {/* Usage Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Usage Guidelines"
                    title="When and How to Use Cards"
                />

                <div className="mt-6 space-y-8">
                    {/* When to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Cards</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Content Grouping</h4>
                                        <p className="text-sm text-green-700">Group related information that belongs together but is independent from other content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Scannable Lists</h4>
                                        <p className="text-sm text-green-700">Present collections of similar items that users need to scan and compare quickly.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Interactive Elements</h4>
                                        <p className="text-sm text-green-700">Create clickable containers that lead to detailed views or actions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Visual Hierarchy</h4>
                                        <p className="text-sm text-green-700">Establish clear visual separation between different content sections.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Dashboard Components</h4>
                                        <p className="text-sm text-green-700">Display statistics, metrics, and key information in digestible chunks.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Media Galleries</h4>
                                        <p className="text-sm text-green-700">Showcase images, videos, or multimedia content with consistent formatting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* When Not to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Cards</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Linear Content Flow</h4>
                                        <p className="text-sm text-red-700">Don't use cards for content that should be read sequentially like articles or documentation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Excessive Nesting</h4>
                                        <p className="text-sm text-red-700">Avoid putting cards inside cards - it creates visual confusion and hierarchy issues.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Dense Data Tables</h4>
                                        <p className="text-sm text-red-700">Use proper tables for tabular data instead of trying to fit it into card layouts.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Single-Item Display</h4>
                                        <p className="text-sm text-red-700">A single card alone often looks isolated - consider other layout options.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Form Layouts</h4>
                                        <p className="text-sm text-red-700">Don't use cards to break up forms unless sections are truly independent.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Navigation Menus</h4>
                                        <p className="text-sm text-red-700">Primary navigation should be clear and consistent, not hidden in card layouts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Choosing Card Type */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right Card Type</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaDesktop className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Basic Cards</h4>
                                        <p className="text-sm text-blue-700">Simple content containers - perfect for general information display and basic layouts.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaImage className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Media Cards</h4>
                                        <p className="text-sm text-purple-700">Image or video content with descriptions - ideal for galleries and portfolios.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaUser className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Profile Cards</h4>
                                        <p className="text-sm text-green-700">User information display - perfect for team pages and user directories.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaChartBar className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Stat Cards</h4>
                                        <p className="text-sm text-orange-700">Metrics and KPI display - essential for dashboards and analytics.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start space-x-3">
                                    <FaShoppingCart className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Product Cards</h4>
                                        <p className="text-sm text-gray-700">E-commerce item display - pricing, features, and purchase options.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaEye className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Interactive Cards</h4>
                                        <p className="text-sm text-indigo-700">Clickable content containers - great for navigation and feature highlights.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaGripHorizontal className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Horizontal Cards</h4>
                                        <p className="text-sm text-red-700">Side-by-side image and content - efficient for list views and mobile layouts.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <div className="flex items-start space-x-3">
                                    <FaStar className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-900 mb-1">Pricing Cards</h4>
                                        <p className="text-sm text-yellow-700">Subscription plans and feature comparison - essential for SaaS and service sites.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                                <div className="flex items-start space-x-3">
                                    <FaBell className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-teal-900 mb-1">Notification Cards</h4>
                                        <p className="text-sm text-teal-700">Alert and message display - important for status updates and feedback.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Best Practices */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Practices</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <div className="flex items-start space-x-3">
                                    <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-900 mb-2">Content & Structure</h4>
                                        <ul className="text-sm text-yellow-700 space-y-1">
                                            <li>• Keep card content focused and avoid cramming too much information</li>
                                            <li>• Use consistent card sizes within the same grid or collection</li>
                                            <li>• Establish clear visual hierarchy with headers, content, and actions</li>
                                            <li>• Limit action buttons - too many choices create decision paralysis</li>
                                            <li>• Use meaningful titles that clearly describe the card's purpose</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-2">Visual Design & Layout</h4>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li>• Maintain consistent spacing between cards (12px-24px recommended)</li>
                                            <li>• Use subtle shadows or borders to define card boundaries</li>
                                            <li>• Ensure adequate contrast between card background and page background</li>
                                            <li>• Optimize image aspect ratios for visual consistency</li>
                                            <li>• Consider card elevation hierarchy for different importance levels</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaUniversalAccess className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-2">Accessibility & Interaction</h4>
                                        <ul className="text-sm text-green-700 space-y-1">
                                            <li>• Ensure cards are keyboard navigable when interactive</li>
                                            <li>• Provide clear focus indicators for interactive cards</li>
                                            <li>• Use semantic HTML and proper ARIA labels for screen readers</li>
                                            <li>• Make interactive areas large enough for touch devices (44px minimum)</li>
                                            <li>• Provide alternative text for all images and media content</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaSpinner className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-2">Performance & Responsive Design</h4>
                                        <ul className="text-sm text-purple-700 space-y-1">
                                            <li>• Implement lazy loading for images in card collections</li>
                                            <li>• Use responsive grid systems that adapt to different screen sizes</li>
                                            <li>• Consider card stacking behavior on mobile devices</li>
                                            <li>• Optimize card rendering for large collections with virtualization</li>
                                            <li>• Test card layouts across different devices and orientations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Use Cases */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Use Cases by Context</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaShoppingCart className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">E-commerce</h4>
                                <p className="text-sm text-gray-600">Product listings, shopping carts, promotional offers</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaChartBar className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Dashboards</h4>
                                <p className="text-sm text-gray-600">KPI metrics, status summaries, quick actions</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaNewspaper className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Content Sites</h4>
                                <p className="text-sm text-gray-600">Article previews, blog posts, news summaries</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaBuilding className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Corporate</h4>
                                <p className="text-sm text-gray-600">Team members, company services, case studies</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaImage className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Portfolio</h4>
                                <p className="text-sm text-gray-600">Project showcases, creative work, photo galleries</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaUserCheck className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Social Platforms</h4>
                                <p className="text-sm text-gray-600">User profiles, posts, activity feeds</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaCog className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">App Settings</h4>
                                <p className="text-sm text-gray-600">Configuration panels, feature toggles, preferences</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaCalendar className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Event Management</h4>
                                <p className="text-sm text-gray-600">Event listings, schedules, speaker profiles</p>
                            </div>
                        </div>
                    </div>

                    {/* Layout Patterns */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Card Layout Patterns</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaTh className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Grid Layout</h4>
                                        <p className="text-sm text-blue-700">Equal-width cards in a responsive grid - best for similar content types.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaLayerGroup className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Masonry Layout</h4>
                                        <p className="text-sm text-green-700">Variable height cards - ideal for diverse content and image galleries.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaList className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">List Layout</h4>
                                        <p className="text-sm text-purple-700">Single column stacked cards - perfect for mobile and detailed content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaArrowRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Horizontal Scroll</h4>
                                        <p className="text-sm text-orange-700">Side-scrolling card collections - great for featured content and categories.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start space-x-3">
                                    <FaCube className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Mixed Layout</h4>
                                        <p className="text-sm text-gray-700">Combination of different card sizes - emphasizes featured content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaFilter className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Filterable Grid</h4>
                                        <p className="text-sm text-indigo-700">Grid with filtering and sorting - essential for large card collections.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Patterns */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative UI Patterns</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaFileAlt className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Table Layout</h4>
                                        <p className="text-sm text-indigo-700">For data that needs to be compared across multiple attributes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaList className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Simple Lists</h4>
                                        <p className="text-sm text-indigo-700">For straightforward content that doesn't need visual separation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaBookOpen className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Article Layout</h4>
                                        <p className="text-sm text-indigo-700">For long-form content that should flow as a continuous narrative.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaChartLine className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Dashboard Widgets</h4>
                                        <p className="text-sm text-indigo-700">Interactive components that go beyond static card content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Quick Reference */}
            <Container>
                <HeaderText
                    TitleHeader="Quick Reference Guide"
                    title="At a Glance Recommendations"
                />

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Product Catalogs</h4>
                        <p className="text-sm text-blue-700">Use <strong>media cards</strong> with consistent image ratios and clear pricing/action buttons.</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Team Pages</h4>
                        <p className="text-sm text-green-700">Use <strong>profile cards</strong> with photos, bios, and social links in a grid layout.</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Analytics Dashboards</h4>
                        <p className="text-sm text-purple-700">Use <strong>stat cards</strong> with trends and clear metric visualization.</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Content Previews</h4>
                        <p className="text-sm text-orange-700">Use <strong>basic cards</strong> with titles, excerpts, and "read more" actions.</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-2">Mobile-First</h4>
                        <p className="text-sm text-red-700">Consider <strong>horizontal cards</strong> for better mobile space utilization.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Interactive Features</h4>
                        <p className="text-sm text-gray-700">Use <strong>interactive cards</strong> with hover effects and clear click targets.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CardGuidelines;