const initState = {
  posts: [
    {
      id: 1,
      title: 'Super Mario Bros 🍄',
      body:
        'Mario Bros. is a platform game published and developed for arcades by Nintendo in 1983. It was created by Shigeru Miyamoto. It has been featured as a minigame in all of the Super Mario Advance series and numerous other games.'
    },
    {
      id: 2,
      title: 'God of War ⚔️',
      body:
        "God of War is a mythology-based action-adventure video game franchise. Created by David Jaffe at Sony's Santa Monica Studio, the series debuted in 2005 on the PlayStation 2 video game console, and has become a flagship title for the PlayStation brand, consisting of eight games across multiple platforms."
    },
    {
      id: 3,
      title: 'Spiderman 🕸️',
      body:
        "Marvel's Spider-Man is a 2018 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. Based on the Marvel Comics superhero Spider-Man, it is inspired by the long-running comic book mythology and adaptations in other media."
    }
  ]
};

const Posts = (state = initState, action) => {
  return state;
};

export default Posts;
