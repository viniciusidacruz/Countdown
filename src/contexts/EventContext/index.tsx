import React, { createContext, useCallback, useState, useEffect } from "react";

import { IContextProps, IProviderProps } from "./types";

export const EventContext = createContext({} as IContextProps);

export const EventProvider = ({ children }: IProviderProps) => {
  const [newEvent, setEvent] = useState({});
  const [myEvents, setMyEvents] = useState([]);

  const handleAddNewEvent = useCallback(() => {
    setMyEvents((prevState) => [...prevState, newEvent]);
  }, []);

  useEffect(() => {}, [myEvents]);

  return (
    <EventContext.Provider value={{ newEvent, myEvents, handleAddNewEvent }}>
      {children}
    </EventContext.Provider>
  );
};
