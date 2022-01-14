import "./EventList.style.css";
// import { useEffect, useState } from "react";
// import * as apiService from "../../api/index";
// import SearchEvent from "../SearchEvent/SearchEvent";
// import { useSelector } from "react-redux";
// import { getEventSelector } from "../../store/slice/event.slice";
// import { useAppSelector, useAppDispatch } from '../../store/store.hooks'
// import { getEvents } from '../../api/index';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location?: { street: string; city: string };
  reviews: number[];
  digitalEvent: boolean;
  availableSeats: number;
  UserId: string;
  eventImg: string;
}

interface SearchProp {
  title: string;
  description: string;

  date: Date;
  time: string;
  location?: { street: string; city: string };
  // reviews?: number[];
  // digitalEvent: boolean;
  // availableSeats: number;
  // UserId?: string;
  eventImg: string;
}

const EventList = ({
  title,
  description,
  date,
  time,
  eventImg,
}: SearchProp) => {
  return (
    <div className="event-list">
      <div className="img-thumbnail">
        <img src={eventImg} alt="" />
      </div>
      <div className="details">
        <div className="date-time">
          <p> 📅 {date}</p>
          <p> ⌚ {time}</p>
        </div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
export default EventList;
