import React, { useState } from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  margin: 20px;
  margin: 50px;
  display: flex;
  justify-content: center;
  height: 55px;
`
const SearchInput = styled.input`
  width: 70%;
  height: 50px;
  border: none;
  outline: none;
  font-size: 20px;
  border-bottom: 2px solid;
`

const EventsSearchBar = ({ onChildClick }) => {
  const[term, setTerm] = useState('');
  
  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault()
      onChildClick(term)
    }
  }

  return (
    <SearchForm>
      <SearchInput 
        type="text"
        value={term}
        placeholder="Search Events"
        onChange={(e) => handleChange(e) }
        onKeyPress={(e) => handleKeyPress(e)}
      />
    </SearchForm>
  )
}
export default EventsSearchBar;