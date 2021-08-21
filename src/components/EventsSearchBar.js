import React, { useState } from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  margin: 20px;
  margin: 50px;
  display: flex;
  justify-content: center;
  height: 35px;
`
const SearchInput = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  outline: none;
  border-bottom: 2px solid;
`

const EventsSearchBar = () => {
  const[term, setTerm] = useState('');
  
  const handleChange = (event) => {
    setTerm(event.target.value)
  }
  
  return (
    <SearchForm>
      <SearchInput 
        type="text"
        value={term}
        placeholder="Search Events"
        onChange={ (e) => handleChange(e) }
      />
    </SearchForm>
  )
}
export default EventsSearchBar;