import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.DARK};

  padding-top: 70;
  padding-left: 20;
  padding-right: 20;
`;

export const Content = styled.View`
  margin-top: 40;
`;

export const Warning = styled.Image`
  width: 200;
  height: 200;

  margin: 0 auto;
`;
