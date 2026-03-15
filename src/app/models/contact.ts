export interface Address {
  line1: string;
  line2?: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  [key: string]: string | undefined; // allows future social links
}

export interface Contact {
  email: string;
  address: Address;
  website: string;
  social: SocialLinks;
}

export interface ContactsFile {
  email: string;
  address: Address;
  website: string;
  social: SocialLinks;
}