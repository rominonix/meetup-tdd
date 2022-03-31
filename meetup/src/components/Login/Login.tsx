import "./Login.style.css";
import { useState, useEffect } from "react";
import * as apiService from "../../api/index";
import { useNavigate } from "react-router-dom";

interface Login {
  // name: string;
  email: string;
  password: string;
}

interface Profile {
  // name: string;
  email: string;
  password: string;
  eventAttend: string[];
  eventAttended: string[];
}

const Login = () => {
  let navigate = useNavigate();
  const [login, setLogin] = useState<Login[]>([]);
  const [emailEntered, setEmailEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");
  const [profile, setProfile] = useState<Profile[]>([]);

  const loadLogin = async () => {
    try {
      const res = await apiService.postLogin(emailEntered, passwordEntered);
      if ("user" in res) {
        localStorage.setItem("email", res.user.email);
        const response = await apiService.getProfile(res.user.email);
        setProfile(response);
        navigate("/");
        window.location.reload();
      }
      setLogin(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [login]);

  return (
    <div className="login">
      <input
        className="input-login"
        type="text"
        placeholder="Email"
        onChange={(e) => setEmailEntered(e.target.value)}
      />
      <input
        className="input-login"
        type="text"
        placeholder="Password"
        onChange={(e) => setPasswordEntered(e.target.value)}
      />
      <button
        className="login-button"
        type="button"
        onClick={() => {
          loadLogin();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
