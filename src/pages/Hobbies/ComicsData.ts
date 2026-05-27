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
    title: "The Little Princes",
    status: "Discontinued",
    year: "2026",
    language: "English",
    shortDescription: "A fanmade comic about the meeting between little Asriel Dreemurr and the Little Prince",
    media: [
      "/assets/hobbies/comics/The Little Princes/Page 1.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 2.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 3.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 4.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 5.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 6.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 7.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 8.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 9.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 10.jpg",
      "/assets/hobbies/comics/The Little Princes/Page 11.jpg"
    ]
  }
];
