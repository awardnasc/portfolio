import { FontAwesomeIcon as OriginalFontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FontAwesomeIcon = (props) => {
  const { icon, ...rest } = props;
  return <OriginalFontAwesomeIcon icon={icon} {...rest} />;
};

export default FontAwesomeIcon;