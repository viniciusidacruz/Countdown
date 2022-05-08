import React, { useState, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { IContextProps, IEventProps, IProviderProps } from "./types";

export const EventContext = createContext({} as IContextProps);

export const EventProvider = ({ children }: IProviderProps) => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [myEvents, setMyEvents] = useState<IEventProps | any>([]);

  const handleAddNewEvent = (event: {}) => {
    setMyEvents((prevState: []) => [...prevState, event]);

    AsyncStorage.setItem("@E", JSON.stringify(myEvents));
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
