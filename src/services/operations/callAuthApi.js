import toast from "react-hot-toast";
import { setAuthLoading, setToken } from "../../redux/slices/authSlice";
import { apiConnector } from "../apiconnector";
import { authEndpoints } from "../apiURL";
import { setUser, setUserLoading } from "../../redux/slices/userSlice";

const { LOGIN_API } = authEndpoints;

export function LogIn(data, setLoginModal) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setAuthLoading(true));
    dispatch(setUserLoading(true));

    try {
      const response = await apiConnector("POST", LOGIN_API, data);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success(response.data.message);
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));

      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setLoginModal(false);
    } catch (error) {
      toast.error("Login failed");
    }

    dispatch(setAuthLoading(false));
    dispatch(setUserLoading(false));
    toast.dismiss(toastId);
  };
}

export function LogOut() {
  return async (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Loged Out");
  };
}
