import React from "react";

import { IContentProps } from "./types";

import * as S from "./styles";

export function InputField({ label, ...rest }: IContentProps) {
  return (
    <S.Field>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} />
    </S.Field>
  );
}
