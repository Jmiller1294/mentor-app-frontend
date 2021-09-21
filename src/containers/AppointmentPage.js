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
  height: 75%;
  width: 40%;
`
/* const Select = styled.select`
  margin-bottom: 20px;
  height: 30px;
` */
const Option = styled.option`
`
const SubmitButton = styled.button`
  align-self: center;
  height: 25px;
  width: 25%;
`
const days = [
  { value: 'monday', label: 'Chocolate' },
  { value: 'tuesday', label: 'Strawberry' },
  { value: 'wednesday', label: 'Vanilla' },
  { value: 'thursday', label: 'Vanilla' },
  { value: 'friday', label: 'Vanilla' },
  { value: 'saturday', label: 'Vanilla' },
  { value: 'sunday', label: 'Vanilla' },
];

const times = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const AppointmentPage = () => {
  const [option, setOption] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  }

  const handleChange = option => {
    setOption({ option });
    console.log(`Option selected:`, option);
  };
  
  return (
    <AppointmentCon>
      <AppointmentForm onSubmit={(e)=> handleSubmit(e)}>
        <Header>Please set an appointment</Header>
        <label for="day-select">Choose a Day:</label>
        <Select 
          value={option}
          onChange={handleChange}
          options={days}
        />
        <label for="time-select">Choose a Time:</label>
        <Select 
          value={option}
          onChange={handleChange}
          options={times}
        />
        <SubmitButton>Make Appointment</SubmitButton>
      </AppointmentForm>
    </AppointmentCon>
  )
}
export default AppointmentPage;