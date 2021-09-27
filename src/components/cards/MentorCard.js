import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const MentorCardCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;   
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
  height: 35%;
  width: 30%;
  border-radius: 50%;
  align-self: center;
`
const Header = styled.h3`
  height: 10px;
  align-self: center;
  margin-bottom: 10px;
`
const Bio = styled.div`
  display: flex;
  line-height: 1.5;
  flex-direction: column;
  overflow-wrap: break-word;
  height: 100px;
  width: 60%;
`
const LabelCon = styled.div`
line-height: 1.5;
  flex-direction: column;
  height: 100px;
  width: 40%;
`
const Title = styled.span`
  align-self: center;
  font-size: 15px;
`
const Button = styled.button`
  height: 35px;
  width: 60%;
  border-radius: 25px;
  background-color: orange;
  margin: 0 auto;
`
const InfoCon = styled.div`
  margin-top: 20px;
  height: 60%;
  display: flex;
  flex-direction: row;
`

const MentorCard = ({ mentor }) => {
  const history = useHistory();

  const newRoute = () => { 
    let path = `/appointment`; 
    history.push({
      pathname: path,
      state: {
        data: mentor
      }
    });
  }

  const handleClick = (event, mentor) => {
    event.preventDefault();
    newRoute();
  }

  return (
    <MentorCardCon>
      <AvatarImage src={mentor.avatar}/>
      <Header>{mentor.name}</Header>
        <Title>{mentor.title}</Title>
        <InfoCon>
          <LabelCon>
            Industry:<br/>
            Email:<br/>
            <br/>
            City:<br/>
            Age:<br/>
          </LabelCon>
          <Bio>
            {mentor.field}<br/>
            {mentor.email}<br/>
            {mentor.city}<br/>
            {mentor.age}<br/>
          </Bio>
        </InfoCon>
        <Button onClick={(e) => handleClick(e)}>Make Appointment</Button>
    </MentorCardCon>
  )
}
export default MentorCard;