import "./EventList.style.css";
import * as apiService from "../../api/index";
import { useEffect, useState } from "react";
import SingleEvent from "../SingleEvent/SingleEvent";

interface SearchProp {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location?: { street: string; city: string };
  availableSeats: number;
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
  const [showSingleEvent, setShowSingleEvent] = useState(false);

  const currentEvent = async () => {
    let currentId = id;
    if (localStorage.getItem("email") !== null) {
      let email: any = localStorage.getItem("email");
      console.log(`Email address exists`);
      // console.log("Current Event ID", currentId)
      // console.log("Email", email)

      const res = await apiService.putEventAttend(email, currentId);
      setEventAttend(res);
      setShowButton(true);
    } else {
      console.log(`Email address not found`);
    }
  };

  const EventDetails = () => {
    let currentId = id;
    console.log(currentId);
    setShowSingleEvent(true)
  };

  useEffect(() => {
    // currentEvent();
    if (localStorage.getItem("email") !== null) {
      setShowButton(true);
    }
  }, []);

  useEffect(() => {
    console.log("event", eventAttend);
  }, [eventAttend]);

  return (
    <div className="event-list">
        <div className="img-thumbnail">
          <img src={eventImg} alt="" onClick={EventDetails} />
        </div>
      {showSingleEvent && (
        <SingleEvent closeModal={setShowSingleEvent} />
      )}

      <div className="details">
        <div className="date-time">
          <p> 📅 {date}</p>
          <p> 🕣 {time}</p>
          <p> 🪑 {availableSeats}</p>
          {showButton && (
            <button className="attend-button" onClick={currentEvent}>
              Attend
            </button>
          )}
        </div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
export default EventList;
