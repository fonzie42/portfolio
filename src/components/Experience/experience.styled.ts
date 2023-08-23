import styled from "styled-components";

export const ExperienceButton = styled.button`
  border: 2px solid ${({ theme }) => theme.primary + "20"};
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid transparent;
  background: none;

  padding: 32px 16px;
  border-radius: 0;
  margin: 0;

  &:hover {
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 16px;
  }

  transition: border-radius 0.2s;
`;

export const FutureImage = styled.div`
  background: red;
  width: 200px;
  height: 200px;
  float: left;
  margin-right: 16px;
  margin-top: 16px;
`;

export const ExperienceHeader = styled.div``;
