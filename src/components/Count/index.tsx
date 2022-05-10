import React, { useEffect, useRef, useState } from "react";

import { useEvents } from "../../hooks/useEvents";

import { titles } from "./data";

import { IEventProps } from "./types";

import * as S from "./styles";
import { Title } from "../../global/styles";

const icon = require("../../assets/remove.png");

export function CountComponent({ event, index }: IEventProps) {
  const { removeEvent } = useEvents();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  let interval: any = useRef();

  useEffect(() => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = event?.dateSelected - now;

      const Ddays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const Dhours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const Dminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const Dseconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        Dhours > 9 ? Dhours : "0";
        Dminutes > 9 ? Dminutes : "0";
        Dseconds > 9 ? Dseconds : "0";
      } else {
        setTime({
          days: Ddays,
          hours: Dhours,
          minutes: Dminutes,
          seconds: Dseconds,
        });
      }
    }, 1000);
  }, []);

  return (
    <S.Container>
      <S.Remove onPress={() => removeEvent(index)}>
        <S.Icon source={icon} />
      </S.Remove>

      <Title uppercase size={24}>
        {event?.title}
      </Title>

      <S.Grid>
        <S.Row>
          {titles.map((title, index: number) => (
            <S.CountTitle key={`${title.title}-${index}`}>
              {title.title}
            </S.CountTitle>
          ))}
        </S.Row>

        <S.Row>
          <S.CountNumber>{time.days}</S.CountNumber>
          <S.CountNumber>{time.hours}</S.CountNumber>
          <S.CountNumber>{time.minutes}</S.CountNumber>
          <S.CountNumber>{time.seconds}</S.CountNumber>
        </S.Row>
      </S.Grid>

      <Title size={16}>{event?.description}</Title>
    </S.Container>
  );
}
