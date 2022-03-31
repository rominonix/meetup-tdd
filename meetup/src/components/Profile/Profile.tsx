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
    console.log("AA", profile?.user.eventAttend) 
    let aaaa:any = profile?.user.eventAttend

    await Promise.all(    
      aaaa.map(async (event: any) => {
        console.log(event)
        const event_response = await apiService.getEventById(event);
        eventInProfile.push(event_response);
      })
    )
    setEventProfile(eventInProfile);
    setIsLoaded(true)
    setState(true)

  }

  const loadProfile = async () => {

    try {

      let email: any = localStorage.getItem("email");
      const res = await apiService.getProfile(email);
      console.log(res);
      
      let eventId = res?.user.eventAttend;
      let eventInProfile: any = [];

      // const aa = async () => {
      // let eventInProfile: any = [];

        // eventId?.map(async (event: any) => {
        //   const event_response = await apiService.getEventById(event);
        //   eventInProfile.push(event_response);
        // })
        console.log("Nu uppdateras setProfile")
        setProfile(res);
        // await loadEvents()
        // setEventProfile(eventInProfile);

        // return eventInProfile
      // }
      // let bb: any = await aa()
      // console.log(bb)
      // // let results: number[] = await Promise.all(
      // // await Promise.all(
      //   eventId?.map(async (event: any) => {
      //     const event_response = await apiService.getEventById(event);
      //     eventInProfile.push(event_response);
      //   })
      // // );
      // console.log(eventInProfile);
  
      // setEventProfile(eventInProfile);
      // setEventProfile(bb);


    }
    catch (error){
      console.log(error)
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
    setIsLoaded(true)
    setState(true)


  };

  useEffect(() => {
    // console.log("initial useEffect")
    loadProfile();
  },[]);

  useEffect(() => {
    console.log("Nu körs useEffect loadEvents")

    loadEvents();
  }, [profile,state,isLoaded]);

  return (
    <div className="profile">
      <div className="profile-details">
        {/* {profile ? ( */}
          <div>
            <h3>{profile?.user.name}</h3>
            <h4>{profile?.user.email}</h4>
          </div>
        {/* ) : (
          <p> loading user profile </p>
        )} */}
        <div>
          <button className="log-out" type="button" onClick={logOut}>
            Log out
          </button>
        </div>
      </div>
      <h3>Events you are going to attend 🎉 </h3>
      <div className="event-attend">
        {state && eventProfile.map((event,index) => {
          return (
            <div className="event-profile" key={index}>
              <h4 className="title"> {event.title}</h4>
              <div className="date-time-profile">
                <p> 📅 {event.date}</p>
                <p> 🕣 {event.time}</p>
                <button
                  className="you-go-button"
                  onClick={() => {
                    console.log("not attend", event.id)
                    notAttendFromProfile(event.id);
                   window.location.reload();
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
