import React from 'react';
import PropTypes from 'prop-types';

const Esea = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M14.054 3L8.95 9.746 0 9.883l5.832 4.47-4.79 6.879 8.491-4.088 5.711 4.323v-7.114L24 10.029 6.745 14.05a12.575 12.575 0 0 0 1.589-1.955 5.475 5.475 0 0 0 .617-1.786l5.593-.151z" />
    </svg>
  );
};

Esea.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Esea.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Esea;
