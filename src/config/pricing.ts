export interface PricingItem {
  title: string;
  description: string;
  price: string;
  highlight?: boolean;
}

export const pricingConfig: PricingItem[] = [
  {
    title: "2 horas",
    description: "Ideal para artista solo ou duplas",
    price: "70",
  },
  {
    title: "3 horas",
    description: "Ideal para bandas pequenas",
    price: "90",
  },
  {
    title: "Combo Promo (4 Sessões)",
    description: "Pacote com 4 sessões de 2 horas cada",
    price: "300",
    highlight: true,
  },
  {
    title: "Combo Premium",
    description: "Pacote com 4 sessões de 3 horas cada",
    price: "460",
  },
];
