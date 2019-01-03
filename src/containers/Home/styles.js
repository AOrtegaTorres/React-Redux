import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

export { Container, ContentWrapper }
