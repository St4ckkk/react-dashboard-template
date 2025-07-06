import React from 'react';
import Container from '@components/ui/container/Container';
import HeaderText from '@components/HeaderText';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaUniversalAccess,
    FaDesktop,
    FaMobile,
    FaMousePointer,
    FaKeyboard,
    FaEye,
    FaClock,
    FaSpinner,
    FaDownload,
    FaUpload,
    FaSearch,
    FaSave,
    FaRedo,
    FaPlay,
    FaPause,
    FaStop,
    FaDatabase,
    FaWifi,
    FaCloudUploadAlt,
    FaShoppingCart,
    FaUser,
    FaCog,
    FaChartLine,
    FaFileAlt,
    FaEnvelope,
    FaImage,
    FaBolt,
    FaHeart,
    FaCircle,
    FaSquare,
    FaBars
} from 'react-icons/fa';

const SpinnerGuidelines = () => {
    return (
        <>
            {/* Usage Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Usage Guidelines"
                    title="When and How to Use Spinners"
                />

                <div className="mt-6 space-y-8">
                    {/* When to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Spinners</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Loading States</h4>
                                        <p className="text-sm text-green-700">During data fetching, form submissions, or any async operations that take time.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Processing Feedback</h4>
                                        <p className="text-sm text-green-700">When users perform actions that require server processing or computation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">File Operations</h4>
                                        <p className="text-sm text-green-700">During file uploads, downloads, or processing operations.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Page Transitions</h4>
                                        <p className="text-sm text-green-700">While navigating between pages or loading new content sections.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Button Actions</h4>
                                        <p className="text-sm text-green-700">Inside buttons to indicate the action is in progress and prevent multiple clicks.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Search & Filtering</h4>
                                        <p className="text-sm text-green-700">While processing search queries or applying complex filters to data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* When Not to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Spinners</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Instant Operations</h4>
                                        <p className="text-sm text-red-700">For operations that complete in under 200ms - spinners would flash too quickly.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Decorative Purposes</h4>
                                        <p className="text-sm text-red-700">Spinners should only indicate actual loading states, not be used as decoration.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Permanent Display</h4>
                                        <p className="text-sm text-red-700">Don't leave spinners running indefinitely - always provide error states or timeouts.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Multiple Simultaneous</h4>
                                        <p className="text-sm text-red-700">Avoid showing multiple spinners at once - it can confuse users about what's loading.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Complex Progress</h4>
                                        <p className="text-sm text-red-700">For operations with measurable progress, use progress bars instead of spinners.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Static Content</h4>
                                        <p className="text-sm text-red-700">Don't use spinners for content that's already loaded or doesn't require processing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spinner Types */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Spinner Types and Use Cases</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaSpinner className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Border Spinner</h4>
                                        <p className="text-sm text-blue-700">Classic circular spinner, perfect for general loading states and button actions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Growing Spinner</h4>
                                        <p className="text-sm text-green-700">Subtle pulsing effect, great for form submissions and quiet background processes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaBars className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Dots Spinner</h4>
                                        <p className="text-sm text-purple-700">Playful bouncing dots, ideal for search results and content loading.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaHeart className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Pulse Spinner</h4>
                                        <p className="text-sm text-orange-700">Gentle pulsing animation, suitable for notifications and status updates.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaBolt className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Wave Spinner</h4>
                                        <p className="text-sm text-indigo-700">Dynamic wave effect, perfect for audio processing and data analysis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaSquare className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Unique Variants</h4>
                                        <p className="text-sm text-red-700">Ring, Orbit, Square, and Heartbeat spinners for specialized contexts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Best Practices */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Practices</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-2">Timing & Performance</h4>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li>• Show spinners after 200ms delay to avoid flashing</li>
                                            <li>• Provide timeouts and error states for failed operations</li>
                                            <li>• Use skeleton screens for predictable content structure</li>
                                            <li>• Consider progressive loading for large datasets</li>
                                            <li>• Optimize animations for smooth 60fps performance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaUniversalAccess className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-2">Accessibility</h4>
                                        <ul className="text-sm text-green-700 space-y-1">
                                            <li>• Use appropriate ARIA labels (aria-label="Loading")</li>
                                            <li>• Provide text alternatives for screen readers</li>
                                            <li>• Respect user's reduced motion preferences</li>
                                            <li>• Ensure sufficient color contrast for visibility</li>
                                            <li>• Announce loading state changes to assistive technology</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaEye className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-2">Visual Design</h4>
                                        <ul className="text-sm text-purple-700 space-y-1">
                                            <li>• Match spinner colors to your design system</li>
                                            <li>• Use appropriate sizes for the context</li>
                                            <li>• Position spinners where users expect feedback</li>
                                            <li>• Maintain consistent animation timing across the app</li>
                                            <li>• Consider the visual weight in relation to content</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <div className="flex items-start space-x-3">
                                    <FaMobile className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-900 mb-2">Mobile Considerations</h4>
                                        <ul className="text-sm text-yellow-700 space-y-1">
                                            <li>• Use larger spinners on touch devices for better visibility</li>
                                            <li>• Consider battery impact of continuous animations</li>
                                            <li>• Test spinner visibility in various lighting conditions</li>
                                            <li>• Optimize for slower network connections</li>
                                            <li>• Provide clear feedback for touch interactions</li>
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
                                <FaDownload className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">File Operations</h4>
                                <p className="text-sm text-gray-600">Upload, download, processing, compression</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaDatabase className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Data Loading</h4>
                                <p className="text-sm text-gray-600">API calls, database queries, content fetching</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaSearch className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Search & Filter</h4>
                                <p className="text-sm text-gray-600">Search queries, filtering, sorting operations</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaSave className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Form Submission</h4>
                                <p className="text-sm text-gray-600">Saving data, validation, processing forms</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaShoppingCart className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">E-commerce</h4>
                                <p className="text-sm text-gray-600">Checkout, payment processing, cart updates</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaUser className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Authentication</h4>
                                <p className="text-sm text-gray-600">Login, logout, registration, verification</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaImage className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Media Loading</h4>
                                <p className="text-sm text-gray-600">Images, videos, audio content loading</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaRedo className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Refresh Actions</h4>
                                <p className="text-sm text-gray-600">Page refresh, data sync, cache updates</p>
                            </div>
                        </div>
                    </div>

                    {/* Size Guidelines */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Size Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaDesktop className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Context-Appropriate Sizing</h4>
                                        <p className="text-sm text-indigo-700">Use xs/sm for buttons, md/lg for content areas, xl/2xl for full-page loading.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaMousePointer className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Interactive Elements</h4>
                                        <p className="text-sm text-indigo-700">Ensure spinners don't interfere with touch targets or clickable areas.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaClock className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Duration Considerations</h4>
                                        <p className="text-sm text-indigo-700">Larger spinners for longer operations, smaller for quick actions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaKeyboard className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Responsive Scaling</h4>
                                        <p className="text-sm text-indigo-700">Consider how spinners scale across different screen sizes and devices.</p>
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
                    title="Spinner Implementation Checklist"
                />

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Choose the Right Type</h4>
                        <p className="text-sm text-blue-700">Use <strong>border spinners</strong> for general loading, <strong>dots</strong> for search, <strong>pulse</strong> for gentle feedback.</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Size Appropriately</h4>
                        <p className="text-sm text-green-700">Match spinner size to context: <strong>small for buttons</strong>, <strong>large for page loading</strong>.</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Consider Timing</h4>
                        <p className="text-sm text-purple-700">Add <strong>200ms delay</strong> before showing, provide <strong>timeout states</strong> for failures.</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Ensure Accessibility</h4>
                        <p className="text-sm text-orange-700">Use <strong>ARIA labels</strong>, respect <strong>reduced motion</strong>, provide text alternatives.</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-2">Position Strategically</h4>
                        <p className="text-sm text-red-700">Place spinners <strong>where users expect feedback</strong> - in buttons, content areas, or overlays.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Test Performance</h4>
                        <p className="text-sm text-gray-700">Optimize for <strong>smooth animation</strong>, test on slow devices, consider battery impact.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SpinnerGuidelines;