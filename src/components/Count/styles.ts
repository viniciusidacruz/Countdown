import styled from "styled-components/native";

interface IColorsProps {
  color: string;
}

export const Container = styled.View`
  max-width: 80%;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_300};

  padding-top: 20;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 20;

  border-radius: 40;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const CountTitle = styled.Text<IColorsProps>`
  color: ${({ theme }) => theme.COLORS.SHAPE};

  font-size: 16;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const CountNumber = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};

  font-size: 16;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;
