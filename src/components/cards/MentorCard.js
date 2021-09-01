import React from 'react';
import styled from 'styled-components';

const MentorCon = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;   
  width: 20%;
  margin: 10px;
  padding: 5px;
`
const AvatarImage = styled.img`
  height: 25%;
  width: 20%;
  border-radius: 50%;
  margin-right: 30px;
  align-self: center;
`
const Header = styled.h2`
  height: 10px;
  align-self: center;
`
const Bio = styled.p`
  align-self: center;
`

const MentorCard = ({ mentor }) => {
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
    </MentorCon>
  )
}
export default MentorCard;