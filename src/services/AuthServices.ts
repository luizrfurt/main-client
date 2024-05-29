import axios from "axios";

const credentials = {
  withCredentials: true,
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "";

export const login = async (loginValue: string, passwordValue: string) => {
  try {
    const response = await axios.post(
      `${apiUrl}/main/auth/login`,
      {
        login: loginValue,
        password: passwordValue,
      },
      credentials
    );

    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(
      `${apiUrl}/main/auth/logout`,
      {},
      credentials
    );
    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};
