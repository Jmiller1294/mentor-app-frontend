import React from 'react';
import styled from 'styled-components';
import peopleIcon from '../assets/people.svg';
import breiefcaseIcon from '../assets/briefcase.svg';
import calenderIcon from '../assets/calender.svg';
import schoolIcon from '../assets/school.svg';
import breakpoint from '../commons/breakpoints';

const CityItem = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 16%;
  margin: 20px;
  padding: 5px;

  @media only screen and (${breakpoint.device.phone}){
    width: 100%;
  }

  @media only screen and (${breakpoint.device.tablet}){
    padding: 0;
    width: 60%;
  }

  @media only screen and (${breakpoint.device.laptop}){
    width: 40%;
  }
`
const CityImage = styled.img`
  width: 100%;
  height: 150px;
`
const CityName = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
`
const Icon = styled.img`
  display: flex;
  height: 25px;
  width: 25px;
  margin: 5px;

  @media only screen and (${breakpoint.device.phone}){
    margin-bottom: 10px;
    margin-top: 11px;
  }
`
const IconText = styled.span`
  display: flex;
  font-weight: bold;
  font-size: 17px;
  height: 25px;
  width: 100;
  margin-top: 5px;
  margin-bottom: 5px;
  top: -20px;
  right: -40px;

  @media only screen and (${breakpoint.device.phone}){
    margin-bottom: 15px;
  }
`
const IconImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 25%;
`
const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  padding-top: 5px;
  height: 100%;
  width: 100%;
`
const IconContainer = styled.div`
  display: flex;
  width: 100%;
  height: 220px;
  position: relative;
`

const City = ({city}) => {
  
  return(
    <CityItem>
    <CityImage src={city.image}></CityImage>
    <CityName>{city.name}</CityName>
    <IconContainer>
      <IconImageContainer>
        <Icon src={peopleIcon}></Icon>
        <Icon src={breiefcaseIcon}></Icon>
        <Icon src={calenderIcon}></Icon>
        <Icon src={schoolIcon}></Icon>
      </IconImageContainer>
    <IconTextContainer>
      <IconText>{city.info.members}</IconText>
      <IconText>{city.info.jobs}</IconText>
      <IconText>{city.info.events}</IconText>
      <IconText>{city.info.mentors}</IconText>
    </IconTextContainer>
  </IconContainer>
</CityItem>
  )
}
export default City;