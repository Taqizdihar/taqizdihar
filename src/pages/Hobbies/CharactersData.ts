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
      { label: "ShortDescription", value: "Assistant." }
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
    id: "darknity-darkezus",
    name: "Darknity Darkezus",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Elf" },
      { label: "Role", value: "Ranger" },
      { label: "ShortDescription", value: "Great Emperor of Darkness" }
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
    id: "dazernier-dragonite",
    name: "Dazernier Dragonite",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Dragonman Berserker-Wanderer" }
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
  },
  {
    id: "fieldin-paladin",
    name: "Fieldin Paladin",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Former Paladin Gardener" }
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
  },
  {
    id: "gespierd-saluntus",
    name: "Gespierd Saluntus",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Cousin of Reogulus" }
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
  },
  {
    id: "sauterelle-savoy",
    name: "Sauterelle Savoy",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Alien Father and Businessman" }
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
  },
  {
    id: "kula-seepferdchen",
    name: "Kula Seepferdchen",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Marineman Martial Artist" }
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
  },
  {
    id: "leaftree-rockwood",
    name: "Leaftree Rockwood",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Protector of The Forests" }
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
  },
  {
    id: "naim-firdaus",
    name: "Naim Firdaus",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Ustad" }
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
  },
  {
    id: "nogard-von-hester",
    name: "Nogard Von Hester",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Wandering Battle Cyborg Dragon" }
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
  },
  {
    id: "retrock",
    name: "Retrock",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Former Right-Hand Man of Darknity" }
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
  },
  {
    id: "satria-windjaja",
    name: "Satria Windjaja",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Angklung Master and Martial Artist" }
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
  },
  {
    id: "the-turkey-headed-spy",
    name: "The Turkey-Headed Spy",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Super Elite Spy" }
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
  },
  {
    id: "wilde-heuschrecke",
    name: "Wilde Heuschrecke",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Alien General" }
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
  },
  {
    id: "yatahannus",
    name: "Yatahannus",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "The Martyr of Furtherous Zurther" }
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
  },
  {
    id: "young-koko",
    name: "Young Koko",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Coconut Islandman" }
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
  },
  {
    id: "zaid-daris",
    name: "Zaid Daris",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Tsufuk Fighter" }
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
  },
  {
    id: "zenith-overwise",
    name: "Zenith Overwise",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Emperor of Knowledge" }
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
  },
  {
    id: "zetnavvir",
    name: "Zetnavvir",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Supreme Judge" }
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
  },
  {
    id: "legardon-melvillei",
    name: "Legardon Melvillei",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Marineman Bounty Hunter" }
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
  },
  {
    id: "mark-melvillei",
    name: "Mark Melvillei",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Legardon's Brother" }
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
  },
  {
    id: "elixsian-fields",
    name: "Elixsian Fields",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Midnight Hero" }
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
  },
  {
    id: "wells-warden",
    name: "Wells Warden",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Midnight Hero" }
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
  },
  {
    id: "flizth-fellow",
    name: "Flizth Fellow",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Midnight Hero" }
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
  },
  {
    id: "zaku-genan",
    name: "Zaku Genan",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Midnight Hero" }
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
  },
  {
    id: "dragon-headed-robot",
    name: "Dragon-Headed Robot",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Sentient Assistant Robot" }
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
  },
  {
    id: "reogulus-nova-hypthon",
    name: "Reogulus Nova Hypthon",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Prince of the Repteilustians" }
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
  },
  {
    id: "rechepeus-nova-hypthon",
    name: "Rechepeus Nova Hypthon",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Prince of the Repteilustians" }
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
  },
  {
    id: "hydrus-hypthon",
    name: "Hydrus Hypthon",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Emperor of the Repteilustians" }
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
  },
  {
    id: "nevy-nova",
    name: "Nevy Nova",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Empress of the Repteilustians" }
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
  },
  {
    id: "hydral-hypthon",
    name: "Hydral Hypthon",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Chancellor of the Repteilustians" }
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
  },
  {
    id: "requus-alius-gallus",
    name: "Requus Alius Gallus",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Emperor of the Pessulustians" }
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
  },
  {
    id: "kavalleta-fraist",
    name: "Kavalleta Fraist",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Emperor of the Loculustians" }
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
  },
  {
    id: "roy-rigel-rafiers",
    name: "Roy Rigel Rafiers",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Emperor of the Vogelustians" }
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
  },
  {
    id: "magellades-mentauri",
    name: "Magellades Mentauri",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Emperor of the Humanusians" }
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
  },
  {
    id: "reptiladorn-axorian",
    name: "Reptiladorn Axorian",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Minister of Defense of the Repteilustians" }
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
  },
  {
    id: "honesta-hornett",
    name: "Honesta Hornett",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "General of the Muzzlesters" }
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
  },
  {
    id: "relysian-ray",
    name: "Relyian Ray",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Repteilustian General" }
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
  },
  {
    id: "mersil-messier",
    name: "Mersil Messier",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Field Marshal of the Repteilustians" }
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
  },
  {
    id: "kremir-kronor",
    name: "Kremir Kronor",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Repteilustian Colonel" }
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
  },
  {
    id: "azwir-aion",
    name: "Azwir Aion",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Mersil Messier's Assistant" }
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
  },
  {
    id: "arthloporsus",
    name: "Arthloporsus",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Emperor of the Galaksionts" }
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
  },
  {
    id: "arkloporsus",
    name: "Arkloporsus",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Crown Prince of the Galaksionts" }
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
  },
  {
    id: "zorganan",
    name: "Zorganan",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "General of the Galaksiont Army" }
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
  },
  {
    id: "taranis-tartarus",
    name: "Taranis Tartarus",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Dark Lord of Corruption" }
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
  },
  {
    id: "azzarius-antares",
    name: "Azzarius Antares",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Master of the Seven Stars" }
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
  },
  {
    id: "mirzavvir",
    name: "Mirzavvir",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
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
  },
  {
    id: "voxnavvir",
    name: "Voxnavvir",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
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
  },
  {
    id: "esnavvir",
    name: "Esnavvir",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
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
  },
  {
    id: "vurnavvir",
    name: "Vurnavvir",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
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
  },
  {
    id: "annavvir",
    name: "Annavvir",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
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
  },
  {
    id: "shadronnavvir",
    name: "Shadronnavvir",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Leader of the Seven Stars" }
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
  },
  {
    id: "spacer-revellatio",
    name: "Spacer Revellatio",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Cosmic Entity" }
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
  },
  {
    id: "heithust-holier",
    name: "Heithust Holier",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "The Great Cosmic Blacksmith" }
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
  },
  {
    id: "rhainor-delaren",
    name: "Rhainor Delaren",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Emperor of the Vasmirians" }
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
  },
  {
    id: "valory-vulrilliant",
    name: "Valory Vulrilliant",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Vasmirian General" }
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
  },
  {
    id: "celvin-reamenheit",
    name: "Celvin Reamenheit",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Vasmirian General" }
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
  },
  {
    id: "antrofos-anion",
    name: "Antrofos Anion",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Vasmirian General" }
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
  },
  {
    id: "will-heavenwall",
    name: "Will Heavenwall",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Bodyguard Robot" }
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
  },
  {
    id: "alnilam-lambda",
    name: "Alnilam Lambda",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Biological Son of Zenith Overwise" }
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
  },
  {
    id: "alnitah-hides",
    name: "Alnitah Hides",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Alnilam's friend" }
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
  },
  {
    id: "mintaka-maveen",
    name: "Mintaka Maveen",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Alnilam's friend" }
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
  },
  {
    id: "seguni-gani",
    name: "Seguni Gani",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Police Chief of Lemurialle" }
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
  },
  {
    id: "galeodon-melvillei",
    name: "Galeodon Melvillei",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Father of Legardon & Mark Melvillei" }
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
  },
  {
    id: "umi-farhana",
    name: "Umi Farhana",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Poor Cracker Seller" }
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
  },
  {
    id: "barton-pufferman",
    name: "Barton Pufferman",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Leader of the Pufferman Mafia" }
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
  },
  {
    id: "halley-haryavard",
    name: "Halley Haryavard",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Astrologist" }
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
  },
  {
    id: "michael-ozza-possada",
    name: "Michael Ozza Possada",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Orphan Kid" }
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
  },
  {
    id: "dassim-hazim",
    name: "Dassim Hazim",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Student" }
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
  },
  {
    id: "zurmanggi",
    name: "Zurmanggi",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Student" }
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
  },
  {
    id: "detzer-reynauld",
    name: "Detzer Reynauld",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Student" }
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
  },
  {
    id: "the-compassionator",
    name: "The Compassionator",
    images: [
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "The Comforter of the Innocent" }
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
  },
  {
    id: "the-vindictivator",
    name: "The Vindictivator",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "The Punisher of the Sinful" }
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
  },
  {
    id: "mark-magnanimous-morningstar",
    name: "Mark Magnanimous Morningstar",
    images: [
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Halfling" },
      { label: "Role", value: "Bard" },
      { label: "Alias", value: "The Whisperer" },
      { label: "ShortDescription", value: "Prince" }
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
