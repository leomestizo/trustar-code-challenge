import httpClient from 'common/utils/api/httpClient';

export const getProjects = () => httpClient.get(`/projects?api_key=${process.env.API_KEY}`);

export const getProjectById = (projectId) => (
  httpClient.get(`/projects/${projectId}?api_key=${process.env.API_KEY}`)
);
