import React from 'react';

const Event = ({ event }) => {
  return(
    <div>
      <h3>{event.name}</h3><br></br>
      {event.date}<br></br>
      {event.time}<br></br>
      {event.location}<br></br>
      {event.description}<br></br>
      {event.likes} likes<br></br>
    </div>
  )
}
export default Event;