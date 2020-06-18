import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  className: '',
};

const CardFooter = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
