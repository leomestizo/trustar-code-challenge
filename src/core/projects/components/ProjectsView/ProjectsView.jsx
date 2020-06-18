import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'common/components/Loader';
import Button from 'common/components/Button';
import MasonryGrid from 'common/components/MasonryGrid';

import { fetchProjects, deleteProjectsThunk } from '../../actions';
import { getProjects, getIsFetchingProjects } from '../../selectors';

import ProjectCard from '../ProjectCard';

import styles from './projectsView.less';

const handleButtonClick = (dispatch, selectedProjectIds, setSelectedProjectIds) => {
  dispatch(deleteProjectsThunk(selectedProjectIds)).then(() => {
    setSelectedProjectIds([]);
  });
};

const handleProjectCardClick = (projectId, selectedProjectIds, setSelectedProjectIds) => {
  if (selectedProjectIds.indexOf(projectId) === -1) {
    setSelectedProjectIds([...selectedProjectIds, projectId]);
  } else {
    setSelectedProjectIds(selectedProjectIds.filter((id) => id !== projectId));
  }
};

const renderProjects = (
  projects,
  selectedProjectIds,
  setSelectedProjectIds,
) => projects.map((project) => (
  <ProjectCard
    key={project.id}
    id={project.id}
    title={project.title}
    status={project.status}
    description={project.description}
    startDate={project.startDate}
    lastUpdated={project.lastUpdated}
    isSelected={!!selectedProjectIds.find((selectedProjectId) => selectedProjectId === project.id)}
    onClick={(id) => handleProjectCardClick(id, selectedProjectIds, setSelectedProjectIds)}
  />
));

const ProjectsView = () => {
  const [selectedProjectIds, setSelectedProjectIds] = useState([]);

  const dispatch = useDispatch();
  const projects = useSelector(getProjects);
  const isFetchingProjects = useSelector(getIsFetchingProjects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const innerContainerClasses = classnames(styles['inner-container'], {
    [styles.centered]: isFetchingProjects || projects.length === 0,
  });

  return (
    <div className={styles['projects-view']}>
      <div className={styles.toolbar}>
        <Button
          onClick={() => handleButtonClick(dispatch, selectedProjectIds, setSelectedProjectIds)}
          isDisabled={!selectedProjectIds.length}
        >
          Delete
        </Button>
      </div>
      <div className={innerContainerClasses}>
        {/* eslint-disable react/jsx-curly-newline, react/jsx-indent, react/jsx-wrap-multilines */}
        {isFetchingProjects
          ? <Loader color="#a5a4a4" />
          : <>
              {projects.length === 0
                ? <p className={styles['no-projects-message']}>
                    Come back later to see more projects.
                  </p>
                : <MasonryGrid columnBreakpoints={3} gap="1em">
                    {renderProjects(projects, selectedProjectIds, setSelectedProjectIds)}
                  </MasonryGrid>
              }
            </>
        }
        {/* eslint-enable react/jsx-curly-newline, react/jsx-indent, react/jsx-wrap-multilines */}
      </div>
    </div>
  );
};

export default ProjectsView;
