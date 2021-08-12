import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addMentor } from '../../actions/userActions';


const ListItem = styled.li`
  display: flex;
  height: 270px;
  border: 1px solid #f8f7f2;
  padding: 25px;
  padding-bottom: 30px;
`
const AvatarImage = styled.img`
  display: flex;
  float: left;
  height: 100px;
  width: 5%;
  border-radius: 50px;
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
  height: 25px;
  width: 120px;
`

const Mentor = ({ mentor }) => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.currentUser)

  const handleClick = (user) => {
    dispatch(addMentor(mentor, user.id));
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
        <AddButton onClick={() => handleClick(user)}>Add Mentor</AddButton>
      </InfoContainer>
    </ListItem>
  )
}
export default Mentor;