import React, { useState, createContext } from "react";

import { IContextProps, IEventProps, IProviderProps } from "./types";

export const EventContext = createContext({} as IContextProps);

export const EventProvider = ({ children }: IProviderProps) => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [myEvents, setMyEvents] = useState<IEventProps | any>([]);

  const removeEvent = (index: number) => {
    const list = [...myEvents];

    list.splice(index, 1);

    setMyEvents(list);
  };

  return (
    <EventContext.Provider
      value={{
        myEvents,
        setMyEvents,
        removeEvent,
        showModalAdd,
        setShowModalAdd,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
