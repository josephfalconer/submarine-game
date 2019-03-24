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
  },
  {
    topOffset: 45,
    displayName: 'Clown Fish',
    name: 'clown-fish',
  },
  {
    topOffset: 60,
    displayName: 'Humpback Whale',
    name: 'whale',
  },
  {
    topOffset: 75,
    displayName: 'Frilled Shark',
    name: 'shark',
  },
];
