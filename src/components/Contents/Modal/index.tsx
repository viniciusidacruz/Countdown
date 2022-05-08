import React, { useState, useRef } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Platform } from "react-native";

import { useEvents } from "../../../hooks/useEvents";
import { monthNames } from "../../../common/data/months";

import { Button } from "../../Button";
import { InputField } from "../../Input";

const close = require("../../../assets/close.png");

import * as S from "./styles";
import { Title } from "../../../global/styles";

export function ContentModal() {
  const [date, setDate] = useState<any>(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select a date");
  const [event, setEvent] = useState({
    title: "",
    description: "",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { setShowModalAdd, handleAddNewEvent } = useEvents();

  let interval: any = useRef();

  const startTimer = () => {
    setShowModalAdd(false);
    handleAddNewEvent(event);

    const countdownDate = new Date(selectedDate).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const Ddays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const Dhours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const Dminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const Dseconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log("Ddays =>", Ddays);
      console.log("Dhours =>", Dhours);
      console.log("Dminutes =>", Dminutes);
      console.log("Dseconds =>", Dseconds);

      if (distance < 0) {
        Dhours > 9 ? Dhours : "0";
        Dminutes > 9 ? Dminutes : "0";
        Dseconds > 9 ? Dseconds : "0";
      } else {
        setEvent({
          ...event,
          days: Ddays,
          hours: Dhours,
          minutes: Dminutes,
          seconds: Dseconds,
        });
      }
    }, 1000);
  };

  const handleChangeTimer = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;

    setShowTimePicker(Platform.OS === "ios");
    setDate(currentDate);

    const tempDate = new Date(currentDate);

    const dateFull =
      monthNames[tempDate.getMonth()] +
      " " +
      tempDate.getDate() +
      "," +
      tempDate.getFullYear();

    setSelectedDate(dateFull);
  };

  const showDate = () => {
    setShowTimePicker(true);
  };

  const isDisabled =
    !event.title || !event.description || selectedDate === "Select a date";

  return (
    <S.Background>
      <S.Close onPress={() => setShowModalAdd(false)}>
        <S.Icon source={close} />
      </S.Close>

      <S.Container>
        <Title size={24} mode="dark">
          New Event
        </Title>

        <InputField
          label="Title"
          onChangeText={(value) => setEvent({ ...event, title: value })}
        />

        <InputField
          label="Description"
          onChangeText={(value) => setEvent({ ...event, description: value })}
        />

        <S.Selected onPress={() => showDate()}>
          <S.SelectedDate>{selectedDate}</S.SelectedDate>
        </S.Selected>

        {showTimePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleChangeTimer}
          />
        )}

        <Button
          title="Create"
          onPress={() => startTimer()}
          disabled={isDisabled}
          isDisabled={isDisabled}
        />
      </S.Container>
    </S.Background>
  );
}
