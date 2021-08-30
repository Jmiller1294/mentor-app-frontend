import React, { useState } from 'react';
import styled from 'styled-components';
import magnifier from '../assets/magnifier.svg';


const SearchForm = styled.form`
  margin: 20px;
  margin: 50px;
  display: flex;
  justify-content: center;
  height: 55px;
`
const SearchInput = styled.input`
  background: url(${magnifier})left center;    
  background-repeat: no-repeat;
  text-indent: 40px;
  width: 60%;
  height: 50px;
  border: none;
  outline: none;
  font-size: 20px;
  border-bottom: 2px solid;
`


const SearchBar = ({ onChildClick, text }) => {
  const[term, setTerm] = useState('');
  
  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      onChildClick(term)
    }
  }

  return (
    <SearchForm>
      <SearchInput 
        type='text'
        value={term}
        onChange={(e) => handleChange(e)}
        onKeyPress={(e) => handleKeyPress(e)}
        placeholder={text}
      />
    </SearchForm>
  )
}
export default SearchBar