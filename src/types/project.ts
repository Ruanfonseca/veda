
export interface Statistic {
  number: string;
  label: string;
}

export interface Publication {
  title: string;
  link: string;
}

export interface Project {
  title: string;
  years?: string;
  objective: string;
  client: string;
  partners?: string;
  reach?: string;
  regions: string;
  impact: string;
  publication?: Publication;
  participation?: string;
  Productdocuments?: string;
  images?: string[]; // Add images array property to Project interface
}

export interface ProjectArea {
  id?: string; // Add id property to ProjectArea interface
  title: string;
  description: string;
  projects: Project[];
}

export interface LibraryItem {
  title: string;
  authors: string;
  year: string;
  publisher: string;
  link?: string;
  description?: string;
}
