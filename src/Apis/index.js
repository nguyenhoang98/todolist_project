import AxiosService from "../Common/axiosServices";

export const getApi = (url) => {
  return AxiosService.get(url);
};
export const postApi = (url, data) => {
  return AxiosService.post(url, data);
};
export const putApi = (url, data) => {
  return AxiosService.put(url, data);
};

export const deleteApi = (url) => {
  return AxiosService.delete(url);
};
