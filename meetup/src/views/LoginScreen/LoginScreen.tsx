import Login from "../../components/Login/Login";
import "./LoginScreen.style.css";
// import Profile from '../../components/Profile/Profile'
// import NewEventForm from '../../components/NewEventForm/NewEventForm';

const LoginScreen = () => {
  return (
    <div className="login-screen">
      <h1>Sign In</h1>
      <Login />
      {/* <Profile/>
      <NewEventForm/> */}
    </div>
  );
};

export default LoginScreen;
