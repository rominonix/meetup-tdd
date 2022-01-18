import "./EventList.style.css";
import * as apiService from "../../api/index";
import { useEffect, useState } from "react";
interface SearchProp {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location?: { street: string; city: string };
  availableSeats: number
  eventImg: string;
}

const EventList = ({
  id,
  title,
  description,
  date,
  time,
  availableSeats,
  eventImg,
}: SearchProp) => {
  const [eventAttend, setEventAttend] = useState("");
  const [showButton, setShowButton] = useState(false);

  const currentEvent = async () => {
    let currentId = id;
    if (localStorage.getItem("email") !== null) {
      let email: any = localStorage.getItem("email");
      console.log(`Email address exists`);
      const res = await apiService.putEventAttend(email, currentId);
      setEventAttend(res);
      setShowButton(true)
    } else {
      console.log(`Email address not found`);
    }
  };

  useEffect(() => {
    currentEvent();
  }, []);

  useEffect(() => {
    console.log("event", eventAttend);
  }, [eventAttend]);

  return (
    <div className="event-list">
      <div className="img-thumbnail">
        <img src={eventImg} alt="" />
      </div>
      <div className="details">
        <div className="date-time">
          <p> 📅 {date}</p>
          <p> 🕣 {time}</p>
          <p> 🪑 {availableSeats}</p>
        {showButton && <button className="attend-button" onClick={currentEvent}>Attend</button>}
        </div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
export default EventList;
