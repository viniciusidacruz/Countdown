import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 200;
  height: 200;

  margin: 0 auto;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_200};

  font-size: 16;
`;
