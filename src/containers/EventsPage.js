import React, { useEffect, useState } from 'react';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/events')
    .then(resp => resp.json())
    .then(data => setEvents(data))
    .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {events.map(({ name, date, description}) => 
          <li>
            {name}<br></br>
            {date}<br></br>
            {description}
          </li>)}
      </ul>
    </>
  )
}
export default EventsPage;