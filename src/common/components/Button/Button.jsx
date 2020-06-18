import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { BUTTON, RESET, SUBMIT } from 'common/constants/buttonTypes';

import styles from './button.less';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([BUTTON, RESET, SUBMIT]),
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  className: '',
  isDisabled: false,
  onClick: () => {},
  type: BUTTON,
  width: 120,
  height: 50,
};

const handleClick = (onClick, isDisabled) => {
  if (!isDisabled) {
    onClick();
  }
};

const Button = ({
  children,
  className,
  isDisabled,
  onClick,
  type,
  width,
  height,
}) => {
  const buttonClasses = classnames(styles.button, className, {
    [styles.disabled]: isDisabled,
  });

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      onClick={() => handleClick(onClick, isDisabled)}
      type={type}
      style={{ width, height }}
    >
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
