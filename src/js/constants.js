import SeaweedBrown from './components/seaweed-brown';
import SeaweedBlue from './components/seaweed-blue';
import SeaweedYellow from './components/seaweed-yellow';
import SeaweedGreen from './components/seaweed-green';

export const SEAWEED = [
  {
    name: 'brown',
    svgComponent: SeaweedBrown,
    topOffset: 55,
  },
  {
    name: 'blue',
    svgComponent: SeaweedBlue,
    topOffset: 60,
  },
  {
    name: 'yellow',
    svgComponent: SeaweedYellow,
    topOffset: 65,
  },
  {
    name: 'green',
    svgComponent: SeaweedGreen,
    topOffset: 70,
  },
];

export const CREATURES = [
  {
    topOffset: 15,
    displayName: 'Seahorse',
    name: 'seahorse',
    question: {
      text: 'I am a sea-horse, I prefer to live in the seagrass. There are 54 different types of sea horse. Am I a good swimmer?',
      correctAnswer: 'No',
      choices: [
        'Yes',
        'No',
      ],
    }
  },
  {
    topOffset: 30,
    displayName: 'Turtle',
    name: 'turtle',
    question: {
      text: 'We are called turtles. We have a protective shell. Where do I lay my eggs?',
      correctAnswer: 'Beach',
      choices: [
        'Beach',
        'Underwater',
        'Forest',
      ],
    }
  },
  {
    topOffset: 45,
    displayName: 'Clown Fish',
    name: 'clown-fish',
    question: {
      text: "We're called clown fish. We have 30 species. What's our maximum size?",
      correctAnswer: '18cm',
      choices: [
        '60cm',
        '18cm',
        '100cm',
      ],
    }
  },
  {
    topOffset: 60,
    displayName: 'Humpback Whale',
    name: 'whale',
    question: {
      text: 'I am a humpback whale, I sing a different song to the whales in the next ocean. Which oceans are my home?',
      correctAnswer: 'All of these',
      choices: [
        'Indian and Atlantic',
        'Pacific and Southern',
        'All of these',
      ],
    }
  },
  {
    topOffset: 75,
    displayName: 'Frilled Shark',
    name: 'shark',
    question: {
      text: 'Welcome to the depths, friend. Us frilled sharks live at the bottom. Do you know my favourite food?',
      correctAnswer: 'Squid',
      choices: [
        'Squid',
        'Humans',
        'Turtles',
      ],
    }
  },
];
