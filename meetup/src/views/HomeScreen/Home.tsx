// import EventList from "../../components/EventList/EventList";
import Hero from "../../components/Hero/Hero";
import SearchEvent from "../../components/SearchEvent/SearchEvent";
import "./Home.style.css";

const Home = () => {
 
  return (
    <div className="home">
      <Hero />
      <SearchEvent />
      {/* <EventList id={""} title={""} description={""} date={""} time={""} city={""} street={""} availableSeats={0} eventImg={""} UserId={""} digitalEvent={""}/> */}
    </div>
  );
};

export default Home;
