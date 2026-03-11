export interface PricingPlan {
  title: string;
  desc: string;
  price: string;
  highlight?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: '2 horas',
    desc: 'Ideal para artista solo ou duplas',
    price: 'R$ 70'
  },
  {
    title: '3 horas',
    desc: 'Ideal para bandas pequenas',
    price: 'R$ 90'
  },
  {
    title: 'Combo Promo',
    desc: 'Pacote com 3 sessões de 3 horas cada',
    price: 'R$ 300',
    highlight: true
  },
  {
    title: 'Combo Premium',
    desc: 'Pacote com 4 sessões de 3 horas cada',
    price: 'R$ 460'
  }
];
