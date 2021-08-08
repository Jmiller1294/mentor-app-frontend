import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  height: 35px;
`
const SearchInput = styled.input`
  width: 15%;
  height: 30px;
`
const SearchButton = styled.button`
  height: 30px;
`

const SearchBar = ({ onChildClick }) => {
  const[term, setTerm] = useState('');
  
  const handleClick = (event) => {
    event.preventDefault();
    onChildClick(term)
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
    console.log(event.target.value)
  }

  return (
    <SearchContainer>
      <SearchInput 
        value={term}
        onChange={(e) => handleChange(e)}
        placeholder="Search by Mentor, City, or Industry" 
      />
      <SearchButton onClick={(e) => handleClick(e)}>Search</SearchButton>
    </SearchContainer>
  )
}
export default SearchBar