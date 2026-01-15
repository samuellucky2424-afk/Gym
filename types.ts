
export interface Program {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  icon: string;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}
