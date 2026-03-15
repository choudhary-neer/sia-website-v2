export interface EventItem {
  title: string;
  day: number;
  month: string;
  year: number;
  location: string;
  time: string;
  description: string;
}

export interface EventsFile {
  events: EventItem[];
}