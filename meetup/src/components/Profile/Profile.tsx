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

const Profile = () => {
  const [profile, setProfile] = useState<Profile>();
  const navigate = useNavigate()
  // console.log(typeof profile);

  // console.log(Array.isArray(profile));

  const loadProfile = async () => {
    let email: any = localStorage.getItem("email");

    // console.log("mi mail", email);

    const res = await apiService.getProfile(email);
    // console.log("profile", res.user.name);

    setProfile(res);
  };

  const logOut = () => {
    localStorage.removeItem('email')
    navigate("/")
    window.location.reload();
  }

  useEffect(() => {
    loadProfile();
  }, []);

  useEffect(() => {
    console.log("this is your profile", profile);
  }, [profile]);

  return (
    <div className="profile">
      <div className="profile">
        <h3>{profile?.user.name}</h3>
        <h5>{profile?.user.email}</h5>
        <div className="event-attend">
          <div>
            <h2>Event attend</h2>
            <p>{profile?.user.eventAttend}</p>
          </div>         
        </div> 
        <button type="button" onClick={logOut}>log out</button>    
      </div>
    </div>
  );
};

export default Profile;
