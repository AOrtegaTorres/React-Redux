import React from 'react';
import styled from 'styled-components';
import gif from '../../assets/images/200.gif';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props)=> props.show ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Gif = styled.img`
  width: 150px;
`;

const Loading = (props) => {
    return(
      <Wrapper show={props.loading}>
        <Gif  src={gif} />
      </Wrapper>
    )
}

export default Loading;
