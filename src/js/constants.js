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

export const CREATURES = {
  SEAHORSE: {
    position: 15,
    name: 'Seahorse',
    className: 'seahorse',
  },
  Turtle: {
    position: 30,
    name: 'Turtle',
    className: 'turtle',
  },
  CLOWN_FISH: {
    position: 45,
    name: 'Clown Fish',
    className: 'clown-fish',
  },
  HUMPBACK_WHALE: {
    position: 60,
    name: 'Humpback Whale',
    className: 'whale',
  },
  FRILLED_SHARK: {
    position: 75,
    name: 'Frilled Shark',
    className: 'shark',
  },
};
