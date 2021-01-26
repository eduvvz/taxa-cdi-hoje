import styled from 'styled-components';

export const TransitionScene = styled.div`
  width: 100%;
  min-height: calc(100vh - 61px);
  background-color: ${(props) => props.theme.colors.accent};
  margin-top: 15px;
`;

export const WrapperCalc = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const PageTitle = styled.h1`
  font-weight: 500;
  font-size: 20px;
  color: white;
  margin: 10px 0px;
`;

export const WrapperCalcButton = styled.div`
  margin-top: 20px;
`;

export const CountResult = styled.div`
  margin-top: 20px;
  padding: 25px 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  text-align: center;

  & p {
    margin-bottom: 10px;

    &:last-child: {
      margin-bottom: 0px;
    }
  }
`;

export const ResultParagraph = styled.p`
  font-weight: 500;
  font-size: 16px;
`;
