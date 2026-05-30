export interface ProcessStep {
  numeral:     string;   // Roman numeral: I, II, III, IV
  title:       string;
  description: string;
}

export interface Industry {
  name: string;
}

export interface Stat {
  value:   string;
  suffix?: string;
  label:   string;
}

export interface ContactItem {
  icon: 'email' | 'web' | 'linkedin' | 'facebook';
  label: string;
  href:  string;
}

export interface NavLink {
  label:     string;
  fragment?: string;
  route?:    string;
}

export interface BlogPost {
  id:           string;
  tag:          string;
  title:        string;
  excerpt:      string;
  date:         string;
  description?: string;
  readTime:     string;
  category:     Category;
}

export interface Article {
  id:          string;
  slug:        string;
  tag:         string;
  title:       string;
  excerpt:     string;
  description: string;
  date:        string;
  readTime:    string;
  category:    Category;
  content:     string | Promise<string>;
}

export interface Category {
  id:   string;
  name: string;
  slug: string;
}

export interface ContentBlocks {
  id: string;
  body: string;
}
