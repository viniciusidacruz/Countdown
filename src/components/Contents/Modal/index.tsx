import React, { useState } from "react";
import { Platform } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { useEvents } from "../../../hooks/useEvents";
import { monthNames } from "../../../common/data/months";

import { Button } from "../../Button";
import { InputField } from "../../Input";

const close = require("../../../assets/close.png");

import * as S from "./styles";
import { Title } from "../../../global/styles";

export function ContentModal() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<any>(new Date());
  const [description, setDescription] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select a date");

  const { setShowModalAdd, setMyEvents, myEvents } = useEvents();
  ("");
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

  const createEvent = () => {
    const dateTime = new Date(selectedDate).getTime();

    if (title || description || dateTime) {
      setMyEvents([
        ...myEvents,
        {
          title,
          description,
          dateSelected: dateTime,
        },
      ]);

      setShowModalAdd(false);
    }
  };

  const isDisabled = !title || !description;

  return (
    <S.Background>
      <S.Close onPress={() => setShowModalAdd(false)}>
        <S.Icon source={close} />
      </S.Close>

      <S.Container>
        <Title size={24} mode="dark">
          New Event
        </Title>

        <InputField label="Title" onChangeText={setTitle} />

        <InputField label="Description" onChangeText={setDescription} />

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
          onPress={() => createEvent()}
          disabled={isDisabled}
          isDisabled={isDisabled}
        />
      </S.Container>
    </S.Background>
  );
}
