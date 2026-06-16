export interface PricingItem {
  title: string;
  description: string;
  originalPrice?: string;
  price: string;
  highlight?: boolean;
}

export const pricingConfig: PricingItem[] = [
  {
    title: "2 horas",
    description: "Ideal para duplas ou power trio",
    price: "80",
    originalPrice: "100",
  },
  {
    title: "3 horas",
    description: "Ideal para 4 pessoas ou mais",
    price: "90",
    originalPrice: "120",
    highlight: true,
  },
  {
    title: "4 horas",
    description: "Ideal para passa o setlist inteiro",
    price: "120",
    originalPrice: "140",
  }
];

export const OFFER_END_DATE = "2025-07-01T00:00:00";

export const importantNotices = [
  "<strong>Estes preços são válidos somente até o dia da inauguração oficial.</strong>",
  "Agendamentos devem ser feitos com até <strong>12hs de antecedência</strong> do dia proposto para o ensaio.",
  "Agendamentos emergenciais (feitos com menos de 12h de antecedência) possuem uma <strong>taxa de 30%</strong> sobre o valor total do ensaio contratado.",
  "Se precisar de muito tempo para montar e desmontar equipamentos, considere <strong>contratar um período maior</strong> de ensaio.",
  "Todas as atividades realizadas (reuniões, montagem e desmontagem de equipamentos e outras preparações) devem ser realizadas <strong>dentro do horário contratado</strong>."
];
