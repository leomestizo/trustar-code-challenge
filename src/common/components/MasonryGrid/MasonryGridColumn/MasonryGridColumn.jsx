import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './masonryGridColumn.less';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {
  children: null,
  className: '',
  style: null,
};

const MasonryGridColumn = ({ children, className, style }) => {
  const masonryGridColumnClasses = classnames(styles['masonry-grid-column'], className);

  return (
    <div className={masonryGridColumnClasses} style={style}>
      {children}
    </div>
  );
};

MasonryGridColumn.propTypes = propTypes;
MasonryGridColumn.defaultProps = defaultProps;

export default MasonryGridColumn;
