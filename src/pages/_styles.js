import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 61px);
  display: flex;
  flex-direction column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    height: calc(90vh - 61px);
  }
`;

export const ImgIcon = styled.img`
  width: 100px;
`;

export const Subtitle = styled.h2`
  margin-top: 20px;
  font-weight: 600;
`;

export const Mark = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;
