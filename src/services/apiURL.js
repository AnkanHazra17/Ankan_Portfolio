const BASE_URL = process.env.REACT_APP_BASE_URL;

// Auth Endpoints
export const authEndpoints = {
  LOGIN_API: BASE_URL + "/auth/log-in",
};

// Project Endpoints
export const projectEndpoints = {
  ADD_PROJECT: BASE_URL + "/project/add-project",
  GET_ALL_PROJECTS: BASE_URL + "/project/all-projects",
};
