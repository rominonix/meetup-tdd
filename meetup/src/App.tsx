import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./views/HomeScreen/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import EventScreen from "./views/EventScreen/EventsScreen";
import Login from "./views/LoginScreen/LoginScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          {/* <Route path="/events/search" element={<EventScreen />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
