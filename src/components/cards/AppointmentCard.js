import React from "react";
import styled from "styled-components";

const AppointmentCon = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;   
  width: 22%;
  margin: 10px;
  padding: 15px;
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

const AppointmentCard = ({ appointment }) => {
  console.log(appointment);
  return (
    <AppointmentCon>
      <Header>{appointment.mentor.name}</Header>
        <Info>
          Day: {appointment.day} <br></br>
          Time: {appointment.time} <br></br>
        </Info>
    </AppointmentCon>
  )
}
export default AppointmentCard;