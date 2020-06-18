import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './collapsible.less';

const propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

const defaultProps = {
  isOpen: false,
};

const Collapsible = ({ children, isOpen }) => {
  const childrenContainerRef = useRef(null);

  return (
    <div
      className={styles.collapsible}
      style={{
        height: childrenContainerRef.current && isOpen
          ? childrenContainerRef.current.clientHeight
          : 0,
      }}
    >
      <div ref={childrenContainerRef}>
        {children}
      </div>
    </div>
  );
};

Collapsible.propTypes = propTypes;
Collapsible.defaultProps = defaultProps;

export default Collapsible;
