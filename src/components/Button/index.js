import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: 100%;
  height: 40px;
  border:1px solid;
  color:#ef5350;
  font-weight: bold;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #ef5350;
    color: white;
  }
`

const Button = (props) => {
  return(
    <ButtonWrapper onClick={()=> props.history.push(`/generation/${props.index}`)}>
      {props.text}
    </ButtonWrapper>
  )
}

export default Button;
