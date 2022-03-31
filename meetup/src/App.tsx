import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./views/HomeScreen/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Login from "./views/LoginScreen/LoginScreen";
import Profile from "./components/Profile/Profile";
import NewEventForm from "./views/NewEventForm/NewEventForm";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-event" element={<NewEventForm/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
