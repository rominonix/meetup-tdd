import { useState } from "react";
import * as apiService from "../../api/index";
import "./NewEventForm.css";

const NewEventForm = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventLocation, setEventLocation] = useState({});
  const [onlineEntered, setOnlineEntered] = useState("");
  const [eventSeats, setEventSeats] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventStreet, setEventStreet] = useState("");
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage]= useState(false)

  const postNewEvent = async () => {
    let email: any = localStorage.getItem("email");
    const res = await apiService.getProfile(email);
    const userId = res.user.id;
    if( eventTitle === "" || eventCity === "" || eventDate === "" || eventTime ==="" || eventDescription === "" || eventImage ==="" || eventSeats ==="" || onlineEntered === ""){
      setErrorMessage(true)

    } else {

      const newEvent = await apiService.postNewEvent(
        userId,
        eventTitle,
        eventDescription,
        eventDate,
        eventTime,
        eventLocation,
        eventCity,
        eventStreet,
        eventImage,
        +eventSeats,
        onlineEntered
      );
      setMessage(true);
      return newEvent;
    }

  };

  const clearForm = () => {
    setEventTitle("");
    setEventDate("");
    setEventTime("");
    setOnlineEntered("");
    setEventCity("");
    setEventStreet("");
    setEventDescription("");
    setEventSeats("");
    setEventImage("");
    setEventLocation({});
  };

  return (
    <div className="new-event">
      <div className="new-event-form">
        <h1 className="event-title">Create New Event</h1>

        <div className="input-container">
          <label className="label-info label-title" htmlFor="title">
            <span>*</span> Title
          </label>
          <input
            className="input-title"
            type="text"
            placeholder="title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        <div className="event-form">
          <div>
            <label className="label-info" htmlFor="date">
              <span>*</span> Date format yyyy-mm-dd{" "}
            </label>
            <input
              className="input-new-event input-second-section"
              type="text"
              placeholder="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <div className="event-input">
            <label className="label-info" htmlFor="time">
              <span>*</span> Time format 00:00
            </label>
            <input
              className="input-new-event"
              type="text"
              placeholder="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </div>
          <div>
            <label className="label-info" htmlFor="event type">
              <span>*</span> Event type: digital or in person
            </label>
            <select
              className="input-new-event "
              name="online"
              value={onlineEntered}
              id=""
              onChange={(e) => setOnlineEntered(e.target.value)}
            >
              <option value="2">Any type</option>
              <option value="1">Digital event</option>
              <option value="0">In person</option>
            </select>
          </div>
        </div>
        <div className="event-form">
          <div>
            <label className="label-info" htmlFor="city">
              <span>*</span> City
            </label>
            <input
              className="input-new-event"
              type="text"
              placeholder="city"
              value={eventCity}
              onChange={(e) => setEventCity(e.target.value)}
            />
          </div>
          <div>
            <label className="label-info" htmlFor="street">
              Street
            </label>
            <input
              className="input-new-event"
              type="text"
              placeholder="street"
              value={eventStreet}
              onChange={(e) => setEventStreet(e.target.value)}
            />
          </div>
          <div>
            <label className="label-info" htmlFor="available seats">
              <span>*</span> Available seats
            </label>
            <input
              className="input-new-event"
              type="text"
              placeholder="seats"
              value={eventSeats}
              onChange={(e) => setEventSeats(e.target.value)}
            />
          </div>
        </div>
        <div className="input-container">
          <label className="label-info label-title" htmlFor="image">
            <span>*</span> Image link
          </label>
          <input
            className="input-title"
            type="text"
            placeholder="image link"
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
          />
        </div>

        <div>

        <label className="label-info label-title" htmlFor="description">
          <span>*</span> Event description
        </label>
        <textarea
          name="description"
          id=""
          placeholder="Event description"
          className="description-textarea"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        ></textarea>
        <p className="label-info label-title">
          <span>* required fields</span>
        </p>
        </div>

        {message && (
          <div className="modal">
            <div className="message">You added a new event! 🎉 </div>
            <button className="close-button" onClick={() => setMessage(false)}>X</button>
          </div>
        )}

        { errorMessage && (
          <div className="modal">
          <div className="message">Oh no 😱!! fill in the required fields and try again! </div>
          <button className="close-button" onClick={() => setErrorMessage(false)}>X</button>
        </div>
        )}
        <button
          className="login-button new-form-button"
          onClick={() => {
            postNewEvent();
           
            clearForm();
          }}
        >
          Add a new event
        </button>
      </div>
    </div>
  );
};

export default NewEventForm;
