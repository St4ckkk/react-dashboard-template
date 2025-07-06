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
    FaAngleDoubleRight
} from 'react-icons/fa';

const BreadCrumbGuidelines = () => {
    return (
        <>
            {/* Usage Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Usage Guidelines"
                    title="When and How to Use Breadcrumbs"
                />

                <div className="mt-6 space-y-8">
                    {/* When to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Breadcrumbs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Deep Navigation Structures</h4>
                                        <p className="text-sm text-green-700">Multi-level sites where users navigate 3+ levels deep from the homepage.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Hierarchical Content</h4>
                                        <p className="text-sm text-green-700">Content organized in clear parent-child relationships like categories and subcategories.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">E-commerce Sites</h4>
                                        <p className="text-sm text-green-700">Product catalogs with categories, subcategories, and individual product pages.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Documentation Sites</h4>
                                        <p className="text-sm text-green-700">Technical documentation, help centers, and knowledge bases with nested sections.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Admin Dashboards</h4>
                                        <p className="text-sm text-green-700">Complex backend interfaces with multiple sections and subsections.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">File Browsers</h4>
                                        <p className="text-sm text-green-700">Folder structures and file system navigation interfaces.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* When Not to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Breadcrumbs</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Shallow Site Structure</h4>
                                        <p className="text-sm text-red-700">Simple sites with only 1-2 levels deep - breadcrumbs add unnecessary complexity.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Single-Page Applications</h4>
                                        <p className="text-sm text-red-700">SPAs without clear page hierarchy or those using different navigation patterns.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Linear Processes</h4>
                                        <p className="text-sm text-red-700">Step-by-step processes like checkout flows or multi-step forms where users should not skip steps.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Mobile-First Designs</h4>
                                        <p className="text-sm text-red-700">Very small screens where breadcrumbs take up valuable space without clear benefit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Flat Navigation</h4>
                                        <p className="text-sm text-red-700">Sites organized around topics rather than hierarchical relationships.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Landing Pages</h4>
                                        <p className="text-sm text-red-700">Standalone marketing pages designed to focus user attention on specific goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Breadcrumb Types */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right Breadcrumb Type</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaFolder className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Location Breadcrumbs</h4>
                                        <p className="text-sm text-blue-700">Show user's current location in site hierarchy - most common type for static sites.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaArrowRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Path Breadcrumbs</h4>
                                        <p className="text-sm text-green-700">Show user's journey through the site - dynamic trail based on their actual navigation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaStar className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Attribute Breadcrumbs</h4>
                                        <p className="text-sm text-purple-700">Show faceted search or filter selections - common in e-commerce and search interfaces.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaHome className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">With Home Icon</h4>
                                        <p className="text-sm text-orange-700">Start with a home icon instead of &quot;Home&quot; text - saves space and universally recognized.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start space-x-3">
                                    <FaFileAlt className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">With Page Title</h4>
                                        <p className="text-sm text-gray-700">Combine breadcrumbs with page title for better context and space efficiency.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaSlash className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Custom Dividers</h4>
                                        <p className="text-sm text-indigo-700">Use different separators (&gt;, /, |, •) to match your design style and brand.</p>
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
                                            <li>• Always start with &quot;Home&quot; or home icon as the first item</li>
                                            <li>• Use clear, descriptive labels that match page titles or navigation labels</li>
                                            <li>• Keep breadcrumb text concise - avoid long category names</li>
                                            <li>• Make all links clickable except the current page (last item)</li>
                                            <li>• Show the complete path - do not skip intermediate levels</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-2">Visual Design & Placement</h4>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li>• Place breadcrumbs near the top of the page, below main navigation</li>
                                            <li>• Use subtle styling - breadcrumbs should support, not dominate the interface</li>
                                            <li>• Maintain consistent divider style throughout your site</li>
                                            <li>• Ensure adequate spacing between breadcrumb items and dividers</li>
                                            <li>• Consider truncation strategies for very long breadcrumb trails</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaUniversalAccess className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-2">Accessibility & SEO</h4>
                                        <ul className="text-sm text-green-700 space-y-1">
                                            <li>• Use proper semantic markup with nav element and structured data</li>
                                            <li>• Implement ARIA labels for screen readers (aria-label=&quot;breadcrumb&quot;)</li>
                                            <li>• Ensure sufficient color contrast for text and links</li>
                                            <li>• Provide keyboard navigation support for all clickable items</li>
                                            <li>• Use schema.org BreadcrumbList markup for search engines</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaMobile className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-2">Mobile & Responsive Design</h4>
                                        <ul className="text-sm text-purple-700 space-y-1">
                                            <li>• Consider hiding breadcrumbs on very small screens (under 480px)</li>
                                            <li>• Use truncation or collapsing for long paths on mobile</li>
                                            <li>• Ensure touch targets are large enough (44px minimum)</li>
                                            <li>• Test breadcrumb wrapping behavior on narrow screens</li>
                                            <li>• Consider alternative navigation patterns for mobile-first designs</li>
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
                                <p className="text-sm text-gray-600">Home &gt; Category &gt; Subcategory &gt; Product</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaBookOpen className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Documentation</h4>
                                <p className="text-sm text-gray-600">Home &gt; Guide &gt; Section &gt; Topic</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaNewspaper className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Content Sites</h4>
                                <p className="text-sm text-gray-600">Home &gt; News &gt; Technology &gt; Article</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaBuilding className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Corporate</h4>
                                <p className="text-sm text-gray-600">Home &gt; About &gt; Team &gt; Department</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaCog className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Admin Panels</h4>
                                <p className="text-sm text-gray-600">Dashboard &gt; Users &gt; Settings &gt; Profile</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaFolder className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">File Systems</h4>
                                <p className="text-sm text-gray-600">Root &gt; Documents &gt; Projects &gt; 2024</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaGripHorizontal className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Catalogs</h4>
                                <p className="text-sm text-gray-600">Home &gt; Products &gt; Brand &gt; Model</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaSearch className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Search Results</h4>
                                <p className="text-sm text-gray-600">Home &gt; Search &gt; Filters &gt; Results</p>
                            </div>
                        </div>
                    </div>

                    {/* Divider Options */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Divider Style Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaChevronRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Chevron (&gt;)</h4>
                                        <p className="text-sm text-blue-700">Most common, clear directional flow, works well in most contexts.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaSlash className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Slash (/)</h4>
                                        <p className="text-sm text-green-700">File-system style, familiar to technical users, compact.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaDotCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Bullet (•)</h4>
                                        <p className="text-sm text-purple-700">Subtle, modern appearance, good for minimalist designs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaArrowRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Arrow (→)</h4>
                                        <p className="text-sm text-orange-700">Strong directional indicator, good for process-oriented sites.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start space-x-3">
                                    <span className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0 flex items-center justify-center text-lg">|</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Pipe (|)</h4>
                                        <p className="text-sm text-gray-700">Clean separation, works well with longer category names.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaAngleDoubleRight className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Double Chevron (&gt;&gt;)</h4>
                                        <p className="text-sm text-indigo-700">Strong visual hierarchy, good for deeply nested structures.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Patterns */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative Navigation Patterns</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaArrowRight className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Back Button</h4>
                                        <p className="text-sm text-indigo-700">Simple browser-style back navigation for linear user journeys.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaTh className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Mega Menu</h4>
                                        <p className="text-sm text-indigo-700">Overview of all sections for complex sites with multiple paths.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaList className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Sidebar Navigation</h4>
                                        <p className="text-sm text-indigo-700">Persistent navigation tree showing current location and available paths.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaSearch className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Search-First</h4>
                                        <p className="text-sm text-indigo-700">Prominent search functionality for content discovery over navigation.</p>
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
                        <h4 className="font-semibold text-blue-900 mb-2">E-commerce Sites</h4>
                        <p className="text-sm text-blue-700">Use <strong>location breadcrumbs</strong> with clear category hierarchy and home icon.</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Documentation</h4>
                        <p className="text-sm text-green-700">Use <strong>path breadcrumbs</strong> showing user's journey through nested content.</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Admin Interfaces</h4>
                        <p className="text-sm text-purple-700">Use <strong>breadcrumbs with page titles</strong> for better context and space efficiency.</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Deep Hierarchies</h4>
                        <p className="text-sm text-orange-700">Consider <strong>truncation strategies</strong> (show first, last, and current level).</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-2">Mobile Considerations</h4>
                        <p className="text-sm text-red-700">Hide or simplify breadcrumbs on <strong>small screens</strong> (under 480px).</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">SEO Benefits</h4>
                        <p className="text-sm text-gray-700">Implement <strong>schema.org markup</strong> for enhanced search result snippets.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BreadCrumbGuidelines;