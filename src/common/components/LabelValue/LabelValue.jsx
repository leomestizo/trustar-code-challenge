import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './labelValue.less';

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  separator: PropTypes.string,
  value: PropTypes.string,
  valueClassName: PropTypes.string,
};

const defaultProps = {
  className: '',
  labelClassName: '',
  separator: ':',
  value: '',
  valueClassName: '',
};

const LabelValue = ({
  className,
  label,
  labelClassName,
  separator,
  value,
  valueClassName,
}) => {
  const labelValueClasses = classnames(styles['label-value'], className);
  const labelClasses = classnames(styles.label, labelClassName);
  const valueClasses = classnames(styles.value, valueClassName);

  return (
    <div className={labelValueClasses}>
      <span className={labelClasses}>{[label, separator]}</span>
      <span className={valueClasses}>{value}</span>
    </div>
  );
};

LabelValue.propTypes = propTypes;
LabelValue.defaultProps = defaultProps;

export default LabelValue;
