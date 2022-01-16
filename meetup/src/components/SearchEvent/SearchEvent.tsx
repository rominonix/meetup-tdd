import "./SearchEvent.style.css";
import { useState, useEffect } from "react";
import * as apiService from "../../api/index";
import EventList from "../EventList/EventList";

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location?: { street: string; city: string };
  reviews: number[];
  digitalEvent: string;
  availableSeats: number;
  UserId: string;
  eventImg: string;
}

const SearchEvent = () => {
  const [searchEvents, setSearchEvents] = useState<Event[]>([]);
  const [wordEntered, setWordEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");
  const [onlineEntered, setOnlineEntered] = useState("");
  const [locationEntered, setLocationEntered] = useState("");
  const [showEventList, setShowEventList] = useState(false);

  const loadSearchEvent = async () => {
    const res = await apiService.getSearch(
      wordEntered,
      locationEntered,
      dateEntered,
      onlineEntered
    );
    setSearchEvents(res);
  };

  useEffect(() => {
    loadSearchEvent();
  }, []);

  useEffect(() => {
    console.log("This is events filter", searchEvents);
  }, [searchEvents]);

  return (
    <div className="search-event">
      <form action="" className="search-form">
        <input
          type="text"
          id="title"
          name="title"
          value={wordEntered}
          onChange={(e) => setWordEntered(e.target.value)}
          placeholder='Search "English"'
        />
        <input
          type="text"
          id="location"
          name="location"
          value={locationEntered}
          onChange={(e) => setLocationEntered(e.target.value)}
          placeholder="Location"
        />

        <input
          type="date"
          id="date"
          name="date"
          min="2021-06-30"
          max="2022-12-31"
          value={dateEntered}
          onChange={(e) => setDateEntered(e.target.value)}
        />
        <select
          name="online"
          id=""
          onChange={(e) => setOnlineEntered(e.target.value)}
        >
          <option value="2">any type</option>
          <option value="1">Digital event</option>
          <option value="0">In person</option>
        </select>
      </form>
      <button
        type="button"
        onClick={() => {
          loadSearchEvent();
          setShowEventList(true);
        }}
      >
        Search Events
      </button>

      {searchEvents.map((event) => {
        return (
          showEventList && (
            <EventList
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              eventImg={event.eventImg}
            />
          )
        );
      })}
    </div>
  );
};

export default SearchEvent;
