export interface Character {
  id: string;
  name: string;
  images: string[];
  details: { label: string; value?: string; list?: string[] }[];
  sections: { title: string; content: string }[];
}

export const characters: Character[] = [
  {
    id: "bryan-zans",
    name: "Bryan Zans",
    images: [
      "/assets/hobbies/characters/Bryan Zans/Bryan Zans-1.jpg",
      "/assets/hobbies/characters/Bryan Zans/Bryan Zans-2.jpg",
      "/assets/hobbies/characters/Bryan Zans/Bryan Zans-3.jpg",
      "/assets/hobbies/characters/Bryan Zans/Bryan Zans-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Assistant" },
      { label: "Abilities", list: ["Administrative Support", "Research Assistance", "Strategic Planning"] },
      { label: "ShortDescription", value: "Assistant" }
    ],
    sections: [
      {
        title: "About",
        content: "Bryan Zans was a normal human whose occupation was an assistant."
      }
    ]
  },
  {
    id: "darknity-darkezus",
    name: "Darknity Darkezus",
    images: [
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-1.jpg",
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-2.jpg",
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-3.jpg",
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-4.jpg",
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-5.jpg",
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-6.jpg",
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-7.jpg",
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-8.jpg",
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-9.jpg",
      "/assets/hobbies/characters/Darknity Darkezus/Darknity Darkezus-10.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Intuneric" },
      { label: "Occupation", value: "Emperor" },
      { label: "Aliases", list: ["The Dark Emperor", "The Dark Lord of Dark Lords", "The Dark One", "The Tyrant of Dark Matter", "He Who Sneer from Darkness", "Darky", "Nitty", "Witty-Nitty"] },
      { label: "ShortDescription", value: "Great Emperor of Darkness" }
    ],
    sections: [
      {
        title: "About",
        content: "Darknity Darkezus was the sole tyrannical emperor of the Dark Matter universe, master of dark lords such as Taranis Tartarus, and the indirect instigator of the Second Zurtherian War after causing the First Zurtherian War and the destruction of the planet Furtherous Zurther centuries earlier for the sake of immortality. He was one of the 13 Main and Climax Antagonists of both the Old and New Zurther Universe Lorebooks."
      }
    ]
  },
  {
    id: "dazernier-dragonite",
    name: "Dazernier Dragonite",
    images: [
      "/assets/hobbies/characters/Dazernier Dragonite/Dazernier Dragonite-1.jpg",
      "/assets/hobbies/characters/Dazernier Dragonite/Dazernier Dragonite-2.jpg",
      "/assets/hobbies/characters/Dazernier Dragonite/Dazernier Dragonite-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Dragonman" },
      { label: "Occupation", value: "Wanderer" },
      { label: "ShortDescription", value: "Dragonman Wanderer" }
    ],
    sections: [
      {
        title: "About",
        content: "Dazernier Dragonite was a dragonman who wandered Europe with his long sword searching for someone to challenge him."
      }
    ]
  },
  {
    id: "fieldin-paladin",
    name: "Fieldin Paladin",
    images: [
      "/assets/hobbies/characters/Fieldin Paladin/Fieldin Paladin-1.jpg",
      "/assets/hobbies/characters/Fieldin Paladin/Fieldin Paladin-2.jpg",
      "/assets/hobbies/characters/Fieldin Paladin/Fieldin Paladin-3.jpg",
      "/assets/hobbies/characters/Fieldin Paladin/Fieldin Paladin-4.jpg",
      "/assets/hobbies/characters/Fieldin Paladin/Fieldin Paladin-5.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Gardener" },
      { label: "ShortDescription", value: "Former Paladin & Gardener" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "gespierd-saluntus",
    name: "Gespierd Saluntus",
    images: [
      "/assets/hobbies/characters/Gespierd Saluntus/Gespierd Saluntus-1.jpg",
      "/assets/hobbies/characters/Gespierd Saluntus/Gespierd Saluntus-2.jpg",
      "/assets/hobbies/characters/Gespierd Saluntus/Gespierd Saluntus-3.jpg",
      "/assets/hobbies/characters/Gespierd Saluntus/Gespierd Saluntus-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Pessulustiant" },
      { label: "Occupation", value: "Businessman" },
      { label: "Family", list: ["Nevy Nova (Aunt)", "Rechepeus Nova Hypthon (Cousin)", "Reogulus Nova Hypthon (Cousin)"]},
      { label: "ShortDescription", value: "Cousin of Reogulus" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "sauterelle-savoy",
    name: "Sauterelle Savoy",
    images: [
      "/assets/hobbies/characters/Sauterelle Savoy/Sauterelle Savoy-1.jpg",
      "/assets/hobbies/characters/Sauterelle Savoy/Sauterelle Savoy-2.jpg",
      "/assets/hobbies/characters/Sauterelle Savoy/Sauterelle Savoy-3.jpg",
      "/assets/hobbies/characters/Sauterelle Savoy/Sauterelle Savoy-4.jpg",
      "/assets/hobbies/characters/Sauterelle Savoy/Sauterelle Savoy-5.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Loculustian" },
      { label: "Occupation", value: "Father and Businessman" },
      { label: "ShortDescription", value: "Loculustian Father and Businessman" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "kula-seepferdchen",
    name: "Kula Seepferdchen",
    images: [
      "/assets/hobbies/characters/Kula Seepferdchen/Kula Seepferdchen-1.jpg",
      "/assets/hobbies/characters/Kula Seepferdchen/Kula Seepferdchen-2.jpg",
      "/assets/hobbies/characters/Kula Seepferdchen/Kula Seepferdchen-3.jpg",
      "/assets/hobbies/characters/Kula Seepferdchen/Kula Seepferdchen-4.jpg",
      "/assets/hobbies/characters/Kula Seepferdchen/Kula Seepferdchen-5.jpg",
      "/assets/hobbies/characters/Kula Seepferdchen/Kula Seepferdchen-6.jpg",
      "/assets/hobbies/characters/Kula Seepferdchen/Kula Seepferdchen-7.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Samudrawan" },
      { label: "Occupation", value: "Martial Artist" },
      { label: "ShortDescription", value: "Samudrawan Martial Artist" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "leaftree-rockwood",
    name: "Leaftree Rockwood",
    images: [
      "/assets/hobbies/characters/Leaftree Rockwood/Leaftree Rockwood-1.jpg",
      "/assets/hobbies/characters/Leaftree Rockwood/Leaftree Rockwood-2.jpg",
      "/assets/hobbies/characters/Leaftree Rockwood/Leaftree Rockwood-3.jpg",
      "/assets/hobbies/characters/Leaftree Rockwood/Leaftree Rockwood-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Tree Man" },
      { label: "Occupation", value: "Protector of The Forests" },
      { label: "ShortDescription", value: "Protector of The Forests" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "naim-firdaus",
    name: "Naim Firdaus",
    images: [
      "/assets/hobbies/characters/Naim Firdaus/Naim Firdaus-1.jpg",
      "/assets/hobbies/characters/Naim Firdaus/Naim Firdaus-2.jpg",
      "/assets/hobbies/characters/Naim Firdaus/Naim Firdaus-3.jpg",
      "/assets/hobbies/characters/Naim Firdaus/Naim Firdaus-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Ustad" },
      { label: "ShortDescription", value: "Ustad" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "nogard-von-hester",
    name: "Nogard Von Hester",
    images: [
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-1.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-2.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-3.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-4.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-5.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-6.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-7.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-8.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-9.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-10.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-11.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-12.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-13.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-14.jpg",
      "/assets/hobbies/characters/Nogard von Hester/Nogard von Hester-15.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Yellow Dragon" },
      { label: "ShortDescription", value: "Wandering Battle Cyborg Dragon" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "retrock",
    name: "Retrock",
    images: [
      "/assets/hobbies/characters/Retrock/Retrock-1.jpg",
      "/assets/hobbies/characters/Retrock/Retrock-2.jpg",
      "/assets/hobbies/characters/Retrock/Retrock-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Intuneric" },
      { label: "Occupation", value: "Right-Hand Man of Darknity (formerly)" },
      { label: "Alias", value: "The Idiot" },
      { label: "ShortDescription", value: "Former Right-Hand Man of Darknity" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "satria-windjaja",
    name: "Satria Windjaja",
    images: [
      "/assets/hobbies/characters/Satria Windjaja/Satria Windjaja-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Martial Artist" },
      { label: "Alias", value: "Si Akang" },
      { label: "ShortDescription", value: "Angklung Master and Martial Artist" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "the-roasted-turkey-headed-spy",
    name: "The Roasted Turkey-Headed Spy",
    images: [
      "/assets/hobbies/characters/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-1.jpg",
      "/assets/hobbies/characters/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-2.jpg",
      "/assets/hobbies/characters/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-3.jpg",
      "/assets/hobbies/characters/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-4.jpg",
      "/assets/hobbies/characters/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-5.jpg",
      "/assets/hobbies/characters/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-6.jpg",
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Turkey (?)" },
      { label: "Occupation", value: "Spy" },
      { label: "ShortDescription", value: "Super Elite Spy" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "wilde-heuschrecke",
    name: "Wilde Heuschrecke",
    images: [
      "/assets/hobbies/characters/Wilde Heuschrecke/Wilde Heuschrecke-1.jpg",
      "/assets/hobbies/characters/Wilde Heuschrecke/Wilde Heuschrecke-2.jpg",
      "/assets/hobbies/characters/Wilde Heuschrecke/Wilde Heuschrecke-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Loculustian" },
      { label: "Occupation", value: "General" },
      { label: "ShortDescription", value: "Loculustian General" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "yatahannus",
    name: "Yatahannus",
    images: [
      "/assets/hobbies/characters/Yatahannus/Yatahannus-1.jpg",
      "/assets/hobbies/characters/Yatahannus/Yatahannus-2.jpg"
    ],
    details: [
      { label: "Aliases", list: ["Yatahennos", "The First Pacifist", "The Martyr of Furtherous Zurther", "The Fallen One"] },
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Yard-Davan" },
      { label: "ShortDescription", value: "The Martyr of Furtherous Zurther" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "young-koko",
    name: "Young Koko",
    images: [
      "/assets/hobbies/characters/Young Koko/Young Koko-1.jpg",
      "/assets/hobbies/characters/Young Koko/Young Koko-2.jpg",
      "/assets/hobbies/characters/Young Koko/Young Koko-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Coconut Man" },
      { label: "ShortDescription", value: "Coconut Islandman" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "zaid-daris",
    name: "Zaid Daris",
    images: [
      "/assets/hobbies/characters/Zaid Daris/Zaid Daris-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Martial Artist" },
      { label: "ShortDescription", value: "Tsufuk Fighter" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "zenith-overwise",
    name: "Zenith Overwise",
    images: [
      "/assets/hobbies/characters/Zenith Overwise/Zenith Overwise-1.jpg",
      "/assets/hobbies/characters/Zenith Overwise/Zenith Overwise-2.jpg",
      "/assets/hobbies/characters/Zenith Overwise/Zenith Overwise-3.jpg",
      "/assets/hobbies/characters/Zenith Overwise/Zenith Overwise-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Vasmirian" },
      { label: "Occupation", value: "Emperor" },
      { label: "Aliases", list: ["The Smartest Zurtherian", "The Knowledgeable One", "The Great Emperor of Knowledge", "He Who Brings Light", "Zenny"] },
      { label: "ShortDescription", value: "Emperor of Knowledge" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "zetnavvir",
    name: "Zetnavvir",
    images: [
      "/assets/hobbies/characters/Zetnavvir/Zetnavvir-1.jpg",
      "/assets/hobbies/characters/Zetnavvir/Zetnavvir-2.jpg",
      "/assets/hobbies/characters/Zetnavvir/Zetnavvir-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Pessulustian" },
      { label: "Occupation", value: "Supreme Judge" },
      { label: "Aliases", list: ["Penitent Zetnavvir", "The Supreme Judge", "The Stoic One", "Zet", "Navy", "That Unfunny Horse"] },
      { label: "ShortDescription", value: "Supreme Judge" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "legardon-melvillei",
    name: "Legardon Melvillei",
    images: [
      "/assets/hobbies/characters/Legardon Melvillei/Legardon Melvillei-1.jpg",
      "/assets/hobbies/characters/Legardon Melvillei/Legardon Melvillei-2.jpg",
      "/assets/hobbies/characters/Legardon Melvillei/Legardon Melvillei-3.jpg",
      "/assets/hobbies/characters/Legardon Melvillei/Legardon Melvillei-4.jpg",
      "/assets/hobbies/characters/Legardon Melvillei/Legardon Melvillei-5.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Samudrawan" },
      { label: "Occupation", value: "Bounty Hunter" },
      { label: "Family", list: ["Galeodon Melvillei (Father)", "Mark Melvillei (Brother)"]},
      { label: "ShortDescription", value: "Samudrawan Bounty Hunter" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "mark-melvillei",
    name: "Mark Melvillei",
    images: [
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-1.jpg",
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-2.jpg",
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-3.jpg",
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-4.jpg",
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-5.jpg",
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-6.jpg",
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-7.jpg",
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-8.jpg",
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-9.jpg",
      "/assets/hobbies/characters/Mark Melvillei/Mark Melvillei-10.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Samudrawan" },
      { label: "Occupation", value: "University Student" },
      { label: "Family", list: ["Galeodon Melvillei (Father)", "Legardon Melvillei (Brother)"]},
      { label: "ShortDescription", value: "Legardon's Brother" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "elixsian-fields",
    name: "Elixsian Fields",
    images: [
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-1.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-2.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-3.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-4.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-5.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-6.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-7.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-8.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-9.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-10.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-11.jpg",
      "/assets/hobbies/characters/Elixsian Fields/Elixsian Fields-12.jpg"
      
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Humanusian" },
      { label: "Occupation", value: "Midnight Hero" },
      { label: "ShortDescription", value: "Midnight Hero" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "wells-warden",
    name: "Wells Warden",
    images: [
      "/assets/hobbies/characters/Wells Warden/Wells Warden-1.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-2.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-3.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-4.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-5.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-6.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-7.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-8.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-9.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-10.jpg",
      "/assets/hobbies/characters/Wells Warden/Wells Warden-11.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Humanusian" },
      { label: "Occupation", value: "Midnight Hero" },
      { label: "ShortDescription", value: "Midnight Hero" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "flizth-fellow",
    name: "Flizth Fellow",
    images: [
      "/assets/hobbies/characters/Flizth Fellow/Flizth Fellow-1.jpg",
      "/assets/hobbies/characters/Flizth Fellow/Flizth Fellow-2.jpg",
      "/assets/hobbies/characters/Flizth Fellow/Flizth Fellow-3.jpg",
      "/assets/hobbies/characters/Flizth Fellow/Flizth Fellow-4.jpg",
      "/assets/hobbies/characters/Flizth Fellow/Flizth Fellow-5.jpg",
      "/assets/hobbies/characters/Flizth Fellow/Flizth Fellow-6.jpg",
      "/assets/hobbies/characters/Flizth Fellow/Flizth Fellow-7.jpg",
      "/assets/hobbies/characters/Flizth Fellow/Flizth Fellow-8.jpg",
      "/assets/hobbies/characters/Flizth Fellow/Flizth Fellow-9.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Humanusian" },
      { label: "Occupation", value: "Midnight Hero" },
      { label: "ShortDescription", value: "Midnight Hero" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "zaku-genan",
    name: "Zaku Genan",
    images: [
      "/assets/hobbies/characters/Zaku Genan/Zaku Genan-1.jpg",
      "/assets/hobbies/characters/Zaku Genan/Zaku Genan-2.jpg",
      "/assets/hobbies/characters/Zaku Genan/Zaku Genan-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Humanusian" },
      { label: "Occupation", value: "Midnight Hero" },
      { label: "ShortDescription", value: "Midnight Hero" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "dragon-headed-robot",
    name: "Dragon-Headed Robot",
    images: [
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-1.jpg",
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-2.jpg",
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-3.jpg",
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-4.jpg",
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-5.jpg",
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-6.jpg",
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-7.jpg",
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-8.jpg",
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-9.jpg",
      "/assets/hobbies/characters/Dragon-Headed Robot/D.H.R-10.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Dragon-Headed Robot" },
      { label: "Occupation", value: "Assistant Robot" },
      { label: "ShortDescription", value: "Sentient Assistant Robot" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "reogulus-nova-hypthon",
    name: "Reogulus Nova Hypthon",
    images: [
      "/assets/hobbies/characters/Reogulus Nova Hypthon/Reogulus Nova Hypthon-1.jpg",
      "/assets/hobbies/characters/Reogulus Nova Hypthon/Reogulus Nova Hypthon-2.jpg",
      "/assets/hobbies/characters/Reogulus Nova Hypthon/Reogulus Nova Hypthon-3.jpg",
      "/assets/hobbies/characters/Reogulus Nova Hypthon/Reogulus Nova Hypthon-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Pessulustian" },
      { label: "Occupation", value: "Prince" },
      { label: "Family", list: ["Hydrus Hypthon (Father)", "Nevy Nova (Mother)", "Hydral Hypthon (Uncle)", "Rechepeus Nova Hypthon (Older Brother)"]},
      { label: "ShortDescription", value: "Prince of the Repteilustians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "rechepeus-nova-hypthon",
    name: "Rechepeus Nova Hypthon",
    images: [
      "/assets/hobbies/characters/Rechepeus Nova Hypthon/Rechepeus Nova Hypthon-1.jpg",
      "/assets/hobbies/characters/Rechepeus Nova Hypthon/Rechepeus Nova Hypthon-2.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian Hybrid" },
      { label: "Occupation", value: "Prince" },
      { label: "Family", list: ["Hydrus Hypthon (Father)", "Nevy Nova (Mother)", "Hydral Hypthon (Uncle)", "Rechepeus Nova Hypthon (Younger Brother)"]},
      { label: "ShortDescription", value: "Prince of the Repteilustians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "hydrus-hypthon",
    name: "Hydrus Hypthon",
    images: [
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-1.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-2.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-3.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-4.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-5.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-6.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-7.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-8.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-9.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-10.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-11.jpg",
      "/assets/hobbies/characters/Hydrus Hypthon/Hydrus Hypthon-12.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "Emperor" },
      { label: "Aliases", list: ["The Initiator of Freedom", "The Uniter of the Universe", "The Iron Emperor", ] },
      { label: "Family", list: ["Nevy Nova (Wife)", "Hydral Hypthon (Brother)", "Rechepeus Nova Hypthon (First Son)", "Reogulus Nova Hypthon (Second Son)" ]},
      { label: "ShortDescription", value: "Emperor of the Repteilustians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "nevy-nova",
    name: "Nevy Nova",
    images: [
      "/assets/hobbies/characters/Nevy Nova/Nevy Nova-1.jpg"
      
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Pessulustian" },
      { label: "Occupation", value: "Empress" },
      { label: "Family", list: ["Hydrus Hypthon (Husband)", "Hydral Hypthon (Brother-in-Law)", "Rechepeus Nova Hypthon (First Son)", "Reogulus Nova Hypthon (Second Son)"]},
      { label: "ShortDescription", value: "Empress of the Repteilustians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "hydral-hypthon",
    name: "Hydral Hypthon",
    images: [
      "/assets/hobbies/characters/Hydral Hypthon/Hydral Hypthon-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "Grand Vizier" },
      { label: "Family", list: ["Hydrus Hypthon (Brother)", "Nevy Nova (Sister-in-Law)", "Rechepeus Nova Hypthon (Nephew)", "Reogulus Nova Hypthon (Nephew)"]},
      { label: "ShortDescription", value: "Grand Vizier of the Repteilustians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "requus-alius-gallus",
    name: "Requus Alius Gallus",
    images: [
      "/assets/hobbies/characters/Requus Alius Gallus/Requus Alius Gallus-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Pessulustian" },
      { label: "Occupation", value: "Emperor" },
      { label: "Alias", value: "Requus the Regretful" },
      { label: "ShortDescription", value: "Emperor of the Pessulustians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "kavalleta-fraist",
    name: "Kavalleta Fraist",
    images: [
      "/assets/hobbies/characters/Kavalleta Fraist/Kavalleta Fraist-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Loculustian" },
      { label: "Occupation", value: "Emperor" },
      { label: "ShortDescription", value: "Emperor of the Loculustians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "roy-rigel-rafiers",
    name: "Roy Rigel Rafiers",
    images: [
      "/assets/hobbies/characters/Roy Rigel Rafiers/Roy Rigel Rafiers-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Vogelustian" },
      { label: "Occupation", value: "Emperor" },
      { label: "ShortDescription", value: "Emperor of the Vogelustians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "magellades-mentauri",
    name: "Magellades Mentauri",
    images: [
      "/assets/hobbies/characters/Magellades Mentauri/Magellades Mentauri-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Humanusian" },
      { label: "Occupation", value: "Emperor" },
      { label: "ShortDescription", value: "Emperor of the Humanusians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "reptiladorn-axorian",
    name: "Reptiladorn Axorian",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "Minister of Defense" },
      { label: "ShortDescription", value: "Minister of Defense of the Repteilustians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "honesta-hornett",
    name: "Honesta Hornett",
    images: [
      "/assets/hobbies/characters/Honesta Hornett/Honesta Hornett-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "General" },
      { label: "ShortDescription", value: "General of the Muzzlesters" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "relysian-ray",
    name: "Relysian Ray",
    images: [
      "/assets/hobbies/characters/Relysian Ray/Relysian Ray-1.jpg",
      "/assets/hobbies/characters/Relysian Ray/Relysian Ray-2.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "General" },
      { label: "ShortDescription", value: "Repteilustian General" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "mersil-messier",
    name: "Mersil Messier",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "Marshal of the Fleet"},
      { label: "ShortDescription", value: "Marshal of the Repteilustians Fleet" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "kremir-kronor",
    name: "Kremir Kronor",
    images: [
      "/assets/hobbies/characters/Kremir Kronor/Kremir Kronor-1.jpg",
      "/assets/hobbies/characters/Kremir Kronor/Kremir Kronor-2.jpg",
      "/assets/hobbies/characters/Kremir Kronor/Kremir Kronor-3.jpg",
      "/assets/hobbies/characters/Kremir Kronor/Kremir Kronor-4.jpg",
      "/assets/hobbies/characters/Kremir Kronor/Kremir Kronor-5.jpg",
      "/assets/hobbies/characters/Kremir Kronor/Kremir Kronor-6.jpg",
      "/assets/hobbies/characters/Kremir Kronor/Kremir Kronor-7.jpg",
      "/assets/hobbies/characters/Kremir Kronor/Kremir Kronor-8.jpg",
      "/assets/hobbies/characters/Kremir Kronor/Kremir Kronor-9.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "Colonel"},
      { label: "ShortDescription", value: "Repteilustian Colonel" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "azwir-aion",
    name: "Azwir Aion",
    images: [
      "/assets/hobbies/characters/Azwir Aion/Azwir Aion-1.jpg",
      "/assets/hobbies/characters/Azwir Aion/Azwir Aion-2.jpg",
      "/assets/hobbies/characters/Azwir Aion/Azwir Aion-3.jpg",
      "/assets/hobbies/characters/Azwir Aion/Azwir Aion-4.jpg",
      "/assets/hobbies/characters/Azwir Aion/Azwir Aion-5.jpg",
      "/assets/hobbies/characters/Azwir Aion/Azwir Aion-6.jpg",
      "/assets/hobbies/characters/Azwir Aion/Azwir Aion-7.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "Colonel"},
      { label: "ShortDescription", value: "Repteilustian Space Colonel" }
    ],
    sections: [
      {
        title: "About",
        content: "Azwir Aion was a colonel from Repteilustian Space Force/Navy who was tasked to kidnap Elixsian Fields under the dark influence of Taranis Tartarus."
      }
    ]
  },
  {
    id: "arthloporsus",
    name: "Arthloporsus",
    images: [
      "/assets/hobbies/characters/Arthloporsus/Arthloporsus-1.jpg",
      "/assets/hobbies/characters/Arthloporsus/Arthloporsus-2.jpg",
      "/assets/hobbies/characters/Arthloporsus/Arthloporsus-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Galaksiont" },
      { label: "Occupation", value: "Emperor" },
      { label: "ShortDescription", value: "Emperor of the Galaksionts" }
    ],
    sections: [
      {
        title: "About",
        content: "Arthloporsus was a Galaksiont emperor who fought the Vasmirians in the War of the Anti-Matter Throne and the one who planned Operation Resurses against the eastern Matter Universe after the Vasmirian emperor, Rhainor Delaren, united with Darknity Darkezus to destroy the Galaksiont Empire from two fronts which ultimately sparked the Second Zurtherian War. He was one of the antagonists in the New Zurther Universe Lorebook."
      }
    ]
  },
  {
    id: "arkloporsus",
    name: "Arkloporsus",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Galaksiont" },
      { label: "Occupation", value: "Crown Prince" },
      { label: "ShortDescription", value: "Crown Prince of the Galaksionts" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "zorganan",
    name: "Zorganan",
    images: [
      "/assets/hobbies/characters/Zorganan/Zorganan-1.jpg",
      "/assets/hobbies/characters/Zorganan/Zorganan-2.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Galaksiont" },
      { label: "Occupation", value: "General" },
      { label: "ShortDescription", value: "General of the Galaksiont Army" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "taranis-tartarus",
    name: "Taranis Tartarus",
    images: [
      "/assets/hobbies/characters/Taranis Tartarus/Taranis Tartarus-1.jpg",
      "/assets/hobbies/characters/Taranis Tartarus/Taranis Tartarus-2.jpg",
      "/assets/hobbies/characters/Taranis Tartarus/Taranis Tartarus-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Intuneric" },
      { label: "Occupation", value: "Dark Lord" },
      { label: "ShortDescription", value: "Dark Lord of Corruption" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "azzarius-antares",
    name: "Azzarius Antares",
    images: [
      "/assets/hobbies/characters/Azzarius Antares/Azzarius Antares-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Cosmic Sorcerer" },
      { label: "ShortDescription", value: "Master of the Seven Stars" }
    ],
    sections: [
      {
        title: "About",
        content: "Azzarius Antares was the master of the Seven Stars or the Seven Desnavars (destroyers) who sent them across the Matter universe to cause destructions. He was one of the 13 main antagonists in the Old Zurther Universe Lorebook."
      }
    ]
  },
  {
    id: "mirzavvir",
    name: "Mirzavvir",
    images: [],
    details: [
      { label: "Occupation", value: "Sorcerer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "voxnavvir",
    name: "Voxnavvir",
    images: [],
    details: [
      { label: "Occupation", value: "Sorcerer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "esnavvir",
    name: "Esnavvir",
    images: [],
    details: [
      { label: "Occupation", value: "Sorcerer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "vurnavvir",
    name: "Vurnavvir",
    images: [],
    details: [
      { label: "Occupation", value: "Sorcerer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "annavvir",
    name: "Annavvir",
    images: [],
    details: [
      { label: "Occupation", value: "Sorcerer" },
      { label: "ShortDescription", value: "Member of the Seven Stars" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "shadronnavvir",
    name: "Shadronnavvir",
    images: [],
    details: [
      { label: "Occupation", value: "Sorcerer" },
      { label: "ShortDescription", value: "Leader of the Seven Stars" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "spacer-revellatio",
    name: "Spacer Revellatio",
    images: [
      "/assets/hobbies/characters/Spacer Revellatio/Spacer Revellatio-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Observer" },
      { label: "ShortDescription", value: "Cosmic Entity" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "heithust-holier",
    name: "Heithust Holier",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Blacksmith" },
      { label: "ShortDescription", value: "The Great Cosmic Blacksmith" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "rhainor-delaren",
    name: "Rhainor Delaren",
    images: [
      "/assets/hobbies/characters/Rhainor Delaren/Rhainor Delaren-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Vasmirian" },
      { label: "Occupation", value: "Emperor" },
      { label: "ShortDescription", value: "Emperor of the Vasmirians" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "valory-vulrilliant",
    name: "Valory Vulrilliant",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Vasmirian" },
      { label: "Occupation", value: "General" },
      { label: "ShortDescription", value: "Vasmirian General" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "celvin-reamenheit",
    name: "Celvin Reamenheit",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Vasmirian" },
      { label: "Occupation", value: "General" },
      { label: "ShortDescription", value: "Vasmirian General" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "antrofos-anion",
    name: "Antrofos Anion",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Vasmirian" },
      { label: "Occupation", value: "General" },
      { label: "ShortDescription", value: "Vasmirian General" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "will-heavenwall",
    name: "Will Heavenwall",
    images: [
      "/assets/hobbies/characters/Will Heavenwall/Will Heavenwall-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Robot" },
      { label: "Occupation", value: "Bodyguard" },
      { label: "ShortDescription", value: "Bodyguard Robot" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "alnilam-lambda",
    name: "Alnilam Lambda",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Vasmirian Hybrid" },
      { label: "Occupation", value: "Scientist" },
      { label: "ShortDescription", value: "Biological Son of Zenith Overwise" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "alnitah-hides",
    name: "Alnitah Hides",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Adventurer" },
      { label: "ShortDescription", value: "Alnilam's friend" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "mintaka-maveen",
    name: "Mintaka Maveen",
    images: [],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Occupation", value: "Adventurer" },
      { label: "ShortDescription", value: "Alnilam's friend" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "seguni-gani",
    name: "Seguni Gani",
    images: [
      "/assets/hobbies/characters/Seguni Gani/Seguni Gani-1.jpg",
      "/assets/hobbies/characters/Seguni Gani/Seguni Gani-2.jpg",
      "/assets/hobbies/characters/Seguni Gani/Seguni Gani-3.jpg",
      "/assets/hobbies/characters/Seguni Gani/Seguni Gani-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Samudrawan" },
      { label: "Occupation", value: "Police Chief" },
      { label: "Alias", value: "The Fearsome Seguni" },
      { label: "ShortDescription", value: "Police Chief of Lemurialle" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "galeodon-melvillei",
    name: "Galeodon Melvillei",
    images: [
      "/assets/hobbies/characters/Galeodon Melvillei/Galeodon Melvillei-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Samudrawan" },
      { label: "Occupation", value: "Veteran" },
      { label: "Family", list: ["Legardon Melvillei (Son)", "Mark Melvillei (Son)"]},
      { label: "ShortDescription", value: "Father of Legardon & Mark Melvillei" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "umi-farhana",
    name: "Umi Farhana",
    images: [],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Samudrawati" },
      { label: "Occupation", value: "Cracker Seller" },
      { label: "Alias", value: "Granny" },
      { label: "ShortDescription", value: "Poor Cracker Seller" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "barton-pufferman",
    name: "Barton Pufferman",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Samudrawan" },
      { label: "Occupation", value: "Mafia Boss" },
      { label: "Alias", value: "The Fat Pufferfish" },
      { label: "ShortDescription", value: "Leader of the Pufferman Mafia" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "halley-haryavard",
    name: "Halley Haryavard",
    images: [
      "/assets/hobbies/characters/Halley Haryavard/Halley Haryavard-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Astrologist" },
      { label: "ShortDescription", value: "Astrologist" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "michael-ozza-possada",
    name: "Michael Ozza Possada",
    images: [
      "/assets/hobbies/characters/Michael Ozza Possada/Michael Ozza Possada-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "ShortDescription", value: "Orphan Kid" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "dassim-hazim",
    name: "Dassim Hazim",
    images: [
      "/assets/hobbies/characters/Dassim Hazim/Dassim Hazim-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Student" },
      { label: "ShortDescription", value: "Student" }
    ],
    sections: [
      {
        title: "About",
        content: "Dassim Hazim was a student in \"Maskodia World\"."
      }
    ]
  },
  {
    id: "zurmanggi",
    name: "Zurmanggi",
    images: [
      "/assets/hobbies/characters/Zurmanggi/Zurmanggi-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Student" },
      { label: "ShortDescription", value: "Student" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "detzer-reynauld",
    name: "Detzer Reynauld",
    images: [
      "/assets/hobbies/characters/Detzer Reynauld/Detzer Reynauld-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Student" },
      { label: "ShortDescription", value: "Student" }
    ],
    sections: [
      {
        title: "About",
        content: "Detzer Reynauld was a student in \"Maskodia World\"."
      }
    ]
  },
  {
    id: "the-compassionator",
    name: "The Compassionator",
    images: [],
    details: [
      { label: "Occupation", value: "Comforter" },
      { label: "ShortDescription", value: "The Comforter of the Innocent" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "the-vindictivator",
    name: "The Vindictivator",
    images: [],
    details: [
      { label: "Occupation", value: "Punisher" },
      { label: "ShortDescription", value: "The Punisher of the Sinful" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "markael-magnanimous-morningstar",
    name: "Markael Magnanimous Morningstar",
    images: [
      "/assets/hobbies/characters/Mark Magnanimous Morningstar/Mark Magnanimous Morningstar-1.jpg"
    ],
    details: [
      { label: "Aliases" , list: ["Mark", "Shadow-Lurker", "Shadow Prince"] },
      { label: "Species", value: "Demon/Djinn" },
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Prince" },
      { label: "ShortDescription", value: "Prince" }
    ],
    sections: [
      {
        title: "About",
        content: "Markael \"Mark\" Magnanimous Morningstar was a powerful demon/djinn prince who claimed to be the first son of the Devil from an alternate reality where Judgment Day was the past, and took the form of a classic depiction of a Renaissance angel to deceive humans and to instill fear in other demons. He's obsessed with the possibility of travelling across realities to see every form of Hell"
      }
    ]
  },
  {
    id: "kronos",
    name: "Kronos",
    images: [
      "/assets/hobbies/characters/Kronos/Kronos-1.jpg",
      "/assets/hobbies/characters/Kronos/Kronos-2.jpg",
      "/assets/hobbies/characters/Kronos/Kronos-3.jpg",
      "/assets/hobbies/characters/Kronos/Kronos-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Protector" },
      { label: "ShortDescription", value: "Dark Protector" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "mathlust",
    name: "Mathlust",
    images: [
      "/assets/hobbies/characters/Mathlust/Mathlust-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Embodiment of Mathematics" },
      { label: "ShortDescription", value: "Math Final Boss" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "musaz-sanatri",
    name: "Musaz Sanatri",
    images: [
      "/assets/hobbies/characters/Musaz Sanatri/Musaz Sanatri-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "Purifier of Planets" },
      { label: "ShortDescription", value: "Purifier of Planets" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "minecraft-heavenly-being",
    name: "Minecraft Heavenly Being",
    images: [
      "/assets/hobbies/characters/Minecraft Heavenly Being/Minecraft Heavenly Being-1.jpg",
      "/assets/hobbies/characters/Minecraft Heavenly Being/Minecraft Heavenly Being-2.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Destroyer" },
      { label: "ShortDescription", value: "Heavenly Being of Aether" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "syclone",
    name: "Syclone",
    images: [
      "/assets/hobbies/characters/Syclone/Syclone-1.jpg",
      "/assets/hobbies/characters/Syclone/Syclone-2.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Adventurer" },
      { label: "ShortDescription", value: "Minecraft Adventurer" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "hervett-teiner",
    name: "Hervett Teiner",
    images: [
      "/assets/hobbies/characters/Hervett Teiner/Hervett Teiner-2.jpg",
      "/assets/hobbies/characters/Hervett Teiner/Hervett Teiner-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "General" },
      { label: "ShortDescription", value: "Repteilustian General" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "todds",
    name: "Todds",
    images: [
      "/assets/hobbies/characters/Todds/Todds-1.jpg",
      "/assets/hobbies/characters/Todds/Todds-2.jpg",
      "/assets/hobbies/characters/Todds/Todds-3.jpg",
      "/assets/hobbies/characters/Todds/Todds-4.jpg",
      "/assets/hobbies/characters/Todds/Todds-5.jpg",
      "/assets/hobbies/characters/Todds/Todds-6.jpg",
      "/assets/hobbies/characters/Todds/Todds-7.jpg",
      "/assets/hobbies/characters/Todds/Todds-8.jpg",
      "/assets/hobbies/characters/Todds/Todds-9.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Humanusian" },
      { label: "Occupation", value: "General" },
      { label: "Home", value: "DeathLand" },
      { label: "ShortDescription", value: "Humanusian General" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "fewel-fields",
    name: "Fewel Fields",
    images: [
      "/assets/hobbies/characters/Fewel Fields/Fewel Fields-1.jpg",
      "/assets/hobbies/characters/Fewel Fields/Fewel Fields-2.jpg",
      "/assets/hobbies/characters/Fewel Fields/Fewel Fields-3.jpg",
      "/assets/hobbies/characters/Fewel Fields/Fewel Fields-4.jpg",
      "/assets/hobbies/characters/Fewel Fields/Fewel Fields-5.jpg",
      "/assets/hobbies/characters/Fewel Fields/Fewel Fields-6.jpg",
      "/assets/hobbies/characters/Fewel Fields/Fewel Fields-7.jpg",
      "/assets/hobbies/characters/Fewel Fields/Fewel Fields-8.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Humanusian" },
      { label: "Occupation", value: "Planet Director" },
      { label: "Home", value: "Deathland" },
      { label: "Family", value: "Elixsian Fields (cousin)" },
      { label: "Status", value: "Deceased" },
      { label: "ShortDescription", value: "Humanusian Planet Director" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "martin-montiro",
    name: "Martin Montiro",
    images: [
      "/assets/hobbies/characters/Martin Montiro/Martin Montiro-1.jpg",
      "/assets/hobbies/characters/Martin Montiro/Martin Montiro-2.jpg",
      "/assets/hobbies/characters/Martin Montiro/Martin Montiro-3.jpg",
      "/assets/hobbies/characters/Martin Montiro/Martin Montiro-4.jpg",
      "/assets/hobbies/characters/Martin Montiro/Martin Montiro-5.jpg",
      "/assets/hobbies/characters/Martin Montiro/Martin Montiro-6.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Humanusian" },
      { label: "Occupation", value: "Technician, Engineer" },
      { label: "Home", value: "DeathLand" },
      { label: "ShortDescription", value: "Humanusian Engineer" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "cornelius-campthon",
    name: "Cornelius Campthon",
    images: [
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-1.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-2.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-3.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-4.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-5.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-6.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-7.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-8.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-9.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-10.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-11.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-12.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-13.jpg",
      "/assets/hobbies/characters/Cory Campthon/Cory Campthon-14.jpg"
    ],
    details: [
      { label: "Nickname", value: "Cory" },
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Pizza Delivery Guy" },
      { label: "ShortDescription", value: "Pizza Delivery Guy" }
    ],
    sections: [
      {
        title: "About",
        content: "Cornelius \"Cory\" Campthon was a pizza delivery guy who befriended Tenford Tracker and Nogard von Hester. He was the protagonist in the \"When Fairytale Became True\" short story."
      }
    ]
  },
  {
    id: "derius-derrick",
    name: "Derius Derrick",
    images: [
      "/assets/hobbies/characters/Derius Derrick/Derius Derrick-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Repteilustian" },
      { label: "Occupation", value: "Secretary of the Empire" },
      { label: "ShortDescription", value: "Secretary of the Repteilustian Empire" }
    ],
    sections: [
      {
        title: "About",
        content: "Derius Derrick was the secretary of the Repteilustian Empire who attended the Meeting of the Emperors and took the crucial notes of the meeting."
      }
    ]
  },
  {
    id: "dever-lumarium",
    name: "Dever Lumarium",
    images: [
      "/assets/hobbies/characters/Dever Lumarium/Dever Lumarium-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Vogelustian" },
      { label: "Occupation", value: "Prince" },
      { label: "Family", value: "Roy Rigel Rafiers (father)" },
      { label: "ShortDescription", value: "Crown Prince of the Vogelustian Empire" }
    ],
    sections: [
      {
        title: "About",
        content: "Dever Lumarium was the crown prince of the Vogelustian Empire. He was the representative of the Vogelustian Empire in the Meeting of the Emperors instead of his conceited father, Roy Rigel Rafiers."
      }
    ]
  },
  {
    id: "julia-judy",
    name: "Julia Judy",
    images: [
      "/assets/hobbies/characters/Julia Judy/Julia Judy-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Princess of the Seas" },
      { label: "ShortDescription", value: "Princess of the Seas" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "nathan-richball",
    name: "Nathan Richball",
    images: [
      "/assets/hobbies/characters/Nathan Richball/Nathan Richball-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Former Admiral" },
      { label: "ShortDescription", value: "Former Admiral" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "tenford-tracker",
    name: "Tenford Tracker",
    images: [
      "/assets/hobbies/characters/Tenford Tracker/Tenford Tracker-1.jpg",
      "/assets/hobbies/characters/Tenford Tracker/Tenford Tracker-2.jpg",
      "/assets/hobbies/characters/Tenford Tracker/Tenford Tracker-3.jpg",
      "/assets/hobbies/characters/Tenford Tracker/Tenford Tracker-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Adventurer" },
      { label: "ShortDescription", value: "Cory's Friend" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "the-mother",
    name: "The Mother",
    images: [
      "/assets/hobbies/characters/The Mother/The Mother-1.jpg",
      "/assets/hobbies/characters/The Mother/The Mother-2.jpg",
      "/assets/hobbies/characters/The Mother/The Mother-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Female" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Mother" },
      { label: "ShortDescription", value: "The Mother Who Met Hydrus" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "vunar-vractal",
    name: "Vunar Vractal",
    images: [
      "/assets/hobbies/characters/Vunar Vractal/Vunar Vractal-1.jpg",
      "/assets/hobbies/characters/Vunar Vractal/Vunar Vractal-2.jpg",
      "/assets/hobbies/characters/Vunar Vractal/Vunar Vractal-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Humanusian" },
      { label: "Occupation", value: "Planet Director" },
      { label: "Home", value: "Durrah" },
      { label: "ShortDescription", value: "Humanusian Planet Director" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "quzuth",
    name: "Quzuth",
    images: [
      "/assets/hobbies/characters/Quzuth/Quzuth-1.jpg",
      "/assets/hobbies/characters/Quzuth/Quzuth-2.jpg",
      "/assets/hobbies/characters/Quzuth/Quzuth-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Galaksiont" },
      { label: "Occupation", value: "Former First Emperor of Anti-Matter" },
      { label: "ShortDescription", value: "Former First Emperor of Anti-Matter" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "searaphinius-panthalassa",
    name: "Searaphinius Panthalassa",
    images: [
      "/assets/hobbies/characters/Searaphinius Panthalassa/Searaphinius Panthalassa-1.jpg",
    ],
    details: [
      { label: "Aliases", list: ["The Archangel of the Oceans", "He Who Caused the Second Deluge", "Wrath of the Great Blue", "Seraph of the Oceans", "RAPH (codename)"] },
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Devonian Extraordinary Life Form (DELF)" },
      { label: "Occupation", value: "Sea Deity" },
      { label: "Age", value: "±400 million years" },
      { label: "ShortDescription", value: "Ancient Sea Deity" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  },
  {
    id: "robo-burger",
    name: "Robo-Burger",
    images: [
    ],
    details: [
      { label: "Aliases", list: ["DRX-0000006", "Burger Bot"] },
      { label: "Species", value: "Robot" },
      { label: "Occupation", value: "Wandering Robot" },
      { label: "ShortDescription", value: "Wandering Robot" }
    ],
    sections: [
      {
        title: "About",
        content: "N/A"
      }
    ]
  }
];
