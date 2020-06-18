import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projectList: [],
  isFetchingProjects: false,
};

const slice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    fetchProjectsRequest: (state) => {
      state.isFetchingProjects = true;
    },
    fetchProjectsResponse: (state, action) => {
      state.isFetchingProjects = false;
      state.projectList = action.payload.projects;
    },
    deleteProjects: (state, action) => {
      // `projectsToDelete` contains the IDs of the projects to delete. I decided
      // to use this name because is shorter.
      const { projectsToDelete } = action.payload;

      state.projectList = state.projectList.filter((project) => (
        !projectsToDelete.includes(project.id)
      ));
    },
  },
});

export default slice;
