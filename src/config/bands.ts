import malware from '../assets/bands/logo_malware.png';
import solidBlack from '../assets/bands/logo_solid_black.png';
import squaredBlack from '../assets/bands/logo_squared_black_bg.png';
import monolito from '../assets/bands/monolito_marca_dagua.png';
import lowTractionBox from '../assets/bands/lowtractionbox.jpg';

export interface Band {
  name: string;
  image?: string;
}

export const visitedBands: Band[] = [
  { name: 'Malware', image: malware },
  { name: 'Alien Punch', image: solidBlack },
  { name: 'Arcadia Tornado', image: squaredBlack },
  { name: 'Monolito', image: monolito },
  { name: 'Low Traction Box', image: lowTractionBox },
];
