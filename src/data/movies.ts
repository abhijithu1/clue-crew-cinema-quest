export interface Movie {
  id: number;
  title: string;
  clueImage: string;
  hints: string[];
  acceptedAnswers: string[];
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Lion King",
    clueImage: "/placeholder.svg",
    hints: [
      "🦁 This movie is about a young lion prince",
      "🏔️ He lives on a big rock in Africa",
      "👑 He must become king of the Pride Lands",
      "🎵 Features the famous song 'Circle of Life'"
    ],
    acceptedAnswers: ["the lion king", "lion king", "simba"]
  },
  {
    id: 2,
    title: "Frozen",
    clueImage: "/placeholder.svg",
    hints: [
      "❄️ This movie is about ice and snow magic",
      "👸 Two sister princesses are the main characters",
      "🏰 One sister builds an ice castle",
      "🎵 Features the famous song 'Let It Go'"
    ],
    acceptedAnswers: ["frozen", "elsa", "anna"]
  },
  {
    id: 3,
    title: "Finding Nemo",
    clueImage: "/placeholder.svg",
    hints: [
      "🐠 This movie is about a little orange fish",
      "🌊 The story takes place in the ocean",
      "👨‍👦 A father fish is looking for his son",
      "🐟 The main character has a 'lucky fin'"
    ],
    acceptedAnswers: ["finding nemo", "nemo", "finding dory"]
  },
  {
    id: 4,
    title: "Toy Story",
    clueImage: "/placeholder.svg",
    hints: [
      "🤠 This movie is about toys that come to life",
      "👮‍♂️ Features a cowboy and a space ranger",
      "🚀 One character says 'To infinity and beyond!'",
      "🎯 The toys belong to a boy named Andy"
    ],
    acceptedAnswers: ["toy story", "woody", "buzz", "buzz lightyear"]
  },
  {
    id: 5,
    title: "Cars",
    clueImage: "/placeholder.svg",
    hints: [
      "🏎️ This movie is about racing cars",
      "⚡ The main character is red with number 95",
      "🏁 The story is about winning the Piston Cup",
      "🌵 Part of the story happens in a desert town"
    ],
    acceptedAnswers: ["cars", "lightning mcqueen", "mcqueen", "lightning"]
  },
  {
    id: 6,
    title: "Moana",
    clueImage: "/placeholder.svg",
    hints: [
      "🌺 This movie is about a brave island girl",
      "⛵ She sails across the ocean",
      "🌊 She must restore the heart of Te Fiti",
      "🐓 She travels with a rooster and a pig"
    ],
    acceptedAnswers: ["moana", "te fiti", "maui"]
  },
  {
    id: 7,
    title: "The Little Mermaid",
    clueImage: "/placeholder.svg",
    hints: [
      "🧜‍♀️ This movie is about a mermaid princess",
      "🌊 She dreams of living on land",
      "🦀 She has a crab friend named Sebastian",
      "🎵 Features the song 'Under the Sea'"
    ],
    acceptedAnswers: ["the little mermaid", "little mermaid", "ariel", "mermaid"]
  },
  {
    id: 8,
    title: "Monsters, Inc.",
    clueImage: "/placeholder.svg",
    hints: [
      "👹 This movie is about friendly monsters",
      "🚪 They use doors to visit children's rooms",
      "💡 They collect screams for energy",
      "👧 Features a little girl named Boo"
    ],
    acceptedAnswers: ["monsters inc", "monsters incorporated", "sulley", "mike", "boo"]
  },
  {
    id: 9,
    title: "Shrek",
    clueImage: "/placeholder.svg",
    hints: [
      "👹 This movie is about a green ogre",
      "🏰 He must rescue a princess from a tower",
      "🐴 Features a talking donkey",
      "🧅 The main character compares himself to onions"
    ],
    acceptedAnswers: ["shrek", "ogre", "fiona", "donkey"]
  },
  {
    id: 10,
    title: "Incredibles",
    clueImage: "/placeholder.svg",
    hints: [
      "🦸‍♀️ This movie is about a family of superheroes",
      "💪 They have different superpowers",
      "🏃‍♂️ The dad is super strong, mom can stretch",
      "⚡ The kids can turn invisible and run fast"
    ],
    acceptedAnswers: ["the incredibles", "incredibles", "mr incredible", "elastigirl"]
  }
];

export const getRandomMovie = (): Movie => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
};