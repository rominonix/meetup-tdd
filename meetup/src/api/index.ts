import axios from "axios";


export const getUsers = async () => {
  return await axios.get("http://localhost:4000/api/users");
};

// export const getEvents = async () => {
//   return await axios.get("http://localhost:4000/api/event");
// };

export const getEvents = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/event");
    return await response.data;
  } catch (error) {
    return [];
  }
};

export const getComments = async () => {
  return await axios.get("http://localhost:4000/api/comment");
};

export const getSearch = async (
  wordEntered: string,
  locationEntered: string,
  dateEntered: string,
  onlineEntered: string
) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/event/search?title=${wordEntered}&location=${locationEntered}&date=${dateEntered}&online=${onlineEntered}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
