import React from 'react';
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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('clicked');
  }
  
  return (
    <AppointmentCon>
      <AppointmentForm>
        <Header>Please set an appointment</Header>
        <label for="pet-select">Choose a Day:</label>
        <Select name="pets" id="pet-select">
          <Option value="">--Please choose an option--</Option>
          <Option value="dog">Monday</Option>
          <Option value="cat">Tuesday</Option>
          <Option value="hamster">Wednesday</Option>
          <Option value="parrot">Thursday</Option>
          <Option value="spider">Friday</Option>
          <Option value="goldfish">Saturday</Option>
          <Option value="goldfish">Sunday</Option>
        </Select>
        <label for="pet-select">Choose a Time:</label>
        <Select name="pets" id="pet-select">
          <Option value="">--Please choose an option--</Option>
          <Option value="dog">9:00AM</Option>
          <Option value="cat">10:00AM</Option>
          <Option value="hamster">11:00AM</Option>
          <Option value="parrot">12:00PM</Option>
          <Option value="spider">1:00PM</Option>
          <Option value="goldfish">2:00PM</Option>
          <Option value="goldfish">3:00PM</Option>
          <Option value="goldfish">4:00PM</Option>
          <Option value="goldfish">5:00PM</Option>
        </Select>
        <SubmitButton onClick={(e)=> handleSubmit(e)}>Make Appointment</SubmitButton>
      </AppointmentForm>
    </AppointmentCon>
  )
}
export default AppointmentPage;