import { axiosInstance } from "../utils/AxiosInstance";

export const login = async (user: { login: string; password: string }) => {
  try {
    const response = await axiosInstance.post("/main/auth/login", {
      login: user.login,
      password: user.password,
    });

    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export const register = async (user: {
  name: string;
  email: string;
  login: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post("/main/auth/register", {
      name: user.name,
      email: user.email,
      login: user.login,
      password: user.password,
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
