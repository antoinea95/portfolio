export type WorkType = {
    name: string;
    site: Links | null;
    pictures: string[] | null;
    technos: Skill[]
    content: () => React.ReactNode;
  };

  export type Links = {
    name: string;
    src: string;
    href: string;
  };

  export type Skill = {
    name: string, 
    icon: string
}