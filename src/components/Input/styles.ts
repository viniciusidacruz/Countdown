import styled from "styled-components/native";

export const Field = styled.View`
  margin-bottom: 10;
`;

export const Label = styled.Text``;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.SHAPE};

  padding-left: 16;
  border-radius: 8;

  height: 48;
`;
