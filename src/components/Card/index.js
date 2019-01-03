import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const Wrapper = styled.div`
  width: 25%;
  margin-top: 10px;
  margin-bottom: 25px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const CardWrapperTitle = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  background-color: #2c71b8;
`;

const CardText = styled.h3`
  text-transform: uppercase;
  color: #ffcb05;
`

const CardBody = styled.div`
  flex: 1;
  padding: 10px;
`
const Paragraph = styled.p`
  font-size: 15px;
  color: #323232;
`;

const Card = (props) => {
  const { main_region: { name },pokemon_species } = props.data
  return (
    <Wrapper>
      <CardWrapperTitle>
        <CardText>{ props.data.name }</CardText>
      </CardWrapperTitle>
      <CardBody>
        <Paragraph>
          {`Main region in this generation: ${name.toUpperCase()}`}
        </Paragraph>
        <Paragraph>
          {`New Pokemon: ${pokemon_species.length}`}
        </Paragraph>
        <Button text='More...' index={props.index}/>
      </CardBody>
    </Wrapper>
  )
}

export default Card;
