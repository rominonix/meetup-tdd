const NewEventForm =()=>{
    return(
        <div className="event-form">
            <h1>New Event</h1>
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="date"/>
            <input type="text" placeholder="time"/>
            <input type="text" placeholder="location"/> 
            <input type="text" placeholder="type"/>
            <input type="text" placeholder="seats"/>
            <input type="text" placeholder="image link"/>
            <textarea name="description" id="" placeholder="description"></textarea>
            <button>Create</button>
        </div>
    )
}

export default NewEventForm