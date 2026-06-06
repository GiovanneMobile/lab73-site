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
  },
  {
    title: "Combo Promo",
    description: "Pacote com 4 sessões de 2 horas cada",
    price: "300",
    originalPrice: "340",
  },
  {
    title: "Combo Premium",
    description: "Pacote com 4 sessões de 3 horas cada",
    price: "340",
    originalPrice: "400",
  },
];

export const OFFER_END_DATE = "2026-04-29T18:24:00";

export const importantNotices = [
  "Agendamentos devem ser feitos com até <strong>12hs de antecedência</strong> do dia proposto para o ensaio.",
  "Agendamentos emergenciais (feitos com menos de 12h de antecedência) possuem uma <strong>taxa de 30%</strong> sobre o valor total do ensaio contratado.",
  "Se precisar de muito tempo para montar e desmontar equipamentos, considere <strong>contratar um período maior</strong> de ensaio, a fim de não atrapalhar o ensaio de outras bandas."
];

export const comboRules = [
  "A contratação de combos só é possível com <strong>todas as datas e horários</strong> dos ensaios já determinados.",
  "O pagamento é feito <strong>50% no agendamento</strong> e <strong>50% no último ensaio</strong>.",
  "Se a banda (ou parte dela) faltar a algum dos ensaios, o ensaio será <strong>dado como realizado</strong> e <strong>não haverá reembolso</strong>.",
  "Havendo desistência do combo, não haverá reembolso do valor pago."
];
