import React from 'react';
import PropTypes from 'prop-types';

const Garmin = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22.017 22.67H1.984c-.77 0-1.388-.383-1.694-1.002-.387-.61-.387-1.39 0-2.002L10.304 2.33c.385-.615 1.002-1 1.695-1 .77 0 1.386.385 1.69 1l10.02 17.336c.387.617.387 1.39 0 2.002-.31.695-.927 1.002-1.693 1.002z" />
    </svg>
  );
};

Garmin.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Garmin.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Garmin;
