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
    FaBell,
    FaExclamationCircle,
    FaShieldAlt,
    FaUserCheck,
    FaBug,
    FaWifi,
    FaDatabase,
    FaCloudUploadAlt,
    FaShoppingCart,
    FaEnvelope,
    FaCreditCard,
    FaLock,
    FaSignOutAlt,
    FaTrash,
    FaEdit,
    FaSave,
    FaDownload,
    FaUpload,
    FaPrint,
    FaShare,
    FaCopy,
    FaClock,
    FaBan,
    FaQuestionCircle,
    FaLightbulb,
    FaGift,
    FaStar
} from 'react-icons/fa';

const AlertGuidelines = () => {
    return (
        <>
            {/* Usage Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Usage Guidelines"
                    title="When and How to Use Alerts"
                />

                <div className="mt-6 space-y-8">
                    {/* When to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Alerts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">System Status Updates</h4>
                                        <p className="text-sm text-green-700">Inform users about system maintenance, updates, or service changes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Action Feedback</h4>
                                        <p className="text-sm text-green-700">Confirm successful actions or notify about failures and errors.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Important Warnings</h4>
                                        <p className="text-sm text-green-700">Alert users to potential issues or actions that require caution.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Contextual Information</h4>
                                        <p className="text-sm text-green-700">Provide helpful tips, guidance, or additional context for the current page.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Time-Sensitive Notifications</h4>
                                        <p className="text-sm text-green-700">Display urgent messages, deadlines, or temporary promotions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Permission & Access Issues</h4>
                                        <p className="text-sm text-green-700">Notify users about access restrictions, login requirements, or permission changes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* When Not to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Alerts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Regular Content</h4>
                                        <p className="text-sm text-red-700">Don't use alerts for regular page content or information that should be part of the main layout.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Marketing Messages</h4>
                                        <p className="text-sm text-red-700">Avoid using alerts for promotional content unless it's truly urgent or time-sensitive.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Multiple Simultaneous Alerts</h4>
                                        <p className="text-sm text-red-700">Don't show multiple alerts at once - prioritize and show the most important one.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Non-Actionable Information</h4>
                                        <p className="text-sm text-red-700">Don't use alerts for information that doesn't require user attention or action.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Persistent System Information</h4>
                                        <p className="text-sm text-red-700">Use other UI components for information that should always be visible.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Complex Interactive Content</h4>
                                        <p className="text-sm text-red-700">Alerts should be simple - avoid complex forms or interactive elements within alerts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alert Types */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Types and Variants</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Informational</h4>
                                        <p className="text-sm text-blue-700">General information, tips, or neutral status updates that users should know about.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Success</h4>
                                        <p className="text-sm text-green-700">Confirm successful actions, completed processes, or positive outcomes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <div className="flex items-start space-x-3">
                                    <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-900 mb-1">Warning</h4>
                                        <p className="text-sm text-yellow-700">Alert users to potential issues, cautions, or actions that require attention.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaExclamationCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Error/Danger</h4>
                                        <p className="text-sm text-red-700">Critical errors, failures, or destructive actions that require immediate attention.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <div className="flex items-start space-x-3">
                                    <FaBell className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Default/Neutral</h4>
                                        <p className="text-sm text-gray-700">General alerts without specific semantic meaning or urgency level.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaLightbulb className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Tips/Suggestions</h4>
                                        <p className="text-sm text-purple-700">Helpful hints, recommendations, or guidance for better user experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Style Variants */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Style Variants</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaBell className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Default</h4>
                                        <p className="text-sm text-blue-700">Standard alerts with colored borders and subtle backgrounds.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaShieldAlt className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Solid</h4>
                                        <p className="text-sm text-green-700">High-contrast alerts with solid color backgrounds for maximum visibility.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Outline</h4>
                                        <p className="text-sm text-purple-700">Minimal alerts with colored borders and transparent backgrounds.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaStar className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">With Icons</h4>
                                        <p className="text-sm text-orange-700">Enhanced alerts with contextual icons for better recognition and meaning.</p>
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
                                        <h4 className="font-semibold text-blue-900 mb-2">Content & Messaging</h4>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li>• Keep messages concise and actionable</li>
                                            <li>• Use clear, plain language without jargon</li>
                                            <li>• Lead with the most important information</li>
                                            <li>• Include specific next steps when possible</li>
                                            <li>• Match the tone to the alert severity</li>
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
                                            <li>• Use proper ARIA roles and labels for screen readers</li>
                                            <li>• Ensure sufficient color contrast ratios (4.5:1 minimum)</li>
                                            <li>• Don't rely solely on color to convey meaning</li>
                                            <li>• Use semantic markup and proper heading hierarchy</li>
                                            <li>• Make dismiss buttons keyboard accessible</li>
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
                                            <li>• Use consistent styling and positioning across the app</li>
                                            <li>• Choose appropriate prominence based on importance</li>
                                            <li>• Include relevant icons to enhance understanding</li>
                                            <li>• Maintain proper spacing and typography hierarchy</li>
                                            <li>• Consider animation for entering/exiting alerts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <div className="flex items-start space-x-3">
                                    <FaMousePointer className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-900 mb-2">Interaction & Timing</h4>
                                        <ul className="text-sm text-yellow-700 space-y-1">
                                            <li>• Provide clear dismiss options for non-critical alerts</li>
                                            <li>• Use auto-dismiss for temporary success messages</li>
                                            <li>• Keep critical alerts persistent until acknowledged</li>
                                            <li>• Position alerts where they won't block important content</li>
                                            <li>• Consider the user's current context and workflow</li>
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
                                <FaSave className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Form Actions</h4>
                                <p className="text-sm text-gray-600">Save confirmations, validation errors, required fields</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaDatabase className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">System Status</h4>
                                <p className="text-sm text-gray-600">Maintenance, outages, connectivity issues, updates</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaUserCheck className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Authentication</h4>
                                <p className="text-sm text-gray-600">Login failures, session timeouts, permission changes</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaShoppingCart className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">E-commerce</h4>
                                <p className="text-sm text-gray-600">Cart updates, payment issues, stock alerts, promotions</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaCloudUploadAlt className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">File Operations</h4>
                                <p className="text-sm text-gray-600">Upload progress, file errors, size limits, format issues</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaEnvelope className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Communication</h4>
                                <p className="text-sm text-gray-600">New messages, delivery confirmations, send failures</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaLock className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Security</h4>
                                <p className="text-sm text-gray-600">Password changes, suspicious activity, access revoked</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaClock className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Time-Sensitive</h4>
                                <p className="text-sm text-gray-600">Deadlines, expiring content, limited-time offers</p>
                            </div>
                        </div>
                    </div>

                    {/* Positioning Guidelines */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Positioning and Placement</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaDesktop className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Page-Level Alerts</h4>
                                        <p className="text-sm text-indigo-700">Place at the top of the page or content area for maximum visibility and immediate attention.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaMobile className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Toast Notifications</h4>
                                        <p className="text-sm text-indigo-700">Use floating alerts for temporary feedback that doesn't disrupt the user's workflow.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaKeyboard className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Contextual Alerts</h4>
                                        <p className="text-sm text-indigo-700">Position near relevant content or form fields for context-specific feedback.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaBell className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Fixed Position</h4>
                                        <p className="text-sm text-indigo-700">Use for critical system-wide alerts that need to remain visible during navigation.</p>
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
                    title="Alert Implementation Checklist"
                />

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Choose the Right Type</h4>
                        <p className="text-sm text-blue-700">Use <strong>success</strong> for confirmations, <strong>error</strong> for failures, <strong>warning</strong> for cautions, <strong>info</strong> for general messages.</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Keep It Concise</h4>
                        <p className="text-sm text-green-700">Write <strong>clear, actionable messages</strong> that tell users exactly what happened and what to do next.</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Consider Timing</h4>
                        <p className="text-sm text-purple-700">Use <strong>auto-dismiss</strong> for success messages, keep errors persistent until resolved.</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Make It Accessible</h4>
                        <p className="text-sm text-orange-700">Include <strong>ARIA labels</strong>, ensure color contrast, and provide keyboard navigation.</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-2">Position Strategically</h4>
                        <p className="text-sm text-red-700">Place alerts where users expect them - <strong>top of page</strong> for global, near content for contextual.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Test Thoroughly</h4>
                        <p className="text-sm text-gray-700">Verify alerts work across <strong>devices and browsers</strong>, and test with screen readers.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AlertGuidelines;