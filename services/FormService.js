import axios from "axios";

export const personalData = async (data) => {
  await axios.post(`/user/personalData`, data);
};

