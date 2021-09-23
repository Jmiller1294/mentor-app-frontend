import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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


const AppointmentPage = (props) => {
  const [dayOption, setDayOption] = useState(days[0]);
  const [timeOption, setTimeOption] = useState(times[0]);
  const user = useSelector(state => state.currentUser);
  const history = useHistory();
  const appointmentId = props.location.state.appointmentId;

  const addAppointment = (userId, data) => {
    fetch(`http://localhost:3001/users/${userId}/appointments`, {
      method: 'POST',
      credentials: "include",
      headers: { 
        "Content-Type": "application/json",
      },
        body: JSON.stringify(Object.assign(user, data, { mentor: props.location.state.data}))
    })
    .then(resp => resp.json())
    .then(res => console.log(res))
    .catch((e) => console.log(e))
  }
   
  const updateAppointment = (data) => {
    console.log(appointmentId)
    fetch(`http://localhost:3001/appointments/${appointmentId}`, {
      method: "PATCH",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(res => console.log(res))
    .catch((e) => console.log(e))
  }
  
  
  
  const handleSubmit = (event) => {
    let obj = { day: dayOption.value, time: timeOption.value };

    const newRoute = () => { 
      let path = `/accounts`; 
      history.push(path);
    }
    event.preventDefault();
    if(props.location.state.updated === true) {
      console.log('update');
      updateAppointment(obj);
    }
    else {
      console.log('added');
      addAppointment(user.id, obj);
    }
    newRoute();
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
        <label htmlFor="day-select">Choose a Day:</label>
        <Select 
          value={dayOption}
          onChange={(e) => handleDayChange(e)}
          options={days}
        />
        <label htmlFor="time-select">Choose a Time:</label>
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