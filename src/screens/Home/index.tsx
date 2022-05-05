import React from "react";

import { CountComponent } from "../../components/Count";
import { HeadingComponent } from "../../components/Heading";

import * as S from "./styles";

export default function HomeScreen() {
  return (
    <S.Container>
      <HeadingComponent />
      <CountComponent />
    </S.Container>
  );
}
