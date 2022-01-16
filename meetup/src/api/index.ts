import axios from "axios";

export const getUsers = async (
  emailEntered: string,
  passwordEntered: string
) => {
  try {
    const response = await axios.get("http://localhost:4000/api/users");

    return response.data;
  } catch (error) {
    return [];
  }
};

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

export const putEventAttend = async (email:string, currentId:string) => {
  try {
    const response = await axios.put("http://localhost:4000/api/attend/event", { email: email, eventAttend: currentId});
    console.log("soy response from index.ts", response);
    
    return response.data;
  } catch (error) {
    return [];
  }
};


export const getEvents = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/event");
    return await response.data;
  } catch (error) {
    return [];
  }
};

export const getEventById = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/event/${id}`, {params: {id: id}});
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

export const getProfile = async (email:string) => { 
  try {
    const response = await axios.get(
      `http://localhost:4000/api/users/${email}`, {params: {email: email}}
    );  
    return response.data;
  } catch (error) {
    return [];
  }
};
