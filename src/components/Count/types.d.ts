export interface IEventProps {
  event?: {
    title?: string | undefined;
    description?: string | undefined;
    dateSelected?: number | undefined;
  };
  index: number;
}
