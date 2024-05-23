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

// Time Line Endpoints
export const timeLineEndpoints = {
  ADD_TIMELINE: BASE_URL + "/timeLine/add-timeline",
  GET_ALL_TIMELINES: BASE_URL + "/timeLine/all-timelines",
};
