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
    price: "100",
    originalPrice: "120",
  },
  {
    title: "Combo Promo",
    description: "Pacote com 4 sessões de 2 horas cada",
    price: "300",
    originalPrice: "340",
    highlight: true,
  },
  {
    title: "Combo Premium",
    description: "Pacote com 4 sessões de 3 horas cada",
    price: "360",
    originalPrice: "400",
  },
];

export const OFFER_END_DATE = "2026-06-01T23:59:59";
