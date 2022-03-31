import Hero from "../../components/Hero/Hero";
import SearchEvent from "../../components/SearchEvent/SearchEvent";
import "./Home.style.css";

const Home = () => {
 
  return (
    <div className="home">
      <Hero />
      <SearchEvent />
    </div>
  );
};

export default Home;
