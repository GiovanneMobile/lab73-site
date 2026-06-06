import malware from '../assets/bands/logo_malware.png';
import solidBlack from '../assets/bands/logo_solid_black.png';
import squaredBlack from '../assets/bands/logo_squared_black_bg.png';
import monolito from '../assets/bands/monolito_marca_dagua.png';
import lowTractionBox from '../assets/bands/lowtractionbox.jpg';
import carbono14 from '../assets/bands/logo_carbono14.jpg';
import jacadura from '../assets/bands/logo_jacadura.jpeg';
import banttublues from '../assets/bands/logo_banttu_blues.jpg';
import digitalApparatus from '../assets/bands/logo_digital_apparatus_band.png';
import hellenCruz from '../assets/bands/logo_hellen_cruz.png';

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
  { name: 'Carbono 14', image: carbono14, url: 'https://www.instagram.com/carbono14oficial/' },
  { name: 'Jacadura', image: jacadura, url: 'https://www.instagram.com/bandajacadura/' },
  { name: 'Banttu Blues', image: banttublues, url: 'https://www.instagram.com/banttublues/' },
  { name: 'Digital Apparatus', image: digitalApparatus, url: 'https://www.instagram.com/digitalapparatus.banda/' },
  { name: 'Hellen Cruz', image: hellenCruz, url: 'https://www.instagram.com/ahellencruz/' }
];
