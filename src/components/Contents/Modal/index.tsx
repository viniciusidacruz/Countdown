import React, { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { Button } from "../../Button";
import { InputField } from "../../Input";

import { useEvents } from "../../../hooks/useEvents";

const close = require("../../../assets/close.png");

import * as S from "./styles";
import { Title } from "../../../global/styles";
import { Platform, Text, TouchableOpacity } from "react-native";

export function ContentModal() {
  const [date, setDate] = useState<any>(new Date());
  const [selectedDate, setSelectedDate] = useState("Select a date");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [valuesEvent, setValuesEvent] = useState({
    title: "",
    description: "",
    day: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const { setShowModalAdd, handleAddNewEvent } = useEvents();

  let interval: any;

  const startTimer = () => {
    const countdownDate = new Date("May 30,2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
      }
    });
  };

  const handleChangeTimer = (
    event: DateTimePickerEvent,
    selectedDate: string
  ) => {
    const currentDate = selectedDate || date;

    setShowTimePicker(Platform.OS === "ios");
    setDate(currentDate);

    const tempDate = new Date(currentDate);
    const dateFull =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    setSelectedDate(dateFull);
  };

  const showDate = () => {
    setShowTimePicker(true);
  };

  const isDisabled =
    !valuesEvent.title ||
    !valuesEvent.description ||
    !valuesEvent.day ||
    !valuesEvent.hours ||
    !valuesEvent.minutes ||
    !valuesEvent.seconds;

  const registerEvent = () => {
    handleAddNewEvent(valuesEvent);
  };

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
          onChangeText={(value) =>
            setValuesEvent({ ...valuesEvent, title: value })
          }
        />
        <InputField
          label="Description"
          onChangeText={(value) =>
            setValuesEvent({ ...valuesEvent, description: value })
          }
        />

        <TouchableOpacity onPress={() => showDate()}>
          <Text>{selectedDate}</Text>
        </TouchableOpacity>

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

        {/* <InputField
          label="Day"
          keyboardType="numeric"
          onChangeText={(value) =>
            setValuesEvent({ ...valuesEvent, day: value })
          }
        />
        <InputField
          label="Hours"
          keyboardType="numeric"
          onChangeText={(value) =>
            setValuesEvent({ ...valuesEvent, hours: value })
          }
        />
        <InputField
          label="Minutes"
          keyboardType="numeric"
          onChangeText={(value) =>
            setValuesEvent({ ...valuesEvent, minutes: value })
          }
        />
        <InputField
          label="Seconds"
          keyboardType="numeric"
          onChangeText={(value) =>
            setValuesEvent({ ...valuesEvent, seconds: value })
          }
        /> */}

        <Button
          title="Create"
          onPress={() => registerEvent()}
          disabled={isDisabled}
          isDisabled={isDisabled}
        />
      </S.Container>
    </S.Background>
  );
}
