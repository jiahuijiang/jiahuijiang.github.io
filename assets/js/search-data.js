// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-writings",
          title: "Writings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/writings/index.html";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-baking",
          title: "Baking",
          description: "I like mixing flavors",
          section: "Navigation",
          handler: () => {
            window.location.href = "/baking";
          },
        },{id: "nav-screen-protectors",
          title: "Screen Protectors",
          description: "I&#39;m weirdly good at putting on screen protectors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/screen_protectors";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-how-i-became-superstitious-against-my-better-judgment",
        
          title: "How I Became Superstitious (Against My Better Judgment)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/writings/2025/how-I-became-superstitious/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-how-to-not-be-afraid-of-the-dark-a-breathing-sloth",
          title: 'How to not be afraid of the dark - a breathing sloth',
          description: "A breathing sloth plush made for Valentine&#39;s day showcase",
          section: "Projects",handler: () => {
              window.location.href = "/projects/breathing-sloth/";
            },},{id: "projects-clay-earrings",
          title: 'Clay earrings',
          description: "Clay earrings can be baked with home oven. It reminds me of making clay animals with play-doh as a kid.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clay-earrings/";
            },},{id: "projects-good-at-falling",
          title: 'Good at falling',
          description: "Interactive snowfall and confetti projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/good-at-falling/";
            },},{id: "projects-only-fools-refuse-to-play-a-kinetic-dino-game",
          title: 'Only fools refuse to play - a kinetic dino game',
          description: "A kinetic game that allows you to control the Chrome Dino game through jumping physically",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kinetic-dino-game/";
            },},{id: "projects-tiny-cat",
          title: 'Tiny cat',
          description: "A tiny cat projection mapping project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projection-mapping-tiny-cat/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
