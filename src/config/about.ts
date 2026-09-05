import groupPhotoImg from '../assets/gallery/_MG_8752.jpg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  footerLeft: string;
  footerRight: string;
  cardRotation: string;
  tapePosition: string;
  bgColor?: string;
}

export interface AboutConfig {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  groupPhoto: {
    src: string;
    alt: string;
    badge: string;
    footerLeft: string;
    footerRight: string;
  };
  team: TeamMember[];
}

export const aboutConfig: AboutConfig = {
  header: {
    badge: "LAB 73 SQUAD",
    title: "QUEM SOMOS",
    description: "Apaixonados por música e decididos a mudar o rumo da cena ilheense. Além de simplesmente oferecer um estúdio, faz parte da nossa missão fortalecer a cultura e a arte local, criando uma comunidade unida e colaborativa."
  },
  groupPhoto: {
    src: groupPhotoImg,
    alt: "Equipe Lab 73 reunida no estúdio de gravação analógica",
    badge: "Team",
    footerLeft: "Marcelo, Giovanne e Carol",
    footerRight: ''
  },
  team: [
    {
      id: "marselo",
      name: 'Marcelo',
      role: "Drum tech e técnico de áudio",
      description: "Mais de 12 anos capturando a essência bruta do som em fita e pré-amps valvulados. Especialista em timbres quentes e dinâmica viva.",
      image: "",
      alt: "Marcus Vex Silva - Produtor Musical & Engenheiro de Gravação",
      badge: "Drum tech e técnico de áudio",
      footerLeft: "",
      footerRight: "",
      cardRotation: "rotate-[-2deg]",
      tapePosition: "left-6 rotate-[-25deg]"
    },
    {
      id: "giovanne",
      name: "Giovanne",
      role: "Guitar tech e técnico de áudio",
      description: "Arquiteta sonora do Lab. Foco cirúrgico no balanço espectral, calor harmônico e espacialidade para lançamentos independentes e streaming.",
      image: "",
      alt: "Julia Rocha - Mixagem & Masterização Analógica",
      badge: "Guitar tech e técnico de áudio",
      footerLeft: "",
      footerRight: "",
      cardRotation: "rotate-[2deg]",
      tapePosition: "right-8 rotate-[20deg]",
      bgColor: "bg-yellow-50"
    },
    {
      id: "carol",
      name: 'Carol',
      role: "Film maker, fotógrafa e técnica de áudio",
      description: "Guardião dos amplificadores raros, pedais vintage e guitarras do estúdio. Garante que cada instrumento soe no seu ápice de expressão.",
      image: "",
      alt: "Bernardo Ben Cruz - Curador de Backline & Luthier",
      badge: "Film maker, fotógrafa e técnica de áudio",
      footerLeft: "",
      footerRight: "",
      cardRotation: "rotate-[-1deg]",
      tapePosition: "left-1/3 rotate-[-10deg]"
    }
  ]
};
