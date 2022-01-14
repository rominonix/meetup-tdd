import React from "react";
import { useEffect, useState } from "react";

import SearchEvent from "../../components/SearchEvent/SearchEvent";
import "./Hero.style.css";
import * as apiService from "../../api/index";
// import img from '../../assets/meetup-background.jpg'

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface Event {
//     id: string;
//     title: string;
//     description: string;
//     date: Date;
//     time: string;
//     location?: { street: string; city: string };
//     reviews: number[];
//     digitalEvent: boolean;
//     availableSeats: number;
//     UserId: string;
//     eventImg: string;
//   }

const Hero = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [events, setEvents] = useState<Event[]>([]);
//   const loadUser = async () => {
//     const res = await apiService.getUsers();
//     setUsers(res.data);
//   };

//   const loadEvent = async () => {
//     const res = await apiService.getEvents();
//     setEvents(res.data);
//   };
//   useEffect(() => {
//     loadUser();
//   }, []);

//   useEffect(() => {
//     loadEvent();
//   });

  return (
    // <div className="hero" style={{ backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat"}}>
        <div className="hero">
      <h1>What do you want to do?</h1>
    

      
    </div>
  );
};

export default Hero;
