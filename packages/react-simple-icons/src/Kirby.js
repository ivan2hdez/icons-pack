import React from 'react';
import PropTypes from 'prop-types';

const Kirby = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 0L1.428 6v12L12 24l10.573-6V6L12 0zm4.709 12.255l-2.963 1.598v.219h2.965v2.325H7.29v-2.312h2.955v-.225l-2.963-1.605V9.39L12 11.933l4.715-2.545v2.865l-.006.002z" />
    </svg>
  );
};

Kirby.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kirby.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Kirby;
