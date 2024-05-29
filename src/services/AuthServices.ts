import { axiosInstance } from "../utils/AxiosInstance";

const credentials = {
  withCredentials: true,
};

export const login = async (loginValue: string, passwordValue: string) => {
  try {
    const response = await axiosInstance.post("/main/auth/login", {
      login: loginValue,
      password: passwordValue,
    });

    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post("/main/auth/logout");
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};
