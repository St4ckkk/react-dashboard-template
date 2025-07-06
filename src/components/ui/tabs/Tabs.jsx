import React, { useState, useRef, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaCog,
  FaBell,
  FaChartBar,
  FaShoppingCart,
  FaCalendar,
  FaFileAlt,
  FaImage,
  FaVideo,
  FaMusic,
  FaDownload,
  FaUpload,
  FaEdit,
  FaTrash,
  FaSave,
  FaSearch,
  FaHeart,
  FaStar
} from 'react-icons/fa';

// Base Tab Context
const TabContext = React.createContext();

// Base Tabs Container
export const Tabs = ({
  children,
  defaultActiveKey = 0,
  activeKey,
  onTabChange,
  orientation = 'horizontal', // 'horizontal' | 'vertical'
  variant = 'default', // 'default' | 'bordered' | 'pills' | 'underline' | 'filled'
  size = 'medium', // 'small' | 'medium' | 'large'
  justified = false,
  className = '',
  animated = true,
  lazy = false,
  destroyInactiveTabPane = false,
  ...props
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabListRef = useRef(null);

  const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;

  const handleTabChange = (key, disabled) => {
    if (disabled) return;

    if (activeKey === undefined) {
      setInternalActiveKey(key);
    }
    onTabChange?.(key);
  };

  // Update indicator position for underline variant
  useEffect(() => {
    if (variant === 'underline' && tabListRef.current) {
      const activeTab = tabListRef.current.querySelector(`[data-tab-key="${currentActiveKey}"]`);
      if (activeTab) {
        const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = activeTab;
        if (orientation === 'horizontal') {
          setIndicatorStyle({
            left: offsetLeft,
            width: offsetWidth,
            transform: 'translateY(0)'
          });
        } else {
          setIndicatorStyle({
            top: offsetTop,
            height: offsetHeight,
            transform: 'translateX(0)'
          });
        }
      }
    }
  }, [currentActiveKey, variant, orientation]);

  const orientationClasses = {
    horizontal: 'flex-col',
    vertical: 'flex-row'
  };

  const contextValue = {
    activeKey: currentActiveKey,
    onTabChange: handleTabChange,
    orientation,
    variant,
    size,
    justified,
    animated,
    lazy,
    destroyInactiveTabPane
  };

  return (
    <TabContext.Provider value={contextValue}>
      <div className={`${orientationClasses[orientation]} ${className}`} {...props}>
        {children}
      </div>
    </TabContext.Provider>
  );
};

// Tab List Component
export const TabList = ({ children, className = '' }) => {
  const { orientation, variant, size, justified } = React.useContext(TabContext);
  const tabListRef = useRef(null);

  const baseClasses = 'relative flex';

  const orientationClasses = {
    horizontal: `flex-row ${justified ? 'w-full' : ''}`,
    vertical: 'flex-col'
  };

  const variantClasses = {
    default: 'border-b border-gray-200',
    bordered: 'border border-gray-200 rounded-lg p-1',
    pills: 'space-x-1',
    underline: 'border-b border-gray-200',
    filled: 'bg-gray-100 rounded-lg p-1'
  };

  const sizeClasses = {
    small: orientation === 'horizontal' ? 'h-8' : 'w-32',
    medium: orientation === 'horizontal' ? 'h-10' : 'w-40',
    large: orientation === 'horizontal' ? 'h-12' : 'w-48'
  };

  return (
    <div
      ref={tabListRef}
      className={`${baseClasses} ${orientationClasses[orientation]} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      role="tablist"
    >
      {children}
      {variant === 'underline' && <TabIndicator />}
    </div>
  );
};

// Tab Indicator for underline variant
const TabIndicator = () => {
  const { orientation } = React.useContext(TabContext);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const updateIndicator = () => {
      // This will be updated by the parent Tabs component
    };
    updateIndicator();
  }, []);

  const indicatorClasses = orientation === 'horizontal'
    ? 'absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out'
    : 'absolute left-0 w-0.5 bg-blue-600 transition-all duration-300 ease-out';

  return <div className={indicatorClasses} style={indicatorStyle} />;
};

// Tab Item Component
export const TabItem = ({
  children,
  tabKey,
  disabled = false,
  icon,
  badge,
  closable = false,
  onClose,
  className = ''
}) => {
  const { activeKey, onTabChange, orientation, variant, size, justified } = React.useContext(TabContext);

  const isActive = activeKey === tabKey;

  const handleClick = () => {
    onTabChange(tabKey, disabled);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    onClose?.(tabKey);
  };

  const baseClasses = 'relative flex items-center justify-center cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

  const orientationClasses = {
    horizontal: justified ? 'flex-1' : '',
    vertical: 'w-full'
  };

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  const getVariantClasses = () => {
    const common = `${sizeClasses[size]} ${orientationClasses[orientation]}`;

    if (disabled) {
      return `${common} text-gray-400 cursor-not-allowed`;
    }

    switch (variant) {
      case 'bordered':
        return `${common} rounded-md ${isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 hover:bg-gray-100'
          }`;
      case 'pills':
        return `${common} rounded-full ${isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 hover:bg-gray-100'
          }`;
      case 'underline':
        return `${common} ${isActive
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-600 hover:text-gray-900'
          }`;
      case 'filled':
        return `${common} rounded-md ${isActive
          ? 'bg-white text-blue-600 shadow-sm'
          : 'text-gray-600 hover:bg-gray-50'
          }`;
      default:
        return `${common} ${isActive
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-600 hover:text-gray-900'
          }`;
    }
  };

  return (
    <button
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      role="tab"
      aria-selected={isActive}
      data-tab-key={tabKey}
      tabIndex={isActive ? 0 : -1}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {badge && (
        <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {badge}
        </span>
      )}
      {closable && (
        <button
          className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={handleClose}
        >
          ×
        </button>
      )}
    </button>
  );
};

// Tab Panels Container
export const TabPanels = ({ children, className = '' }) => {
  const { orientation } = React.useContext(TabContext);

  const orientationClasses = {
    horizontal: 'flex-1',
    vertical: 'flex-1 ml-4'
  };

  return (
    <div className={`${orientationClasses[orientation]} ${className}`}>
      {children}
    </div>
  );
};

// Tab Panel Component
export const TabPanel = ({
  children,
  tabKey,
  className = '',
  forceRender = false,
  ...props
}) => {
  const { activeKey, animated, lazy, destroyInactiveTabPane } = React.useContext(TabContext);

  const isActive = activeKey === tabKey;
  const [hasBeenActive, setHasBeenActive] = useState(isActive || forceRender);

  useEffect(() => {
    if (isActive) {
      setHasBeenActive(true);
    }
  }, [isActive]);

  if (!isActive && destroyInactiveTabPane) {
    return null;
  }

  if (!isActive && lazy && !hasBeenActive) {
    return null;
  }

  const animationClasses = animated
    ? `transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`
    : isActive ? '' : 'hidden';

  return (
    <div
      className={`${animationClasses} ${className}`}
      role="tabpanel"
      aria-hidden={!isActive}
      {...props}
    >
      {children}
    </div>
  );
};

// Pre-built Tab Components

// Default Tabs
export const DefaultTabs = ({ tabs, defaultActiveKey = 0, justified = false, onTabChange }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} onTabChange={onTabChange} justified={justified}>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem key={index} tabKey={index} disabled={tab.disabled}>
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} tabKey={index}>
            <div className="p-4">
              {tab.content || (
                <p className="text-gray-600">
                  {tab.defaultContent || `Content for ${tab.label} tab.`}
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

// Bordered Tabs
export const BorderedTabs = ({ tabs, defaultActiveKey = 0, justified = false, onTabChange }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} variant="bordered" onTabChange={onTabChange} justified={justified}>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem key={index} tabKey={index} disabled={tab.disabled}>
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} tabKey={index}>
            <div className="p-4">
              {tab.content || (
                <p className="text-gray-600">
                  {tab.defaultContent || `Content for ${tab.label} tab.`}
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

// Pills Tabs
export const PillsTabs = ({ tabs, defaultActiveKey = 0, orientation = 'horizontal', onTabChange }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} variant="pills" orientation={orientation} onTabChange={onTabChange}>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem key={index} tabKey={index} disabled={tab.disabled}>
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} tabKey={index}>
            <div className="p-4">
              {tab.content || (
                <p className="text-gray-600">
                  {tab.defaultContent || `Content for ${tab.label} tab.`}
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

// Underline Tabs
export const UnderlineTabs = ({ tabs, defaultActiveKey = 0, justified = false, onTabChange }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} variant="underline" onTabChange={onTabChange} justified={justified}>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem key={index} tabKey={index} disabled={tab.disabled}>
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} tabKey={index}>
            <div className="p-4">
              {tab.content || (
                <p className="text-gray-600">
                  {tab.defaultContent || `Content for ${tab.label} tab.`}
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

// Filled Tabs
export const FilledTabs = ({ tabs, defaultActiveKey = 0, justified = false, onTabChange }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} variant="filled" onTabChange={onTabChange} justified={justified}>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem key={index} tabKey={index} disabled={tab.disabled}>
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} tabKey={index}>
            <div className="p-4">
              {tab.content || (
                <p className="text-gray-600">
                  {tab.defaultContent || `Content for ${tab.label} tab.`}
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

// Icon Tabs
export const IconTabs = ({ tabs, defaultActiveKey = 0, variant = 'default', onTabChange }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} variant={variant} onTabChange={onTabChange}>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem key={index} tabKey={index} icon={tab.icon} disabled={tab.disabled}>
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} tabKey={index}>
            <div className="p-4">
              {tab.content || (
                <p className="text-gray-600">
                  {tab.defaultContent || `Content for ${tab.label} tab.`}
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

// Badge Tabs
export const BadgeTabs = ({ tabs, defaultActiveKey = 0, variant = 'default', onTabChange }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} variant={variant} onTabChange={onTabChange}>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem key={index} tabKey={index} badge={tab.badge} disabled={tab.disabled}>
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} tabKey={index}>
            <div className="p-4">
              {tab.content || (
                <p className="text-gray-600">
                  {tab.defaultContent || `Content for ${tab.label} tab.`}
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

// Closable Tabs
export const ClosableTabs = ({ initialTabs, defaultActiveKey = 0, onTabChange }) => {
  const [tabs, setTabs] = useState(initialTabs);

  const handleTabClose = (tabKey) => {
    setTabs(prevTabs => prevTabs.filter((_, index) => index !== tabKey));
  };

  return (
    <Tabs defaultActiveKey={defaultActiveKey} onTabChange={onTabChange}>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            tabKey={index}
            closable={tab.closable}
            onClose={handleTabClose}
            disabled={tab.disabled}
          >
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} tabKey={index}>
            <div className="p-4">
              {tab.content || (
                <p className="text-gray-600">
                  {tab.defaultContent || `Content for ${tab.label} tab.`}
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

// Sized Tabs
export const SizedTabs = ({ tabs, defaultActiveKey = 0, size = 'medium', variant = 'default', onTabChange }) => {
  return (
    <Tabs defaultActiveKey={defaultActiveKey} variant={variant} size={size} onTabChange={onTabChange}>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem key={index} tabKey={index} disabled={tab.disabled}>
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} tabKey={index}>
            <div className="p-4">
              {tab.content || (
                <p className="text-gray-600">
                  {tab.defaultContent || `Content for ${tab.label} tab.`}
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

// Card Tabs - Custom variant
export const CardTabs = ({ tabs, defaultActiveKey = 0, onTabChange }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const handleTabChange = (key) => {
    setActiveKey(key);
    onTabChange?.(key);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-sm font-medium transition-colors ${activeKey === index
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
              }`}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6">
        {tabs[activeKey]?.content || (
          <p className="text-gray-600">
            {tabs[activeKey]?.defaultContent || `Content for ${tabs[activeKey]?.label} tab.`}
          </p>
        )}
      </div>
    </div>
  );
};

// Animated Tabs with custom animations
export const AnimatedTabs = ({ tabs, defaultActiveKey = 0, onTabChange }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const handleTabChange = (key) => {
    setActiveKey(key);
    onTabChange?.(key);
  };

  return (
    <div>
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${activeKey === index
                ? 'text-blue-600 bg-white shadow-sm transform scale-105'
                : 'text-gray-600 hover:text-gray-900'
              }`}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${activeKey === index
                ? 'opacity-100 transform translate-x-0'
                : 'opacity-0 transform translate-x-4 absolute'
              }`}
            style={{ display: activeKey === index ? 'block' : 'none' }}
          >
            {tab.content || (
              <p className="text-gray-600">
                {tab.defaultContent || `Content for ${tab.label} tab.`}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;