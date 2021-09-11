import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { createEventRegistration } from '../actions/userActions';
import styled from 'styled-components';
import { Grid, Col, Row } from '../components/styled/Grid';

const FormCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  margin: 0 300px;
`
const InputCon = styled.div`
  display: flex;
  width: 450px;
  height: 20%;
  margin-bottom: 20px;
  justify-content: center;
`
const FormInput = styled.input`
  height: 60px;
  width: 80%;
  margin: 0 10px;
`
const Button = styled.button`
  background-color: orange;
  height: 10%;
  width: 10%;
  border-radius: 25px;
`

const EventRegistration = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser);
  const event = props.location.state.data;
  const [registrationInfo, setRegistrationInfo] = useState({
    first: '',
    last: '',
    email: '',
    phone: ''
  });

  const createEventRegistration = (userId, event) => {
    fetch(`http://localhost:3001/users/${userId}/event_registrations`, {
      method: "POST",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
        body: JSON.stringify(event)
    })
    .then(resp => resp.json())
    .then(event => console.log(event))
  }
  
  const deleteEventRegistration = (userId, eventId) => {
    fetch(`http://localhost:3001/users/${userId}/event_registrations/${eventId}`, {
      method: "DELETE",
    })
  }

  const handleInputChange = (event) => {
    setRegistrationInfo({...registrationInfo, [event.target.name]: event.target.value})
  }

  const handleClick = (e) => {
    e.preventDefault();
    createEventRegistration(user.id, event);
  }
  console.log(props);

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <FormCon>
            <EventForm>
              <h2>Contact Information</h2>
              <InputCon>
                <FormInput onChange={handleInputChange} type="text" name="first" value={registrationInfo.first} placeholder="First Name" />
                <FormInput onChange={handleInputChange} type="text" name="last" placeholder="Last Name" />
              </InputCon>
              <InputCon>
                <FormInput onChange={handleInputChange} type="text" name="email" placeholder="Email" />
                <FormInput onChange={handleInputChange} type="text" name="phone" placeholder="Phone Number" />
              </InputCon>
              <Button onClick={(e) => handleClick(e) }>Register</Button>
            </EventForm>
          </FormCon>
        </Col>
      </Row>
    </Grid>
  )
}
export default EventRegistration;