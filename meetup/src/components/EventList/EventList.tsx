import "./EventList.style.css";
import * as apiService from "../../api/index";
import { useEffect, useState } from "react";
import SingleEvent from "../SingleEvent/SingleEvent";
interface EventListProp {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  city: string;
  street: string;
  location?: { street: string; city: string };
  availableSeats: number;
  eventImg: string;
  UserId: string;
  digitalEvent: string;
}

const EventList = ({
  id,
  title,
  description,
  date,
  time,
  location,
  city,
  street,
  availableSeats,
  eventImg,
  UserId,
  digitalEvent,
}: EventListProp) => {
  const [eventAttend, setEventAttend] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showSingleEvent, setShowSingleEvent] = useState(false);
  const [showNotButton, setShowNotButton] = useState(false);

  const attendToEvent = async () => {
    let currentId = id;
    if (localStorage.getItem("email") !== null) {
      let email: any = localStorage.getItem("email");
      const response = await apiService.putEventAttend(email, currentId);
      setEventAttend(response);
      setShowButton(false);
      setShowNotButton(true);
    } else {
      console.log(`Email address not found`);
    }
  };

  const notAttend = async () => {
    setShowNotButton(false);
    setShowButton(true);
    let currentId = id;
    if (localStorage.getItem("email") !== null) {
      let email: any = localStorage.getItem("email");
      const res = await apiService.notEventAttend(email, currentId);
      setEventAttend(res);
    } else {
      console.log(`You not attend`);
    }
  };

  const loadUserAttendEvent = async () => {
    let getStorage = localStorage.getItem("email");
    //@ts-ignore
    const res = await apiService.getProfile(getStorage);
    for (let index = 0; index < res.user.eventAttend.length; index++) {
      let currentId = id;
      if (res.user.eventAttend[index] === currentId) {
        setShowNotButton(true);
        setShowButton(false);
      }
    }
  };

  const EventDetails = () => {
    setShowSingleEvent(true); 
  };

  useEffect(() => {
    if (localStorage.getItem("email") !== null) {
      setShowButton(true);
      loadUserAttendEvent();
    }
  }, []);

  useEffect(() => {}, [eventAttend]);

  return (
    <div className="event-list">
      <div className="img-thumbnail">
        <img src={eventImg} alt="" onClick={EventDetails} />
      </div>

      {showSingleEvent && (
        <SingleEvent
          closeModal={setShowSingleEvent}
          id={id}
          title={title}
          description={description}
          //@ts-ignore
          date={date}
          time={time}
          city={city}
          street={street}
          digitalEvent={digitalEvent}
          availableSeats={availableSeats}
          eventImg={eventImg}
          UserId={UserId}
        />
      )}

      <div className="details">
        <div className="date-time">
          <p> 📅 {date}</p>
          <p> 🕣 {time}</p>
          <p> 🪑 {availableSeats}</p>
          <p> 🏙 {city}</p>

          {showButton && (
            <button
              className="attend-button"
              id={id}
              onClick={() => {
                attendToEvent();
              }}
            >
              Attend
            </button>
          )}

          {showNotButton && (
            <button
              className="you-go-button"
              onClick={() => {
                notAttend();
              }}
            >
              Not Attend
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
