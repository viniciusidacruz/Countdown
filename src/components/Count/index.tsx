import React, { useState } from "react";

import * as S from "./styles";
import theme from "../../global/theme";

export function CountComponent() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const titles = [
    {
      title: "Days",
      color: theme.COLORS.DAYS,
    },
    {
      title: "Hrs",
      color: theme.COLORS.HOURS,
    },
    {
      title: "Min",
      color: theme.COLORS.MINUTES,
    },
    {
      title: "Seg",
      color: theme.COLORS.SECONDS,
    },
  ];

  return (
    <S.Container>
      <S.Row>
        {titles.map((title) => (
          <S.CountTitle color={title.color}>{title.title}</S.CountTitle>
        ))}
      </S.Row>

      <S.Row>
        <S.CountNumber>{days}</S.CountNumber>
        <S.CountNumber>{hours}</S.CountNumber>
        <S.CountNumber>{minutes}</S.CountNumber>
        <S.CountNumber>{seconds}</S.CountNumber>
      </S.Row>
    </S.Container>
  );
}
