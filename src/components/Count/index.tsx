import React, { useEffect, useState } from "react";

import { useEvents } from "../../hooks/useEvents";

import { titles } from "./data";

import { IEventProps } from "./types";

import * as S from "./styles";
import { Title } from "../../global/styles";
import { Text } from "react-native";

const icon = require("../../assets/remove.png");

export function CountComponent({ data }: IEventProps) {
  const { removeEvent } = useEvents();

  return (
    <S.Container>
      <S.Remove onPress={() => removeEvent()}>
        <S.Icon source={icon} />
      </S.Remove>

      <Title size={24}>{data?.title}</Title>

      <S.Grid>
        <S.Row>
          {titles.map((title) => (
            <S.CountTitle color={title.color}>{title.title}</S.CountTitle>
          ))}
        </S.Row>

        <S.Row>
          <S.CountNumber>{data?.day}</S.CountNumber>
          <S.CountNumber>{data?.hours}</S.CountNumber>
          <S.CountNumber>{data?.minutes}</S.CountNumber>
          <S.CountNumber>{data?.seconds}</S.CountNumber>
        </S.Row>
      </S.Grid>

      <Title size={16}>{data?.description}</Title>
    </S.Container>
  );
}
