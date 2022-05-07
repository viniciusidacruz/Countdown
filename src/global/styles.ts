import styled from "styled-components/native";

import { IModeProps } from "./styled";

export const Title = styled.Text<IModeProps>`
  color: ${({ theme, mode }) =>
    mode === "dark" ? theme.COLORS.DARK : theme.COLORS.SHAPE};

  font-size: ${({ size }) => size && size};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  text-transform: uppercase;

  text-align: center;
`;
