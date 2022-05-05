import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 80%;
  width: 100%;

  margin-bottom: 20;
`;

export const Column = styled.View`
  flex-direction: column;
`;

export const InfoText = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};

  margin-bottom: 5;

  font-size: 16;
`;

export const Visitors = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_200};

  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: 18;
`;

export const Add = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_400};

  height: 42;
  width: 42;

  align-items: center;
  justify-content: center;

  border-radius: 42;

  margin: 0 auto;
`;

export const Icon = styled.Image`
  width: 32;
  height: 32;
`;
