import React from 'react';
import styled from 'styled-components';


const ListItem = styled.li`
  display: flex;
  height: 200px;
  border: 1px solid #f8f7f2;
  padding: 20px;
`

const AvatarImage = styled.img`
  height: 100px;
  width: 5%;
  border-radius: 50px;
`

let faker = require('faker')

const Mentor = ({ id, name, title, field}) => {
  return (
    <div>
      <ListItem key={id}>
          <AvatarImage alt="avatar" src={faker.image.avatar()}></AvatarImage>
          {name} <br></br>
          {title} <br></br>
          {field}
        </ListItem>)}
    </div>
  )
}
export default Mentor;