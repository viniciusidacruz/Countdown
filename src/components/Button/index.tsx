import React from "react";

import { IContentProps } from "./types";

import * as S from "./styles";

export function Button({ title, isDisabled, ...rest }: IContentProps) {
  return (
    <S.Container {...rest} isDisabled={isDisabled}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
