import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import projectStatus, { ACTIVE, CANCELED, COMPLETED } from '../../constants/projectStatus';

import styles from './projectStatusLabel.less';

const propTypes = {
  status: PropTypes.oneOf(projectStatus).isRequired,
};

const ProjectStatusLabel = ({ status }) => {
  if (projectStatus.indexOf(status) === -1) {
    return null;
  }

  const projectStatusLabelClasses = classnames(styles['project-status-label'], {
    [styles.active]: ACTIVE === status,
    [styles.canceled]: CANCELED === status,
    [styles.completed]: COMPLETED === status,
  });

  return (
    <span className={projectStatusLabelClasses}>
      {status}
    </span>
  );
};

ProjectStatusLabel.propTypes = propTypes;

export default ProjectStatusLabel;
