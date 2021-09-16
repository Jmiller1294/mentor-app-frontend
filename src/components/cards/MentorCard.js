import React from 'react';
import styled from 'styled-components';

const MentorCon = styled.div`
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
const AvatarImage = styled.img`
  height: 25%;
  width: 20%;
  border-radius: 50%;
  margin-right: 30px;
  align-self: center;
`
const Header = styled.h3`
  height: 10px;
  align-self: center;
`
const Bio = styled.p`
  align-self: center;
`
const Button = styled.button`
  height: 35px;
  width: 60%;
  border-radius: 25px;
  background-color: orange;
  margin: 0 auto;
`

const MentorCard = ({ mentor }) => {

  const handleClick = (event, mentor) => {
    event.preventDefault();
    
  }

  return (
    <MentorCon>
      <AvatarImage src={mentor.avatar}/>
      <Header>{mentor.name}</Header>
        <Bio>
          {mentor.title} <br></br>
          Industry: {mentor.field} <br></br>
          Email: {mentor.email} <br></br>
          City: {mentor.city} <br></br>
          Age: {mentor.age}
        </Bio>
        <Button onClick={(e) => handleClick(e)}>Make Appointment</Button>
    </MentorCon>
  )
}
export default MentorCard;