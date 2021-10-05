import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Card } from '../styled/Card';


const AvatarImage = styled.img`
  height: 35%;
  width: 30%;
  min-width: 120px;
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
  flex-direction: column;
  overflow-wrap: break-word;
  height: 200px;
  width: 60%;
`
const LabelCon = styled.div`
  flex-direction: column;
  height: 200px;
  width: 40%;
  line-height: 2.5;
`
const Title = styled.span`
  align-self: center;
  font-size: 15px;
`
const Button = styled.button`
  height: 14%;
  width: 60%;
  border-radius: 25px;
  background-color: #FF9531;
  margin: 0 auto;
  min-height: 40px;
  margin-bottom: 10px;
`
const InfoCon = styled.div`
  margin-top: 20px;
  height: 200px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  line-height: 2.5;
`

const Email = styled.span`
  height: 30px;
  margin-top: 10px;
  line-height: 1;
`
const E = styled.span`
  
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
    <Card height={'500px'} padding={'15px'}>
      <AvatarImage src={mentor.avatar}/>
      <Header>{mentor.name}</Header>
        <Title>{mentor.title}</Title>
        <InfoCon>
          <LabelCon>
            Industry:<br/>
            <E>Email:</E><br/>
            City:<br/>
            Age:<br/>
          </LabelCon>
          <Bio>
            {mentor.field}<br/>
            <Email>{mentor.email}</Email>
            {mentor.city}<br/>
            {mentor.age}<br/>
          </Bio>
        </InfoCon>
        <Button onClick={(e) => handleClick(e)}>Make Appointment</Button>
    </Card>
  )
}
export default MentorCard;