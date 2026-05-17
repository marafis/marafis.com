export interface ProcessStep {
  numeral: string;   // Roman numeral: I, II, III, IV
  title: string;
  description: string;
}

export interface Industry {
  name: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface ContactItem {
  icon: 'email' | 'web' | 'linkedin';
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  fragment: string;
}
