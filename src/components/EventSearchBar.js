import React from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  margin: 20px;
  margin-bottom: 0;
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
const SearchButton = styled.button`
  height: 30px;
  width: 20%;
`

const EventsSearchBar = () => {
  return (
    <SearchForm>
      <SearchInput type="text"/>
      <SearchButton>Search</SearchButton>
    </SearchForm>
  )
}
export default EventsSearchBar;