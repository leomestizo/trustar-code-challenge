import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './cardHeader.less';

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleClassName: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  className: '',
  titleClassName: '',
  subtitle: '',
  subtitleClassName: '',
  onClick: null,
};

const CardHeader = ({
  className,
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  onClick,
}) => {
  const cardHeaderClasses = classnames(styles['card-header'], className);
  const titleClasses = classnames(styles.title, titleClassName);
  const subtitleClasses = classnames(styles.subtitle, subtitleClassName);

  return (
    <div className={cardHeaderClasses} onClick={onClick}>
      <div className={styles['title-container']}>
        <span className={titleClasses}>{title}</span>
        <span className={subtitleClasses}>{subtitle}</span>
      </div>
    </div>
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
