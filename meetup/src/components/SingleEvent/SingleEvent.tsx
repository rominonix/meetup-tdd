import "./SingleEvent.style.css";
import Comment from '../Comment/Comment'
const SingleEvent = () => {
  return (
    <div className="single-event">
      <div>
        <h1 className="title">Event title</h1>
        <h5>hosted by</h5>
        <div>img</div>
        <p>long descr</p>
      </div>
      <div>
        <h5>date and time</h5>
        <p>location</p>
        <button>attend</button>
      </div>
      <Comment/>
    </div>
  );
};
export default SingleEvent;
