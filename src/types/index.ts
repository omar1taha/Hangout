export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  highlights: string[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  category: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SearchFilters {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}