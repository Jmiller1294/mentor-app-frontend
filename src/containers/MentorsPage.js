import React, { useState, useEffect } from 'react';
import Mentor from '../components/mentors/mentor';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { Grid } from '../components/styled/Grid';


const List = styled.ul`
  list-style: none;
  padding: 0;
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

  const handleChildClick = (t) => {
    setSearchTerm(t)
  }

  let filterItems = (mentors.filter(mentor => {
    return mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.city.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.field.toLowerCase().includes(searchTerm.toLowerCase())
  }))

  return(
    <Grid>
      <SearchBar onChildClick={(term) => handleChildClick(term)} />
      <List>
        <h2>{filterItems.length} Mentors Available</h2>
        {filterItems.map(mentor => 
          <Mentor 
            key={mentor.id} 
            name={mentor.name} 
            title={mentor.title} 
            field={mentor.field}
            avatar={mentor.avatar}
            email={mentor.email}
            city={mentor.city}
            age={mentor.age}
          />
        )}
      </List>
    </Grid>
  )
}
export default MentorsPage;

