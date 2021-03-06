import React from 'react';
import PropTypes from 'prop-types';

const Elasticsearch = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.27 15.58H1.61A11.81 11.81 0 0 1 1.07 12c0-1.25.18-2.45.54-3.58h15.86A3.57 3.57 0 0 1 21.05 12a3.56 3.56 0 0 1-3.55 3.58zm-.45 1.2H2.05a11.8 11.8 0 0 0 4.39 5.18A11.8 11.8 0 0 0 13 23.93c4.15 0 7.78-2.12 9.93-5.3a6.08 6.08 0 0 0-4.35-1.86zm7.76-9.55c1.7 0 3.25-.72 4.35-1.85A11.96 11.96 0 0 0 2.05 7.23h8.74z" />
    </svg>
  );
};

Elasticsearch.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Elasticsearch.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Elasticsearch;
