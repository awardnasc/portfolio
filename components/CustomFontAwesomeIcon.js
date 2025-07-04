import React from 'react';
import {FontAwesomeIcon as OriginalFontAwesomeIcon}
  from '@fortawesome/react-fontawesome';

const FontAwesomeIcon = ({icon, ...rest}) => {
  return <OriginalFontAwesomeIcon icon={icon} {...rest} />;
};

FontAwesomeIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default FontAwesomeIcon;
