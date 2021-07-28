import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '../components/styled/Grid';

let faker = require('faker')

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  height: 200px;
  border: 1px solid #f8f7f2;
`

const AvatarImage = styled.img`
  height: 100px;
  width: 5%;
  border-radius: 50px;
`

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/mentors')
    .then(resp => resp.json())
    .then(data => setMentors(data))
    .catch((error) => console.error('Error:', error))
  },[])


  return(
    <Grid>
      <List>
        {mentors.slice(1, 10).map(mentor => 
        <ListItem key={mentor.id}>
          <AvatarImage alt="avatar" src={faker.image.avatar()}></AvatarImage>
          {mentor.name} <br></br>
          {mentor.title} <br></br>
          {mentor.field}
        </ListItem>)}
      </List>
    </Grid>
  )
}
export default MentorsPage;