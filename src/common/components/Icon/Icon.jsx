import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './icon.less';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  viewBox: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  className: '',
  color: '#000',
  height: 14,
  width: 14,
  viewBox: '0 0 14 14',
  isDisabled: false,
  onClick: null,
};

const handleClick = (event, onClick, isDisabled) => {
  if (onClick && !isDisabled) {
    onClick(event);
  }
};

const Icon = ({
  className,
  color,
  icon,
  height,
  width,
  viewBox,
  isDisabled,
  onClick,
}) => {
  if (!icon) {
    return null;
  }

  const iconClasses = classnames(styles.icon, className, {
    [styles.disabled]: isDisabled,
    [styles.clickable]: !isDisabled && onClick,
  });

  return (
    <svg
      className={iconClasses}
      width={width}
      height={height}
      viewBox={viewBox}
      onClick={(event) => handleClick(event, onClick, isDisabled)}
    >
      <path d={icon} fill={color} />
    </svg>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
