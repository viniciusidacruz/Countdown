import styled from "styled-components/native";

export const Background = styled.KeyboardAvoidingView`
  background-color: rgba(0, 0, 0, 0.7);

  position: relative;

  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  width: 90%;

  padding-top: 20;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 20;

  border-radius: 10;
`;

export const Close = styled.TouchableOpacity`
  position: absolute;

  top: 24;
  right: 24;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;
