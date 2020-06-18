import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
};

const MasonryGridTile = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

MasonryGridTile.propTypes = propTypes;
MasonryGridTile.defaultProps = defaultProps;

export default MasonryGridTile;
