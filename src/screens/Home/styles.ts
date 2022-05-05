import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.DARK};
`;
