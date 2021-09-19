import React from 'react';
import styled from 'styled-components';


const AppointmentPage = () => {
  
  
  return (
    <div>
      <label for="pet-select">Choose a Day:</label>
      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Monday</option>
        <option value="cat">Tuesday</option>
        <option value="hamster">Wednesday</option>
        <option value="parrot">Thursday</option>
        <option value="spider">Friday</option>
        <option value="goldfish">Saturday</option>
        <option value="goldfish">Sunday</option>
      </select>
      <label for="pet-select">Choose a Time:</label>
      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">9:00AM</option>
        <option value="cat">10:00AM</option>
        <option value="hamster">11:00AM</option>
        <option value="parrot">12:00PM</option>
        <option value="spider">1:00PM</option>
        <option value="goldfish">2:00PM</option>
        <option value="goldfish">3:00PM</option>
        <option value="goldfish">4:00PM</option>
        <option value="goldfish">5:00PM</option>
      </select>
    </div>
  )
}
export default AppointmentPage;