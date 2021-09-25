import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";


const AppointmentCon = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;   
  width: 22%;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  &:hover {
    -moz-box-shadow: 0 0 10px #777777;
    -webkit-box-shadow: 0 0 10px #777777;
    box-shadow: 0 0 10px #777777;
  }
`
const Header = styled.h3`
  height: 10px;
  align-self: center;
`
const Info = styled.p`
  display: flex;
  height: 50px;
  justify-content: center;
  align-content: center;
`
const Button = styled.button`
  display: flex;
  height: 40px;
  width: 100px;
  margin: 5px;
`
const ButtonCon = styled.div`
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
      <AppointmentCon>
        <Header>{appointment.mentor.name}</Header>
          <Info>
            Day: {appointment.day} <br></br>
            Time: {appointment.time} <br></br>
          </Info>
          <ButtonCon>
            <Button onClick={(e) => handleUpdateClick(e)}>Reschedule Appointment</Button>
            <Button onClick={(e) => handleDeleteClick(e)}>Cancel Appointment</Button>
          </ButtonCon>
      </AppointmentCon>
    )
  }
  else {
    return null
  }
  
}
export default AppointmentCard;