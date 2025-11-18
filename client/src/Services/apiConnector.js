// import axios from "axios";

// export const axiosInstance = axios.create({withCredentials: true,});

// export const apiConnector = ( method, url, bodyData, headers, params ) => {
//   console.log("HEADERS", headers)
//   return axiosInstance({
//     method: `${method}`,
//     url: `${url}`,
//     data: bodyData ? bodyData : null,
//     headers: headers ? headers: {},
//     params: params ? params : null,
//   });
//   console.log("HEADERS", headers)
// };
import axios from "axios";

export const axiosInstance = axios.create({withCredentials: true});

export const apiConnector = (method, url, bodyData, headers = {}, params = {}) => {
  return axiosInstance({
    method: method,
    url: url,
    data: bodyData || null,
    headers: headers,   // <-- FIXED
    params: params,     // <-- FIXED
  });
};
