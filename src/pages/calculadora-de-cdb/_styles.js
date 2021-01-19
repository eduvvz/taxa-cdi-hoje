import styled from 'styled-components';

export const TransitionScene = styled.div`
  width: 100%;
  min-height: calc(100vh - 61px);
  background-color: ${(props) => props.theme.colors.accent};
`;

export const WrapperCalc = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
