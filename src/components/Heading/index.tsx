import React, { Fragment } from "react";
import { useEvents } from "../../hooks/useEvents";

const addIcon = require("../../assets/add.png");

import * as S from "./styles";

export function HeadingComponent() {
  const { setShowModalAdd } = useEvents();

  return (
    <Fragment>
      <S.Container>
        <S.Column>
          <S.InfoText>Welcome</S.InfoText>
          <S.Visitors>Visitor ✌</S.Visitors>
        </S.Column>

        <S.Column>
          <S.InfoText>Add Event</S.InfoText>
          <S.Add onPress={() => setShowModalAdd(true)}>
            <S.Icon source={addIcon} />
          </S.Add>
        </S.Column>
      </S.Container>
    </Fragment>
  );
}
