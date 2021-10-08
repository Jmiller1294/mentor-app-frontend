import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Spinner = styled.div`
  border: 16px solid #f3f3f3; 
  border-top: 16px solid black; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const Loader = ({ parentCallback, time }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      parentCallback(count);
      setCount(count + 1);
    }, 1000)
    return () => clearInterval(id)
  },[count])
  
  return (
    <>
       <Spinner /> 
    </>
  )
}
export default Loader;