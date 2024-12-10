export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  languages: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}