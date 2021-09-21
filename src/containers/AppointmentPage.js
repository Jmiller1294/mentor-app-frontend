import React, { useState } from 'react';
import styled from 'styled-components';

const AppointmentCon = styled.div`
  display: flex;
  height: 700px;
  width: 100%;
  margin-top: 200px;
  justify-content: center;
  align-content: center;
`
const Header = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`
const AppointmentForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f8f7f2;
  padding: 100px;
  height: 75%;
  width: 40%;
`
const Select = styled.select`
  margin-bottom: 20px;
  height: 30px;
`
const Option = styled.option`
`
const SubmitButton = styled.button`
  align-self: center;
  height: 25px;
  width: 25%;
`


const AppointmentPage = () => {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(event.target.value);
  }
  
  return (
    <AppointmentCon>
      <AppointmentForm onSubmit={(e)=> handleSubmit(e)}>
        <Header>Please set an appointment</Header>
        <label for="day-select">Choose a Day:</label>
        <Select name="days" id="day-select">
          <Option>--Please choose an option--</Option>
          <Option value="monday">Monday</Option>
          <Option value="tuesday">Tuesday</Option>
          <Option value="wednesday">Wednesday</Option>
          <Option value="thursday">Thursday</Option>
          <Option value="friday">Friday</Option>
          <Option value="saturday">Saturday</Option>
          <Option value="sunday">Sunday</Option>
        </Select>
        <label for="time-select">Choose a Time:</label>
        <Select name="times" id="time-select">
          <Option>--Please choose an option--</Option>
          <Option value="9:00AM">9:00AM</Option>
          <Option value="10:00AM">10:00AM</Option>
          <Option value="11:00AM">11:00AM</Option>
          <Option value="12:00PM">12:00PM</Option>
          <Option value="1:00PM">1:00PM</Option>
          <Option value="2:00PM">2:00PM</Option>
          <Option value="3:00PM">3:00PM</Option>
          <Option value="4:00PM">4:00PM</Option>
          <Option value="5:00PM">5:00PM</Option>
        </Select>
        <SubmitButton>Make Appointment</SubmitButton>
      </AppointmentForm>
    </AppointmentCon>
  )
}
export default AppointmentPage;