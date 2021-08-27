import React from 'react';
import styled from 'styled-components';

const EventContext = React.createContext({
  date: '',
  setDate: '',
  location: '',
  setLocation: '',
  time: '',
  setTime: ''
})

const AccordionItem = styled.div`
  height: 100%;
  flex-basis: 100%;
` 
const Expand = styled.span`
  float: right;
  font-size: 25px;
`
const Categories = styled.form`
  margin: 15px 0;
`
class Accordion extends React.Component {
  

  state = {
    isActive: false
  }
  
  handleChange = (event) => {
    //onChildClick(event.target.value);
  }

  handleClick = (event) => {
    //setIsActive(!isActive);
    //onChildClick(isActive);
  }

  render() {
  return (
    <EventContext.Consumer>
      {({}) => (
    <AccordionItem >
          <h2 onClick={() => this.setState(prevState => ({isActive: prevState.isActive}))} style={{display: 'inline', fontSize: '25px', marginRight: 'auto'}}>{this.props.title}</h2>
          <Expand onClick={(e) => this.handleClick(e)} style={{ }}>{this.state.isActive ? '-' : '+'}</Expand>
        {this.state.isActive && <div className="accordion-content">
        <Categories>
          {this.props.names.map((name, index) => 
            <div key={index}>
              <input onChange={(e) => this.handleChange(e)} type="radio" id="name" name="value" value={name} />
              <label htmlFor='name'>{name}</label>
            </div>
          )}
        </Categories>
      </div>}
    </AccordionItem>
    )}
    </EventContext.Consumer>
    
  )
  }
}
export default Accordion;