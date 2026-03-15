export interface Announcement {
  badge: string;
  date: string;
  title: string;
  description: string[];
}

export interface AnnouncementsFile {
  announcements: Announcement[];
}