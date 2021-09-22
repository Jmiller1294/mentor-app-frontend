import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

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
  height: 600px;
  width: 40%;
`
const SubmitButton = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 45px;
  width: 100px;
  margin-top: 30px;
`


const days = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
  { value: 'Sunday', label: 'Sunday' }
]

const times = [
  { value: '9:00AM', label: '9:00AM' },
  { value: '10:00AM', label: '10:00AM' },
  { value: '11:00AM', label: '11:00AM' },
  { value: '12:00PM', label: '12:00PM' },
  { value: '1:00PM', label:  '1:00PM' },
  { value: '2:00PM', label:  '2:00PM' },
  { value: '3:00PM', label:  '3:00PM' },
  { value: '4:00PM', label:  '4:00PM' },
  { value: '5:00PM', label:  '5:00PM' }
]


const AppointmentPage = () => {
  const [dayOption, setDayOption] = useState(days[0]);
  const [timeOption, setTimeOption] = useState(times[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dayOption.value, timeOption.value);
    
  }

  const handleDayChange = event => {
    setDayOption(event);
  }

  const handleTimeChange = event => {
    setTimeOption(event);
  }
  
  return (
    <AppointmentCon>
      <AppointmentForm onSubmit={(e) => handleSubmit(e)}>
        <Header>Please set an appointment</Header>
        <label for="day-select">Choose a Day:</label>
        <Select 
          value={dayOption}
          onChange={(e) => handleDayChange(e)}
          options={days}
        />
        <label for="time-select">Choose a Time:</label>
        <Select 
          value={timeOption}
          onChange={(e) => handleTimeChange(e)}
          options={times}
        />
        <SubmitButton>Make Appointment</SubmitButton>
      </AppointmentForm>
    </AppointmentCon>
  )
}
export default AppointmentPage;