import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  className: '',
};

const CardBody = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
