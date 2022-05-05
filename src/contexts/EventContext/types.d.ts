import { ReactNode } from "react";

export interface IContextProps {
  myEvents: Array;
  newEvent: Object;
  handleAddNewEvent: () => void;
}

export interface IProviderProps {
  children: ReactNode;
}
