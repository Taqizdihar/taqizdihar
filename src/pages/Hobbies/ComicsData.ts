export interface Comic {
  id: string;
  title: string;
  status: string;
  year: string;
  language: string;
  shortDescription: string;
  media: string[];
}

export const comics: Comic[] = [
  {
    id: "1",
    title: "The Cosmic Voyager",
    status: "Ongoing",
    year: "2024",
    language: "English",
    shortDescription: "A thrilling adventure across the stars following a solitary voyager uncovering ancient galactic mysteries.",
    media: [
      "/assets/hobbies/comics/cosmic-voyager/page-1.jpg",
      "/assets/hobbies/comics/cosmic-voyager/page-2.jpg",
    ]
  },
  {
    id: "2",
    title: "Shadows of the City",
    status: "Completed",
    year: "2023",
    language: "Indonesian",
    shortDescription: "A dark mystery unfolding in the underbelly of a neon-lit cyberpunk metropolis.",
    media: [
      "/assets/hobbies/comics/shadows/page-1.jpg",
      "/assets/hobbies/comics/shadows/page-2.jpg",
    ]
  },
  {
    id: "3",
    title: "Echoes of Time",
    status: "Ongoing",
    year: "2025",
    language: "English",
    shortDescription: "Time travel goes wrong when an artifact scatters temporal echoes across different eras.",
    media: [
      "/assets/hobbies/comics/echoes/page-1.jpg",
      "/assets/hobbies/comics/echoes/page-2.jpg",
    ]
  }
];
