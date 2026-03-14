export interface ContentModel {
  pageTitle: string;
  header: {
  };
  toolbar: {
    home: string;
    about: string;
    membership: string;
    photoGallery: string;
    contact: string;
    board: string;
    announcements: string;
    events: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    home: string;
    membership: string;
    events: string;
    photoGallery: string;
    email: string;
    phone: string;
    address: string;
  };
  pages: {
    home: {
      title: string;
      subtitle: string;
      ctaLearnMore: string;
      eventsTitle: string;
      announcementsTitle: string;
      readMore: string;
    };
    about: {
      title: string;
      subtitle: string;
    };
    membership: {
      title: string;
      subtitle: string;
    };
    events: {
      title: string;
      subtitle: string;
    };
    announcements: {
      title: string;
      subtitle: string;
    };
    photoGallery: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
    };
    board: {
      title: string;
      subtitle: string;
    };
  };
}