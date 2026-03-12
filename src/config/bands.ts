import malware from '../assets/bands/logo_malware.png';
import solidBlack from '../assets/bands/logo_solid_black.png';
import squaredBlack from '../assets/bands/logo_squared_black_bg.png';
import monolito from '../assets/bands/monolito_marca_dagua.png';
import lowTractionBox from '../assets/bands/lowtractionbox.jpg';

export interface Band {
  name: string;
  image?: string;
  url?: string;
}

export const visitedBands: Band[] = [
  { name: 'Malware', image: malware, url: 'https://malwareband.com.br/' },
  { name: 'Alien Punch', image: solidBlack, url: 'https://www.instagram.com/alienpunch.hc/' },
  { name: 'Arcadia Tornado', image: squaredBlack, url: 'https://www.instagram.com/arcadiatornado/' },
  { name: 'Monolito', image: monolito, url: 'https://www.instagram.com/banda.monolito/' },
  { name: 'Low Traction Box', image: lowTractionBox, url: 'https://www.instagram.com/lowtractionbox/' },
];
