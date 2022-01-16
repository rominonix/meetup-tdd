import "./Profile.style.css";
import { useState, useEffect } from "react";
import * as apiService from "../../api/index";
import {useNavigate} from "react-router-dom"
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
  }

  
}

const Profile = () => {
  const [profile, setProfile] = useState<Profile>();
  // const [event, setEvent] = useState<Event[]>([])
  const [eventProfile, setEventProfile] = useState<Event[]>([])
  const navigate = useNavigate()
 

  const loadProfile = async () => {
    let email: any = localStorage.getItem("email");
    const res = await apiService.getProfile(email);
    
    let eventId = res?.user.eventAttend
    console.log(eventId);
    let t:any = []

    var results: number[] = await Promise.all(eventId?.map(async (event: any)=>{
      const event_response =  await apiService.getEventById(event);
      console.log(event_response);
      
      t.push(event_response)
      console.log("This, in loop", t);
      
      // console.log(res.event);
      // return res
      
    }))
    console.log("My t", t);
    
    setEventProfile(t);

    setProfile(res);
  };

  const logOut = () => {
    localStorage.removeItem('email')
    navigate("/")
    window.location.reload();
  }

  const getEventById = async () => {
    // console.log("ajajaj");
    
    let eventId = profile?.user.eventAttend

    console.log(Array.isArray(eventId));
    console.log(typeof eventId);
    
    
    console.log("holi event",eventId);
    let t:any = []
    eventId?.map(async (event)=>{
      const res =  await apiService.getEventById(event);
      t.push(res.event)
      // console.log(res.event);
      // return res
      
    })
    setEventProfile(t);
    console.log(profile);
    
    // eventId?.forEach(event => console.log(event))
    
      // console.log(event);
      
   
    // const res = await apiService.getEventById(event);
    // console.log("eventId", res);
    // eventId?.forEach(event => await apiService.getEventById(event))
    // const res = await apiService.getEventById(eventId);
    // console.log("eventId", res );
    
  }

 

  

  useEffect(() => {
    console.log("UseEffect - LoadProfile")
    loadProfile();
    // getEventById()
  }, []);

  // useEffect(()=>{
  //   console.log("UseEffect - getEventById")

  //   getEventById()
  // },[])

  // useEffect(() => {
  //   console.log("UseEffect - Empty")

  //   // console.log("this is your profile", profile);
  // }, [profile]);

  useEffect(()=>{
   console.log("Use effect, empty 2", eventProfile)
  },[eventProfile])

  return (
    <div className="profile">
      {/* <div className="profile"> */}
        <h3>{profile?.user.name}</h3>
        <h5>{profile?.user.email}</h5>
        <div className="event-attend">
          <div>
            <h2>Event attend</h2>

            <p>{profile?.user.eventAttend}</p> 
            {/* <p>{eventProfile?.title}</p> */}
            
            {/* {eventProfile.map((event)=>{
              return(
                <p>{event.id}</p>
              )
             
            })} */}
          </div>         
        </div> 
        <button type="button" onClick={logOut}>log out</button>   
      {eventProfile.map((ev)=>{
        return(
                <div> 
                <p>{ev.event.title}</p>
                </div>
              )
             
            })}
      </div>
    // </div>
  );
};

export default Profile;
