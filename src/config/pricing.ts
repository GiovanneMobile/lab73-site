export interface PricingPlan {
  title: string;
  desc: string;
  price: string;
  highlight?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: '2 horas',
    desc: 'Ideal para bandas pequenas',
    price: 'R$ 70'
  },
  {
    title: '3 horas',
    desc: 'Mais tempo para criar',
    price: 'R$ 90'
  },
  {
    title: 'Combo Promo (4 Sessões)',
    desc: 'Pacote de 2 horas por sessão',
    price: 'R$ 300',
    highlight: true
  },
  {
    title: 'Combo Premium (4 Sessões)',
    desc: 'Pacote de 3 horas por sessão',
    price: 'R$ 460'
  }
];
