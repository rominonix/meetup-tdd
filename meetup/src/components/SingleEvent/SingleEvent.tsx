import "./SingleEvent.style.css";
import { useState, useEffect } from "react";
import * as apiService from "../../api/index";

interface Props {
  closeModal: any;
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  city: string;
  street: string;
  digitalEvent: string;
  availableSeats: number;
  UserId: string;
  eventImg: string;
}

interface newComment {
  id: string;
  body: string | null;
  userId: string;
  eventId: string;
}

const SingleEvent = ({
  id,
  closeModal,
  title,
  description,
  date,
  time,
  city,
  street,
  digitalEvent,
  availableSeats,
  UserId,
  eventImg,
}: Props) => {
  const [owner, setOwner] = useState("");
  const [eventStreet, setEventStreet] = useState(false);
  const [eventComment, setEventComment] = useState<newComment[]>([]);
  const [commentBody, setCommentBody] = useState("");
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const loadOwner = async () => {
    const userId = UserId;
    const res = await apiService.getUserById(userId);
    setOwner(res?.user.name);
  };

  const loadComment = async () => {
    try {
      const eventId = id;
      const commentsInEvent = await apiService.getAllComments();
      // console.log(commentsInEvent.data.comments);
      let commentEvent: any = [];
      commentsInEvent.data.comments.map((comment: any) => {
        if (comment.EventId === eventId) {
          commentEvent.push(comment);
        }
      });

      setShowCommentSection(true);
      setEventComment(commentEvent);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewComment = async () => {
    const userId = UserId;
    const eventId = id;
    if (commentBody === "") {
      setErrorMessage(true);
    } else {
      try {
        await apiService.createComment(eventId, userId, commentBody);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("email") !== null) {
      loadComment();
      loadOwner();
    }
  }, [eventComment]);

  return (
    <div className="modal">
      <div className="single-event">
        <div>
          <h1 className="title">{title}</h1>
          <img src={eventImg} className="img" />
          <p>{description}</p>
        </div>
        <div className="event-details">
          <p>
            📅 {date} &nbsp; &nbsp; 🕗 {time}
          </p>
          <p> 🤓 hosted by {owner}</p>
          <p> 🪑 available seats {availableSeats}</p>
          <p> 🏙 {city}</p>
          {eventStreet ? <p>Digital event</p> : <p>{street}</p>}
        </div>

        <div className="comment-section">
          {eventComment.map((comment) => {
            return (
              //@ts-ignore
              <div key={comment.userId} className="single-comment">
                😃
                <p className="text-comment">{comment.body} </p>
              </div>
            );
          })}

          {errorMessage && (
            <div className="modal">
              <div className="message">You comment are empty 😢! </div>
              <button className="close-button" onClick={() => setErrorMessage(false)}>X</button>
            </div>
          )}
          {showCommentSection && (
            <div className="new-comment">
              <textarea
                placeholder="comment"
                value={commentBody}
                className="textarea-comment"
                onChange={(e) => {
                  setCommentBody(e.target.value);
                }}
              ></textarea>
              <button
                className="search-button"
                onClick={() => {
                  addNewComment();
                  setCommentBody("");
                }}
              >
                Comment
              </button>
            </div>
          )}
        </div>
      </div>
      <button
        className="modal-close-button"
        onClick={() => {
          closeModal(false);
        }}
      >
        <h4>X</h4>
      </button>
    </div>
  );
};
export default SingleEvent;
