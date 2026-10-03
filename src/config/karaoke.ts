import karaokeImg1 from '../assets/karaoke/karaoke1.png';
import karaokeImg2 from '../assets/karaoke/karaoke2.png';
import karaokeImg3 from '../assets/karaoke/karaoke3.png';

// Configuração da Seção de Karaokê
// Altere os valores abaixo para ajustar preços e informações da sessão.

export const karaokeConfig = {
  /** Valor da sessão por hora (R$) */
  sessionPricePerHour: 30,

  /** Valor da cerveja lata (R$) */
  beerPrice: 7,

  /** Capacidade máxima da sala */
  maxPeople: 6,

  /** Slogan/subtítulo da seção */
  tagline: 'Microfone liberado, som de estúdio e cerveja trincando.',

  /** Textos de contexto dos cards */
  cards: {
    session: {
      badge: 'TARIFA AMIGA',
      title: 'VALOR DA SESSÃO',
      subtitle: 'por hora de cantoria',
      description:
        'Sem cobrança individual abusiva. Cante seu repertório favorito com acústica tratada pelo tempo que quiser.',
      alert: '',
    },
    capacity: {
      badge: 'ESPAÇO PRIVATIVO',
      title: 'CAPACIDADE DO BONDE',
      subtitle: 'conforto total na sala isolada',
      description:
        'Ambiente 100% fechado só pra vocês. Sofá vintage, iluminação aconchegante e zero vergonha alheia de plateia desconhecida.',
      alert: '',
    },
    beer: {
      badge: 'BAR DO ESTÚDIO',
      title: 'BEBIDA GELADA A PARTIR DE',
      subtitle: 'Cerveja lata geladíssima',
      description:
        'Frigobar abastecido com cerveja e energético pra afinar a garganta antes do refrão.',
      alert: 'VENDA PROIBIDA PARA MENORES DE 18 ANOS (LEI Nº 8.069/1990)',
    },
  },

  /** Fotos das sessões (Polaroid gallery) */
  photos: [
    {
      src: karaokeImg1,
      alt: '',
      caption: '',
    },
    {
      src: karaokeImg2,
      alt: '',
      caption: '',
    },
    {
      src: karaokeImg3,
      alt: '',
      caption: '',
    },
  ],
};
