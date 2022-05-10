import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_300};

  padding-top: 20;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 20;
  margin-bottom: 20;

  border-radius: 40;

  position: relative;
`;

export const Remove = styled.TouchableOpacity`
  position: absolute;

  top: 16;
  right: 16;

  width: 32;
  height: 32;
`;

export const Icon = styled.Image`
  width: 24;
  height: 24;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Grid = styled.View`
  margin-top: 10;
  margin-bottom: 20;
`;

export const CountTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};

  font-size: 16;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
`;

export const CountNumber = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};

  font-size: 16;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const Description = styled.Text``;
