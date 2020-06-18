import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './linkButton.less';

const propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  className: '',
  isDisabled: false,
};

const handleOnClick = (event, onClick, isDisabled) => {
  if (onClick && !isDisabled) {
    onClick(event);
  }
};

const LinkButton = ({
  className,
  isDisabled,
  label,
  onClick,
}) => {
  if (!label) {
    return null;
  }

  const linkButtonClasses = classnames(styles['link-button'], className, {
    [styles.disabled]: isDisabled,
  });

  return (
    <span
      className={linkButtonClasses}
      onClick={(event) => handleOnClick(event, onClick, isDisabled)}
    >
      {label}
    </span>
  );
};

LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;

export default LinkButton;
