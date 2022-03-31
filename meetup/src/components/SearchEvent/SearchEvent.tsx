import "./SearchEvent.style.css";
import { useState, useEffect } from "react";
import * as apiService from "../../api/index";
import EventList from "../EventList/EventList";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
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
  // const mountedRef = useRef(true)

  const loadSearchEvent = async () => {
    try{

      const response = await apiService.getEvent(
        wordEntered,
        locationEntered,
        dateEntered,
        onlineEntered
      );
  
      setSearchEvents(response);
    } catch(error){
      console.log(error);
      
    }
  };

  // useEffect(() => {
  //   loadSearchEvent();
  //   // return () => {
  //   //   mountedRef.current = false
  //   // }
  // }, [searchEvents]);

  useEffect(() => {
    loadSearchEvent();
    // return () => {
    //   mountedRef.current = false
    // }
  }, []);

  

  return (
    <div className="search-event">
      <form action="" className="search-form">
        <input
          className="input-search"
          type="text"
          id="title"
          name="title"
          value={wordEntered}
          onChange={(e) => setWordEntered(e.target.value)}
          placeholder='Search "English"'
        />
        <input
          className="input-search"
          type="text"
          id="location"
          name="location"
          value={locationEntered}
          onChange={(e) => setLocationEntered(e.target.value)}
          placeholder="Location"
        />

        <input
          className="input-search"
          type="date"
          id="date"
          name="date"
          min="2021-06-30"
          max="2022-12-31"
          value={dateEntered}
          onChange={(e) => setDateEntered(e.target.value)}
        />
        <select
          className="input-search"
          name="online"
          id=""
          onChange={(e) => setOnlineEntered(e.target.value)}
        >
          <option value="2">Any type</option>
          <option value="1">Digital event</option>
          <option value="0">In person</option>
        </select>
        <button
          className="search-button"
          type="button"
          onClick={() => {
            loadSearchEvent();
            setShowEventList(true);
          }}
        >
          Search Events
        </button>
      </form>

      {searchEvents.map((event) => {
        return (
          <EventList
            key={event.id}
            id={event.id}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            availableSeats={event.availableSeats}
            //@ts-ignore
            city={event.location?.city}
            //@ts-ignore
            street={event.location?.street}
            eventImg={event.eventImg}
            UserId={event.UserId}
            digitalEvent={event.digitalEvent}
          />
        );
      })}
    </div>
  );
};

export default SearchEvent;
