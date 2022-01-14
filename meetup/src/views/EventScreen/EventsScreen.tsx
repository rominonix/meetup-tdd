import './EventScreen.style.css'
import SearchEvent from '../../components/SearchEvent/SearchEvent';



const EventScreen =()=>{
    return(
        <div className="event-screen">

        <SearchEvent />
        {/* <EventList /> */}
        {/* <SingleEvent/> */}
        </div>
    )
}

export default EventScreen