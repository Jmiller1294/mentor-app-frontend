import React, { useState, useEffect } from 'react';
import Mentor from '../components/mentors/mentor';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';
import { Grid } from '../components/styled/Grid';

let faker = require('faker')

const List = styled.ul`
  list-style: none;
  padding: 0;
`
const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  height: 35px;
`

const SearchInput = styled.input`
  width: 15%;
  height: 25px;
`
const SearchButton = styled.button`
  height: 25px;
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

  useEffect(() => {

  }, [])

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  let filterItems = (mentors.filter(mentor => {
    return mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.city.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    || mentor.field.toLowerCase().includes(searchTerm.toLowerCase())
  }))

  return(
    <Grid>
      <SearchContainer>
        <SearchInput onChange={(e) => handleChange(e)}/>
        <SearchButton>Search</SearchButton>
      </SearchContainer>
      <List>
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