import toast from "react-hot-toast";
import { projectEndpoints } from "../apiURL";
import { apiConnector } from "../apiconnector";

const { ADD_PROJECT, GET_ALL_PROJECTS } = projectEndpoints;

export async function addProject(data) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", ADD_PROJECT, data, {
      "Content-Type": "multipart/form-data",
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
  }
  toast.dismiss(toastId);
}

export async function getAllProjects() {
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_PROJECTS);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.projects;
  } catch (error) {
    console.log(error);
  }
  return result;
}
