import "./Profile.style.css";
import { useState, useEffect } from "react";
import * as apiService from "../../api/index";
import { useNavigate } from "react-router-dom";

interface Profile {
  user: {
    name: string;
    email: string;
    eventAttend: string[] | null;
    eventAttended: string[] | null;
  };
}
interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location?: { street: string; city: string };
  availableSeats: number;
  eventImg: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<Profile>();
  const [eventProfile, setEventProfile] = useState<Event[]>([]);
  // const [eventProfile, setEventProfile] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [state, setState] = useState(false);

  const [eventAttend, setEventAttend] = useState("");

  const navigate = useNavigate();

  const loadEvents = async () => {
    let eventInProfile: any = [];
    let eventList: any = profile?.user.eventAttend;
    try {
      await Promise.all(
        eventList.map(async (event: any) => {
          console.log(event);
          const event_response = await apiService.getEventById(event);
          eventInProfile.push(event_response);
        })
      );
    } catch (error) {
      console.log(error);
    }
    setEventProfile(eventInProfile);
    setIsLoaded(true);
    setState(true);
  };

  const loadProfile = async () => {
    try {
      let email: any = localStorage.getItem("email");
      const res = await apiService.getProfile(email);
      setProfile(res);
  
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("email");
    navigate("/");
    window.location.reload();
  };

  const notAttendFromProfile = async (eventId: string) => {
    let email: any = localStorage.getItem("email");
    await apiService.notEventAttend(email, eventId);
    const res = await apiService.getProfile(email);
    setEventAttend(res?.user.eventAttend);
    setEventProfile(res?.user.eventAttend);
    setProfile(res);
    setIsLoaded(true);
    setState(true);
  };

  useEffect(() => {
    // console.log("initial useEffect")
    loadProfile();
  }, []);

  useEffect(() => {
    // console.log("Nu körs useEffect loadEvents");

    loadEvents();
  }, [profile, state, isLoaded]);

  return (
    <div className="profile">
      <div className="profile-details">
        <div>
          <h3>{profile?.user.name}</h3>
          <h4>{profile?.user.email}</h4>
        </div>
        <div>
          <button className="log-out" type="button" onClick={logOut}>
            Log out
          </button>
        </div>
      </div>
      <h3>Events you are going to attend 🎉 </h3>
      <div className="event-attend">
        {state &&
          eventProfile.map((event, index) => {
            return (
              <div className="event-profile" key={index}>
                <h4 className="title"> {event.title}</h4>
                <div className="date-time-profile">
                  <p> 📅 {event.date}</p>
                  <p> 🕣 {event.time}</p>
                  <button
                    className="you-go-button"
                    onClick={() => {
                      console.log("not attend", event.id);
                      notAttendFromProfile(event.id);
                      //  window.location.reload();
                    }}
                  >
                    Not Attent
                  </button>
                </div>
                <div>
                  <img
                    className="profile-img"
                    src={event.eventImg}
                    alt="profile image"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Profile;
