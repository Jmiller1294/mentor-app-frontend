import React, { useState, useEffect } from 'react';
import Mentor from '../components/mentors/mentor';
import styled from 'styled-components';
import { Grid } from '../components/styled/Grid';

let faker = require('faker')

const List = styled.ul`
  list-style: none;
  padding: 0;
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
        {mentors.slice(1, 10).map(mentor => <Mentor 
          id={mentor.id} 
          name={mentor.name} 
          title={mentor.title} 
          field={mentor.field} />
        )}
      </List>
    </Grid>
  )
}
export default MentorsPage;