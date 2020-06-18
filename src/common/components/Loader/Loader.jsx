import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './loader.less';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

const defaultProps = {
  className: '',
  color: '#000',
  size: 100,
  style: null,
};

const Loader = ({
  className,
  color,
  size,
  style,
}) => {
  const circles = [...Array(12)].map((_, index) => (
    <div
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      style={{
        background: color,
        width: size * 0.075,
        height: size * 0.075,
      }}
    />
  ));

  const loaderClasses = classnames(styles.loader, className);

  return (
    <div className={loaderClasses} style={{ height: size, width: size, ...style }}>
      {circles}
    </div>
  );
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
