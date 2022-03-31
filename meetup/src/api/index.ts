import axios from "axios";


export const postLogin = async (
  emailEntered: string,
  passwordEntered: string
) => {
  try {
    const response = await axios.post("http://localhost:4000/api/users/login", {
      email: emailEntered,
      password: passwordEntered,
    });

    return response.data;
  } catch (error) {
    return [];
  }
};

export const putEventAttend = async (email: string, currentId: string) => {
  try {
    const response = await axios.put("http://localhost:4000/api/attend/event", {
      email: email,
      eventAttend: currentId,
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

export const notEventAttend = async (email: string, currentId: string) => {
  try {
    const response = await axios.put(
      "http://localhost:4000/api/notattend/event",
      { email: email, eventAttend: currentId }
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getEventById = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/event/${id}`, {
      params: { id: id },
    });
    return await response.data;
  } catch (error) {
    return [];
  }
};

export const getAllComments = async () => {
  return await axios.get(`http://localhost:4000/api/comment/`);
};

export const getEventComments = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/comment/${id}`,
      {
        params: { id: id },
      }
    );
    return await response.data;
  } catch (error) {
    return [];
  }
};

export const createComment = async (
  eventId: string,
  userId: string,
  body: string
) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/comment/event/${eventId}/user/${userId}`,
      {
        body: body
      }
    );
    return response.data
  } catch (error) {
    return [];
  }
};
export const getEvent = async (
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

export const getProfile = async (email: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/users/${email}`,
      { params: { email: email } }
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/users/id/${id}`,
      { params: { id: id } }
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const postNewEvent = async (
  userId: string,
  title: string,
  description: string,
  date: string,
  time: string,
  location: object,
  city: string,
  street: string,
  eventImg: string,
  availableSeats: number,
  digitalEvent: string
) => {
  try {
    const response = await axios.post(
      `http://localhost:4000/api/event/${userId}`,
      {
        title,
        description,
        date,
        time,
        location: { city: city, street: street },
        eventImg,
        availableSeats,
        digitalEvent,
      }
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
