export interface Character {
  id: string;
  name: string;
  images: string[];
  details: { label: string; value: string }[];
  sections: { title: string; content: string }[];
}

export const characters: Character[] = [
  {
    id: "bryan-zans",
    name: "Bryan Zans",
    images: [
      "/assets/hobbies/Bryan Zans/Bryan-3.png",
      "/assets/hobbies/Bryan Zans/Bryan-5.png",
      "/assets/hobbies/Bryan Zans/Bryan-4.png",
      "/assets/hobbies/Bryan Zans/Bryan-2.png",
      "/assets/hobbies/Bryan Zans/Bryan-1.png"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Role", value: "Assistant" },
      { label: "ShortDescription", value: "An assistant." }
    ],
    sections: [
      {
        title: "About",
        content: "Bryan Zans was an assistant."
      },
      {
        title: "Abilities",
        content: "Bryan is a very good assistant and is able to help with many things."
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
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Elf" },
      { label: "Role", value: "Ranger" },
      { label: "ShortDescription", value: "A stoic ranger tracking a legendary beast." }
    ],
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
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "A charismatic bard who knows too many secrets." }
    ],
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
