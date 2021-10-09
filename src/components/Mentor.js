import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import breakpoint from '../commons/breakpoints';


const ListItem = styled.li`
  display: flex;
  height: 270px;
  border: 1px solid #f8f7f2;
  padding: 35px;
  padding-bottom: 30px;

  @media only screen and (${breakpoint.device.phone}){
    margin-bottom: 0;
    height: 210px;
    font-size: 12px;
    padding: 10px;
  }
`
const AvatarImage = styled.img`
  height: 50%;
  flex-basis: 7%;
  border-radius: 50%;
  margin-right: 30px;

`
const Header = styled.h2`
  height: 10px;
  display: block;
`
const Bio = styled.p`
  display: block;
`
const InfoContainer = styled.div`
  height: 100px;
  line-height: 1.5;
`
const AddButton = styled.button`
  background-color: orange;
  border-radius: 20px;
  height: 35%;
  width: 80%;
  font-size: 16px;

  @media only screen and (${breakpoint.device.phone}){
    height: 30px;
    width: 140px;
  }
`

const Mentor = ({ mentor }) => {
  const user = useSelector(state => state.currentUser)

  const createBooking = (mentor, userId) => {
    fetch(`https://mentor-app-api.herokuapp.com/users/${userId}/bookings`, {
      method: "POST",
      //credentials: "include",
      headers: { 
        "Content-type": "application/json",
      },
      body: JSON.stringify(mentor)
    })
    .then(resp => resp.json())
    .then(mentor => console.log(mentor))
}
  
  const handleClick = () => {
    console.log(user)
    createBooking(mentor, user.user.id);
  }

  return (
    <ListItem key={mentor.id}>
      <AvatarImage alt="avatar" src={mentor.avatar}></AvatarImage>
      <InfoContainer>
        <Header>{mentor.name}</Header>
        <Bio>
          {mentor.title} <br></br>
          Industry: {mentor.field} <br></br>
          Email: {mentor.email} <br></br>
          City: {mentor.city} <br></br>
          Age: {mentor.age}
        </Bio>
        {user !== null ? <AddButton onClick={() => handleClick()}>Book Mentor</AddButton> : null}
      </InfoContainer>
    </ListItem>
  )
}
export default Mentor;
