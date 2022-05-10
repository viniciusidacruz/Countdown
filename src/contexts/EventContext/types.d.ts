import { ReactNode } from "react";

export interface IEventProps {
  title?: string;
  description?: string;
  day?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
}

export interface IContextProps {
  myEvents: Array[];
  showModalAdd: boolean;
  removeEvent: (index: number) => void;
  setMyEvents: ([]: Array) => void;
  setShowModalAdd: (state: boolean) => void;
}

export interface IProviderProps {
  children: ReactNode;
}
