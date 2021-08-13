import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

const EventsPage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.currentUser)
  cons

  useEffect(() => {
    console.log("hello")
  }, [])


  return (
    <>
      <h1>EventsPage</h1>
      <ul>

      </ul>
    </>
  )
}
export default EventsPage;