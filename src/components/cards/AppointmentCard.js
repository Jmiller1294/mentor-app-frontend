import React from "react";
import styled from "styled-components";
import { Card } from "../styled/Card";
import { useHistory } from "react-router";


const Header = styled.h3`
  height: 10px;
  align-self: center;
`
const Info = styled.p`
  display: flex;
  height: 50px;
  line-height: 1.5;
  justify-content: center;
  align-content: center;
`
const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  flex-basis: 45%;
  margin: 5px;
  background-color: #FF9531;
  border-radius: 20px;
`
const ButtonCon = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

const AppointmentCard = ({ appointment }) => {
  const history = useHistory();

  const deleteAppointment = () => {
    fetch(`http://localhost:3001/appointments/${appointment.id}`, {
      method: "DELETE",
      credentials: "include",
      headers: { 
        "Content-type": "application/json",
      }
    })
    .then(resp => resp.json())
    .then(res => console.log(res))
  }

  const handleDeleteClick = () => {
    console.log('deleted');
    deleteAppointment();
    window.location.reload(false);
  }

  const handleUpdateClick = () => {
    console.log('updated');

    const newRoute = () => {
      let path = '/appointment';
      history.push({
        pathname: path,
        state: {
          appointmentId: appointment.id,
          updated: true
        }
      });
    }
    newRoute();
  }

  if(appointment) {
    return (
      <Card height={'300px'} padding={'15px'}>
        <Header>{appointment.mentor.name}</Header>
          <Info>
            Day: {appointment.day} <br></br>
            Time: {appointment.time} <br></br>
          </Info>
          <ButtonCon>
            <Button onClick={(e) => handleUpdateClick(e)}>Reschedule Appointment</Button>
            <Button onClick={(e) => handleDeleteClick(e)}>Cancel Appointment</Button>
          </ButtonCon>
      </Card>
    )
  }
  else {
    return null
  }
  
}
export default AppointmentCard;