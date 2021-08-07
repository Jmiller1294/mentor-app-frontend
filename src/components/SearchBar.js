import React from 'react';
import styled from 'styled-components';

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

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  )
}
export default SearchBar