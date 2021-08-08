import React from 'react';
import styled from 'styled-components';


const ListItem = styled.li`
  display: flex;
  height: 200px;
  border: 1px solid #f8f7f2;
  padding: 20px;
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
`

let faker = require('faker')

const Mentor = ({ id, name, title, field, avatar, email, city, age}) => {

  return (
    <ListItem key={id}>
      <AvatarImage alt="avatar" src={avatar}></AvatarImage>
      <InfoContainer>
        <Header>{name}</Header>
        <Bio>
          {title} <br></br>
          Industry: {field} <br></br>
          Email: {email} <br></br>
          City: {city} <br></br>
          Age: {age}
        </Bio>
      </InfoContainer>
    </ListItem>
  )
}
export default Mentor;