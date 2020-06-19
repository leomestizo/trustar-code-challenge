import { store as notificationStore } from 'react-notifications-component';

import slice from './slice';
import { getProjects, getProjectById } from './api';

export const {
  fetchProjectsRequest,
  fetchProjectsResponse,
  deleteProjects,
} = slice.actions;

export const fetchProjects = () => async (dispatch) => {
  // TODO: Implement pagination!
  const MAXIMUM_NUMBER_OF_PROJECTS = 10;
  let projects = [];

  dispatch(fetchProjectsRequest());

  try {
    const response = await getProjects();
    const projectsToFetch = response.data.projects.projects.slice(0, MAXIMUM_NUMBER_OF_PROJECTS);
    const fetchedProjects = await Promise.all(
      projectsToFetch.map((projectToFetch) => getProjectById(projectToFetch.id)),
    );
    projects = fetchedProjects.map((fetchedProject) => fetchedProject.data.project);
  } catch (error) {
    notificationStore.addNotification({
      title: error.name,
      message: error.message,
      type: 'danger',
      container: 'top-right',
      dismiss: {
        duration: 5000,
        pauseOnHover: true,
        showIcon: true,
      },
    });
  } finally {
    dispatch(fetchProjectsResponse({ projects }));
  }
};

export const deleteProjectsThunk = (selectedProjectIds) => (dispatch) => {
  dispatch(deleteProjects({ projectsToDelete: selectedProjectIds }));

  return Promise.resolve();
};
