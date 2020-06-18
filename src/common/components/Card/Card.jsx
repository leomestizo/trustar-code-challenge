import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import styles from './card.less';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

const defaultProps = {
  className: '',
  children: null,
  onClick: null,
  style: null,
};

const Card = forwardRef(({
  className,
  children,
  onClick,
  style,
}, ref) => {
  const cardClasses = classnames(styles.card, className);

  return (
    <div className={cardClasses} onClick={onClick} ref={ref} style={style}>
      {children}
    </div>
  );
});

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
