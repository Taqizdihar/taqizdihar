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
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
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
