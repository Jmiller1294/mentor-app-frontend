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

const Mentor = ({ id, name, title, field}) => {

  const createPhoneNumber = () => {
    let arr = [];
    let i = 0;

    while(i < 3) {
      arr.push(Math.floor(Math.random() * 800) + 100);
      i++;
    } 
    return arr.join('-');
  }

  return (
    <ListItem key={id}>
      <AvatarImage alt="avatar" src={faker.image.avatar()}></AvatarImage>
      <InfoContainer>
        <Header>{name}</Header>
        <Bio>
          {title} <br></br>
          Industry: {field} <br></br>
          Phone Number: {createPhoneNumber()}
        </Bio>
      </InfoContainer>
    </ListItem>
  )
}
export default Mentor;