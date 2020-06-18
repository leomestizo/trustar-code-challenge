import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { format } from 'date-fns';

import Card from 'common/components/Card';
import Collapsible from 'common/components/Collapsible';
import Icon from 'common/components/Icon';
import LabelValue from 'common/components/LabelValue';
import { DOWN_ARROW } from 'common/constants/icons';

import projectStatus from '../../constants/projectStatus';

import ProjectStatusLabel from '../ProjectStatusLabel';
import ProjectDescription from '../ProjectDescription';

import styles from './projectCard.less';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(projectStatus).isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  isSelected: false,
  onClick: null,
};

const handleClick = (event, onClick, id) => {
  if (onClick && event.currentTarget.contains(event.target)) {
    onClick(id);
  }
};

const handleDownArrowClick = (event, setIsCollapsibleOpen, isCollapsibleOpen) => {
  event.stopPropagation();
  setIsCollapsibleOpen(!isCollapsibleOpen);
};

const ProjectCard = ({
  id,
  title,
  status,
  description,
  startDate,
  lastUpdated,
  isSelected,
  onClick,
}) => {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);

  const cardClasses = classnames(styles['project-card'], {
    [styles.selected]: isSelected,
  });
  const downArrowClasses = classnames(styles['down-arrow-icon'], {
    [styles['icon-flipped']]: isCollapsibleOpen,
  });

  return (
    <Card className={cardClasses} onClick={(event) => handleClick(event, onClick, id)}>
      <Card.Header className={styles.title} title={title} />
      <Card.Body>
        <div className={styles['date-and-status-info-container']}>
          <div>
            <LabelValue
              className={styles['start-date']}
              label="Start date"
              value={startDate}
            />
            <LabelValue label="Last updated" value={format(new Date(lastUpdated), 'MMM y')} />
          </div>
          <ProjectStatusLabel status={status} />
        </div>
        <div>
          <div className={styles['down-arrow-icon-container']}>
            <Icon
              className={downArrowClasses}
              icon={DOWN_ARROW}
              onClick={(event) => {
                handleDownArrowClick(event, setIsCollapsibleOpen, isCollapsibleOpen);
              }}
            />
          </div>
          <Collapsible isOpen={isCollapsibleOpen}>
            <ProjectDescription title={title} description={description} />
          </Collapsible>
        </div>
      </Card.Body>
    </Card>
  );
};

ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;

export default ProjectCard;
