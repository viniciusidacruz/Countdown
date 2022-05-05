import React from "react";
import { Image } from "react-native";

const addIcon = require("../../assets/add.png");

import * as S from "./styles";

export function HeadingComponent() {
  return (
    <S.Container>
      <S.Column>
        <S.InfoText>Welcome</S.InfoText>
        <S.Visitors>Visitor ✌</S.Visitors>
      </S.Column>

      <S.Column>
        <S.InfoText>Add Event</S.InfoText>
        <S.Add>
          <S.Icon source={addIcon} />
        </S.Add>
      </S.Column>
    </S.Container>
  );
}
