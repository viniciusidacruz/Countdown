import React from "react";

const warning = require("../../../assets/warning.gif");

import { IContentProps } from "./types";

import * as S from "./styles";

export function Warning({ description }: IContentProps) {
  return (
    <S.Container>
      <S.Icon source={warning} />
      {description && <S.Description>{description}</S.Description>}
    </S.Container>
  );
}
