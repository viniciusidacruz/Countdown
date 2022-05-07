import styled from "styled-components/native";

interface IDisabledProps {
  isDisabled?: boolean;
}

export const Container = styled.TouchableOpacity<IDisabledProps>`
  width: 100%;

  align-items: center;
  justify-content: center;

  height: 48;

  background-color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.COLORS.DISABLED : theme.COLORS.PRIMARY_600};

  border-radius: 8;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.SHAPE};

  font-size: 16;
`;
