import axios from "axios";

export const serverUrl = "https://roam-safe.co.in/api";
// export const serverUrl = "http://16.171.151.173/api";
// export const serverUrl = "http://192.168.1.11:80/api";

export const postLoginApi = async (endPoint, value) => {
  try {
    const postRes = await axios.post(serverUrl + endPoint, value);
    return postRes.data;
  } catch (error) {
    return { error };
  }
};