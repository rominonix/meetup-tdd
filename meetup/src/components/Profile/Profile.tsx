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
  event: {
    id: string;
    title: string;
    description: string;
    date: Date;
    time: string;
    location?: { street: string; city: string };
    availableSeats: number;
    eventImg: string;
  };
}

const Profile = () => {
  const [profile, setProfile] = useState<Profile>();
  const [eventProfile, setEventProfile] = useState<Event[]>([]);
  const [eventAttend, setEventAttend] = useState("");

  const navigate = useNavigate();

  const loadProfile = async () => {
    let email: any = localStorage.getItem("email");
    try {
      const res = await apiService.getProfile(email);
      let eventId = res?.user.eventAttend;
      let eventInProfile: any = [];
      let results: number[] = await Promise.all(
        eventId?.map(async (event: any) => {
          const event_response = await apiService.getEventById(event);
          eventInProfile.push(event_response);
        })
      );

      setEventProfile(eventInProfile);
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
    try {
      await apiService.notEventAttend(email, eventId);
      const res = await apiService.getProfile(email);
      setEventAttend(res?.user.eventAttend);
      setEventProfile(res?.user.eventAttend);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <div className="profile">
      <div className="profile-details">
        {profile ? (
          <div>
            <h3>{profile?.user.name}</h3>
            <h4>{profile?.user.email}</h4>
          </div>
        ) : (
          <p> loading user profile </p>
        )}
        <div>
          <button className="log-out" type="button" onClick={logOut}>
            Log out
          </button>
        </div>
      </div>
      <h3>Events you are going to attend 🎉 </h3>
      <div className="event-attend">
        {eventProfile.map((e) => {
          return (
            <div className="event-profile" key={e.event.id}>
              <h4 className="title">{e.event.title}</h4>
              <div className="date-time-profile">
                <p> 📅 {e.event.date}</p>
                <p> 🕣 {e.event.time}</p>
                <button
                  className="you-go-button"
                  onClick={() => {
                    notAttendFromProfile(e.event.id);
                    window.location.reload();
                  }}
                >
                  Not Attent
                </button>
              </div>
              <div>
                <img
                  className="profile-img"
                  src={e.event.eventImg}
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
