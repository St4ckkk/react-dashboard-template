import React from 'react';

const Container = ({
  children,
  className = '',
  hasBorder = true,
  hasShadow = true,
  rounded = true,
  padding = 'p-5'
}) => {
  const borderClass = hasBorder ? 'border border-gray-200' : '';
  const shadowClass = hasShadow ? 'shadow-sm' : '';
  const roundedClass = rounded ? 'rounded-lg' : '';

  return (
    <div className={`bg-white ${borderClass}  ${roundedClass} ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Container;