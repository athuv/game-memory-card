import { v4 as uuidv4 } from 'uuid';
import po from './assets/images/po.jpg';
import tigress from './assets/images/tigress.jpg';
import crane from './assets/images/crane.jpg';
import kai from './assets/images/kai.jpg';
import mantis from './assets/images/mantis.jpg';
import mono from './assets/images/mono.jpg';
import mrPing from './assets/images/mr-ping.jpg';
import oogway from './assets/images/oogway.jpg';
import shifu from './assets/images/shifu.jpg';
import viper from './assets/images/viper.jpg';

const characters = [
  {
    id: uuidv4(),
    name: 'Po',
    src: po,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'Tigress',
    src: tigress,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'Crane',
    src: crane,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'Kai',
    src: kai,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'Mantis',
    src: mantis,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'Mono',
    src: mono,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'Mr Ping',
    src: mrPing,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'Oogway',
    src: oogway,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'Shifu',
    src: shifu,
    clicked: false,
  },
  {
    id: uuidv4(),
    name: 'Viper',
    src: viper,
    clicked: false,
  },
];

export default characters;
