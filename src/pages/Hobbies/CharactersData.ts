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
      "/assets/hobbies/Bryan Zans/Bryan Zans-1.jpg",
      "/assets/hobbies/Bryan Zans/Bryan Zans-2.jpg",
      "/assets/hobbies/Bryan Zans/Bryan Zans-3.jpg",
      "/assets/hobbies/Bryan Zans/Bryan Zans-4.jpg"
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
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-1.jpg",
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-2.jpg",
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-3.jpg",
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-4.jpg",
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-5.jpg",
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-6.jpg",
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-7.jpg",
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-8.jpg",
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-9.jpg",
      "/assets/hobbies/Darknity Darkezus/Darknity Darkezus-10.jpg"
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
        content: ""
      },
      {
        title: "Quest",
        content: ""
      }
    ]
  },
  {
    id: "dazernier-dragonite",
    name: "Dazernier Dragonite",
    images: [
      "/assets/hobbies/Dazernier Dragonite/Dazernier Dragonite-1.jpg",
      "/assets/hobbies/Dazernier Dragonite/Dazernier Dragonite-2.jpg",
      "/assets/hobbies/Dazernier Dragonite/Dazernier Dragonite-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "fieldin-paladin",
    name: "Fieldin Paladin",
    images: [
      "/assets/hobbies/Fieldin Paladin/Fieldin Paladin-1.jpg",
      "/assets/hobbies/Fieldin Paladin/Fieldin Paladin-2.jpg",
      "/assets/hobbies/Fieldin Paladin/Fieldin Paladin-3.jpg",
      "/assets/hobbies/Fieldin Paladin/Fieldin Paladin-4.jpg",
      "/assets/hobbies/Fieldin Paladin/Fieldin Paladin-5.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "gespierd-saluntus",
    name: "Gespierd Saluntus",
    images: [
      "/assets/hobbies/Gespierd Saluntus/Gespierd Saluntus-1.jpg",
      "/assets/hobbies/Gespierd Saluntus/Gespierd Saluntus-2.jpg",
      "/assets/hobbies/Gespierd Saluntus/Gespierd Saluntus-3.jpg",
      "/assets/hobbies/Gespierd Saluntus/Gespierd Saluntus-4.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "sauterelle-savoy",
    name: "Sauterelle Savoy",
    images: [
      "/assets/hobbies/Sauterelle Savoy/Sauterelle Savoy-1.jpg",
      "/assets/hobbies/Sauterelle Savoy/Sauterelle Savoy-2.jpg",
      "/assets/hobbies/Sauterelle Savoy/Sauterelle Savoy-3.jpg",
      "/assets/hobbies/Sauterelle Savoy/Sauterelle Savoy-4.jpg",
      "/assets/hobbies/Sauterelle Savoy/Sauterelle Savoy-5.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "kula-seepferdchen",
    name: "Kula Seepferdchen",
    images: [
      "/assets/hobbies/Kula Seepferdchen/Kula Seepferdchen-1.jpg",
      "/assets/hobbies/Kula Seepferdchen/Kula Seepferdchen-2.jpg",
      "/assets/hobbies/Kula Seepferdchen/Kula Seepferdchen-3.jpg",
      "/assets/hobbies/Kula Seepferdchen/Kula Seepferdchen-4.jpg",
      "/assets/hobbies/Kula Seepferdchen/Kula Seepferdchen-5.jpg",
      "/assets/hobbies/Kula Seepferdchen/Kula Seepferdchen-6.jpg",
      "/assets/hobbies/Kula Seepferdchen/Kula Seepferdchen-7.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "leaftree-rockwood",
    name: "Leaftree Rockwood",
    images: [
      "/assets/hobbies/Leaftree Rockwood/Leaftree Rockwood-1.jpg",
      "/assets/hobbies/Leaftree Rockwood/Leaftree Rockwood-2.jpg",
      "/assets/hobbies/Leaftree Rockwood/Leaftree Rockwood-3.jpg",
      "/assets/hobbies/Leaftree Rockwood/Leaftree Rockwood-4.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "naim-firdaus",
    name: "Naim Firdaus",
    images: [
      "/assets/hobbies/Naim Firdaus/Naim Firdaus-1.jpg",
      "/assets/hobbies/Naim Firdaus/Naim Firdaus-2.jpg",
      "/assets/hobbies/Naim Firdaus/Naim Firdaus-3.jpg",
      "/assets/hobbies/Naim Firdaus/Naim Firdaus-4.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "nogard-von-hester",
    name: "Nogard Von Hester",
    images: [
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-1.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-2.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-3.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-4.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-5.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-6.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-7.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-8.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-9.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-10.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-11.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-12.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-13.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-14.jpg",
      "/assets/hobbies/Nogard von Hester/Nogard von Hester-15.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Yellow Dragon" },
      { label: "ShortDescription", value: "Wandering Battle Cyborg Dragon" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "retrock",
    name: "Retrock",
    images: [
      "/assets/hobbies/Retrock/Retrock-1.jpg",
      "/assets/hobbies/Retrock/Retrock-2.jpg",
      "/assets/hobbies/Retrock/Retrock-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "satria-windjaja",
    name: "Satria Windjaja",
    images: [
      "/assets/hobbies/Satria Windjaja/Satria Windjaja-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "the-roasted-turkey-headed-spy",
    name: "The Roasted Turkey-Headed Spy",
    images: [
      "/assets/hobbies/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-1.jpg",
      "/assets/hobbies/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-2.jpg",
      "/assets/hobbies/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-3.jpg",
      "/assets/hobbies/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-4.jpg",
      "/assets/hobbies/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-5.jpg",
      "/assets/hobbies/Roasted Turkey-Headed Spy/Roasted Turkey-Headed Spy-6.jpg",
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "wilde-heuschrecke",
    name: "Wilde Heuschrecke",
    images: [
      "/assets/hobbies/Wilde Heuschrecke/Wilde Heuschrecke-1.jpg",
      "/assets/hobbies/Wilde Heuschrecke/Wilde Heuschrecke-2.jpg",
      "/assets/hobbies/Wilde Heuschrecke/Wilde Heuschrecke-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "yatahannus",
    name: "Yatahannus",
    images: [
      "/assets/hobbies/Yatahannus/Yatahannus-1.jpg",
      "/assets/hobbies/Yatahannus/Yatahannus-2.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "young-koko",
    name: "Young Koko",
    images: [
      "/assets/hobbies/Young Koko/Young Koko-1.jpg",
      "/assets/hobbies/Young Koko/Young Koko-2.jpg",
      "/assets/hobbies/Young Koko/Young Koko-3.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Coconut Man" },
      { label: "ShortDescription", value: "Coconut Islandman" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "zaid-daris",
    name: "Zaid Daris",
    images: [
      "/assets/hobbies/Zaid Daris/Zaid Daris-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "zenith-overwise",
    name: "Zenith Overwise",
    images: [
      "/assets/hobbies/Zenith Overwise/Zenith Overwise-1.jpg",
      "/assets/hobbies/Zenith Overwise/Zenith Overwise-2.jpg",
      "/assets/hobbies/Zenith Overwise/Zenith Overwise-3.jpg",
      "/assets/hobbies/Zenith Overwise/Zenith Overwise-4.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "zetnavvir",
    name: "Zetnavvir",
    images: [
      "/assets/hobbies/Zetnavvir/Zetnavvir-1.jpg",
      "/assets/hobbies/Zetnavvir/Zetnavvir-2.jpg",
      "/assets/hobbies/Zetnavvir/Zetnavvir-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "legardon-melvillei",
    name: "Legardon Melvillei",
    images: [
      "/assets/hobbies/Legardon Melvillei/Legardon Melvillei-1.jpg",
      "/assets/hobbies/Legardon Melvillei/Legardon Melvillei-2.jpg",
      "/assets/hobbies/Legardon Melvillei/Legardon Melvillei-3.jpg",
      "/assets/hobbies/Legardon Melvillei/Legardon Melvillei-4.jpg",
      "/assets/hobbies/Legardon Melvillei/Legardon Melvillei-5.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "mark-melvillei",
    name: "Mark Melvillei",
    images: [
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-1.jpg",
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-2.jpg",
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-3.jpg",
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-4.jpg",
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-5.jpg",
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-6.jpg",
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-7.jpg",
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-8.jpg",
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-9.jpg",
      "/assets/hobbies/Mark Melvillei/Mark Melvillei-10.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "elixsian-fields",
    name: "Elixsian Fields",
    images: [
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-1.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-2.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-3.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-4.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-5.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-6.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-7.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-8.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-9.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-10.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-11.jpg",
      "/assets/hobbies/Elixsian Fields/Elixsian Fields-12.jpg"
      
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "wells-warden",
    name: "Wells Warden",
    images: [
      "/assets/hobbies/Wells Warden/Wells Warden-1.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-2.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-3.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-4.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-5.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-6.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-7.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-8.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-9.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-10.jpg",
      "/assets/hobbies/Wells Warden/Wells Warden-11.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "flizth-fellow",
    name: "Flizth Fellow",
    images: [
      "/assets/hobbies/Flizth Fellow/Flizth Fellow-1.jpg",
      "/assets/hobbies/Flizth Fellow/Flizth Fellow-2.jpg",
      "/assets/hobbies/Flizth Fellow/Flizth Fellow-3.jpg",
      "/assets/hobbies/Flizth Fellow/Flizth Fellow-4.jpg",
      "/assets/hobbies/Flizth Fellow/Flizth Fellow-5.jpg",
      "/assets/hobbies/Flizth Fellow/Flizth Fellow-6.jpg",
      "/assets/hobbies/Flizth Fellow/Flizth Fellow-7.jpg",
      "/assets/hobbies/Flizth Fellow/Flizth Fellow-8.jpg",
      "/assets/hobbies/Flizth Fellow/Flizth Fellow-9.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "zaku-genan",
    name: "Zaku Genan",
    images: [
      "/assets/hobbies/Zaku Genan/Zaku Genan-1.jpg",
      "/assets/hobbies/Zaku Genan/Zaku Genan-2.jpg",
      "/assets/hobbies/Zaku Genan/Zaku Genan-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "dragon-headed-robot",
    name: "Dragon-Headed Robot",
    images: [
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-1.jpg",
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-2.jpg",
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-3.jpg",
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-4.jpg",
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-5.jpg",
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-6.jpg",
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-7.jpg",
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-8.jpg",
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-9.jpg",
      "/assets/hobbies/Dragon-Headed Robot/D.H.R-10.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "reogulus-nova-hypthon",
    name: "Reogulus Nova Hypthon",
    images: [
      "/assets/hobbies/Reogulus Nova Hypthon/Reogulus Nova Hypthon-1.jpg",
      "/assets/hobbies/Reogulus Nova Hypthon/Reogulus Nova Hypthon-2.jpg",
      "/assets/hobbies/Reogulus Nova Hypthon/Reogulus Nova Hypthon-3.jpg",
      "/assets/hobbies/Reogulus Nova Hypthon/Reogulus Nova Hypthon-4.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "rechepeus-nova-hypthon",
    name: "Rechepeus Nova Hypthon",
    images: [
      "/assets/hobbies/Rechepeus Nova Hypthon/Rechepeus Nova Hypthon-1.jpg",
      "/assets/hobbies/Rechepeus Nova Hypthon/Rechepeus Nova Hypthon-2.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "hydrus-hypthon",
    name: "Hydrus Hypthon",
    images: [
      "/assets/hobbies/Hydrus Hypthon/Hydrus Hypthon-1.jpg",
      "/assets/hobbies/Hydrus Hypthon/Hydrus Hypthon-2.jpg",
      "/assets/hobbies/Hydrus Hypthon/Hydrus Hypthon-3.jpg",
      "/assets/hobbies/Hydrus Hypthon/Hydrus Hypthon-4.jpg",
      "/assets/hobbies/Hydrus Hypthon/Hydrus Hypthon-5.jpg",
      "/assets/hobbies/Hydrus Hypthon/Hydrus Hypthon-6.jpg",
      "/assets/hobbies/Hydrus Hypthon/Hydrus Hypthon-7.jpg",
      "/assets/hobbies/Hydrus Hypthon/Hydrus Hypthon-8.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "nevy-nova",
    name: "Nevy Nova",
    images: [],
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "hydral-hypthon",
    name: "Hydral Hypthon",
    images: [
      "/assets/hobbies/Hydral Hypthon/Hydral Hypthon-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "requus-alius-gallus",
    name: "Requus Alius Gallus",
    images: [
      "/assets/hobbies/Requus Alius Gallus/Requus Alius Gallus-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "kavalleta-fraist",
    name: "Kavalleta Fraist",
    images: [
      "/assets/hobbies/Kavalleta Fraist/Kavalleta Fraist-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "roy-rigel-rafiers",
    name: "Roy Rigel Rafiers",
    images: [
      "/assets/hobbies/Roy Rigel Rafiers/Roy Rigel Rafiers-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "magellades-mentauri",
    name: "Magellades Mentauri",
    images: [
      "/assets/hobbies/Magellades Mentauri/Magellades Mentauri-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "honesta-hornett",
    name: "Honesta Hornett",
    images: [
      "/assets/hobbies/Honesta Hornett/Honesta Hornett-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "relysian-ray",
    name: "Relysian Ray",
    images: [
      "/assets/hobbies/Relysian Ray/Relysian Ray-1.jpg",
      "/assets/hobbies/Relysian Ray/Relysian Ray-2.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "kremir-kronor",
    name: "Kremir Kronor",
    images: [
      "/assets/hobbies/Kremir Kronor/Kremir Kronor-1.jpg",
      "/assets/hobbies/Kremir Kronor/Kremir Kronor-2.jpg",
      "/assets/hobbies/Kremir Kronor/Kremir Kronor-3.jpg",
      "/assets/hobbies/Kremir Kronor/Kremir Kronor-4.jpg",
      "/assets/hobbies/Kremir Kronor/Kremir Kronor-5.jpg",
      "/assets/hobbies/Kremir Kronor/Kremir Kronor-6.jpg",
      "/assets/hobbies/Kremir Kronor/Kremir Kronor-7.jpg",
      "/assets/hobbies/Kremir Kronor/Kremir Kronor-8.jpg",
      "/assets/hobbies/Kremir Kronor/Kremir Kronor-9.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "azwir-aion",
    name: "Azwir Aion",
    images: [
      "/assets/hobbies/Azwir Aion/Azwir Aion-1.jpg",
      "/assets/hobbies/Azwir Aion/Azwir Aion-2.jpg",
      "/assets/hobbies/Azwir Aion/Azwir Aion-3.jpg",
      "/assets/hobbies/Azwir Aion/Azwir Aion-4.jpg",
      "/assets/hobbies/Azwir Aion/Azwir Aion-5.jpg",
      "/assets/hobbies/Azwir Aion/Azwir Aion-6.jpg",
      "/assets/hobbies/Azwir Aion/Azwir Aion-7.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "arthloporsus",
    name: "Arthloporsus",
    images: [
      "/assets/hobbies/Arthloporsus/Arthloporsus-1.jpg",
      "/assets/hobbies/Arthloporsus/Arthloporsus-2.jpg",
      "/assets/hobbies/Arthloporsus/Arthloporsus-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "zorganan",
    name: "Zorganan",
    images: [
      "/assets/hobbies/Zorganan/Zorganan-1.jpg",
      "/assets/hobbies/Zorganan/Zorganan-2.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "taranis-tartarus",
    name: "Taranis Tartarus",
    images: [
      "/assets/hobbies/Taranis Tartarus/Taranis Tartarus-1.jpg",
      "/assets/hobbies/Taranis Tartarus/Taranis Tartarus-2.jpg",
      "/assets/hobbies/Taranis Tartarus/Taranis Tartarus-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "azzarius-antares",
    name: "Azzarius Antares",
    images: [
      "/assets/hobbies/Azzarius Antares/Azzarius Antares-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Cosmic Sorcerer" },
      { label: "ShortDescription", value: "Master of the Seven Stars" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "spacer-revellatio",
    name: "Spacer Revellatio",
    images: [
      "/assets/hobbies/Spacer Revellatio/Spacer Revellatio-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Observer" },
      { label: "ShortDescription", value: "Cosmic Entity" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "rhainor-delaren",
    name: "Rhainor Delaren",
    images: [
      "/assets/hobbies/Rhainor Delaren/Rhainor Delaren-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "will-heavenwall",
    name: "Will Heavenwall",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Robot" },
      { label: "Occupation", value: "Bodyguard" },
      { label: "ShortDescription", value: "Bodyguard Robot" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "seguni-gani",
    name: "Seguni Gani",
    images: [
      "/assets/hobbies/Seguni Gani/Seguni Gani-1.jpg",
      "/assets/hobbies/Seguni Gani/Seguni Gani-2.jpg",
      "/assets/hobbies/Seguni Gani/Seguni Gani-3.jpg",
      "/assets/hobbies/Seguni Gani/Seguni Gani-4.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "galeodon-melvillei",
    name: "Galeodon Melvillei",
    images: [
      "/assets/hobbies/Galeodon Melvillei/Galeodon Melvillei-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "halley-haryavard",
    name: "Halley Haryavard",
    images: [
      "/assets/hobbies/Halley Haryavard/Halley Haryavard-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "michael-ozza-possada",
    name: "Michael Ozza Possada",
    images: [
      "/assets/hobbies/Michael Ozza Possada/Michael Ozza Possada-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "ShortDescription", value: "Orphan Kid" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "dassim-hazim",
    name: "Dassim Hazim",
    images: [
      "/assets/hobbies/Dassim Hazim/Dassim Hazim-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "zurmanggi",
    name: "Zurmanggi",
    images: [
      "/assets/hobbies/Zurmanggi/Zurmanggi-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "detzer-reynauld",
    name: "Detzer Reynauld",
    images: [
      "/assets/hobbies/Detzer Reynauld/Detzer Reynauld-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "mark-magnanimous-morningstar",
    name: "Mark Magnanimous Morningstar",
    images: [],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Prince" },
      { label: "ShortDescription", value: "Prince" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "kronos",
    name: "Kronos",
    images: [
      "/assets/hobbies/Kronos/Kronos-1.jpg",
      "/assets/hobbies/Kronos/Kronos-2.jpg",
      "/assets/hobbies/Kronos/Kronos-3.jpg",
      "/assets/hobbies/Kronos/Kronos-4.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Protector" },
      { label: "ShortDescription", value: "Dark Protector" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "mathlust",
    name: "Mathlust",
    images: [
      "/assets/hobbies/Mathlust/Mathlust-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Embodiment of Mathematics" },
      { label: "ShortDescription", value: "Math Final Boss" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "musaz-sanatri",
    name: "Musaz Sanatri",
    images: [
      "/assets/hobbies/Musaz Sanatri/Musaz Sanatri-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "minecraft-heavenly-being",
    name: "Minecraft Heavenly Being",
    images: [
      "/assets/hobbies/Minecraft Heavenly Being/Minecraft Heavenly Being-1.jpg",
      "/assets/hobbies/Minecraft Heavenly Being/Minecraft Heavenly Being-2.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Occupation", value: "Destroyer" },
      { label: "ShortDescription", value: "Heavenly Being of Aether" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "syclone",
    name: "Syclone",
    images: [
      "/assets/hobbies/Syclone/Syclone-1.jpg",
      "/assets/hobbies/Syclone/Syclone-2.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "hervett-teiner",
    name: "Hervett Teiner",
    images: [
      "/assets/hobbies/Hervett Teiner/Hervett Teiner-2.jpg",
      "/assets/hobbies/Hervett Teiner/Hervett Teiner-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "todds",
    name: "Todds",
    images: [
      "/assets/hobbies/Todds/Todds-1.jpg",
      "/assets/hobbies/Todds/Todds-2.jpg",
      "/assets/hobbies/Todds/Todds-3.jpg",
      "/assets/hobbies/Todds/Todds-4.jpg",
      "/assets/hobbies/Todds/Todds-5.jpg",
      "/assets/hobbies/Todds/Todds-6.jpg",
      "/assets/hobbies/Todds/Todds-7.jpg",
      "/assets/hobbies/Todds/Todds-8.jpg",
      "/assets/hobbies/Todds/Todds-9.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "fewel-fields",
    name: "Fewel Fields",
    images: [
      "/assets/hobbies/Fewel Fields/Fewel Fields-1.jpg",
      "/assets/hobbies/Fewel Fields/Fewel Fields-2.jpg",
      "/assets/hobbies/Fewel Fields/Fewel Fields-3.jpg",
      "/assets/hobbies/Fewel Fields/Fewel Fields-4.jpg",
      "/assets/hobbies/Fewel Fields/Fewel Fields-5.jpg",
      "/assets/hobbies/Fewel Fields/Fewel Fields-6.jpg",
      "/assets/hobbies/Fewel Fields/Fewel Fields-7.jpg",
      "/assets/hobbies/Fewel Fields/Fewel Fields-8.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "martin-montiro",
    name: "Martin Montiro",
    images: [
      "/assets/hobbies/Martin Montiro/Martin Montiro-1.jpg",
      "/assets/hobbies/Martin Montiro/Martin Montiro-2.jpg",
      "/assets/hobbies/Martin Montiro/Martin Montiro-3.jpg",
      "/assets/hobbies/Martin Montiro/Martin Montiro-4.jpg",
      "/assets/hobbies/Martin Montiro/Martin Montiro-5.jpg",
      "/assets/hobbies/Martin Montiro/Martin Montiro-6.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "cory-campthon",
    name: "Cory Campthon",
    images: [
      "/assets/hobbies/Cory Campthon/Cory Campthon-1.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-2.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-3.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-4.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-5.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-6.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-7.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-8.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-9.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-10.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-11.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-12.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-13.jpg",
      "/assets/hobbies/Cory Campthon/Cory Campthon-14.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Human" },
      { label: "Occupation", value: "Pizza Delivery Guy" },
      { label: "ShortDescription", value: "Pizza Delivery Guy" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "derius-derrick",
    name: "Derius Derrick",
    images: [
      "/assets/hobbies/Derius Derrick/Derius Derrick-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "dever-lumarium",
    name: "Dever Lumarium",
    images: [
      "/assets/hobbies/Dever Lumarium/Dever Lumarium-1.jpg"
    ],
    details: [
      { label: "Gender", value: "Male" },
      { label: "Species", value: "Vogelustian" },
      { label: "Occupation", value: "Prince" },
      { label: "ShortDescription", value: "Crown Prince of the Vogelustian Empire" }
    ],
    sections: [
      {
        title: "About",
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "julia-judy",
    name: "Julia Judy",
    images: [
      "/assets/hobbies/Julia Judy/Julia Judy-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "nathan-richball",
    name: "Nathan Richball",
    images: [
      "/assets/hobbies/Nathan Richball/Nathan Richball-1.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "tenford-tracker",
    name: "Tenford Tracker",
    images: [
      "/assets/hobbies/Tenford Tracker/Tenford Tracker-1.jpg",
      "/assets/hobbies/Tenford Tracker/Tenford Tracker-2.jpg",
      "/assets/hobbies/Tenford Tracker/Tenford Tracker-3.jpg",
      "/assets/hobbies/Tenford Tracker/Tenford Tracker-4.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "the-mother",
    name: "The Mother",
    images: [
      "/assets/hobbies/The Mother/The Mother-1.jpg",
      "/assets/hobbies/The Mother/The Mother-2.jpg",
      "/assets/hobbies/The Mother/The Mother-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "vunar-vractal",
    name: "Vunar Vractal",
    images: [
      "/assets/hobbies/Vunar Vractal/Vunar Vractal-1.jpg",
      "/assets/hobbies/Vunar Vractal/Vunar Vractal-2.jpg",
      "/assets/hobbies/Vunar Vractal/Vunar Vractal-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  },
  {
    id: "quzuth",
    name: "Quzuth",
    images: [
      "/assets/hobbies/Quzuth/Quzuth-1.jpg",
      "/assets/hobbies/Quzuth/Quzuth-2.jpg",
      "/assets/hobbies/Quzuth/Quzuth-3.jpg"
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
        content: ""
      },
      {
        title: "Methods",
        content: ""
      }
    ]
  }
];
