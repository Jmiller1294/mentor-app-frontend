import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Grid } from '../components/styled/Grid';

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`

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
        {mentors.map(mentor => <ListItem>{mentor.name}</ListItem>)}
      </List>
    </Grid>
  )
}
export default MentorsPage;