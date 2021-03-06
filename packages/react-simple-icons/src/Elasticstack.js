import React from 'react';
import PropTypes from 'prop-types';

const Elasticstack = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M.07 2.45A2.4 2.4 0 0 1 2.45.07h19.1a2.4 2.4 0 0 1 2.38 2.38v4.78H.07zM.07 16.77H11.4v7.16H2.45a2.38 2.38 0 0 1-2.38-2.32zM12.6 16.77h11.33v4.78c0 1.28-1.1 2.38-2.38 2.38H12.6zM.07 8.42h23.86v7.16H.07z" />
    </svg>
  );
};

Elasticstack.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Elasticstack.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Elasticstack;
