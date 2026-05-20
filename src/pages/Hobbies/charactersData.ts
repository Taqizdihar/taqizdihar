export interface Character {
  id: string;
  name: string;
  images: string[];
  details: Record<string, string>;
  sections: { title: string; content: string }[];
}

export const characters: Character[] = [
  {
    id: "elara-vance",
    name: "Elara Vance",
    images: [
      "/assets/hobbies/elara-1.jpg",
      "/assets/hobbies/elara-2.jpg",
      "/assets/hobbies/elara-3.jpg"
    ],
    details: {
      Gender: "Female",
      Species: "Human",
      Age: "24",
      Role: "Rogue",
      ShortDescription: "A skilled rogue with a mysterious past."
    },
    sections: [
      {
        title: "About",
        content: "Elara Vance was born in the lower rings of the celestial city. Orphaned at a young age, she learned to navigate the treacherous underbelly to survive."
      },
      {
        title: "Abilities",
        content: "She is known for her quick wit, unparalleled agility, and her signature dual daggers. Despite her tough exterior, she has a strong moral compass and often helps those who cannot help themselves."
      }
    ]
  },
  {
    id: "kylar-stern",
    name: "Kylar Stern",
    images: [
      "/assets/hobbies/kylar-1.jpg",
      "/assets/hobbies/kylar-2.jpg",
      "/assets/hobbies/kylar-3.jpg"
    ],
    details: {
      Gender: "Male",
      Species: "Elf",
      Role: "Ranger",
      ShortDescription: "A stoic ranger tracking a legendary beast."
    },
    sections: [
      {
        title: "About",
        content: "Kylar has spent centuries patrolling the deep woods. His connection to nature allows him to move unseen and unheard by even the most perceptive prey."
      },
      {
        title: "Quest",
        content: "Armed with a longbow crafted from the heartwood of the ancient eldertree, Kylar is a master marksman. He is currently on a singular quest: to find and tame the mythical shadow wolf."
      }
    ]
  },
  {
    id: "lyra-silvertongue",
    name: "Lyra Silvertongue",
    images: [
      "/assets/hobbies/lyra-1.jpg",
      "/assets/hobbies/lyra-2.jpg",
      "/assets/hobbies/lyra-3.jpg"
    ],
    details: {
      Gender: "Female",
      Species: "Halfling",
      Role: "Bard",
      Alias: "The Whisperer",
      ShortDescription: "A charismatic bard who knows too many secrets."
    },
    sections: [
      {
        title: "About",
        content: "Lyra travels from tavern to tavern, singing songs of old heroes and new betrayals. But her music is just a cover for her true profession: information brokering."
      },
      {
        title: "Methods",
        content: "She uses her charm and her magical lute to manipulate emotions and extract truths from unwary nobles and hardened criminals alike."
      }
    ]
  }
];
