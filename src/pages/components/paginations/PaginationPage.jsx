import React, { useState } from 'react';
import {
    BasicPagination,
    IconPagination,
    AdvancedPagination,
    SizedPagination,
    MinimalPagination,
    RoundedPagination,
    JumpPagination
} from '@components/ui/pagination/Pagination';
import Pagination from '@components/ui/pagination/Pagination';
import DashboardLayout from '@components/DashboardLayout';
import Container from '@components/ui/container/Container';
import CodePreviewToggle from '@components/CodePreviewToggle';
import HeaderText from '@components/HeaderText';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaInfoCircle,
    FaMobile,
    FaDesktop,
    FaTable,
    FaList,
    FaDatabase,
    FaSearch,
    FaChartBar,
    FaShoppingCart,
    FaUsers,
    FaFileAlt,
    FaImages,
    FaBlog,
    FaNewspaper,
    FaCode,
    FaPalette
} from 'react-icons/fa';

const PaginationPage = () => {
    // State for different pagination examples
    const [currentPages, setCurrentPages] = useState({
        default: 1,
        basic: 1,
        outlined: 1,
        text: 1,
        icon: 1,
        iconText: 1,
        advanced: 1,
        small: 1,
        medium: 1,
        large: 1,
        minimal: 1,
        rounded: 1,
        jump: 1
    });

    const handlePageChange = (type) => (page) => {
        setCurrentPages(prev => ({
            ...prev,
            [type]: page
        }));
    };

    // Sample data for default pagination
    const sampleData = Array.from({ length: 150 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        description: `Description for item ${i + 1}`
    }));

    // Code examples
    const defaultPaginationCode = `import Pagination from '@components/ui/pagination/Pagination';

const [currentPage, setCurrentPage] = useState(1);
const totalItems = 150;
const itemsPerPage = 10;
const totalPages = Math.ceil(totalItems / itemsPerPage);

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  totalItems={totalItems}
  itemsPerPage={itemsPerPage}
  onPageChange={setCurrentPage}
/>`;

    const basicPaginationCode = `import { BasicPagination } from '@components/ui/pagination/Pagination';

// Default variant
<BasicPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
  variant="default"
/>`;

    const outlinedPaginationCode = `// Outlined variant
<BasicPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
  variant="outlined"
/>`;

    const textPaginationCode = `// Text variant
<BasicPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
  variant="text"
/>`;

    const iconPaginationCode = `import { IconPagination } from '@components/ui/pagination/Pagination';

// Icons only
<IconPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
/>`;

    const iconTextPaginationCode = `// Icons with text
<IconPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
  showText={true}
/>`;

    const advancedPaginationCode = `import { AdvancedPagination } from '@components/ui/pagination/Pagination';

<AdvancedPagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
  siblingCount={1}
  showFirstLast={true}
/>`;

    const smallSizeCode = `import { SizedPagination } from '@components/ui/pagination/Pagination';

// Small size
<SizedPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
  size="small"
/>`;

    const mediumSizeCode = `// Medium size (default)
<SizedPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
  size="medium"
/>`;

    const largeSizeCode = `// Large size
<SizedPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
  size="large"
/>`;

    const minimalPaginationCode = `import { MinimalPagination } from '@components/ui/pagination/Pagination';

<MinimalPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
  showInfo={true}
/>`;

    const roundedPaginationCode = `import { RoundedPagination } from '@components/ui/pagination/Pagination';

<RoundedPagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
/>`;

    const jumpPaginationCode = `import { JumpPagination } from '@components/ui/pagination/Pagination';

<JumpPagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
/>`;

    return (
        <DashboardLayout
            title="Pagination"
            breadcrumb={[
                { name: "Home", href: "/" },
                { name: "Components" },
                { name: "Pagination", href: "/components/pagination" }
            ]}
        >
            <div className="space-y-8 mt-6">
                {/* Default Pagination */}
                <Container>
                    <HeaderText
                        TitleHeader="Default Pagination"
                        title="Table Pagination with Info"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        The original pagination component with item count display - perfect for data tables.
                    </p>

                    <CodePreviewToggle
                        previewContent={
                            <div>
                                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-600 mb-2">Sample data table with pagination:</p>
                                    <div className="space-y-2">
                                        {sampleData
                                            .slice(
                                                (currentPages.default - 1) * 10,
                                                currentPages.default * 10
                                            )
                                            .map(item => (
                                                <div key={item.id} className="flex justify-between items-center p-2 bg-white rounded border">
                                                    <span className="font-medium">{item.name}</span>
                                                    <span className="text-gray-500 text-sm">{item.description}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <Pagination
                                    currentPage={currentPages.default}
                                    totalPages={Math.ceil(sampleData.length / 10)}
                                    totalItems={sampleData.length}
                                    itemsPerPage={10}
                                    onPageChange={handlePageChange('default')}
                                />
                            </div>
                        }
                        codeContent={defaultPaginationCode}
                        defaultView="preview"
                    />
                </Container>

                {/* Basic Pagination Variants */}
                <Container>
                    <HeaderText
                        TitleHeader="Basic Pagination"
                        title="Different Style Variants"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Three style variants: default with background, outlined with borders, and text-only minimal style.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Default Variant */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Default</h4>
                                <p className="text-sm text-gray-600 mb-4">Filled buttons with background colors</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <BasicPagination
                                        currentPage={currentPages.basic}
                                        totalPages={5}
                                        onPageChange={handlePageChange('basic')}
                                        variant="default"
                                    />
                                }
                                codeContent={basicPaginationCode}
                                defaultView="preview"
                            />
                        </div>

                        {/* Outlined Variant */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Outlined</h4>
                                <p className="text-sm text-gray-600 mb-4">Border-only style for subtle appearance</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <BasicPagination
                                        currentPage={currentPages.outlined}
                                        totalPages={5}
                                        onPageChange={handlePageChange('outlined')}
                                        variant="outlined"
                                    />
                                }
                                codeContent={outlinedPaginationCode}
                                defaultView="preview"
                            />
                        </div>

                        {/* Text Variant */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Text</h4>
                                <p className="text-sm text-gray-600 mb-4">Text-only minimal interface style</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <BasicPagination
                                        currentPage={currentPages.text}
                                        totalPages={5}
                                        onPageChange={handlePageChange('text')}
                                        variant="text"
                                    />
                                }
                                codeContent={textPaginationCode}
                                defaultView="preview"
                            />
                        </div>
                    </div>
                </Container>

                {/* Icon Pagination */}
                <Container>
                    <HeaderText
                        TitleHeader="Icon Pagination"
                        title="Navigation with Icons"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Enhance navigation with chevron icons for better visual cues and user experience.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Icons Only */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Icons Only</h4>
                                <p className="text-sm text-gray-600 mb-4">Clean icons without text labels</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <IconPagination
                                        currentPage={currentPages.icon}
                                        totalPages={5}
                                        onPageChange={handlePageChange('icon')}
                                    />
                                }
                                codeContent={iconPaginationCode}
                                defaultView="preview"
                            />
                        </div>

                        {/* Icons with Text */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Icons with Text</h4>
                                <p className="text-sm text-gray-600 mb-4">Icons combined with text labels</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <IconPagination
                                        currentPage={currentPages.iconText}
                                        totalPages={5}
                                        onPageChange={handlePageChange('iconText')}
                                        showText={true}
                                    />
                                }
                                codeContent={iconTextPaginationCode}
                                defaultView="preview"
                            />
                        </div>
                    </div>
                </Container>

                {/* Advanced Pagination */}
                <Container>
                    <HeaderText
                        TitleHeader="Advanced Pagination"
                        title="Smart Navigation for Large Datasets"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Advanced pagination with ellipsis handling, first/last navigation, and smart page number display for large datasets.
                    </p>

                    <CodePreviewToggle
                        previewContent={
                            <AdvancedPagination
                                currentPage={currentPages.advanced}
                                totalPages={20}
                                onPageChange={handlePageChange('advanced')}
                                siblingCount={1}
                                showFirstLast={true}
                            />
                        }
                        codeContent={advancedPaginationCode}
                        defaultView="preview"
                    />
                </Container>

                {/* Size Variants */}
                <Container>
                    <HeaderText
                        TitleHeader="Size Variants"
                        title="Different Sizes for Various Use Cases"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Three sizes available: small for compact interfaces, medium for standard use, and large for emphasis.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Small Size */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Small</h4>
                                <p className="text-sm text-gray-600 mb-4">Compact size for dense interfaces</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <SizedPagination
                                        currentPage={currentPages.small}
                                        totalPages={5}
                                        onPageChange={handlePageChange('small')}
                                        size="small"
                                    />
                                }
                                codeContent={smallSizeCode}
                                defaultView="preview"
                            />
                        </div>

                        {/* Medium Size */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Medium</h4>
                                <p className="text-sm text-gray-600 mb-4">Standard size for most interfaces</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <SizedPagination
                                        currentPage={currentPages.medium}
                                        totalPages={5}
                                        onPageChange={handlePageChange('medium')}
                                        size="medium"
                                    />
                                }
                                codeContent={mediumSizeCode}
                                defaultView="preview"
                            />
                        </div>

                        {/* Large Size */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Large</h4>
                                <p className="text-sm text-gray-600 mb-4">Prominent size for emphasis</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <SizedPagination
                                        currentPage={currentPages.large}
                                        totalPages={5}
                                        onPageChange={handlePageChange('large')}
                                        size="large"
                                    />
                                }
                                codeContent={largeSizeCode}
                                defaultView="preview"
                            />
                        </div>
                    </div>
                </Container>

                {/* Specialized Variants */}
                <Container>
                    <HeaderText
                        TitleHeader="Specialized Variants"
                        title="Unique Styles for Special Use Cases"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Specialized pagination components for specific design requirements and use cases.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Minimal Pagination */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Minimal</h4>
                                <p className="text-sm text-gray-600 mb-4">Simple Previous/Next with page info</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <MinimalPagination
                                        currentPage={currentPages.minimal}
                                        totalPages={5}
                                        onPageChange={handlePageChange('minimal')}
                                        showInfo={true}
                                    />
                                }
                                codeContent={minimalPaginationCode}
                                defaultView="preview"
                            />
                        </div>

                        {/* Rounded Pagination */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Rounded</h4>
                                <p className="text-sm text-gray-600 mb-4">Circular buttons for modern look</p>
                            </div>
                            <CodePreviewToggle
                                previewContent={
                                    <RoundedPagination
                                        currentPage={currentPages.rounded}
                                        totalPages={5}
                                        onPageChange={handlePageChange('rounded')}
                                    />
                                }
                                codeContent={roundedPaginationCode}
                                defaultView="preview"
                            />
                        </div>
                    </div>
                </Container>

                {/* Jump to Page */}
                <Container>
                    <HeaderText
                        TitleHeader="Jump to Page"
                        title="Quick Navigation Input"
                    />
                    <p className="text-gray-600 mt-2 mb-6">
                        Advanced pagination with input field allowing users to jump directly to any page number.
                    </p>

                    <CodePreviewToggle
                        previewContent={
                            <JumpPagination
                                currentPage={currentPages.jump}
                                totalPages={20}
                                onPageChange={handlePageChange('jump')}
                            />
                        }
                        codeContent={jumpPaginationCode}
                        defaultView="preview"
                    />
                </Container>

                {/* Usage Guidelines */}
                <Container>
                    <HeaderText
                        TitleHeader="Usage Guidelines"
                        title="When and How to Use Pagination"
                    />

                    <div className="mt-6 space-y-8">
                        {/* When to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Use Pagination</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Large Datasets</h4>
                                            <p className="text-sm text-green-700">When displaying large amounts of data that would cause performance issues or poor UX if shown all at once.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Table Views</h4>
                                            <p className="text-sm text-green-700">For data tables where users need to see specific items per page and want control over navigation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Search Results</h4>
                                            <p className="text-sm text-green-700">When search results are numerous and users need to browse through multiple pages of results.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Content Archives</h4>
                                            <p className="text-sm text-green-700">For blogs, articles, galleries, or any content where users might want to browse chronologically.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* When Not to Use */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">When NOT to Use Pagination</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Small Datasets</h4>
                                            <p className="text-sm text-red-700">Don't paginate if you have less than 25-50 items that can be displayed comfortably on one page.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Sequential Reading</h4>
                                            <p className="text-sm text-red-700">Avoid for content meant to be read sequentially, like articles or documentation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Real-time Data</h4>
                                            <p className="text-sm text-red-700">Don't use for real-time feeds or data that updates frequently and loses context when paginated.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTimesCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Mobile-First Lists</h4>
                                            <p className="text-sm text-red-700">Consider infinite scroll instead for mobile apps where pagination can feel cumbersome.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination Type Guide */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choosing the Right Pagination Type</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaTable className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Default Pagination</h4>
                                            <p className="text-sm text-blue-700">Best for data tables where showing item counts and page information is crucial.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaDatabase className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Advanced Pagination</h4>
                                            <p className="text-sm text-green-700">For large datasets (100+ pages) where smart navigation with ellipsis is needed.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="flex items-start space-x-3">
                                        <FaMobile className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-purple-900 mb-1">Minimal Pagination</h4>
                                            <p className="text-sm text-purple-700">Perfect for mobile interfaces or when space is limited.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCode className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900 mb-1">Text/Outlined</h4>
                                            <p className="text-sm text-orange-700">For clean, minimalist interfaces where visual noise should be reduced.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaPalette className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Rounded/Icon</h4>
                                            <p className="text-sm text-indigo-700">For modern, app-like interfaces where visual appeal is important.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                    <div className="flex items-start space-x-3">
                                        <FaSearch className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-900 mb-1">Jump Pagination</h4>
                                            <p className="text-sm text-red-700">When users need to quickly navigate to specific pages in large datasets.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Size Guidelines */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Size Guidelines</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaMobile className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Small Size</h4>
                                            <p className="text-sm text-blue-700">Mobile interfaces, dense layouts, sidebar tables</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaDesktop className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-1">Medium Size</h4>
                                            <p className="text-sm text-green-700">Standard desktop interfaces, most common use case</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="flex items-start space-x-3">
                                        <FaChartBar className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-orange-900 mb-1">Large Size</h4>
                                            <p className="text-sm text-orange-700">Prominent placement, main content tables, emphasis</p>
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
                                            <h4 className="font-semibold text-yellow-900 mb-2">Performance & UX</h4>
                                            <ul className="text-sm text-yellow-700 space-y-1">
                                                <li>• Choose appropriate page sizes (10-50 items typically work best)</li>
                                                <li>• Always show total items and current range for context</li>
                                                <li>• Implement loading states during page transitions</li>
                                                <li>• Consider URL parameters for bookmarkable pagination states</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="flex items-start space-x-3">
                                        <FaInfoCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-2">Navigation & Accessibility</h4>
                                            <ul className="text-sm text-blue-700 space-y-1">
                                                <li>• Ensure keyboard navigation support (Tab, Enter, Arrow keys)</li>
                                                <li>• Provide clear visual feedback for current page and disabled states</li>
                                                <li>• Use semantic HTML and ARIA labels for screen readers</li>
                                                <li>• Make clickable areas large enough for touch interfaces</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="flex items-start space-x-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-green-900 mb-2">Data & State Management</h4>
                                            <ul className="text-sm text-green-700 space-y-1">
                                                <li>• Preserve search/filter state when paginating</li>
                                                <li>• Handle edge cases (empty results, single page, API errors)</li>
                                                <li>• Implement proper error handling and retry mechanisms</li>
                                                <li>• Consider caching strategies for frequently accessed pages</li>
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
                                    <FaTable className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Data Tables</h4>
                                    <p className="text-sm text-gray-600">Employee lists, transaction history, inventory</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaSearch className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Search Results</h4>
                                    <p className="text-sm text-gray-600">Product catalogs, directory listings, document search</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaBlog className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Content Lists</h4>
                                    <p className="text-sm text-gray-600">Blog posts, news articles, documentation</p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                    <FaImages className="w-6 h-6 text-gray-600 mb-2" />
                                    <h4 className="font-semibold text-gray-900 mb-1">Media Galleries</h4>
                                    <p className="text-sm text-gray-600">Photo albums, video libraries, file browsers</p>
                                </div>
                            </div>
                        </div>

                        {/* Alternative Patterns */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative Patterns to Consider</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaList className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Infinite Scroll</h4>
                                            <p className="text-sm text-indigo-700">Better for mobile apps, social feeds, or when users typically browse sequentially.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaFileAlt className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Load More Button</h4>
                                            <p className="text-sm text-indigo-700">Hybrid approach giving users control while maintaining context of previous items.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaUsers className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Virtual Scrolling</h4>
                                            <p className="text-sm text-indigo-700">For very large datasets where rendering all items would cause performance issues.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <div className="flex items-start space-x-3">
                                        <FaShoppingCart className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-indigo-900 mb-1">Filtering & Search</h4>
                                            <p className="text-sm text-indigo-700">Sometimes better to help users find what they need rather than paginate through everything.</p>
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
                            <h4 className="font-semibold text-blue-900 mb-2">Data Tables</h4>
                            <p className="text-sm text-blue-700">Use <strong>Default Pagination</strong> for data tables where showing item counts is important.</p>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-900 mb-2">Large Datasets</h4>
                            <p className="text-sm text-green-700">Use <strong>Advanced Pagination</strong> for datasets with many pages requiring smart navigation.</p>
                        </div>

                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-900 mb-2">Mobile Interfaces</h4>
                            <p className="text-sm text-purple-700">Use <strong>Small Size</strong> or <strong>Minimal</strong> variants for mobile-optimized layouts.</p>
                        </div>

                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-orange-900 mb-2">Clean Designs</h4>
                            <p className="text-sm text-orange-700">Use <strong>Text</strong> or <strong>Outlined</strong> variants for minimalist interfaces.</p>
                        </div>

                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-900 mb-2">Quick Navigation</h4>
                            <p className="text-sm text-red-700">Use <strong>Jump Pagination</strong> when users need to quickly navigate to specific pages.</p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-2">Modern Apps</h4>
                            <p className="text-sm text-gray-700">Use <strong>Rounded</strong> or <strong>Icon</strong> variants for contemporary, app-like interfaces.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </DashboardLayout>
    );
};

export default PaginationPage;