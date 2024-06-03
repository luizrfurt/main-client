import { axiosInstance } from "../utils/AxiosInstance";

export const termsConditions = async () => {
  try {
    const response = await axiosInstance.get("/main/terms-conditions");

    return response.data;
  } catch (err: any) {
    return err.response.data;
  }
};
