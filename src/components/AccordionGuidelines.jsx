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
    FaLayerGroup,
    FaArrowRight,
    FaBars,
    FaList,
    FaFileAlt,
    FaQuestionCircle,
    FaCog,
    FaBook,
    FaGraduationCap,
    FaShoppingCart,
    FaUser,
    FaSearch,
    FaFilter,
    FaChevronDown,
    FaPlus,
    FaMinus,
    FaExpand,
    FaCompress
} from 'react-icons/fa';

const AccordionGuidelines = () => {
    return (
        <>
            {/* Usage Guidelines */}
            <Container>
                <HeaderText
                    TitleHeader="Usage Guidelines"
                    title="When and How to Use Accordions"
                />

                <div className="mt-6 space-y-8">
                    {/* When to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Accordions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Space Conservation</h4>
                                        <p className="text-sm text-green-700">When you need to display multiple sections of content in limited vertical space.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">FAQ Sections</h4>
                                        <p className="text-sm text-green-700">Perfect for frequently asked questions where users can expand only relevant topics.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Progressive Disclosure</h4>
                                        <p className="text-sm text-green-700">When content can be logically grouped and users only need specific sections.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Content Organization</h4>
                                        <p className="text-sm text-green-700">For organizing related content into collapsible sections with clear headings.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Mobile-First Design</h4>
                                        <p className="text-sm text-green-700">Excellent for mobile interfaces where screen space is premium and scanning is key.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Settings & Preferences</h4>
                                        <p className="text-sm text-green-700">Group related settings into collapsible sections for better organization.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* When Not to Use */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Accordions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Critical Information</h4>
                                        <p className="text-sm text-red-700">Don't hide essential information that users need to see immediately.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Single Content Block</h4>
                                        <p className="text-sm text-red-700">Avoid using accordions for just one piece of content - it adds unnecessary interaction.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Sequential Reading</h4>
                                        <p className="text-sm text-red-700">When content needs to be read in order, accordions can disrupt the flow.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Short Content</h4>
                                        <p className="text-sm text-red-700">For brief content that fits comfortably on screen without scrolling.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Complex Interactions</h4>
                                        <p className="text-sm text-red-700">Avoid nesting complex interactive elements within accordion content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Primary Navigation</h4>
                                        <p className="text-sm text-red-700">Don't use accordions for main site navigation - use proper navigation components.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Accordion Types */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Accordion Variants</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start space-x-3">
                                    <FaBars className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">Default Accordion</h4>
                                        <p className="text-sm text-blue-700">Standard accordion with borders and clear visual separation between sections.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-start space-x-3">
                                    <FaList className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-900 mb-1">Borderless Accordion</h4>
                                        <p className="text-sm text-green-700">Clean, minimalist accordion without borders for a lighter visual appearance.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaLayerGroup className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-1">Flush Accordion</h4>
                                        <p className="text-sm text-purple-700">Accordion that sits flush with its container, removing outer borders.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="flex items-start space-x-3">
                                    <FaExpand className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-orange-900 mb-1">Single Open</h4>
                                        <p className="text-sm text-orange-700">Only one section can be open at a time, others collapse automatically.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaCompress className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Multiple Open</h4>
                                        <p className="text-sm text-indigo-700">Multiple sections can be expanded simultaneously for comparison.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-start space-x-3">
                                    <FaChevronDown className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-red-900 mb-1">Icon Variants</h4>
                                        <p className="text-sm text-red-700">Different expand/collapse icons (arrows, plus/minus, chevrons).</p>
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
                                        <h4 className="font-semibold text-blue-900 mb-2">Content Organization</h4>
                                        <ul className="text-sm text-blue-700 space-y-1">
                                            <li>• Use clear, descriptive headers that indicate what's inside</li>
                                            <li>• Group related content logically within each section</li>
                                            <li>• Order sections by importance or logical sequence</li>
                                            <li>• Keep section headers concise but informative</li>
                                            <li>• Ensure content within sections is scannable</li>
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
                                            <li>• Ensure keyboard navigation works properly (Tab, Enter, Space)</li>
                                            <li>• Use proper ARIA attributes (aria-expanded, aria-controls)</li>
                                            <li>• Provide clear focus indicators for keyboard users</li>
                                            <li>• Use semantic HTML with proper heading hierarchy</li>
                                            <li>• Test with screen readers for proper announcements</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start space-x-3">
                                    <FaMousePointer className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-purple-900 mb-2">Interaction Design</h4>
                                        <ul className="text-sm text-purple-700 space-y-1">
                                            <li>• Make click targets large enough for easy interaction</li>
                                            <li>• Provide clear visual feedback for interactive states</li>
                                            <li>• Use consistent expand/collapse animations</li>
                                            <li>• Position expand/collapse icons consistently</li>
                                            <li>• Consider auto-scroll behavior for long content</li>
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
                                            <li>• Ensure touch targets are at least 44px for easy tapping</li>
                                            <li>• Consider thumb reach and one-handed operation</li>
                                            <li>• Test accordion behavior on various screen sizes</li>
                                            <li>• Avoid nesting accordions on mobile devices</li>
                                            <li>• Consider showing more content by default on larger screens</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Common Use Cases */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Use Cases</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaQuestionCircle className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">FAQ Pages</h4>
                                <p className="text-sm text-gray-600">Questions and answers, help documentation, troubleshooting guides</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaCog className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Settings Panels</h4>
                                <p className="text-sm text-gray-600">Grouped preferences, configuration options, account settings</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaFileAlt className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Documentation</h4>
                                <p className="text-sm text-gray-600">API docs, user guides, technical specifications</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaShoppingCart className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Product Details</h4>
                                <p className="text-sm text-gray-600">Specifications, reviews, shipping info, warranty details</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaGraduationCap className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Course Content</h4>
                                <p className="text-sm text-gray-600">Lessons, modules, curriculum sections, learning materials</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaFilter className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Filter Panels</h4>
                                <p className="text-sm text-gray-600">Search filters, sorting options, advanced criteria</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaUser className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Profile Sections</h4>
                                <p className="text-sm text-gray-600">Personal info, privacy settings, activity history</p>
                            </div>

                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <FaBook className="w-6 h-6 text-gray-600 mb-2" />
                                <h4 className="font-semibold text-gray-900 mb-1">Content Archives</h4>
                                <p className="text-sm text-gray-600">Blog categories, news archives, content libraries</p>
                            </div>
                        </div>
                    </div>

                    {/* Design Guidelines */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Visual Design Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaEye className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Visual Hierarchy</h4>
                                        <p className="text-sm text-indigo-700">Use consistent typography, spacing, and visual weight to create clear hierarchy between headers and content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaChevronDown className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Icon Consistency</h4>
                                        <p className="text-sm text-indigo-700">Use consistent expand/collapse icons throughout the interface. Animate icon state changes smoothly.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaLayerGroup className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Spacing & Borders</h4>
                                        <p className="text-sm text-indigo-700">Maintain consistent spacing between sections and appropriate padding within content areas.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-start space-x-3">
                                    <FaDesktop className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-900 mb-1">Responsive Behavior</h4>
                                        <p className="text-sm text-indigo-700">Ensure accordions work well across all screen sizes and maintain usability on touch devices.</p>
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
                    title="Accordion Best Practices Summary"
                />

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Content Organization</h4>
                        <p className="text-sm text-blue-700">Use <strong>clear headers</strong> and group related content logically for easy scanning.</p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Space Management</h4>
                        <p className="text-sm text-green-700">Perfect for <strong>FAQ sections</strong> and mobile interfaces where space is limited.</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Progressive Disclosure</h4>
                        <p className="text-sm text-purple-700">Allow users to <strong>expand only relevant sections</strong> instead of overwhelming them.</p>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Keyboard Navigation</h4>
                        <p className="text-sm text-orange-700">Ensure <strong>Tab, Enter, and Space</strong> keys work for accessibility compliance.</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-semibold text-red-900 mb-2">Mobile Optimization</h4>
                        <p className="text-sm text-red-700">Use <strong>large touch targets</strong> and consider one-handed operation patterns.</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Visual Consistency</h4>
                        <p className="text-sm text-gray-700">Maintain <strong>consistent styling</strong> and smooth animations across all sections.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AccordionGuidelines;