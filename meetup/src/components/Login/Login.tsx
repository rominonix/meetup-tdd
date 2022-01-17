import "./Login.style.css";
import { useState, useEffect } from "react";
import * as apiService from "../../api/index";
import { useNavigate } from "react-router-dom";

interface Login {
  name: string;
  email: string;
  password: string;
}

interface Profile {
  name: string;
  email: string;
  password: string;
  eventAttend: string[] | null;
  eventAttended: string[] | null;
}

const Login = () => {
  let navigate = useNavigate();
  const [login, setLogin] = useState<Login[]>([]);
  const [emailEntered, setEmailEntered] = useState("");
  const [passwordEntered, setPasswordEntered] = useState("");
  const [profile, setProfile] = useState<Profile[]>([]);

  const loadLogin = async () => {
    const res = await apiService.postLogin(emailEntered, passwordEntered);
    if ("user" in res) {
      localStorage.setItem("email", res.user.email);
      const response = await apiService.getProfile(res.user.email);
      setProfile(response);
      navigate("/");
      window.location.reload();
    } else {
      console.log("failed login");
    }
    setLogin(res);
  };

  useEffect(() => {
    loadLogin();
  }, []);

  return (
    <div className="login">
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmailEntered(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPasswordEntered(e.target.value)}
      />
      <button
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
