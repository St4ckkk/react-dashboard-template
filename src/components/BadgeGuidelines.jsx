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
    FaMousePointer,
    FaKeyboard,
    FaEye,
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
    FaEdit,
    FaCog,
    FaFileAlt,
    FaVideo,
    FaMusic,
    FaTh,
    FaList,
    FaGripHorizontal,
    FaSave,
    FaTrash,
    FaDownload,
    FaUpload,
    FaPlus,
    FaMinus,
    FaCheck,
    FaTimes,
    FaUndo,
    FaRedo,
    FaPrint,
    FaShare,
    FaHome,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaLock,
    FaUnlock,
    FaPause,
    FaStop,
    FaForward,
    FaBackward,
    FaAngleRight,
    FaChevronRight,
    FaSlash,
    FaDotCircle,
    FaFolder,
    FaFolderOpen,
    FaAngleDoubleRight,
    FaTag,
    FaTags,
    FaCertificate,
    FaAward,
    FaComments,
    FaComment,
    FaExclamationCircle,
    FaCircle,
    FaFlag,
    FaShieldAlt
} from 'react-icons/fa';

const BadgeGuidelines = () => {
    return (
        <>
            {/* Usage Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Usage Guidelines"
                    title="When and How to Use Badges"
                />

                <div className="mt-6 space-y-8">
                    {/* When to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Badges</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Status Indicators</h4>
                                        <p className="text-sm text-green-700">Show user status (online, offline, busy), content state (published, draft), or system status.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Notification Counts</h4>
                                        <p className="text-sm text-green-700">Display counts for unread messages, notifications, cart items, or pending tasks.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Labels and Tags</h4>
                                        <p className="text-sm text-green-700">Categorize content with tags, labels, priorities, or content types (new, featured, sale).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Small Contextual Info</h4>
                                        <p className="text-sm text-green-700">Display version numbers, progress indicators, or brief supplementary information.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Quality or Rating Indicators</h4>
                                        <p className="text-sm text-green-700">Show ratings, quality levels, verification status, or achievement badges.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Alert Highlights</h4>
                                        <p className="text-sm text-green-700">Draw attention to important updates, warnings, or time-sensitive information.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* When Not to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Badges</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Primary Navigation</h4>
                                        <p className="text-sm text-red-700">Don't use badges as main navigation elements - they're for supplementary information only.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Long Text Content</h4>
                                        <p className="text-sm text-red-700">Avoid using badges for lengthy text - they should contain brief, scannable information.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Complex Interactions</h4>
                                        <p className="text-sm text-red-700">Don't use badges for complex user interactions - they should be informational, not interactive.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Overuse for Emphasis</h4>
                                        <p className="text-sm text-red-700">Too many badges reduce their effectiveness - use sparingly for genuine emphasis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Critical System Messages</h4>
                                        <p className="text-sm text-red-700">Use proper alert components for important system messages instead of badges.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Form Validation</h4>
                                        <p className="text-sm text-red-700">Use dedicated form validation components rather than badges for error messages.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Badge Types */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right Badge Type</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaTag className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Default Badges</h4>
                                        <p className="text-sm text-blue-700">Standard rectangular badges for general labeling and categorization.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCertificate className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Bordered Badges</h4>
                                        <p className="text-sm text-green-700">Outlined badges for subtle emphasis without heavy visual weight.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaDotCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Pill Badges</h4>
                                        <p className="text-sm text-purple-700">Rounded badges for modern, friendly appearance - good for counts and status.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaBell className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Button Badges</h4>
                                        <p className="text-sm text-orange-700">Interactive badges on buttons showing counts or additional information.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaStar className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Icon Badges</h4>
                                        <p className="text-sm text-indigo-700">Badges with icons for enhanced meaning and quicker recognition.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Status Badges</h4>
                                        <p className="text-sm text-red-700">Badges with status indicators for user presence or system states.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Color Guidelines */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Color Meaning and Usage</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Primary (Blue)</h4>
                                        <p className="text-sm text-blue-700">Default state, informational, brand-related content</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Success (Green)</h4>
                                        <p className="text-sm text-green-700">Positive states, completed, available, active</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaExclamationCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Danger (Red)</h4>
                                        <p className="text-sm text-red-700">Errors, urgent, critical, destructive actions</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <div className="flex items-start space-x-3">
                                    <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-900 mb-1">Warning (Yellow)</h4>
                                        <p className="text-sm text-yellow-700">Caution, pending, requires attention</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Info (Indigo)</h4>
                                        <p className="text-sm text-indigo-700">Additional information, tips, neutral status</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start space-x-3">
                                    <FaCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Secondary (Gray)</h4>
                                        <p className="text-sm text-gray-700">Neutral, inactive, secondary importance</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                                <div className="flex items-start space-x-3">
                                    <FaCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Light (Light Gray)</h4>
                                        <p className="text-sm text-gray-600">Subtle indicators, minimal emphasis</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                                <div className="flex items-start space-x-3">
                                    <FaCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Dark (Dark Gray)</h4>
                                        <p className="text-sm text-gray-300">Strong contrast, emphasis, premium feel</p>
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
                                        <h4 className="font-semibold text-yellow-900 mb-2">Content & Text</h4>
                                        <ul className="text-sm text-yellow-700 space-y-1">
                                            <li>• Keep text concise - ideally 1-3 words or numbers</li>
                                            <li>• Use clear, descriptive labels that users can quickly understand</li>
                                            <li>• Maintain consistent terminology throughout your application</li>
                                            <li>• Consider using numbers for counts (99+) rather than long text</li>
                                            <li>• Use sentence case for better readability (not ALL CAPS)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-2">Visual Design & Hierarchy</h4>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li>• Use colors consistently to establish meaning (red for errors, green for success)</li>
                                            <li>• Ensure sufficient contrast between badge and background colors</li>
                                            <li>• Maintain consistent sizing within similar contexts</li>
                                            <li>• Position badges logically relative to their associated content</li>
                                            <li>• Don't overuse badges - they lose impact when everywhere</li>
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
                                            <li>• Ensure color is not the only way to convey meaning</li>
                                            <li>• Provide appropriate ARIA labels for screen readers</li>
                                            <li>• Use sufficient color contrast ratios (4.5:1 minimum)</li>
                                            <li>• Make interactive badges keyboard accessible</li>
                                            <li>• Test badges with screen readers and keyboard navigation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaMobile className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-2">Responsive & Mobile Design</h4>
                                        <ul className="text-sm text-purple-700 space-y-1">
                                            <li>• Ensure badges are readable on small screens</li>
                                            <li>• Consider badge stacking behavior on narrow layouts</li>
                                            <li>• Make touch targets large enough for mobile interaction</li>
                                            <li>• Test badge appearance across different screen sizes</li>
                                            <li>• Consider hiding less critical badges on mobile to reduce clutter</li>
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
                                <p className="text-sm text-gray-600">Sale, New, Featured, Out of Stock, Cart Count</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaUser className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">User Status</h4>
                                <p className="text-sm text-gray-600">Online, Offline, Away, Busy, Premium Member</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaBell className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Notifications</h4>
                                <p className="text-sm text-gray-600">Unread count, Message alerts, System updates</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaFileAlt className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Content Status</h4>
                                <p className="text-sm text-gray-600">Draft, Published, Archived, Under Review</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaTags className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Categorization</h4>
                                <p className="text-sm text-gray-600">Tags, Categories, Priority levels, Types</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaLock className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Verification</h4>
                                <p className="text-sm text-gray-600">Verified, Certified, Trusted, Approved</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaChartLine className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Analytics</h4>
                                <p className="text-sm text-gray-600">Performance indicators, Metrics, Scores</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaCog className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">System Status</h4>
                                <p className="text-sm text-gray-600">Connected, Error, Processing, Complete</p>
                            </div>
                        </div>
                    </div>

                    {/* Sizing Guidelines */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sizing and Placement Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaDesktop className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Size Consistency</h4>
                                        <p className="text-sm text-blue-700">Use consistent badge sizes within the same interface context. Larger badges for important information, smaller for supplementary details.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaLayerGroup className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Positioning</h4>
                                        <p className="text-sm text-green-700">Place badges near their related content. Use consistent positioning patterns (top-right for counts, inline for status).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaEye className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Visual Weight</h4>
                                        <p className="text-sm text-orange-700">Balance badge prominence with their importance. Critical information should have stronger visual weight.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaArrowRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Content Relationship</h4>
                                        <p className="text-sm text-purple-700">Ensure clear relationship between badges and their associated content through proximity and visual hierarchy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animation Guidelines */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Animation and Interaction Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaSpinner className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Subtle Animations</h4>
                                        <p className="text-sm text-indigo-700">Use gentle fade-in/out or scale animations for badge updates. Avoid distracting motion.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaMousePointer className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Interactive Feedback</h4>
                                        <p className="text-sm text-indigo-700">Provide hover states for interactive badges. Consider pulse effects for urgent notifications.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaBell className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Update Notifications</h4>
                                        <p className="text-sm text-indigo-700">Animate badge count changes to draw attention to updates without being disruptive.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaKeyboard className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Focus Management</h4>
                                        <p className="text-sm text-indigo-700">Ensure interactive badges have clear focus indicators for keyboard navigation.</p>
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
                        <h4 className="font-semibold text-blue-900 mb-2">Notification Counts</h4>
                        <p className="text-sm text-blue-700">Use <strong>pill badges</strong> with numbers for message counts and notifications.</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Status Indicators</h4>
                        <p className="text-sm text-green-700">Use <strong>status badges</strong> with dot indicators for user presence and system states.</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Content Labels</h4>
                        <p className="text-sm text-purple-700">Use <strong>default or bordered badges</strong> for categorization and content labeling.</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Interactive Elements</h4>
                        <p className="text-sm text-orange-700">Use <strong>button badges</strong> for actionable items with associated counts or status.</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-2">Quick Recognition</h4>
                        <p className="text-sm text-red-700">Use <strong>icon badges</strong> for instant recognition and enhanced meaning.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                        <p className="text-sm text-gray-700">Always provide <strong>ARIA labels</strong> and ensure sufficient color contrast.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BadgeGuidelines;