import React from 'react';
import PropTypes from 'prop-types';

const Speakerdeck = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.2 13.598l.02-3.196-2.67 1.61M12.798 10.403l-.015 3.19 2.667-1.608M12.783 13.598v-.004l-.004.002M23.997 4.59c0-.878-.715-1.59-1.597-1.59H1.6C.717 3 0 3.713 0 4.59v14.82C0 20.288.715 21 1.6 21h20.8c.883 0 1.6-.713 1.6-1.59V4.59h-.003zm-6.434 9.54h-.014c0 .586-.466 1.052-1.05 1.065l.036-.016h-9.07c-.58-.01-1.05-.48-1.05-1.06H6.41V9.88h.01c0-.58.463-1.05 1.033-1.06h9.06c.57.017 1.05.48 1.05 1.067v4.244z" />
    </svg>
  );
};

Speakerdeck.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Speakerdeck.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Speakerdeck;
