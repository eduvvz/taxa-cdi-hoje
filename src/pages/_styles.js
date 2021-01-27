import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: calc(75vh - 61px);
  display: flex;
  flex-direction column;
  justify-content: center;
  align-items: center;
`;

export const TransitionScene = styled.div`
  width: 100%;
  min-height: calc(75vh - 61px);
  background-color: ${(props) => props.theme.colors.accent};
`;

export const ImgIcon = styled.img`
  width: 100px;
`;

export const Subtitle = styled.h1`
  margin-top: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.txtPrimary};
`;

export const Mark = styled.span`
  color: ${(props) => props.theme.colors.accent};
  font-size: 20px;
  font-weight: 700;
`;

export const Paper = styled.div`
  border-radius: 8px;
  padding: 30px 30px;
  background-color: white;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.08);
  margin-bottom: 65px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 15px 15px;
  }

  & p {
    &:last-child {
      margin-bottom: 0px !important;
    }
  }
`;

export const PaperTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  color: white;
  margin: 10px 0px;
`;

export const PaperParagraph = styled.p`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.txtPrimary};
  margin-bottom: 10px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  & th {
    background-color: #ddd;
  }

  & td,
  th {
    border: 1px solid #ddd;
    padding: 16px 8px;
  }

  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
