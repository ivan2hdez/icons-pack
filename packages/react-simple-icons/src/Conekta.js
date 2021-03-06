import React from 'react';
import PropTypes from 'prop-types';

const Conekta = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M8.25 19.502L2.7 12l5.55-7.5 3.45 4.65L9.447 12l2.25 3-3.45 4.502zM12.45 24l8.85-12-8.85-12h-6.9l9 12-9 12h6.9z" />
    </svg>
  );
};

Conekta.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Conekta.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Conekta;
