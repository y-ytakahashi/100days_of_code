import axios, { Method, AxiosResponse } from "axios";

export interface RequestConfig {
  ulr: string;
  method: Method;
  data?: any;
  params?: any;
}

export interface response {
  response?: AxiosResponse;
  error?: Error;
}

export const axiosClient = (config: string) => {
  return axios.create({
    baseURL: config,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
