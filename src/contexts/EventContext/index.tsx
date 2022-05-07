import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { IContextProps, IEventProps, IProviderProps } from "./types";

export const EventContext = createContext({} as IContextProps);

export const EventProvider = ({ children }: IProviderProps) => {
  const [myEvents, setMyEvents] = useState<IEventProps | any>([]);
  const [showModalAdd, setShowModalAdd] = useState(false);

  const handleAddNewEvent = (newEvent: {}) => {
    setMyEvents((prevState: []) => [...prevState, newEvent]);

    AsyncStorage.setItem("@E", JSON.stringify(newEvent));
  };

  const removeEvent = () => {
    setMyEvents((myEvents: []) =>
      myEvents.filter((_, i) => i !== myEvents.length - 1)
    );
  };

  return (
    <EventContext.Provider
      value={{
        myEvents,
        removeEvent,
        showModalAdd,
        setShowModalAdd,
        handleAddNewEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
