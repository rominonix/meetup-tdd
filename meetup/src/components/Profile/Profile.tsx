import "./Profile.style.css";
import { useState, useEffect } from "react";
import * as apiService from "../../api/index";
import { useNavigate } from "react-router-dom";
interface Profile {
  user: {
    name: string;
    email: string;
    password: string;
    eventAttend: string[] | null;
    eventAttended: string[] | null;
  };
}

interface Event {
  event: {
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
  };
}

const Profile = () => {
  const [profile, setProfile] = useState<Profile>();
  const [eventProfile, setEventProfile] = useState<Event[]>([]);
  const navigate = useNavigate();

  const loadProfile = async () => {
    let email: any = localStorage.getItem("email");
    const res = await apiService.getProfile(email);

    let eventId = res?.user.eventAttend;
  
    let t: any = [];

    var results: number[] = await Promise.all(
      eventId?.map(async (event: any) => {
        const event_response = await apiService.getEventById(event);

        t.push(event_response);
        console.log("This, in loop", t);
      })
    );
    
    setEventProfile(t);

    setProfile(res);
  };

  const logOut = () => {
    localStorage.removeItem("email");
    navigate("/");
    window.location.reload();
  };

  const getEventById = async () => {
 
    let eventId = profile?.user.eventAttend;
    let t: any = [];
    eventId?.map(async (event) => {
      const res = await apiService.getEventById(event);
      t.push(res.event);
    
    });
    setEventProfile(t);
    console.log(profile);
  };

  useEffect(() => {
  
    loadProfile();
  
  }, []);


  useEffect(() => {
    console.log("Use effect, empty 2", eventProfile);
  }, [eventProfile]);

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
      <h3>Event attend</h3>
      <div className="event-attend">
       
        {eventProfile.map((e) => {
          return (
            <div className="event-profile" key={e.event.id}>
              <div className="event-profile">
                <h4>{e.event.title}</h4>
                <div className="date-time-profile">
                  <p> 📅 {e.event.date}</p>
                  <p> 🕣 {e.event.time}</p>
                </div>
                <div>
                  <img className="profile-img" src={e.event.eventImg} alt="" />
                </div>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default Profile;
