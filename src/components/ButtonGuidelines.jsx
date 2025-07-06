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
    FaBackward
} from 'react-icons/fa';

const ButtonGuidelines = () => {
    return (
        <>
            {/* Usage Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Usage Guidelines"
                    title="When and How to Use Buttons"
                />

                <div className="mt-6 space-y-8">
                    {/* When to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Buttons</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Primary Actions</h4>
                                        <p className="text-sm text-green-700">Main actions users need to complete their tasks (save, submit, purchase, continue).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Form Submission</h4>
                                        <p className="text-sm text-green-700">Submit forms, confirm entries, and trigger data processing actions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Navigation Actions</h4>
                                        <p className="text-sm text-green-700">Move between pages, open modals, or trigger state changes in the interface.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Destructive Actions</h4>
                                        <p className="text-sm text-green-700">Delete, remove, or irreversible actions that need clear user confirmation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Quick Actions</h4>
                                        <p className="text-sm text-green-700">Frequently used actions that need to be easily accessible (like, share, download).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Call-to-Action</h4>
                                        <p className="text-sm text-green-700">Marketing and conversion-focused actions (sign up, get started, learn more).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* When Not to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Buttons</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Navigation Links</h4>
                                        <p className="text-sm text-red-700">Use regular links for navigation between pages - buttons should trigger actions, not navigation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Too Many Options</h4>
                                        <p className="text-sm text-red-700">Avoid overwhelming users with too many buttons - prioritize and group related actions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Decorative Elements</h4>
                                        <p className="text-sm text-red-700">Don't use buttons purely for visual design - they should always have a functional purpose.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Toggle Switches</h4>
                                        <p className="text-sm text-red-700">Use proper toggle components for on/off states rather than buttons that change appearance.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Complex Interactions</h4>
                                        <p className="text-sm text-red-700">Use appropriate controls for complex interactions like sliders, date pickers, or dropdowns.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Passive Information</h4>
                                        <p className="text-sm text-red-700">Don't use buttons to display static information or labels - use appropriate text elements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button Type Selection */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right Button Type</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaMousePointer className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Primary Buttons</h4>
                                        <p className="text-sm text-blue-700">Main action on a page - only one per screen section. High contrast, bold appearance.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start space-x-3">
                                    <FaDesktop className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Secondary Buttons</h4>
                                        <p className="text-sm text-gray-700">Alternative actions - medium emphasis. Support the primary action without competing.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTrash className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Danger Buttons</h4>
                                        <p className="text-sm text-red-700">Destructive actions like delete, remove, or irreversible operations.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Success Buttons</h4>
                                        <p className="text-sm text-green-700">Positive actions like save, confirm, approve, or successful completion.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <div className="flex items-start space-x-3">
                                    <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-900 mb-1">Warning Buttons</h4>
                                        <p className="text-sm text-yellow-700">Caution actions that need user attention but aren't necessarily destructive.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Info Buttons</h4>
                                        <p className="text-sm text-indigo-700">Informational actions like help, details, or additional context.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaArrowRight className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Outline Buttons</h4>
                                        <p className="text-sm text-purple-700">Lower emphasis actions - borders without filled backgrounds.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                                <div className="flex items-start space-x-3">
                                    <FaEye className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-teal-900 mb-1">Ghost/Text Buttons</h4>
                                        <p className="text-sm text-teal-700">Minimal emphasis - often used for secondary navigation or subtle actions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaStar className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Icon Buttons</h4>
                                        <p className="text-sm text-orange-700">Space-saving actions - use for toolbars, quick actions, or when space is limited.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button Sizes */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Button Size Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaMobile className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Small (32px)</h4>
                                        <p className="text-sm text-blue-700">Compact interfaces, toolbars, inline actions</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaDesktop className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Medium (40px)</h4>
                                        <p className="text-sm text-green-700">Standard size for most interfaces, forms, dialogs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaFileAlt className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Large (48px)</h4>
                                        <p className="text-sm text-orange-700">Hero sections, important CTAs, landing pages</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaLayerGroup className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Block (100%)</h4>
                                        <p className="text-sm text-purple-700">Full-width forms, mobile interfaces, primary actions</p>
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
                                        <h4 className="font-semibold text-yellow-900 mb-2">Content & Labeling</h4>
                                        <ul className="text-sm text-yellow-700 space-y-1">
                                            <li>• Use action verbs that clearly describe what happens when clicked</li>
                                            <li>• Keep button labels concise - ideally 1-3 words maximum</li>
                                            <li>• Make labels predictable - "Save" should save, "Delete" should delete</li>
                                            <li>• Use sentence case for button text (not ALL CAPS or Title Case)</li>
                                            <li>• Avoid generic labels like "Click Here" or "Submit" when possible</li>
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
                                            <li>• Establish clear visual hierarchy - primary actions should stand out most</li>
                                            <li>• Maintain consistent button styling throughout your application</li>
                                            <li>• Ensure adequate spacing between buttons (8px minimum)</li>
                                            <li>• Use consistent corner radius and sizing within button groups</li>
                                            <li>• Limit to one primary button per screen section or dialog</li>
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
                                            <li>• Ensure minimum 44px touch target size for mobile interfaces</li>
                                            <li>• Provide clear focus indicators for keyboard navigation</li>
                                            <li>• Use sufficient color contrast ratios (4.5:1 minimum for normal text)</li>
                                            <li>• Include loading states and disabled states when appropriate</li>
                                            <li>• Add ARIA labels for icon-only buttons to describe their function</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaSpinner className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-2">States & Feedback</h4>
                                        <ul className="text-sm text-purple-700 space-y-1">
                                            <li>• Show loading states for operations that take time to complete</li>
                                            <li>• Disable buttons during processing to prevent double-clicks</li>
                                            <li>• Provide hover and active states for better user feedback</li>
                                            <li>• Use appropriate disabled styling when actions are unavailable</li>
                                            <li>• Consider success states for completed actions when appropriate</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Button Patterns */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Button Patterns by Context</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaSave className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Forms</h4>
                                <p className="text-sm text-gray-600">Save, Submit, Cancel, Reset actions</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaShoppingCart className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">E-commerce</h4>
                                <p className="text-sm text-gray-600">Add to Cart, Buy Now, Checkout, Wishlist</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaUser className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Authentication</h4>
                                <p className="text-sm text-gray-600">Login, Sign Up, Forgot Password, Logout</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaEdit className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Content Management</h4>
                                <p className="text-sm text-gray-600">Edit, Delete, Duplicate, Publish, Archive</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaUpload className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">File Operations</h4>
                                <p className="text-sm text-gray-600">Upload, Download, Import, Export, Attach</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaPlay className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Media Controls</h4>
                                <p className="text-sm text-gray-600">Play, Pause, Stop, Previous, Next, Volume</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaShare className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Social Actions</h4>
                                <p className="text-sm text-gray-600">Like, Share, Comment, Follow, Subscribe</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaCog className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Settings</h4>
                                <p className="text-sm text-gray-600">Configure, Update, Reset, Apply, Restore</p>
                            </div>
                        </div>
                    </div>

                    {/* Button Placement */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Button Placement Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaArrowRight className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Primary Button Position</h4>
                                        <p className="text-sm text-blue-700">Place primary actions on the right in Western layouts, following natural reading flow.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaLayerGroup className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Button Grouping</h4>
                                        <p className="text-sm text-green-700">Group related actions together and separate different action types with spacing.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaMobile className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Mobile Considerations</h4>
                                        <p className="text-sm text-orange-700">Stack buttons vertically on mobile, with primary action at the bottom for thumb reach.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaKeyboard className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Keyboard Navigation</h4>
                                        <p className="text-sm text-purple-700">Ensure logical tab order and visible focus indicators for keyboard users.</p>
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
                        <h4 className="font-semibold text-blue-900 mb-2">Form Actions</h4>
                        <p className="text-sm text-blue-700">Use <strong>primary buttons</strong> for submit/save, <strong>secondary</strong> for cancel.</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-2">Destructive Actions</h4>
                        <p className="text-sm text-red-700">Always use <strong>danger buttons</strong> for delete/remove actions with confirmation.</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Call-to-Action</h4>
                        <p className="text-sm text-green-700">Use <strong>large primary buttons</strong> for main conversion goals.</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Icon Buttons</h4>
                        <p className="text-sm text-purple-700">Use for <strong>toolbars and quick actions</strong> - always include tooltips.</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Mobile-First</h4>
                        <p className="text-sm text-orange-700">Ensure <strong>44px minimum</strong> touch targets for mobile interfaces.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Loading States</h4>
                        <p className="text-sm text-gray-700">Always show <strong>loading indicators</strong> and disable during processing.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ButtonGuidelines;