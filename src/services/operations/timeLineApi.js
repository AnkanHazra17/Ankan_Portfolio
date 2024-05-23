import toast from "react-hot-toast";
import { timeLineEndpoints } from "../apiURL";
import { apiConnector } from "../apiconnector";

const { ADD_TIMELINE, GET_ALL_TIMELINES } = timeLineEndpoints;

export async function addTimeLine(data) {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", ADD_TIMELINE, data);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success(response.data.message);
  } catch (error) {
    console.log(error);
    toast.error("Failed To Upload New Time Line");
  } finally {
    toast.dismiss(toastId);
  }
}

export async function fetchAllTimeLines() {
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_TIMELINES);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data?.timeLines;
  } catch (error) {
    console.log(error);
  }

  return result;
}
