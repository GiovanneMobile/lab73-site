export interface Feedback {
  text: string;
  author: string;
  rotation: string;
}

export const feedbacks: Feedback[] = [
  {
    text: "O melhor!!",
    author: "Crystian Montenegro",
    rotation: "rotate-[-2deg]"
  },
  {
    text: "O melhor estúdio de Ilhéus, sem dúvida. Já fui em alguns estúdios por aqui e depois de ir no Lab só vou nele agora.",
    author: "Bê Castro",
    rotation: "rotate-[1deg]"
  },
  {
    text: "Acústica bem trabalhada, visual moderno e equipamentos super funcionais, com opções para diferentes orçamentos. Vale muito a pena fazer um som aqui.",
    author: "Teco Kiala",
    rotation: "rotate-[2deg]"
  },
  {
    text: "Melhor estúdio da cidade.",
    author: "Sandro Maia",
    rotation: "rotate-[-1deg]"
  }
];
