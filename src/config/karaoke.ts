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
    },
    capacity: {
      badge: 'ESPAÇO PRIVATIVO',
      title: 'CAPACIDADE DO BONDE',
      subtitle: 'conforto total na sala isolada',
      description:
        'Ambiente 100% fechado só pra vocês. Sofá vintage, iluminação aconchegante e zero vergonha alheia de plateia desconhecida.',
    },
    beer: {
      badge: 'BAR DO ESTÚDIO',
      title: 'BEBIDA GELADA',
      subtitle: 'Cerveja lata geladíssima',
      description:
        'Frigobar abastecido dentro da sala. Cerveja trincando a preço justo pra afinar a garganta antes do refrão.',
    },
  },

  /** Fotos das sessões (Polaroid gallery) */
  photos: [
    {
      src: '/src/assets/karaoke_1.jpg',
      alt: '',
      caption: 'Microfones',
    },
    {
      src: '/src/assets/karaoke_2.jpg',
      alt: '',
      caption: 'Frigobar',
    },
    {
      src: '/src/assets/karaoke_3.jpg',
      alt: '',
      caption: 'Projetor e Tela',
    },
  ],
};
