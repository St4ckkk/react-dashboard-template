import React from 'react';
import Container from '@components/ui/container/Container';
import HeaderText from '@components/HeaderText';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaClock,
    FaMousePointer,
    FaEye,
    FaMobile,
    FaUniversalAccess,
    FaBell,
    FaExclamationCircle,
    FaCheck,
    FaTimes,
    FaLightbulb,
    FaShieldAlt,
    FaUsers,
    FaCog
} from 'react-icons/fa';

const ToastGuidelines = () => {
    return (
        <>
            {/* Usage Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Usage Guidelines"
                    title="When and How to Use Toast Notifications"
                />

                <div className="mt-6 space-y-8">
                    {/* When to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Toast Notifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Success Confirmations</h4>
                                        <p className="text-sm text-green-700">When users successfully complete actions like saving, submitting, or updating data.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Error Messages</h4>
                                        <p className="text-sm text-green-700">To inform users about errors that don't require immediate action but need attention.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">System Notifications</h4>
                                        <p className="text-sm text-green-700">For updates, maintenance notifications, or system-wide announcements.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Background Process Updates</h4>
                                        <p className="text-sm text-green-700">To notify users about completion of background tasks or async operations.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Temporary Status Updates</h4>
                                        <p className="text-sm text-green-700">For brief status changes that don't warrant permanent UI changes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Undo Actions</h4>
                                        <p className="text-sm text-green-700">When providing users the ability to undo recent actions with action buttons.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* When NOT to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Toast Notifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Critical Errors</h4>
                                        <p className="text-sm text-red-700">Use modals or dedicated error pages for critical errors that block user workflow.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Complex Information</h4>
                                        <p className="text-sm text-red-700">Don't use toasts for complex instructions or detailed information that users need to reference.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Form Validation</h4>
                                        <p className="text-sm text-red-700">Use inline validation messages instead of toasts for form field errors.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Frequent Updates</h4>
                                        <p className="text-sm text-red-700">Avoid showing too many toasts in quick succession as it can overwhelm users.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Persistent Information</h4>
                                        <p className="text-sm text-red-700">Don't use toasts for information that users need to keep referencing.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Marketing Messages</h4>
                                        <p className="text-sm text-red-700">Avoid using toasts for promotional content or marketing messages.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Toast Types */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Toast Types and Use Cases</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Success Toast</h4>
                                        <p className="text-sm text-green-700">Confirm successful actions like saving, updating, creating, or deleting items.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaExclamationCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Error Toast</h4>
                                        <p className="text-sm text-red-700">Alert users to errors that occurred but don't require immediate blocking action.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <div className="flex items-start space-x-3">
                                    <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-yellow-900 mb-1">Warning Toast</h4>
                                        <p className="text-sm text-yellow-700">Caution users about potential issues or important information they should be aware of.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Info Toast</h4>
                                        <p className="text-sm text-blue-700">Provide neutral information, updates, or helpful tips to users.</p>
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
                                    <FaClock className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-2">Timing & Duration</h4>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li>• Success toasts: 3-5 seconds auto-dismiss</li>
                                            <li>• Error toasts: 7-10 seconds or manual dismiss</li>
                                            <li>• Info toasts: 5-7 seconds</li>
                                            <li>• Warning toasts: 7-10 seconds or manual dismiss</li>
                                            <li>• Toasts with actions: Manual dismiss or longer duration</li>
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
                                            <li>• Use consistent positioning (usually top-right)</li>
                                            <li>• Keep messages concise and scannable</li>
                                            <li>• Use appropriate colors for toast types</li>
                                            <li>• Include clear close buttons</li>
                                            <li>• Use icons to quickly convey message type</li>
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
                                            <li>• Use ARIA live regions for screen readers</li>
                                            <li>• Ensure sufficient color contrast</li>
                                            <li>• Don't rely only on color to convey meaning</li>
                                            <li>• Make close buttons keyboard accessible</li>
                                            <li>• Respect user's motion preferences</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaMobile className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-2">Mobile Considerations</h4>
                                        <ul className="text-sm text-orange-700 space-y-1">
                                            <li>• Position toasts to avoid blocking important content</li>
                                            <li>• Make close buttons large enough for touch</li>
                                            <li>• Consider shorter auto-dismiss times on mobile</li>
                                            <li>• Test with different screen sizes and orientations</li>
                                            <li>• Ensure toasts don't interfere with navigation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Writing Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Writing Guidelines"
                    title="How to Write Effective Toast Messages"
                />

                <div className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <div className="flex items-start space-x-3">
                                <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-green-900 mb-2">Good Examples</h4>
                                    <ul className="text-sm text-green-700 space-y-1">
                                        <li>• "Profile updated successfully"</li>
                                        <li>• "Email sent to john@example.com"</li>
                                        <li>• "Changes saved automatically"</li>
                                        <li>• "New message from Sarah"</li>
                                        <li>• "Export completed. Download ready."</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                            <div className="flex items-start space-x-3">
                                <FaTimes className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-red-900 mb-2">Avoid These</h4>
                                    <ul className="text-sm text-red-700 space-y-1">
                                        <li>• "An error occurred"</li>
                                        <li>• "Operation successful"</li>
                                        <li>• "Please try again later"</li>
                                        <li>• "Something went wrong"</li>
                                        <li>• "Error: undefined"</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-start space-x-3">
                                <FaLightbulb className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-blue-900 mb-1">Be Specific</h4>
                                    <p className="text-sm text-blue-700">Tell users exactly what happened and what they can expect.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-start space-x-3">
                                <FaShieldAlt className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-blue-900 mb-1">Be Actionable</h4>
                                    <p className="text-sm text-blue-700">When possible, provide clear next steps or recovery actions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-start space-x-3">
                                <FaUsers className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-blue-900 mb-1">Be Human</h4>
                                    <p className="text-sm text-blue-700">Use conversational language that feels natural and friendly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Implementation Checklist */}
            <Container>
                <HeaderText
                    TitleHeader="Implementation Checklist"
                    title="Toast Development Guidelines"
                />

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Setup Requirements</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• ✓ ToastProvider wrapper</li>
                            <li>• ✓ Portal for rendering</li>
                            <li>• ✓ Z-index management</li>
                            <li>• ✓ Animation system</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Functionality</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• ✓ Auto-dismiss timing</li>
                            <li>• ✓ Manual close option</li>
                            <li>• ✓ Action buttons</li>
                            <li>• ✓ Multiple toast stacking</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• ✓ ARIA live regions</li>
                            <li>• ✓ Keyboard navigation</li>
                            <li>• ✓ Screen reader support</li>
                            <li>• ✓ Color contrast</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ToastGuidelines;