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
    FaVideo,
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
    FaCalendar
} from 'react-icons/fa';

const CarouselGuidelines = () => {
    return (
        <>
            {/* Usage Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Usage Guidelines"
                    title="When and How to Use Carousels"
                />

                <div className="mt-6 space-y-8">
                    {/* When to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Carousels</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Image Galleries</h4>
                                        <p className="text-sm text-green-700">Showcase multiple related images, products, or portfolio items in a compact space.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Hero Sections</h4>
                                        <p className="text-sm text-green-700">Display multiple featured content, promotions, or key messages on landing pages.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Testimonials</h4>
                                        <p className="text-sm text-green-700">Cycle through customer reviews and testimonials to build trust and credibility.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Featured Content</h4>
                                        <p className="text-sm text-green-700">Highlight featured articles, products, or announcements in a rotating display.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Product Showcase</h4>
                                        <p className="text-sm text-green-700">Display multiple product images or related items in e-commerce applications.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Space Constraints</h4>
                                        <p className="text-sm text-green-700">When you need to show multiple items but have limited horizontal or vertical space.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* When Not to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Carousels</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Critical Information</h4>
                                        <p className="text-sm text-red-700">Don't hide important content or calls-to-action in carousel slides beyond the first.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Few Items</h4>
                                        <p className="text-sm text-red-700">Avoid carousels for 2-3 items - use a simple grid or list layout instead.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Content Comparison</h4>
                                        <p className="text-sm text-red-700">When users need to compare items side by side rather than viewing them sequentially.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">SEO-Critical Content</h4>
                                        <p className="text-sm text-red-700">Search engines may not index content in carousel slides effectively.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Performance Concerns</h4>
                                        <p className="text-sm text-red-700">Avoid image-heavy carousels on slow connections or resource-constrained devices.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Accessibility Issues</h4>
                                        <p className="text-sm text-red-700">Be cautious with auto-play carousels for users with motion sensitivity or cognitive disabilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Choosing Carousel Type */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right Carousel Type</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaDesktop className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Basic Slides</h4>
                                        <p className="text-sm text-blue-700">Simple image rotation without distractions - perfect for hero sections.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaImage className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">With Indicators</h4>
                                        <p className="text-sm text-purple-700">When users need to see how many slides exist and jump to specific ones.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaPlay className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">With Controls</h4>
                                        <p className="text-sm text-green-700">Give users explicit control over navigation - better for content exploration.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaVideo className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Fade Transition</h4>
                                        <p className="text-sm text-orange-700">Smooth, elegant transitions - ideal for storytelling and emotional content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start space-x-3">
                                    <FaNewspaper className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">With Captions</h4>
                                        <p className="text-sm text-gray-700">When images need context, descriptions, or calls-to-action overlays.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaShoppingCart className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Thumbnail Gallery</h4>
                                        <p className="text-sm text-indigo-700">Product galleries where users want to see and select specific images.</p>
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
                                        <h4 className="font-semibold text-yellow-900 mb-2">User Control & Navigation</h4>
                                        <ul className="text-sm text-yellow-700 space-y-1">
                                            <li>• Always provide manual navigation controls (arrows, dots, or buttons)</li>
                                            <li>• Make auto-play optional or pauseable with clear controls</li>
                                            <li>• Use appropriate timing - 5-7 seconds minimum for auto-advance</li>
                                            <li>• Pause auto-play on hover or focus for better user control</li>
                                            <li>• Provide keyboard navigation support (arrow keys, tab navigation)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-2">Content & Visual Design</h4>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li>• Keep the most important content in the first slide</li>
                                            <li>• Ensure consistent image sizes and aspect ratios</li>
                                            <li>• Use high-quality, optimized images for better performance</li>
                                            <li>• Maintain visual hierarchy and readability in captions</li>
                                            <li>• Limit carousel to 5-7 slides for optimal user engagement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaUniversalAccess className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-2">Accessibility & Usability</h4>
                                        <ul className="text-sm text-green-700 space-y-1">
                                            <li>• Implement proper ARIA labels and live regions for screen readers</li>
                                            <li>• Respect 'prefers-reduced-motion' settings to disable auto-play</li>
                                            <li>• Ensure sufficient color contrast for navigation elements</li>
                                            <li>• Provide alternative ways to access all carousel content</li>
                                            <li>• Test with keyboard-only navigation and screen readers</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaSpinner className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-2">Performance & Mobile</h4>
                                        <ul className="text-sm text-purple-700 space-y-1">
                                            <li>• Implement lazy loading for images not currently visible</li>
                                            <li>• Optimize images for different screen sizes and resolutions</li>
                                            <li>• Ensure smooth touch/swipe gestures on mobile devices</li>
                                            <li>• Consider bandwidth limitations and provide loading states</li>
                                            <li>• Test performance on slower devices and networks</li>
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
                                <p className="text-sm text-gray-600">Product galleries, featured items, promotional banners</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaBullhorn className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Marketing</h4>
                                <p className="text-sm text-gray-600">Hero banners, campaign showcases, testimonials</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaNewspaper className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Media & News</h4>
                                <p className="text-sm text-gray-600">Featured articles, photo stories, breaking news</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaBuilding className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Corporate</h4>
                                <p className="text-sm text-gray-600">Company highlights, team members, case studies</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaImage className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Portfolio</h4>
                                <p className="text-sm text-gray-600">Creative work showcases, before/after galleries</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaCalendar className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Events</h4>
                                <p className="text-sm text-gray-600">Event highlights, speaker showcases, schedules</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaHeart className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Travel & Lifestyle</h4>
                                <p className="text-sm text-gray-600">Destination galleries, experience showcases</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaStar className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Reviews</h4>
                                <p className="text-sm text-gray-600">Customer testimonials, product reviews, ratings</p>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Patterns */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative UI Patterns</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaLayerGroup className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Grid Layout</h4>
                                        <p className="text-sm text-indigo-700">Show multiple items simultaneously for comparison and overview.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaArrowRight className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Horizontal Scroll</h4>
                                        <p className="text-sm text-indigo-700">Native scrolling behavior with visible overflow for better discoverability.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaSearch className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Masonry Layout</h4>
                                        <p className="text-sm text-indigo-700">Pinterest-style layout for varied content sizes and optimal space usage.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaFilter className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Tabbed Interface</h4>
                                        <p className="text-sm text-indigo-700">Organized sections with labeled navigation for categorized content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaBookOpen className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Pagination</h4>
                                        <p className="text-sm text-indigo-700">Break content into discrete pages for better performance and navigation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaChartLine className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Infinite Scroll</h4>
                                        <p className="text-sm text-indigo-700">Continuous loading for social feeds and large content collections.</p>
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
                        <h4 className="font-semibold text-blue-900 mb-2">Hero Sections</h4>
                        <p className="text-sm text-blue-700">Use <strong>basic slides</strong> or <strong>captions</strong> for impactful landing page headers.</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Product Galleries</h4>
                        <p className="text-sm text-green-700">Use <strong>thumbnail carousels</strong> for detailed product image viewing.</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Testimonials</h4>
                        <p className="text-sm text-purple-700">Use <strong>fade transitions</strong> with controls for rotating customer reviews.</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Content Showcase</h4>
                        <p className="text-sm text-orange-700">Use <strong>card carousels</strong> for featured articles, courses, or services.</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-2">Mobile Consideration</h4>
                        <p className="text-sm text-red-700">Ensure <strong>touch/swipe gestures</strong> work smoothly on mobile devices.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Accessibility First</h4>
                        <p className="text-sm text-gray-700">Always provide <strong>manual controls</strong> and respect motion preferences.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CarouselGuidelines;