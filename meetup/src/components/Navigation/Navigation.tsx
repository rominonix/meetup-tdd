import "./Navigation.style.css";
import * as apiService from "../../api/index";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
interface UserName {
  user: {
    name: string;
  };
}

const Navigation = () => {
  const [menu, setMenu] = useState(true);
  const [profile, setProfile] = useState<UserName>();

  const loadProfile = async () => {
    let email: any = localStorage.getItem("email");
    try {
      const response = await apiService.getProfile(email);
      setProfile(response);
    } catch (error) {
      console.log(error);
    }
  };

  const changeMenu = () => {
    if (localStorage.getItem("email") !== null) {
      setMenu(false);
    }
  };

  useEffect(() => {
    changeMenu();
    loadProfile();
  }, [menu]);

  return (
    <div>
      <div className="navigation">
        <Link to="/" className="logo">
          <h2>MeetUp 🎉 </h2>
        </Link>
        <nav>
          {menu ? (
            <ul>
              <li>
                <Link to="/login" className="link-sign-in">
                  Sign In 🔒
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/new-event" className="link-new-event">
                  Create Event 📌
                </Link>
              </li>
              <li>
                <Link to="/profile" className="link-profile">
                  {profile?.user.name} 🥳
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
