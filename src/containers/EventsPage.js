import React, { useEffect, useState } from 'react';
import Event from '../components/event';

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
        {events.map(event => 
        <li key={event.id}>
          <Event event={event}></Event>
        </li>
        )}
      </ul>
    </>
  )
}
export default EventsPage;