import React, { useState } from 'react';
import styled from 'styled-components';
import magnifier from '../assets/magnifier.svg';
import breakpoint from '../commons/breakpoints';


const SearchForm = styled.form`
  margin: 50px;
  display: flex;
  justify-content: center;
  height: 55px;
  

  @media only screen and (${breakpoint.device.phone}){
    margin-top: 70px;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
  }

  @media only screen and (${breakpoint.device.tablet}){
    margin-top: 70px;
    margin-bottom: 0;
    margin-left: 10px;
    margin-right: 10px;
  }
`
const SearchInput = styled.input`
  background: url(${magnifier});    
  background-repeat: no-repeat;
  background-position: left 10px top 11px;
  text-indent: 40px;
  max-width: 1000px;
  width: 65%;
  height: 50px;
  border: none;
  outline: none;
  font-size: 20px;
  border: 2px solid;
  border-radius: 25px;

  @media only screen and (${breakpoint.device.phone}){
    width: 95%;
  }

  @media only screen and (${breakpoint.device.tablet}){
    width: 85%;
  }
  @media only screen and (${breakpoint.device.laptop}){
    width: 85%;
  }
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