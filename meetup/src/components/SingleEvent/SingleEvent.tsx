import "./SingleEvent.style.css";
import Comment from '../Comment/Comment'
interface Props {
  closeModal: any;
}

const SingleEvent = ({closeModal}: Props) => {
  return (
    <div className="modal">

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
    <button className="modal-close-button" onClick={() => closeModal(false)}>
        <h4>X</h4>
      </button>
    </div>
  );
};
export default SingleEvent;
