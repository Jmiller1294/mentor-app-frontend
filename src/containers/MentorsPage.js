import React, { useState, useEffect } from 'react';
import Mentor from '../components/mentors/mentor';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { Grid } from '../components/styled/Grid';


const List = styled.ul`
  list-style: none;
  padding: 0;
`
const MentorCount = styled.h2`
  margin-left: 25px;
`

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/mentors')
    .then(resp => resp.json())
    .then(data => setMentors(data))
    .catch((error) => console.error('Error:', error))
  },[])

  const handleChildClick = (term) => {
    setSearchTerm(term)
  }

  let filteredItems = (mentors.filter(mentor => {
    console.log(mentor.field)
    return mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.city.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) 
  }))

  
  if(filteredItems && filteredItems.length !== 0) {
  return(
    <Grid>
      <SearchBar onChildClick={(term) => handleChildClick(term)} />
      <List>
        <MentorCount>{filteredItems.length} Mentors Available</MentorCount>
        {filteredItems.map(mentor => 
          <Mentor 
           key={mentor.id}
           mentor={mentor}
          />
        )}
      </List>
    </Grid>
  )}
  else {
    return "...Loading"
  }
}
export default MentorsPage;

